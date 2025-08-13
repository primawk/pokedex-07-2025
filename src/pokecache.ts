type CacheEntry<T> = {
  createdAt: number;
  val: T;
};

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number;

  constructor(interval: number) {
    this.#interval = interval;
  }

  add<T>(key: string, val: T) {
    const valSet: CacheEntry<T> = {
      createdAt: Date.now(),
      val,
    };
    this.#cache.set(key, valSet);
  }

  get<T>(key: string): CacheEntry<T> | undefined {
    return this.#cache.get(key) ? this.#cache.get(key) : undefined;
  }

  #reap() {
    for (const [key, value] of this.#cache) {
      console.log(`Key: ${key}`, value.createdAt);
      if (value.createdAt > Date.now() - this.#interval) {
        this.#cache.delete(key);
      }
    }
  }

  #startReapLoop() {
    
  }
}
