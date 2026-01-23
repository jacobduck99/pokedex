export class Cache {
    #cache = new Map();
    #reapIntervalId = undefined;
    #interval;
    constructor(interval) {
        this.#interval = interval;
        this.#startReapLoop();
    }
    add(key, val) {
        const entry = {
            createdAt: Date.now(),
            val: val,
        };
        this.#cache.set(key, entry);
    }
    get(key) {
        const entry = this.#cache.get(key);
        if (!entry) {
            return undefined;
        }
        return entry.val;
    }
    #reap() {
        const cutoff = Date.now() - this.#interval;
        for (const [key, entry] of this.#cache) {
            if (entry.createdAt < cutoff) {
                this.#cache.delete(key);
            }
        }
    }
    #startReapLoop() {
        const intervalId = setInterval(() => this.#reap(), this.#interval);
        this.#reapIntervalId = intervalId;
    }
    stopReapLoop() {
        if (!this.#reapIntervalId)
            return;
        clearInterval(this.#reapIntervalId);
        this.#reapIntervalId = undefined;
    }
}
