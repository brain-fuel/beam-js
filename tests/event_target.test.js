import * as eventTargetModule from "../../src/eventTarget";
import { expect, test } from "bun:test";

test("addEventListener calls global addEventListener", () => {
  (globalThis as any).addEventListener = (...a: any[]) => a.join("|");
  expect(eventTargetModule.addEventListener("click", "cb")).toBe("click|cb");
});

test("addEventListenerTo calls addEventListener on passed target", () => {
  const tgt: any = { addEventListener: (...a: any[]) => a.length };
  expect(eventTargetModule.addEventListenerTo(tgt, 1, 2)).toBe(2);
});

test("dispatchEvent calls global dispatchEvent", () => {
  (globalThis as any).dispatchEvent = (e: any) => `d:${e.type}`;
  expect(eventTargetModule.dispatchEvent({ type: "x" })).toBe("d:x");
});

test("dispatchEventTo calls dispatchEvent on passed target", () => {
  const tgt: any = { dispatchEvent: (e: any) => e.type };
  expect(eventTargetModule.dispatchEventTo(tgt, { type: "y" })).toBe("y");
});

test("removeEventListener calls global removeEventListener", () => {
  (globalThis as any).removeEventListener = (...a: any[]) => a.join("-");
  expect(eventTargetModule.removeEventListener("click", "cb")).toBe("click-cb");
});

test("removeEventListenerFrom calls removeEventListener on passed target", () => {
  const tgt: any = { removeEventListener: (...a: any[]) => a[0] + a[1] };
  expect(eventTargetModule.removeEventListenerFrom(tgt, "c", "d")).toBe("cd");
});

