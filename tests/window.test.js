import * as windowModule from "../../src/window";
import { expect, test } from "bun:test";

test("alert calls global alert", () => {
  (globalThis as any).alert = (m: any) => `A:${m}`;
  expect(windowModule.alert("m")).toBe("A:m");
});
test("alertFrom calls alert on passed window", () => {
  const win: any = { alert: (x: any) => `B:${x}` };
  expect(windowModule.alertFrom(win, 5)).toBe("B:5");
});

test("atob calls global atob", () => {
  (globalThis as any).atob = (d: any) => Buffer.from(d, "base64").toString("binary");
  expect(windowModule.atob("YWE=")).toBe("aa");
});
test("atobFrom calls atob on passed window", () => {
  const win: any = { atob: (d: any) => Buffer.from(d, "base64").toString("utf8") };
  expect(windowModule.atobFrom(win, "Yg==")).toBe("b");
});

test("blur calls global blur", () => {
  (globalThis as any).blur = () => "BLUR";
  expect(windowModule.blur()).toBe("BLUR");
});
test("blurFrom calls blur on passed window", () => {
  const win: any = { blur: () => "BLUR2" };
  expect(windowModule.blurFrom(win)).toBe("BLUR2");
});

test("btoa calls global btoa", () => {
  (globalThis as any).btoa = (d: any) => `enc:${d}`;
  expect(windowModule.btoa("data")).toBe("enc:data");
});
test("btoaFrom calls btoa on passed window", () => {
  const win: any = { btoa: (d: any) => `e:${d}` };
  expect(windowModule.btoaFrom(win, "d")).toBe("e:d");
});

test("caches returns global caches", () => {
  (globalThis as any).caches = "CACHES_TEST";
  expect(windowModule.caches()).toBe("CACHES_TEST");
});

test("cancelAnimationFrame calls global cancelAnimationFrame", () => {
  (globalThis as any).cancelAnimationFrame = (id: any) => id * 2;
  expect(windowModule.cancelAnimationFrame(3)).toBe(6);
});
test("cancelAnimationFrameFrom calls cancelAnimationFrame on passed window", () => {
  const win: any = { cancelAnimationFrame: (id: any) => id + 1 };
  expect(windowModule.cancelAnimationFrameFrom(win, 4)).toBe(5);
});

test("cancelIdleCallback calls global cancelIdleCallback", () => {
  (globalThis as any).cancelIdleCallback = (id: any) => id - 1;
  expect(windowModule.cancelIdleCallback(7)).toBe(6);
});
test("cancelIdleCallbackFrom calls cancelIdleCallback on passed window", () => {
  const win: any = { cancelIdleCallback: (id: any) => id + 2 };
  expect(windowModule.cancelIdleCallbackFrom(win, 1)).toBe(3);
});

test("clearInterval calls global clearInterval", () => {
  (globalThis as any).clearInterval = (id: any) => `ci:${id}`;
  expect(windowModule.clearInterval(8)).toBe("ci:8");
});
test("clearIntervalFrom calls clearInterval on passed window", () => {
  const win: any = { clearInterval: (id: any) => `ciw:${id}` };
  expect(windowModule.clearIntervalFrom(win, 2)).toBe("ciw:2");
});

test("clearTimeout calls global clearTimeout", () => {
  (globalThis as any).clearTimeout = (id: any) => `ct:${id}`;
  expect(windowModule.clearTimeout(9)).toBe("ct:9");
});
test("clearTimeoutFrom calls clearTimeout on passed window", () => {
  const win: any = { clearTimeout: (id: any) => `ctw:${id}` };
  expect(windowModule.clearTimeoutFrom(win, 3)).toBe("ctw:3");
});

test("clientInformation returns global clientInformation", () => {
  (globalThis as any).clientInformation = { info: true };
  expect(windowModule.clientInformation()).toEqual({ info: true });
});

