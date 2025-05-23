import * as eventTargetModule from "../src/event_target.ffi.mjs";
import { expect, test } from "bun:test";

test("addEventListener calls global addEventListener", () => {
  (globalThis).addEventListener = (...a) => a.join("|");
  expect(eventTargetModule.addEventListener("click", "cb")).toBe("click|cb");
});

test("addEventListenerTo calls addEventListener on passed target", () => {
  const tgt = { addEventListener: (...a) => a.length };
  expect(eventTargetModule.addEventListenerTo(tgt, 1, 2)).toBe(2);
});

test("dispatchEvent calls global dispatchEvent", () => {
  (globalThis).dispatchEvent = (e) => `d:${e.type}`;
  expect(eventTargetModule.dispatchEvent({ type: "x" })).toBe("d:x");
});

test("dispatchEventTo calls dispatchEvent on passed target", () => {
  const tgt = { dispatchEvent: (e) => e.type };
  expect(eventTargetModule.dispatchEventTo(tgt, { type: "y" })).toBe("y");
});

test("removeEventListener calls global removeEventListener", () => {
  (globalThis).removeEventListener = (...a) => a.join("-");
  expect(eventTargetModule.removeEventListener("click", "cb")).toBe("click-cb");
});

test("removeEventListenerFrom calls removeEventListener on passed target", () => {
  const tgt = { removeEventListener: (...a) => a[0] + a[1] };
  expect(eventTargetModule.removeEventListenerFrom(tgt, "c", "d")).toBe("cd");
});

