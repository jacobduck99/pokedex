import { cleanInput } from "./repl.ts";
import { describe, expect, test } from "vitest";

describe.each([
  { input: "  hello  world  ", expected: ["hello", "world"] },
  { input: "hello world", expected: ["hello", "world"] },
  { input: "HELLO WORLD", expected: ["hello", "world"] },
  { input: "  hello   WORLD  ", expected: ["hello", "world"] },
  { input: "hello", expected: ["hello"] },
  { input: "", expected: [] },
  { input: "     ", expected: [] },
  { input: "\thello\tworld\t", expected: ["hello", "world"] },
  { input: "hello\nworld", expected: ["hello", "world"] },
])("cleanInput($input)", ({ input, expected }) => {
  test(`Expected: ${JSON.stringify(expected)}`, () => {
    const actual = cleanInput(input);

    expect(actual).toHaveLength(expected.length);
    for (const i in expected) {
      expect(actual[i]).toBe(expected[i]);
    }
  });
});