test("close calls global close", () => {
  (globalThis as any).close = () => "closed";
  expect(windowModule.close()).toBe("closed");
});
test("closeFrom calls close on passed window", () => {
  const win: any = { close: () => "c" };
  expect(windowModule.closeFrom(win)).toBe("c");
});

test("closed returns global closed", () => {
  (globalThis as any).closed = true;
  expect(windowModule.closed()).toBe(true);
});

test("confirm calls global confirm", () => {
  (globalThis as any).confirm = (msg: any) => msg === "ok";
  expect(windowModule.confirm("ok")).toBe(true);
});
test("confirmFrom calls confirm on passed window", () => {
  const win: any = { confirm: (m: any) => m };
  expect(windowModule.confirmFrom(win, "y")).toBe("y");
});

test("cookieStore returns global cookieStore", () => {
  (globalThis as any).cookieStore = { store: 1 };
  expect(windowModule.cookieStore()).toEqual({ store: 1 });
});

test("createImageBitmap calls global createImageBitmap", () => {
  (globalThis as any).createImageBitmap = (d: any) => ({ img: d });
  expect(windowModule.createImageBitmap("buf")).toEqual({ img: "buf" });
});
test("createImageBitmapFrom calls createImageBitmap on passed window", () => {
  const win: any = { createImageBitmap: (b: any) => ({ w: b }) };
  expect(windowModule.createImageBitmapFrom(win, 5)).toEqual({ w: 5 });
});

test("credentialless returns global credentialless", () => {
  (globalThis as any).credentialless = false;
  expect(windowModule.credentialless()).toBe(false);
});

test("crossOriginIsolated returns global crossOriginIsolated", () => {
  (globalThis as any).crossOriginIsolated = true;
  expect(windowModule.crossOriginIsolated()).toBe(true);
});

test("crypto returns global crypto", () => {
  (globalThis as any).crypto = { crypt: 1 };
  expect(windowModule.crypto()).toEqual({ crypt: 1 });
});

test("customElements returns global customElements", () => {
  (globalThis as any).customElements = { ce: 2 };
  expect(windowModule.customElements()).toEqual({ ce: 2 });
});

test("devicePixelRatio returns global devicePixelRatio", () => {
  (globalThis as any).devicePixelRatio = 2;
  expect(windowModule.devicePixelRatio()).toBe(2);
});

test("document returns global document", () => {
  (globalThis as any).document = { doc: true };
  expect(windowModule.document()).toEqual({ doc: true });
});

test("documentPictureInPicture returns global documentPictureInPicture", () => {
  (globalThis as any).documentPictureInPicture = { pip: true };
  expect(windowModule.documentPictureInPicture()).toEqual({ pip: true });
});

test("dump calls global dump", () => {
  (globalThis as any).dump = (...a: any[]) => a.join("|");
  expect(windowModule.dump("a", "b")).toBe("a|b");
});
test("dumpFrom calls dump on passed window", () => {
  const win: any = { dump: (...a: any[]) => a.length };
  expect(windowModule.dumpFrom(win, 1, 2, 3)).toBe(3);
});

test("fence returns global fence", () => {
  (globalThis as any).fence = { fenced: true };
  expect(windowModule.fence()).toEqual({ fenced: true });
});

test("fetch calls global fetch", () => {
  (globalThis as any).fetch = (u: any) => `F:${u}`;
  expect(windowModule.fetch("url")).toBe("F:url");
});
test("fetchFrom calls fetch on passed window", () => {
  const win: any = { fetch: (u: any) => `WF:${u}` };
  expect(windowModule.fetchFrom(win, "u")).toBe("WF:u");
});

test("fetchLater calls global fetchLater", () => {
  (globalThis as any).fetchLater = (u: any) => `FL:${u}`;
  expect(windowModule.fetchLater("u")).toBe("FL:u");
});
test("fetchLaterFrom calls fetchLater on passed window", () => {
  const win: any = { fetchLater: (u: any) => `WFL:${u}` };
  expect(windowModule.fetchLaterFrom(win, "x")).toBe("WFL:x");
});

