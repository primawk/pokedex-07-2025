import { CacheEntry } from "./types";

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number;

  constructor(interval: number) {
    this.#interval = interval;
    this.#startReapLoop();
  }

  add<T>(key: string, val: T) {
    this.#cache.set(key, { createdAt: Date.now(), val });
  }

  get<T>(key: string): CacheEntry<T> | undefined {
    return this.#cache.get(key) ? this.#cache.get(key) : undefined;
  }

  #reap() {
    for (const [key, value] of this.#cache) {
      if (value.createdAt < Date.now() - this.#interval) {
        this.#cache.delete(key);
      }
    }
  }

  #startReapLoop() {
    const intervalId = setInterval(() => this.#reap(), this.#interval);
    this.#reapIntervalId = intervalId;
  }

  stopReapLoop() {
    clearInterval(this.#reapIntervalId);
    this.#reapIntervalId = undefined;
  }
}
