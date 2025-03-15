import { expect, test } from "vitest";
import { delay } from "./delay";

test("delay에 100을 넣으면, 100ms 뒤에 실행됩니다.", async () => {
  const t1 = performance.now();
  await delay(100);
  const t2 = performance.now();
  expect(t2 - t1).toBeGreaterThan(100);
});