test("find calls global find", () => {
  (globalThis as any).find = (t: any) => t.toUpperCase();
  expect(windowModule.find("x")).toBe("X");
});
test("findFrom calls find on passed window", () => {
  const win: any = { find: (s: any) => s + s };
  expect(windowModule.findFrom(win, "a")).toBe("aa");
});

test("focus calls global focus", () => {
  (globalThis as any).focus = () => "FOCUS";
  expect(windowModule.focus()).toBe("FOCUS");
});
test("focusFrom calls focus on passed window", () => {
  const win: any = { focus: () => "WF" };
  expect(windowModule.focusFrom(win)).toBe("WF");
});

test("frameElement returns global frameElement", () => {
  (globalThis as any).frameElement = { frame: 1 };
  expect(windowModule.frameElement()).toEqual({ frame: 1 });
});

test("frames returns global frames", () => {
  (globalThis as any).frames = { window: 1 };
  expect(windowModule.frames()).toEqual({ window: 1 });
});

test("fullScreen returns global fullScreen", () => {
  (globalThis as any).fullScreen = true;
  expect(windowModule.fullScreen()).toBe(true);
});

test("getComputedStyle calls global getComputedStyle", () => {
  (globalThis as any).getComputedStyle = (e: any) => ({ el: e });
  expect(windowModule.getComputedStyle("div")).toEqual({ el: "div" });
});
test("getComputedStyleFrom calls getComputedStyle on passed window", () => {
  const win: any = { getComputedStyle: (e: any) => ({ w: e }) };
  expect(windowModule.getComputedStyleFrom(win, "p")).toEqual({ w: "p" });
});

test("getDefaultComputedStyle calls global getDefaultComputedStyle", () => {
  (globalThis as any).getDefaultComputedStyle = (e: any) => ({ d: e });
  expect(windowModule.getDefaultComputedStyle("el")).toEqual({ d: "el" });
});
test("getDefaultComputedStyleFrom calls getDefaultComputedStyle on passed window", () => {
  const win: any = { getDefaultComputedStyle: (e: any) => ({ win: e }) };
  expect(windowModule.getDefaultComputedStyleFrom(win, "x")).toEqual({ win: "x" });
});

test("getScreenDetails calls global getScreenDetails", () => {
  (globalThis as any).getScreenDetails = () => "scr";
  expect(windowModule.getScreenDetails()).toBe("scr");
});
test("getScreenDetailsFrom calls getScreenDetails on passed window", () => {
  const win: any = { getScreenDetails: () => "ws" };
  expect(windowModule.getScreenDetailsFrom(win)).toBe("ws");
});

test("getSelection calls global getSelection", () => {
  (globalThis as any).getSelection = () => "sel";
  expect(windowModule.getSelection()).toBe("sel");
});
test("getSelectionFrom calls getSelection on passed window", () => {
  const win: any = { getSelection: () => "wsel" };
  expect(windowModule.getSelectionFrom(win)).toBe("wsel");
});

test("history returns global history", () => {
  (globalThis as any).history = { stack: [] };
  expect(windowModule.history()).toEqual({ stack: [] });
});

test("indexedDb returns global indexedDB", () => {
  (globalThis as any).indexedDB = { db: 1 };
  expect(windowModule.indexedDb()).toEqual({ db: 1 });
});

test("innerHeight returns global innerHeight", () => {
  (globalThis as any).innerHeight = 480;
  expect(windowModule.innerHeight()).toBe(480);
});

test("innerWidth returns global innerWidth", () => {
  (globalThis as any).innerWidth = 640;
  expect(windowModule.innerWidth()).toBe(640);
});

test("isSecureContext returns global isSecureContext", () => {
  (globalThis as any).isSecureContext = true;
  expect(windowModule.isSecureContext()).toBe(true);
});

test("launchQueue returns global launchQueue", () => {
  (globalThis as any).launchQueue = { queue: true };
  expect(windowModule.launchQueue()).toEqual({ queue: true });
});

test("length returns global length", () => {
  (globalThis as any).length = 42;
  expect(windowModule.length()).toBe(42);
});

