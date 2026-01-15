/**
 * Command pattern implementation for Globe actions
 * Provides undo/redo functionality and action queuing
 */

export interface ICommand {
  execute(): Promise<void> | void;
  undo(): Promise<void> | void;
  canUndo(): boolean;
  getDescription(): string;
}

/**
 * Abstract base command with common functionality
 */
export abstract class BaseCommand implements ICommand {
  protected timestamp: number;
  protected executed = false;

  constructor() {
    this.timestamp = Date.now();
  }

  abstract execute(): Promise<void> | void;
  abstract undo(): Promise<void> | void;
  abstract getDescription(): string;

  canUndo(): boolean {
    return this.executed;
  }

  protected markExecuted(): void {
    this.executed = true;
  }

  protected markUndo(): void {
    this.executed = false;
  }

  getTimestamp(): number {
    return this.timestamp;
  }
}

/**
 * Station selection command
 */
export class SelectStationCommand extends BaseCommand {
  constructor(
    private stationId: string,
    private station: any,
    private onExecute: (stationId: string, station: any) => void,
    private onUndo: () => void,
    private previousSelection?: { stationId: string; station: any }
  ) {
    super();
  }

  execute(): void {
    this.onExecute(this.stationId, this.station);
    this.markExecuted();
  }

  undo(): void {
    if (this.previousSelection) {
      this.onExecute(this.previousSelection.stationId, this.previousSelection.station);
    } else {
      this.onUndo();
    }
    this.markUndo();
  }

  getDescription(): string {
    return `Select station: ${this.station?.name || this.stationId}`;
  }
}

/**
 * Camera position command
 */
export class SetCameraPositionCommand extends BaseCommand {
  constructor(
    private newPosition: [number, number, number],
    private setCameraPosition: (position: [number, number, number]) => void,
    private previousPosition: [number, number, number]
  ) {
    super();
  }

  execute(): void {
    this.setCameraPosition(this.newPosition);
    this.markExecuted();
  }

  undo(): void {
    this.setCameraPosition(this.previousPosition);
    this.markUndo();
  }

  getDescription(): string {
    return `Move camera to ${this.newPosition.join(', ')}`;
  }
}

/**
 * Load stations command
 */
export class LoadStationsCommand extends BaseCommand {
  constructor(
    private region: string,
    private onLoad: (region: string) => Promise<void>,
    private onUnload: () => void
  ) {
    super();
  }

  async execute(): Promise<void> {
    await this.onLoad(this.region);
    this.markExecuted();
  }

  undo(): void {
    this.onUnload();
    this.markUndo();
  }

  getDescription(): string {
    return `Load stations for region: ${this.region}`;
  }
}

/**
 * Filter stations command
 */
export class FilterStationsCommand extends BaseCommand {
  constructor(
    private filterCriteria: any,
    private onFilter: (criteria: any) => void,
    private onClearFilter: () => void
  ) {
    super();
  }

  execute(): void {
    this.onFilter(this.filterCriteria);
    this.markExecuted();
  }

  undo(): void {
    this.onClearFilter();
    this.markUndo();
  }

  getDescription(): string {
    return `Apply filter: ${JSON.stringify(this.filterCriteria)}`;
  }
}

/**
 * Batch command for executing multiple commands together
 */
export class BatchCommand extends BaseCommand {
  constructor(
    private commands: ICommand[],
    private description: string
  ) {
    super();
  }

  async execute(): Promise<void> {
    for (const command of this.commands) {
      await command.execute();
    }
    this.markExecuted();
  }

  async undo(): Promise<void> {
    // Undo in reverse order
    for (let i = this.commands.length - 1; i >= 0; i--) {
      const command = this.commands[i];
      if (command.canUndo()) {
        await command.undo();
      }
    }
    this.markUndo();
  }

  canUndo(): boolean {
    return this.executed && this.commands.some(cmd => cmd.canUndo());
  }

  getDescription(): string {
    return this.description;
  }
}

/**
 * Command invoker with undo/redo history
 */
export class CommandInvoker {
  private history: ICommand[] = [];
  private currentPosition = -1;
  private readonly maxHistorySize: number;

