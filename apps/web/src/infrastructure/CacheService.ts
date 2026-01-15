/**
 * IndexedDB-based cache service for persistent storage
 * Implements Cache-Aside pattern with stale-while-revalidate strategy
 */

export interface CacheEntry<T> {
  data: T;
  timestamp: number;
  version: string;
}

export class CacheService {
  private dbName = 'radio-globe-cache';
  private storeName = 'stations';
  private version = '1.0.0';
  private db: IDBDatabase | null = null;

  async initialize(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 1);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName);
        }
      };
    });
  }

  async get<T>(key: string): Promise<CacheEntry<T> | null> {
    if (!this.db) await this.initialize();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([this.storeName], 'readonly');
      const store = transaction.objectStore(this.storeName);
      const request = store.get(key);

      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => reject(request.error);
    });
  }

  async set<T>(key: string, data: T): Promise<void> {
    if (!this.db) await this.initialize();

    const entry: CacheEntry<T> = {
      data,
      timestamp: Date.now(),
      version: this.version,
    };

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.put(entry, key);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  async isStale(key: string, maxAge: number): Promise<boolean> {
    const entry = await this.get(key);
    if (!entry) return true;

    const age = Date.now() - entry.timestamp;
    return age > maxAge || entry.version !== this.version;
  }

  async clear(): Promise<void> {
    if (!this.db) await this.initialize();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.clear();

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  async delete(key: string): Promise<void> {
    if (!this.db) await this.initialize();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([this.storeName], 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.delete(key);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }
}

export const cacheService = new CacheService();