test("localStorage returns global localStorage", () => {
  (globalThis as any).localStorage = { storage: true };
  expect(windowModule.localStorage()).toEqual({ storage: true });
});

test("location returns global location", () => {
  (globalThis as any).location = { href: "http://example" };
  expect(windowModule.location()).toEqual({ href: "http://example" });
});

test("locationbar returns global locationbar", () => {
  (globalThis as any).locationbar = { bar: true };
  expect(windowModule.locationbar()).toEqual({ bar: true });
});

test("matchMedia calls global matchMedia", () => {
  (globalThis as any).matchMedia = (q: any) => ({ q });
  expect(windowModule.matchMedia("m")).toEqual({ q: "m" });
});
test("matchMediaFrom calls matchMedia on passed window", () => {
  const win: any = { matchMedia: (q: any) => ({ w: q }) };
  expect(windowModule.matchMediaFrom(win, "mq")).toEqual({ w: "mq" });
});

test("menubar returns global menubar", () => {
  (globalThis as any).menubar = { menu: true };
  expect(windowModule.menubar()).toEqual({ menu: true });
});

test("moveBy calls global moveBy", () => {
  (globalThis as any).moveBy = (x: any, y: any) => x + y;
  expect(windowModule.moveBy(1, 2)).toBe(3);
});
test("moveByFrom calls moveBy on passed window", () => {
  const win: any = { moveBy: (x: any, y: any) => x * y };
  expect(windowModule.moveByFrom(win, 2, 3)).toBe(6);
});

test("moveTo calls global moveTo", () => {
  (globalThis as any).moveTo = (x: any, y: any) => x - y;
  expect(windowModule.moveTo(5, 2)).toBe(3);
});
test("moveToFrom calls moveTo on passed window", () => {
  const win: any = { moveTo: (x: any, y: any) => y - x };
  expect(windowModule.moveToFrom(win, 1, 4)).toBe(3);
});

test("mozInnerScreenX returns global mozInnerScreenX", () => {
  (globalThis as any).mozInnerScreenX = 1;
  expect(windowModule.mozInnerScreenX()).toBe(1);
});

test("mozInnerScreenY returns global mozInnerScreenY", () => {
  (globalThis as any).mozInnerScreenY = 2;
  expect(windowModule.mozInnerScreenY()).toBe(2);
});

test("name returns global name", () => {
  (globalThis as any).name = "win";
  expect(windowModule.name()).toBe("win");
});

test("navigation returns global navigation", () => {
  (globalThis as any).navigation = { nav: true };
  expect(windowModule.navigation()).toEqual({ nav: true });
});

test("navigator returns global navigator", () => {
  (globalThis as any).navigator = { ua: "test" };
  expect(windowModule.navigator()).toEqual({ ua: "test" });
});

test("open calls global open", () => {
  (globalThis as any).open = (u: any) => `O:${u}`;
  expect(windowModule.open("a")).toBe("O:a");
});
test("openFrom calls open on passed window", () => {
  const win: any = { open: (u: any) => `W:${u}` };
  expect(windowModule.openFrom(win, "b")).toBe("W:b");
});

test("opener returns global opener", () => {
  (globalThis as any).opener = { win: 1 };
  expect(windowModule.opener()).toEqual({ win: 1 });
});

test("origin returns global origin", () => {
  (globalThis as any).origin = "http://example";
  expect(windowModule.origin()).toBe("http://example");
});

test("originAgentCluster returns global originAgentCluster", () => {
  (globalThis as any).originAgentCluster = { cluster: true };
  expect(windowModule.originAgentCluster()).toEqual({ cluster: true });
});

test("outerHeight returns global outerHeight", () => {
  (globalThis as any).outerHeight = 800;
  expect(windowModule.outerHeight()).toBe(800);
});

test("outerWidth returns global outerWidth", () => {
  (globalThis as any).outerWidth = 1024;
  expect(windowModule.outerWidth()).toBe(1024);
});

