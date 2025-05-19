import { caches, clientInformation, closed, cookieStore, credentialless } from "../src/window";
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
