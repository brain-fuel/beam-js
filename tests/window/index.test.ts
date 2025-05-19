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
  documentPictureInPicture,
  fence,
  frameElement,
  frames,
  fullScreen,
  history,
  indexedDb,
  innerHeight,
  innerWidth,
  isSecureContext,
  launchQueue,
  length,
  localStorage,
  location,
  locationbar,
  menubar,
  mozInnerScreenX,
  mozInnerScreenY,
  name,
  navigation,
  navigator,
} from "../../src/window";
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

test("documentPictureInPicture returns global documentPictureInPicture", () => {
  (globalThis as any).documentPictureInPicture = { pip: true };
  expect(documentPictureInPicture()).toEqual({ pip: true });
});

test("fence returns global fence", () => {
  (globalThis as any).fence = { fenced: true };
  expect(fence()).toEqual({ fenced: true });
});

test("frameElement returns global frameElement", () => {
  (globalThis as any).frameElement = { frame: 1 };
  expect(frameElement()).toEqual({ frame: 1 });
});

test("frames returns global frames", () => {
  (globalThis as any).frames = { window: 1 };
  expect(frames()).toEqual({ window: 1 });
});

test("fullScreen returns global fullScreen", () => {
  (globalThis as any).fullScreen = true;
  expect(fullScreen()).toBe(true);
});

test("history returns global history", () => {
  (globalThis as any).history = { stack: [] };
  expect(history()).toEqual({ stack: [] });
});

test("indexedDb returns global indexedDB", () => {
  (globalThis as any).indexedDB = { db: 1 };
  expect(indexedDb()).toEqual({ db: 1 });
});

test("innerHeight returns global innerHeight", () => {
  (globalThis as any).innerHeight = 480;
  expect(innerHeight()).toBe(480);
});

test("innerWidth returns global innerWidth", () => {
  (globalThis as any).innerWidth = 640;
  expect(innerWidth()).toBe(640);
});

test("isSecureContext returns global isSecureContext", () => {
  (globalThis as any).isSecureContext = true;
  expect(isSecureContext()).toBe(true);
});

test("launchQueue returns global launchQueue", () => {
  (globalThis as any).launchQueue = { queue: true };
  expect(launchQueue()).toEqual({ queue: true });
});

test("length returns global length", () => {
  (globalThis as any).length = 42;
  expect(length()).toBe(42);
});

test("localStorage returns global localStorage", () => {
  (globalThis as any).localStorage = { storage: true };
  expect(localStorage()).toEqual({ storage: true });
});

test("location returns global location", () => {
  (globalThis as any).location = { href: "http://example" };
  expect(location()).toEqual({ href: "http://example" });
});

test("locationbar returns global locationbar", () => {
  (globalThis as any).locationbar = { bar: true };
  expect(locationbar()).toEqual({ bar: true });
});

test("menubar returns global menubar", () => {
  (globalThis as any).menubar = { menu: true };
  expect(menubar()).toEqual({ menu: true });
});

test("mozInnerScreenX returns global mozInnerScreenX", () => {
  (globalThis as any).mozInnerScreenX = 1;
  expect(mozInnerScreenX()).toBe(1);
});

test("mozInnerScreenY returns global mozInnerScreenY", () => {
  (globalThis as any).mozInnerScreenY = 2;
  expect(mozInnerScreenY()).toBe(2);
});

test("name returns global name", () => {
  (globalThis as any).name = "win";
  expect(name()).toBe("win");
});

test("navigation returns global navigation", () => {
  (globalThis as any).navigation = { nav: true };
  expect(navigation()).toEqual({ nav: true });
});

test("navigator returns global navigator", () => {
  (globalThis as any).navigator = { ua: "test" };
  expect(navigator()).toEqual({ ua: "test" });
});
