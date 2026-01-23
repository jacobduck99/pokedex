import { Cache } from "./pokecache.js";
import { describe, test, expect } from 'vitest';

test("cache stores and reaps values", async () => {
    const cache = new Cache(200); 

    cache.add("my-key", "my-value");      // 1. add
    const cached = cache.get("my-key");   // 2. get right away
    expect(cached).toBe("my-value");      // should be there

    await new Promise((resolve) => setTimeout(resolve, 400));

    const after = cache.get("my-key");    // 4. should be gone
    expect(after).toBe(undefined);

    cache.stopReapLoop();                 // 5. clean up timer
});
