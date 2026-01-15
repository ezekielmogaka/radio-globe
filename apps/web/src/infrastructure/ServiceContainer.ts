import { IStationLoadingUseCase, IStationSelectionUseCase } from "../domain/usecases";
import { StationLoadingUseCase, StationSelectionUseCase } from "../usecases/StationUseCases";
import { MarkerFactory } from "../strategies/MarkerStrategy";
import { StationRepository } from "../repositories/StationRepository";
import { GlobeEventBus } from "../events/GlobeEventBus";
import { CommandInvoker } from "../commands/GlobeCommands";

/**
 * Dependency Injection Container
 * Manages service instances and their dependencies using Singleton pattern
 * Implements Inversion of Control (IoC) principle
 */
class ServiceContainer {
  private static instance: ServiceContainer;
  private services = new Map<string, any>();
  private singletons = new Map<string, any>();

  private constructor() {
    this.registerServices();
  }

  static getInstance(): ServiceContainer {
    if (!ServiceContainer.instance) {
      ServiceContainer.instance = new ServiceContainer();
    }
    return ServiceContainer.instance;
  }

  private registerServices(): void {
    // Register Repositories (Singleton)
    this.registerSingleton("StationRepository", () => new StationRepository());
    
    // Register Event Bus (Singleton)
    this.registerSingleton("GlobeEventBus", () => new GlobeEventBus());
    
    // Register Command Invoker (Singleton)
    this.registerSingleton("CommandInvoker", () => new CommandInvoker());
    
    // Register Use Cases (Factory - new instance each time)
    this.register("StationLoadingUseCase", () => 
      new StationLoadingUseCase(
        this.resolveSingleton("StationRepository"),
        this.resolveSingleton("GlobeEventBus")
      )
    );
    
    this.register("StationSelectionUseCase", () => 
      new StationSelectionUseCase(
        this.resolveSingleton("GlobeEventBus"),
        this.resolveSingleton("CommandInvoker")
      )
    );
    
    // Register Factories (Factory - new instance each time)
    this.register("MarkerFactory", () => new MarkerFactory());
  }

  /**
   * Register a factory function for transient services (new instance each time)
   */
  register<T>(key: string, factory: () => T): void {
    this.services.set(key, factory);
  }

  /**
   * Register a factory function for singleton services (same instance always)
   */
  registerSingleton<T>(key: string, factory: () => T): void {
    this.services.set(key, factory);
  }

  /**
   * Resolve a transient service (new instance each time)
   */
  resolve<T>(key: string): T {
    const factory = this.services.get(key);
    if (!factory) {
      throw new Error(`Service ${key} not registered`);
    }
    return factory();
  }

  /**
   * Resolve a singleton service (cached instance)
   */
  resolveSingleton<T>(key: string): T {
    // Check if already instantiated
    if (this.singletons.has(key)) {
      return this.singletons.get(key);
    }

    // Create and cache instance
    const factory = this.services.get(key);
    if (!factory) {
      throw new Error(`Service ${key} not registered`);
    }
    
    const instance = factory();
    this.singletons.set(key, instance);
    return instance;
  }

  /**
   * Clear all singleton instances (useful for testing)
   */
  clearSingletons(): void {
    this.singletons.clear();
  }

  /**
   * Get service registry information
   */
  getServiceInfo(): { 
    registeredServices: string[]; 
    activeSingletons: string[];
    totalServices: number;
  } {
    return {
      registeredServices: Array.from(this.services.keys()),
      activeSingletons: Array.from(this.singletons.keys()),
      totalServices: this.services.size
    };
  }

  // Legacy methods for backward compatibility
  get<T>(key: string): T {
    if (this.services.has(key)) {
      return this.resolve(key);
    }
    throw new Error(`Service ${key} not found`);
  }

  // Convenience methods for common services
  getStationLoadingUseCase(): IStationLoadingUseCase {
    return this.resolve("StationLoadingUseCase");
  }

  getStationSelectionUseCase(): IStationSelectionUseCase {
    return this.resolve("StationSelectionUseCase");
  }

  getMarkerFactory(): MarkerFactory {
    return this.resolve("MarkerFactory");
  }

  getStationRepository(): StationRepository {
    return this.resolveSingleton("StationRepository");
  }

  getGlobeEventBus(): GlobeEventBus {
    return this.resolveSingleton("GlobeEventBus");
  }

  getCommandInvoker(): CommandInvoker {
    return this.resolveSingleton("CommandInvoker");
  }
}

// Export factory functions for clean dependency injection
export const createStationLoadingUseCase = (): IStationLoadingUseCase => 
  ServiceContainer.getInstance().getStationLoadingUseCase();

export const createStationSelectionUseCase = (): IStationSelectionUseCase =>
  ServiceContainer.getInstance().getStationSelectionUseCase();

export const createMarkerFactory = (): MarkerFactory =>
  ServiceContainer.getInstance().getMarkerFactory();

export const createStationRepository = (): StationRepository =>
  ServiceContainer.getInstance().getStationRepository();

export const createGlobeEventBus = (): GlobeEventBus => {
  const eventBus = ServiceContainer.getInstance().getGlobeEventBus();
  console.log('ServiceContainer: Creating/returning GlobeEventBus instance:', eventBus);
  return eventBus;
}

export const createCommandInvoker = (): CommandInvoker =>
  ServiceContainer.getInstance().getCommandInvoker();