  constructor(maxHistorySize = 50) {
    this.maxHistorySize = maxHistorySize;
  }

  /**
   * Execute a command and add it to history
   */
  async execute(command: ICommand): Promise<void> {
    try {
      await command.execute();
      
      // Remove any commands after current position (when doing new action after undo)
      this.history = this.history.slice(0, this.currentPosition + 1);
      
      // Add new command
      this.history.push(command);
      this.currentPosition++;
      
      // Maintain max history size
      if (this.history.length > this.maxHistorySize) {
        this.history.shift();
        this.currentPosition--;
      }
      
      console.log(`Executed command: ${command.getDescription()}`);
    } catch (error) {
      console.error(`Failed to execute command: ${command.getDescription()}`, error);
      throw error;
    }
  }

  /**
   * Undo the last command
   */
  async undo(): Promise<boolean> {
    if (!this.canUndo()) {
      return false;
    }

    const command = this.history[this.currentPosition];
    try {
      await command.undo();
      this.currentPosition--;
      console.log(`Undid command: ${command.getDescription()}`);
      return true;
    } catch (error) {
      console.error(`Failed to undo command: ${command.getDescription()}`, error);
      return false;
    }
  }

  /**
   * Redo the next command
   */
  async redo(): Promise<boolean> {
    if (!this.canRedo()) {
      return false;
    }

    this.currentPosition++;
    const command = this.history[this.currentPosition];
    try {
      await command.execute();
      console.log(`Redid command: ${command.getDescription()}`);
      return true;
    } catch (error) {
      console.error(`Failed to redo command: ${command.getDescription()}`, error);
      this.currentPosition--;
      return false;
    }
  }

  /**
   * Check if undo is possible
   */
  canUndo(): boolean {
    return this.currentPosition >= 0 && 
           this.history[this.currentPosition]?.canUndo();
  }

  /**
   * Check if redo is possible
   */
  canRedo(): boolean {
    return this.currentPosition < this.history.length - 1;
  }

  /**
   * Get command history
   */
  getHistory(): Array<{ description: string; canUndo: boolean; timestamp: number }> {
    return this.history.map((cmd, index) => ({
      description: cmd.getDescription(),
      canUndo: cmd.canUndo(),
      timestamp: (cmd as BaseCommand).getTimestamp?.() || 0,
      isCurrent: index === this.currentPosition
    }));
  }

  /**
   * Clear command history
   */
  clearHistory(): void {
    this.history = [];
    this.currentPosition = -1;
  }

  /**
   * Get current command
   */
  getCurrentCommand(): ICommand | undefined {
    return this.history[this.currentPosition];
  }

  /**
   * Get statistics
   */
  getStats(): { 
    totalCommands: number; 
    currentPosition: number; 
    canUndo: boolean; 
    canRedo: boolean; 
  } {
    return {
      totalCommands: this.history.length,
      currentPosition: this.currentPosition,
      canUndo: this.canUndo(),
      canRedo: this.canRedo()
    };
  }
}

/**
 * Singleton command invoker
 */
export const globeCommandInvoker = new CommandInvoker();

/**
 * Command factory for creating common commands
 */
export const createCommand = {
  selectStation: (
    stationId: string, 
    station: any, 
    onExecute: (stationId: string, station: any) => void,
    onUndo: () => void,
    previousSelection?: { stationId: string; station: any }
  ) => new SelectStationCommand(stationId, station, onExecute, onUndo, previousSelection),

  setCameraPosition: (
    newPosition: [number, number, number],
    setCameraPosition: (position: [number, number, number]) => void,
    previousPosition: [number, number, number]
  ) => new SetCameraPositionCommand(newPosition, setCameraPosition, previousPosition),

  loadStations: (
    region: string,
    onLoad: (region: string) => Promise<void>,
    onUnload: () => void
  ) => new LoadStationsCommand(region, onLoad, onUnload),

  filterStations: (
    filterCriteria: any,
    onFilter: (criteria: any) => void,
    onClearFilter: () => void
  ) => new FilterStationsCommand(filterCriteria, onFilter, onClearFilter),

  batch: (commands: ICommand[], description: string) => 
    new BatchCommand(commands, description)
};