test("pageXOffset returns global pageXOffset", () => {
  (globalThis as any).pageXOffset = 10;
  expect(windowModule.pageXOffset()).toBe(10);
});

test("pageYOffset returns global pageYOffset", () => {
  (globalThis as any).pageYOffset = 20;
  expect(windowModule.pageYOffset()).toBe(20);
});

test("parent returns global parent", () => {
  (globalThis as any).parent = { parent: true };
  expect(windowModule.parent()).toEqual({ parent: true });
});

test("performance returns global performance", () => {
  (globalThis as any).performance = { perf: 1 };
  expect(windowModule.performance()).toEqual({ perf: 1 });
});

test("personalbar returns global personalbar", () => {
  (globalThis as any).personalbar = { bar: 1 };
  expect(windowModule.personalbar()).toEqual({ bar: 1 });
});

test("postMessage calls global postMessage", () => {
  (globalThis as any).postMessage = (m: any) => `P:${m}`;
  expect(windowModule.postMessage("msg")).toBe("P:msg");
});
test("postMessageFrom calls postMessage on passed window", () => {
  const win: any = { postMessage: (m: any) => `WP:${m}` };
  expect(windowModule.postMessageFrom(win, "ms")).toBe("WP:ms");
});

test("print calls global print", () => {
  (globalThis as any).print = () => "PRINT";
  expect(windowModule.print()).toBe("PRINT");
});
test("printFrom calls print on passed window", () => {
  const win: any = { print: () => "WPRINT" };
  expect(windowModule.printFrom(win)).toBe("WPRINT");
});

test("prompt calls global prompt", () => {
  (globalThis as any).prompt = () => "PROMPT";
  expect(windowModule.prompt()).toBe("PROMPT");
});
test("promptFrom calls prompt on passed window", () => {
  const win: any = { prompt: () => "WP" };
  expect(windowModule.promptFrom(win)).toBe("WP");
});

test("queryLocalFonts calls global queryLocalFonts", () => {
  (globalThis as any).queryLocalFonts = () => [1];
  expect(windowModule.queryLocalFonts()).toEqual([1]);
});
test("queryLocalFontsFrom calls queryLocalFonts on passed window", () => {
  const win: any = { queryLocalFonts: () => [2] };
  expect(windowModule.queryLocalFontsFrom(win)).toEqual([2]);
});

test("queueMicrotask calls global queueMicrotask", () => {
  (globalThis as any).queueMicrotask = (cb: any) => cb("q");
  let val = "";
  windowModule.queueMicrotask((v: any) => (val = v));
  expect(val).toBe("q");
});
test("queueMicrotaskFrom calls queueMicrotask on passed window", () => {
  const win: any = { queueMicrotask: (cb: any) => cb(5) };
  let n = 0;
  windowModule.queueMicrotaskFrom(win, (v: any) => (n = v));
  expect(n).toBe(5);
});

test("reportError calls global reportError", () => {
  (globalThis as any).reportError = (e: any) => `R:${e}`;
  expect(windowModule.reportError("err")).toBe("R:err");
});
test("reportErrorFrom calls reportError on passed window", () => {
  const win: any = { reportError: (e: any) => `WR:${e}` };
  expect(windowModule.reportErrorFrom(win, "e")).toBe("WR:e");
});

test("requestAnimationFrame calls global requestAnimationFrame", () => {
  (globalThis as any).requestAnimationFrame = (cb: any) => cb(3);
  let r = 0;
  windowModule.requestAnimationFrame((v: any) => (r = v));
  expect(r).toBe(3);
});
test("requestAnimationFrameFrom calls requestAnimationFrame on passed window", () => {
  const win: any = { requestAnimationFrame: (cb: any) => cb(7) };
  let r = 0;
  windowModule.requestAnimationFrameFrom(win, (v: any) => (r = v));
  expect(r).toBe(7);
});

