import {
  caches,
  clientInformation,
  closed,
  cookieStore,
  credentialless,
  crossOriginIsolated,
  crypto,
  customElements,
  devicePixelRatio,
  document,
} from "../src/window";
import { expect, test } from "bun:test";

test("caches returns global caches", () => {
  (globalThis as any).caches = "CACHES_TEST";
  expect(caches()).toBe("CACHES_TEST");
});

test("clientInformation returns global clientInformation", () => {
  (globalThis as any).clientInformation = { info: true };
  expect(clientInformation()).toEqual({ info: true });
});

test("closed returns global closed", () => {
  (globalThis as any).closed = true;
  expect(closed()).toBe(true);
});

test("cookieStore returns global cookieStore", () => {
  (globalThis as any).cookieStore = { store: 1 };
  expect(cookieStore()).toEqual({ store: 1 });
});

test("credentialless returns global credentialless", () => {
  (globalThis as any).credentialless = false;
  expect(credentialless()).toBe(false);
});

test("crossOriginIsolated returns global crossOriginIsolated", () => {
  (globalThis as any).crossOriginIsolated = true;
  expect(crossOriginIsolated()).toBe(true);
});

test("crypto returns global crypto", () => {
  (globalThis as any).crypto = { crypt: 1 };
  expect(crypto()).toEqual({ crypt: 1 });
});

test("customElements returns global customElements", () => {
  (globalThis as any).customElements = { ce: 2 };
  expect(customElements()).toEqual({ ce: 2 });
});

test("devicePixelRatio returns global devicePixelRatio", () => {
  (globalThis as any).devicePixelRatio = 2;
  expect(devicePixelRatio()).toBe(2);
});

test("document returns global document", () => {
  (globalThis as any).document = { doc: true };
  expect(document()).toEqual({ doc: true });
});
