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
  opener,
  origin,
  originAgentCluster,
  outerHeight,
  outerWidth,
  pageXOffset,
  pageYOffset,
  parent,
  performance,
  personalbar,
  scheduler,
  screen,
  screenLeft,
  screenTop,
  screenX,
  screenY,
  scrollMaxX,
  scrollMaxY,
  scrollX,
  scrollY,
  scrollbars,
  self,
  sessionStorage,
  sharedStorage,
  speechSynthesis,
  statusbar,
  toolbar,
  top,
  trustedTypes,
  visualViewport,
  window,
} from "../../src/window";
import * as windowModule from "../../src/window";
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

test("opener returns global opener", () => {
  (globalThis as any).opener = { win: 1 };
  expect(opener()).toEqual({ win: 1 });
});

test("origin returns global origin", () => {
  (globalThis as any).origin = "http://example";
  expect(origin()).toBe("http://example");
});

test("originAgentCluster returns global originAgentCluster", () => {
  (globalThis as any).originAgentCluster = { cluster: true };
  expect(originAgentCluster()).toEqual({ cluster: true });
});

test("outerHeight returns global outerHeight", () => {
  (globalThis as any).outerHeight = 800;
  expect(outerHeight()).toBe(800);
});

test("outerWidth returns global outerWidth", () => {
  (globalThis as any).outerWidth = 1024;
  expect(outerWidth()).toBe(1024);
});

test("pageXOffset returns global pageXOffset", () => {
  (globalThis as any).pageXOffset = 10;
  expect(pageXOffset()).toBe(10);
});

test("pageYOffset returns global pageYOffset", () => {
  (globalThis as any).pageYOffset = 20;
  expect(pageYOffset()).toBe(20);
});

test("parent returns global parent", () => {
  (globalThis as any).parent = { parent: true };
  expect(parent()).toEqual({ parent: true });
});

test("performance returns global performance", () => {
  (globalThis as any).performance = { perf: 1 };
  expect(performance()).toEqual({ perf: 1 });
});

test("personalbar returns global personalbar", () => {
  (globalThis as any).personalbar = { bar: 1 };
  expect(personalbar()).toEqual({ bar: 1 });
});

test("scheduler returns global scheduler", () => {
  (globalThis as any).scheduler = { schedule: true };
  expect(scheduler()).toEqual({ schedule: true });
});

test("screen returns global screen", () => {
  (globalThis as any).screen = { colorDepth: 24 };
  expect(screen()).toEqual({ colorDepth: 24 });
});

test("screenLeft returns global screenLeft", () => {
  (globalThis as any).screenLeft = 10;
  expect(screenLeft()).toBe(10);
});

test("screenTop returns global screenTop", () => {
  (globalThis as any).screenTop = 20;
  expect(screenTop()).toBe(20);
});

test("screenX returns global screenX", () => {
  (globalThis as any).screenX = 30;
  expect(screenX()).toBe(30);
});

test("screenY returns global screenY", () => {
  (globalThis as any).screenY = 40;
  expect(screenY()).toBe(40);
});

test("scrollMaxX returns global scrollMaxX", () => {
  (globalThis as any).scrollMaxX = 50;
  expect(scrollMaxX()).toBe(50);
});

test("scrollMaxY returns global scrollMaxY", () => {
  (globalThis as any).scrollMaxY = 60;
  expect(scrollMaxY()).toBe(60);
});

test("scrollX returns global scrollX", () => {
  (globalThis as any).scrollX = 70;
  expect(scrollX()).toBe(70);
});

test("scrollY returns global scrollY", () => {
  (globalThis as any).scrollY = 80;
  expect(scrollY()).toBe(80);
});

test("scrollbars returns global scrollbars", () => {
  (globalThis as any).scrollbars = { present: true };
  expect(scrollbars()).toEqual({ present: true });
});

test("self returns global self", () => {
  (globalThis as any).self = { self: true };
  expect(self()).toEqual({ self: true });
});

test("sessionStorage returns global sessionStorage", () => {
  (globalThis as any).sessionStorage = { session: 1 };
  expect(sessionStorage()).toEqual({ session: 1 });
});

test("sharedStorage returns global sharedStorage", () => {
  (globalThis as any).sharedStorage = { shared: true };
  expect(sharedStorage()).toEqual({ shared: true });
});

test("speechSynthesis returns global speechSynthesis", () => {
  (globalThis as any).speechSynthesis = { speak: true };
  expect(speechSynthesis()).toEqual({ speak: true });
});

test("statusbar returns global statusbar", () => {
  (globalThis as any).statusbar = { visible: false };
  expect(statusbar()).toEqual({ visible: false });
});

test("toolbar returns global toolbar", () => {
  (globalThis as any).toolbar = { tools: 1 };
  expect(toolbar()).toEqual({ tools: 1 });
});

test("top returns global top", () => {
  (globalThis as any).top = { top: true };
  expect(top()).toEqual({ top: true });
});

test("trustedTypes returns global trustedTypes", () => {
  (globalThis as any).trustedTypes = { trust: true };
  expect(trustedTypes()).toEqual({ trust: true });
});

test("visualViewport returns global visualViewport", () => {
  (globalThis as any).visualViewport = { height: 100 };
  expect(visualViewport()).toEqual({ height: 100 });
});

test("window returns global window", () => {
  (globalThis as any).window = { w: 1 };
  expect(window()).toEqual({ w: 1 });
});

// New tests for instance-specific functions
const windowInstance: any = {};
Object.keys(windowModule)
  .filter((k) => k.endsWith("From"))
  .forEach((fnName, idx) => {
    const prop = fnName.slice(0, -4);
    const propName = prop === "indexedDb" ? "indexedDB" : prop;
    windowInstance[propName] = `val_${idx}`;
    test(`${fnName} returns ${propName} from passed window`, () => {
      expect((windowModule as any)[fnName](windowInstance)).toEqual(
        windowInstance[propName]
      );
    });
  });