test("requestIdleCallback calls global requestIdleCallback", () => {
  (globalThis as any).requestIdleCallback = (cb: any) => cb("done");
  let r: any;
  windowModule.requestIdleCallback((v: any) => (r = v));
  expect(r).toBe("done");
});
test("requestIdleCallbackFrom calls requestIdleCallback on passed window", () => {
  const win: any = { requestIdleCallback: (cb: any) => cb("wdone") };
  let r: any;
  windowModule.requestIdleCallbackFrom(win, (v: any) => (r = v));
  expect(r).toBe("wdone");
});

test("resizeBy calls global resizeBy", () => {
  (globalThis as any).resizeBy = (x: any, y: any) => x - y;
  expect(windowModule.resizeBy(5, 3)).toBe(2);
});
test("resizeByFrom calls resizeBy on passed window", () => {
  const win: any = { resizeBy: (x: any, y: any) => x * y };
  expect(windowModule.resizeByFrom(win, 2, 4)).toBe(8);
});

test("resizeTo calls global resizeTo", () => {
  (globalThis as any).resizeTo = (x: any, y: any) => x + y;
  expect(windowModule.resizeTo(1, 2)).toBe(3);
});
test("resizeToFrom calls resizeTo on passed window", () => {
  const win: any = { resizeTo: (x: any, y: any) => y - x };
  expect(windowModule.resizeToFrom(win, 1, 5)).toBe(4);
});

test("scheduler returns global scheduler", () => {
  (globalThis as any).scheduler = { schedule: true };
  expect(windowModule.scheduler()).toEqual({ schedule: true });
});

test("screen returns global screen", () => {
  (globalThis as any).screen = { colorDepth: 24 };
  expect(windowModule.screen()).toEqual({ colorDepth: 24 });
});

test("screenLeft returns global screenLeft", () => {
  (globalThis as any).screenLeft = 10;
  expect(windowModule.screenLeft()).toBe(10);
});

test("screenTop returns global screenTop", () => {
  (globalThis as any).screenTop = 20;
  expect(windowModule.screenTop()).toBe(20);
});

test("screenX returns global screenX", () => {
  (globalThis as any).screenX = 30;
  expect(windowModule.screenX()).toBe(30);
});

test("screenY returns global screenY", () => {
  (globalThis as any).screenY = 40;
  expect(windowModule.screenY()).toBe(40);
});

test("scroll calls global scroll", () => {
  (globalThis as any).scroll = (...a: any[]) => a.join("-");
  expect(windowModule.scroll(1, 2)).toBe("1-2");
});
test("scrollFrom calls scroll on passed window", () => {
  const win: any = { scroll: (...a: any[]) => a.length };
  expect(windowModule.scrollFrom(win, "a", "b")).toBe(2);
});

test("scrollbars returns global scrollbars", () => {
  (globalThis as any).scrollbars = { present: true };
  expect(windowModule.scrollbars()).toEqual({ present: true });
});

test("scrollBy calls global scrollBy", () => {
  (globalThis as any).scrollBy = (x: any, y: any) => x + y;
  expect(windowModule.scrollBy(3, 4)).toBe(7);
});
test("scrollByFrom calls scrollBy on passed window", () => {
  const win: any = { scrollBy: (x: any, y: any) => x * y };
  expect(windowModule.scrollByFrom(win, 2, 5)).toBe(10);
});

test("scrollByLines calls global scrollByLines", () => {
  (globalThis as any).scrollByLines = (l: any) => l + 1;
  expect(windowModule.scrollByLines(2)).toBe(3);
});
test("scrollByLinesFrom calls scrollByLines on passed window", () => {
  const win: any = { scrollByLines: (l: any) => l - 1 };
  expect(windowModule.scrollByLinesFrom(win, 4)).toBe(3);
});

test("scrollByPages calls global scrollByPages", () => {
  (globalThis as any).scrollByPages = (p: any) => p * 2;
  expect(windowModule.scrollByPages(3)).toBe(6);
});
test("scrollByPagesFrom calls scrollByPages on passed window", () => {
  const win: any = { scrollByPages: (p: any) => p + 2 };
  expect(windowModule.scrollByPagesFrom(win, 1)).toBe(3);
});

test("scrollMaxX returns global scrollMaxX", () => {
  (globalThis as any).scrollMaxX = 50;
  expect(windowModule.scrollMaxX()).toBe(50);
});

test("scrollMaxY returns global scrollMaxY", () => {
  (globalThis as any).scrollMaxY = 60;
  expect(windowModule.scrollMaxY()).toBe(60);
});

test("scrollTo calls global scrollTo", () => {
  (globalThis as any).scrollTo = (...a: any[]) => a.reverse();
  expect(windowModule.scrollTo(1, 2)).toEqual([2, 1]);
});
test("scrollToFrom calls scrollTo on passed window", () => {
  const win: any = { scrollTo: (...a: any[]) => a.join(":" ) };
  expect(windowModule.scrollToFrom(win, "x", "y")).toBe("x:y");
});

test("scrollX returns global scrollX", () => {
  (globalThis as any).scrollX = 70;
  expect(windowModule.scrollX()).toBe(70);
});

test("scrollY returns global scrollY", () => {
  (globalThis as any).scrollY = 80;
  expect(windowModule.scrollY()).toBe(80);
});

test("self returns global self", () => {
  (globalThis as any).self = { self: true };
  expect(windowModule.self()).toEqual({ self: true });
});

test("sessionStorage returns global sessionStorage", () => {
  (globalThis as any).sessionStorage = { session: 1 };
  expect(windowModule.sessionStorage()).toEqual({ session: 1 });
});

test("setInterval calls global setInterval", () => {
  (globalThis as any).setInterval = (cb: any, t: any) => `${cb}:${t}`;
  expect(windowModule.setInterval("cb", 1)).toBe("cb:1");
});
test("setIntervalFrom calls setInterval on passed window", () => {
  const win: any = { setInterval: (c: any, t: any) => t * 2 };
  expect(windowModule.setIntervalFrom(win, "c", 2)).toBe(4);
});

test("setTimeout calls global setTimeout", () => {
  (globalThis as any).setTimeout = (cb: any, t: any) => `${t}`;
  expect(windowModule.setTimeout(() => 0, 5)).toBe("5");
});
test("setTimeoutFrom calls setTimeout on passed window", () => {
  const win: any = { setTimeout: (cb: any, t: any) => cb + t };
  expect(windowModule.setTimeoutFrom(win, 1, 3)).toBe(4);
});

test("sharedStorage returns global sharedStorage", () => {
  (globalThis as any).sharedStorage = { shared: true };
  expect(windowModule.sharedStorage()).toEqual({ shared: true });
});

test("showDirectoryPicker calls global showDirectoryPicker", () => {
  (globalThis as any).showDirectoryPicker = () => "dir";
  expect(windowModule.showDirectoryPicker()).toBe("dir");
});
test("showDirectoryPickerFrom calls showDirectoryPicker on passed window", () => {
  const win: any = { showDirectoryPicker: () => "wdir" };
  expect(windowModule.showDirectoryPickerFrom(win)).toBe("wdir");
});

test("showOpenFilePicker calls global showOpenFilePicker", () => {
  (globalThis as any).showOpenFilePicker = () => [1];
  expect(windowModule.showOpenFilePicker()).toEqual([1]);
});
test("showOpenFilePickerFrom calls showOpenFilePicker on passed window", () => {
  const win: any = { showOpenFilePicker: () => [2] };
  expect(windowModule.showOpenFilePickerFrom(win)).toEqual([2]);
});

test("showSaveFilePicker calls global showSaveFilePicker", () => {
  (globalThis as any).showSaveFilePicker = () => ({ save: true });
  expect(windowModule.showSaveFilePicker()).toEqual({ save: true });
});
test("showSaveFilePickerFrom calls showSaveFilePicker on passed window", () => {
  const win: any = { showSaveFilePicker: () => ({ wsave: true }) };
  expect(windowModule.showSaveFilePickerFrom(win)).toEqual({ wsave: true });
});

test("sizeToContent calls global sizeToContent", () => {
  (globalThis as any).sizeToContent = () => "sz";
  expect(windowModule.sizeToContent()).toBe("sz");
});
test("sizeToContentFrom calls sizeToContent on passed window", () => {
  const win: any = { sizeToContent: () => "wsz" };
  expect(windowModule.sizeToContentFrom(win)).toBe("wsz");
});

test("speechSynthesis returns global speechSynthesis", () => {
  (globalThis as any).speechSynthesis = { speak: true };
  expect(windowModule.speechSynthesis()).toEqual({ speak: true });
});

test("statusbar returns global statusbar", () => {
  (globalThis as any).statusbar = { visible: false };
  expect(windowModule.statusbar()).toEqual({ visible: false });
});

test("stop calls global stop", () => {
  (globalThis as any).stop = () => "STOP";
  expect(windowModule.stop()).toBe("STOP");
});
test("stopFrom calls stop on passed window", () => {
  const win: any = { stop: () => "WSTOP" };
  expect(windowModule.stopFrom(win)).toBe("WSTOP");
});

test("structuredClone calls global structuredClone", () => {
  (globalThis as any).structuredClone = (o: any) => ({ c: o });
  expect(windowModule.structuredClone(5)).toEqual({ c: 5 });
});
test("structuredCloneFrom calls structuredClone on passed window", () => {
  const win: any = { structuredClone: (o: any) => o };
  expect(windowModule.structuredCloneFrom(win, "x")).toBe("x");
});

test("toolbar returns global toolbar", () => {
  (globalThis as any).toolbar = { tools: 1 };
  expect(windowModule.toolbar()).toEqual({ tools: 1 });
});

test("top returns global top", () => {
  (globalThis as any).top = { top: true };
  expect(windowModule.top()).toEqual({ top: true });
});

test("trustedTypes returns global trustedTypes", () => {
  (globalThis as any).trustedTypes = { trust: true };
  expect(windowModule.trustedTypes()).toEqual({ trust: true });
});

test("visualViewport returns global visualViewport", () => {
  (globalThis as any).visualViewport = { height: 100 };
  expect(windowModule.visualViewport()).toEqual({ height: 100 });
});

test("window returns global window", () => {
  (globalThis as any).window = { w: 1 };
  expect(windowModule.window()).toEqual({ w: 1 });
});

// New tests for instance-specific functions
const windowInstance: any = {};
const skipWindowFromFns = [
  "alertFrom",
  "atobFrom",
  "blurFrom",
  "btoaFrom",
  "cancelAnimationFrameFrom",
  "cancelIdleCallbackFrom",
  "clearIntervalFrom",
  "clearTimeoutFrom",
  "closeFrom",
  "confirmFrom",
  "createImageBitmapFrom",
  "dumpFrom",
  "fetchFrom",
  "fetchLaterFrom",
  "findFrom",
  "focusFrom",
  "getComputedStyleFrom",
  "getDefaultComputedStyleFrom",
  "getScreenDetailsFrom",
  "getSelectionFrom",
  "matchMediaFrom",
  "moveByFrom",
  "moveToFrom",
  "openFrom",
  "postMessageFrom",
  "printFrom",
  "promptFrom",
  "queryLocalFontsFrom",
  "queueMicrotaskFrom",
  "reportErrorFrom",
  "requestAnimationFrameFrom",
  "requestIdleCallbackFrom",
  "resizeByFrom",
  "resizeToFrom",
  "scrollByFrom",
  "scrollByLinesFrom",
  "scrollByPagesFrom",
  "scrollFrom",
  "scrollToFrom",
  "setIntervalFrom",
  "setTimeoutFrom",
  "showDirectoryPickerFrom",
  "showOpenFilePickerFrom",
  "showSaveFilePickerFrom",
  "sizeToContentFrom",
  "stopFrom",
  "structuredCloneFrom",
];
Object.keys(windowModule)
  .filter((k) => k.endsWith("From") && !skipWindowFromFns.includes(k))
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
