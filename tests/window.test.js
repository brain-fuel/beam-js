import * as windowModule from "../src/window.ffi.mjs";
import { expect, test } from "bun:test";

test("alert calls global alert", () => {
  (globalThis).alert = (m) => `A:${m}`;
  expect(windowModule.alert("m")).toBe("A:m");
});
test("alertFrom calls alert on passed window", () => {
  const win = { alert: (x) => `B:${x}` };
  expect(windowModule.alertFrom(win, 5)).toBe("B:5");
});

test("atob calls global atob", () => {
  (globalThis).atob = (d) => Buffer.from(d, "base64").toString("binary");
  expect(windowModule.atob("YWE=")).toBe("aa");
});
test("atobFrom calls atob on passed window", () => {
  const win = { atob: (d) => Buffer.from(d, "base64").toString("utf8") };
  expect(windowModule.atobFrom(win, "Yg==")).toBe("b");
});

test("blur calls global blur", () => {
  (globalThis).blur = () => "BLUR";
  expect(windowModule.blur()).toBe("BLUR");
});
test("blurFrom calls blur on passed window", () => {
  const win = { blur: () => "BLUR2" };
  expect(windowModule.blurFrom(win)).toBe("BLUR2");
});

test("btoa calls global btoa", () => {
  (globalThis).btoa = (d) => `enc:${d}`;
  expect(windowModule.btoa("data")).toBe("enc:data");
});
test("btoaFrom calls btoa on passed window", () => {
  const win = { btoa: (d) => `e:${d}` };
  expect(windowModule.btoaFrom(win, "d")).toBe("e:d");
});

test("caches returns global caches", () => {
  (globalThis).caches = "CACHES_TEST";
  expect(windowModule.caches()).toBe("CACHES_TEST");
});

test("cancelAnimationFrame calls global cancelAnimationFrame", () => {
  (globalThis).cancelAnimationFrame = (id) => id * 2;
  expect(windowModule.cancelAnimationFrame(3)).toBe(6);
});
test("cancelAnimationFrameFrom calls cancelAnimationFrame on passed window", () => {
  const win = { cancelAnimationFrame: (id) => id + 1 };
  expect(windowModule.cancelAnimationFrameFrom(win, 4)).toBe(5);
});

test("cancelIdleCallback calls global cancelIdleCallback", () => {
  (globalThis).cancelIdleCallback = (id) => id - 1;
  expect(windowModule.cancelIdleCallback(7)).toBe(6);
});
test("cancelIdleCallbackFrom calls cancelIdleCallback on passed window", () => {
  const win = { cancelIdleCallback: (id) => id + 2 };
  expect(windowModule.cancelIdleCallbackFrom(win, 1)).toBe(3);
});

test("clearInterval calls global clearInterval", () => {
  (globalThis).clearInterval = (id) => `ci:${id}`;
  expect(windowModule.clearInterval(8)).toBe("ci:8");
});
test("clearIntervalFrom calls clearInterval on passed window", () => {
  const win = { clearInterval: (id) => `ciw:${id}` };
  expect(windowModule.clearIntervalFrom(win, 2)).toBe("ciw:2");
});

test("clearTimeout calls global clearTimeout", () => {
  (globalThis).clearTimeout = (id) => `ct:${id}`;
  expect(windowModule.clearTimeout(9)).toBe("ct:9");
});
test("clearTimeoutFrom calls clearTimeout on passed window", () => {
  const win = { clearTimeout: (id) => `ctw:${id}` };
  expect(windowModule.clearTimeoutFrom(win, 3)).toBe("ctw:3");
});

test("clientInformation returns global clientInformation", () => {
  (globalThis).clientInformation = { info: true };
  expect(windowModule.clientInformation()).toEqual({ info: true });
});

test("close calls global close", () => {
  (globalThis).close = () => "closed";
  expect(windowModule.close()).toBe("closed");
});
test("closeFrom calls close on passed window", () => {
  const win = { close: () => "c" };
  expect(windowModule.closeFrom(win)).toBe("c");
});

test("closed returns global closed", () => {
  (globalThis).closed = true;
  expect(windowModule.closed()).toBe(true);
});

test("confirm calls global confirm", () => {
  (globalThis).confirm = (msg) => msg === "ok";
  expect(windowModule.confirm("ok")).toBe(true);
});
test("confirmFrom calls confirm on passed window", () => {
  const win = { confirm: (m) => m };
  expect(windowModule.confirmFrom(win, "y")).toBe("y");
});

test("cookieStore returns global cookieStore", () => {
  (globalThis).cookieStore = { store: 1 };
  expect(windowModule.cookieStore()).toEqual({ store: 1 });
});

test("createImageBitmap calls global createImageBitmap", () => {
  (globalThis).createImageBitmap = (d) => ({ img: d });
  expect(windowModule.createImageBitmap("buf")).toEqual({ img: "buf" });
});
test("createImageBitmapFrom calls createImageBitmap on passed window", () => {
  const win = { createImageBitmap: (b) => ({ w: b }) };
  expect(windowModule.createImageBitmapFrom(win, 5)).toEqual({ w: 5 });
});

test("credentialless returns global credentialless", () => {
  (globalThis).credentialless = false;
  expect(windowModule.credentialless()).toBe(false);
});

test("crossOriginIsolated returns global crossOriginIsolated", () => {
  (globalThis).crossOriginIsolated = true;
  expect(windowModule.crossOriginIsolated()).toBe(true);
});

test("crypto returns global crypto", () => {
  (globalThis).crypto = { crypt: 1 };
  expect(windowModule.crypto()).toEqual({ crypt: 1 });
});

test("customElements returns global customElements", () => {
  (globalThis).customElements = { ce: 2 };
  expect(windowModule.customElements()).toEqual({ ce: 2 });
});

test("devicePixelRatio returns global devicePixelRatio", () => {
  (globalThis).devicePixelRatio = 2;
  expect(windowModule.devicePixelRatio()).toBe(2);
});

test("document returns global document", () => {
  (globalThis).document = { doc: true };
  expect(windowModule.document()).toEqual({ doc: true });
});

test("documentPictureInPicture returns global documentPictureInPicture", () => {
  (globalThis).documentPictureInPicture = { pip: true };
  expect(windowModule.documentPictureInPicture()).toEqual({ pip: true });
});

test("dump calls global dump", () => {
  (globalThis).dump = (...a) => a.join("|");
  expect(windowModule.dump("a", "b")).toBe("a|b");
});
test("dumpFrom calls dump on passed window", () => {
  const win = { dump: (...a) => a.length };
  expect(windowModule.dumpFrom(win, 1, 2, 3)).toBe(3);
});

test("fence returns global fence", () => {
  (globalThis).fence = { fenced: true };
  expect(windowModule.fence()).toEqual({ fenced: true });
});

test("fetch calls global fetch", () => {
  (globalThis).fetch = (u) => `F:${u}`;
  expect(windowModule.fetch("url")).toBe("F:url");
});
test("fetchFrom calls fetch on passed window", () => {
  const win = { fetch: (u) => `WF:${u}` };
  expect(windowModule.fetchFrom(win, "u")).toBe("WF:u");
});

test("fetchLater calls global fetchLater", () => {
  (globalThis).fetchLater = (u) => `FL:${u}`;
  expect(windowModule.fetchLater("u")).toBe("FL:u");
});
test("fetchLaterFrom calls fetchLater on passed window", () => {
  const win = { fetchLater: (u) => `WFL:${u}` };
  expect(windowModule.fetchLaterFrom(win, "x")).toBe("WFL:x");
});

test("find calls global find", () => {
  (globalThis).find = (t) => t.toUpperCase();
  expect(windowModule.find("x")).toBe("X");
});
test("findFrom calls find on passed window", () => {
  const win = { find: (s) => s + s };
  expect(windowModule.findFrom(win, "a")).toBe("aa");
});

test("focus calls global focus", () => {
  (globalThis).focus = () => "FOCUS";
  expect(windowModule.focus()).toBe("FOCUS");
});
test("focusFrom calls focus on passed window", () => {
  const win = { focus: () => "WF" };
  expect(windowModule.focusFrom(win)).toBe("WF");
});

test("frameElement returns global frameElement", () => {
  (globalThis).frameElement = { frame: 1 };
  expect(windowModule.frameElement()).toEqual({ frame: 1 });
});

test("frames returns global frames", () => {
  (globalThis).frames = { window: 1 };
  expect(windowModule.frames()).toEqual({ window: 1 });
});

test("fullScreen returns global fullScreen", () => {
  (globalThis).fullScreen = true;
  expect(windowModule.fullScreen()).toBe(true);
});

test("getComputedStyle calls global getComputedStyle", () => {
  (globalThis).getComputedStyle = (e) => ({ el: e });
  expect(windowModule.getComputedStyle("div")).toEqual({ el: "div" });
});
test("getComputedStyleFrom calls getComputedStyle on passed window", () => {
  const win = { getComputedStyle: (e) => ({ w: e }) };
  expect(windowModule.getComputedStyleFrom(win, "p")).toEqual({ w: "p" });
});

test("getDefaultComputedStyle calls global getDefaultComputedStyle", () => {
  (globalThis).getDefaultComputedStyle = (e) => ({ d: e });
  expect(windowModule.getDefaultComputedStyle("el")).toEqual({ d: "el" });
});
test("getDefaultComputedStyleFrom calls getDefaultComputedStyle on passed window", () => {
  const win = { getDefaultComputedStyle: (e) => ({ win: e }) };
  expect(windowModule.getDefaultComputedStyleFrom(win, "x")).toEqual({ win: "x" });
});

test("getScreenDetails calls global getScreenDetails", () => {
  (globalThis).getScreenDetails = () => "scr";
  expect(windowModule.getScreenDetails()).toBe("scr");
});
test("getScreenDetailsFrom calls getScreenDetails on passed window", () => {
  const win = { getScreenDetails: () => "ws" };
  expect(windowModule.getScreenDetailsFrom(win)).toBe("ws");
});

test("getSelection calls global getSelection", () => {
  (globalThis).getSelection = () => "sel";
  expect(windowModule.getSelection()).toBe("sel");
});
test("getSelectionFrom calls getSelection on passed window", () => {
  const win = { getSelection: () => "wsel" };
  expect(windowModule.getSelectionFrom(win)).toBe("wsel");
});

test("history returns global history", () => {
  (globalThis).history = { stack: [] };
  expect(windowModule.history()).toEqual({ stack: [] });
});

test("indexedDb returns global indexedDB", () => {
  (globalThis).indexedDB = { db: 1 };
  expect(windowModule.indexedDb()).toEqual({ db: 1 });
});

test("innerHeight returns global innerHeight", () => {
  (globalThis).innerHeight = 480;
  expect(windowModule.innerHeight()).toBe(480);
});

test("innerWidth returns global innerWidth", () => {
  (globalThis).innerWidth = 640;
  expect(windowModule.innerWidth()).toBe(640);
});

test("isSecureContext returns global isSecureContext", () => {
  (globalThis).isSecureContext = true;
  expect(windowModule.isSecureContext()).toBe(true);
});

test("launchQueue returns global launchQueue", () => {
  (globalThis).launchQueue = { queue: true };
  expect(windowModule.launchQueue()).toEqual({ queue: true });
});

test("length returns global length", () => {
  (globalThis).length = 42;
  expect(windowModule.length()).toBe(42);
});

test("localStorage returns global localStorage", () => {
  (globalThis).localStorage = { storage: true };
  expect(windowModule.localStorage()).toEqual({ storage: true });
});

test("location returns global location", () => {
  (globalThis).location = { href: "http://example" };
  expect(windowModule.location()).toEqual({ href: "http://example" });
});

test("locationbar returns global locationbar", () => {
  (globalThis).locationbar = { bar: true };
  expect(windowModule.locationbar()).toEqual({ bar: true });
});

test("matchMedia calls global matchMedia", () => {
  (globalThis).matchMedia = (q) => ({ q });
  expect(windowModule.matchMedia("m")).toEqual({ q: "m" });
});
test("matchMediaFrom calls matchMedia on passed window", () => {
  const win = { matchMedia: (q) => ({ w: q }) };
  expect(windowModule.matchMediaFrom(win, "mq")).toEqual({ w: "mq" });
});

test("menubar returns global menubar", () => {
  (globalThis).menubar = { menu: true };
  expect(windowModule.menubar()).toEqual({ menu: true });
});

test("moveBy calls global moveBy", () => {
  (globalThis).moveBy = (x, y) => x + y;
  expect(windowModule.moveBy(1, 2)).toBe(3);
});
test("moveByFrom calls moveBy on passed window", () => {
  const win = { moveBy: (x, y) => x * y };
  expect(windowModule.moveByFrom(win, 2, 3)).toBe(6);
});

test("moveTo calls global moveTo", () => {
  (globalThis).moveTo = (x, y) => x - y;
  expect(windowModule.moveTo(5, 2)).toBe(3);
});
test("moveToFrom calls moveTo on passed window", () => {
  const win = { moveTo: (x, y) => y - x };
  expect(windowModule.moveToFrom(win, 1, 4)).toBe(3);
});

test("mozInnerScreenX returns global mozInnerScreenX", () => {
  (globalThis).mozInnerScreenX = 1;
  expect(windowModule.mozInnerScreenX()).toBe(1);
});

test("mozInnerScreenY returns global mozInnerScreenY", () => {
  (globalThis).mozInnerScreenY = 2;
  expect(windowModule.mozInnerScreenY()).toBe(2);
});

test("name returns global name", () => {
  (globalThis).name = "win";
  expect(windowModule.name()).toBe("win");
});

test("navigation returns global navigation", () => {
  (globalThis).navigation = { nav: true };
  expect(windowModule.navigation()).toEqual({ nav: true });
});

test("navigator returns global navigator", () => {
  (globalThis).navigator = { ua: "test" };
  expect(windowModule.navigator()).toEqual({ ua: "test" });
});

test("open calls global open", () => {
  (globalThis).open = (u) => `O:${u}`;
  expect(windowModule.open("a")).toBe("O:a");
});
test("openFrom calls open on passed window", () => {
  const win = { open: (u) => `W:${u}` };
  expect(windowModule.openFrom(win, "b")).toBe("W:b");
});

test("opener returns global opener", () => {
  (globalThis).opener = { win: 1 };
  expect(windowModule.opener()).toEqual({ win: 1 });
});

test("origin returns global origin", () => {
  (globalThis).origin = "http://example";
  expect(windowModule.origin()).toBe("http://example");
});

test("originAgentCluster returns global originAgentCluster", () => {
  (globalThis).originAgentCluster = { cluster: true };
  expect(windowModule.originAgentCluster()).toEqual({ cluster: true });
});

test("outerHeight returns global outerHeight", () => {
  (globalThis).outerHeight = 800;
  expect(windowModule.outerHeight()).toBe(800);
});

test("outerWidth returns global outerWidth", () => {
  (globalThis).outerWidth = 1024;
  expect(windowModule.outerWidth()).toBe(1024);
});

test("pageXOffset returns global pageXOffset", () => {
  (globalThis).pageXOffset = 10;
  expect(windowModule.pageXOffset()).toBe(10);
});

test("pageYOffset returns global pageYOffset", () => {
  (globalThis).pageYOffset = 20;
  expect(windowModule.pageYOffset()).toBe(20);
});

test("parent returns global parent", () => {
  (globalThis).parent = { parent: true };
  expect(windowModule.parent()).toEqual({ parent: true });
});

test("performance returns global performance", () => {
  (globalThis).performance = { perf: 1 };
  expect(windowModule.performance()).toEqual({ perf: 1 });
});

test("personalbar returns global personalbar", () => {
  (globalThis).personalbar = { bar: 1 };
  expect(windowModule.personalbar()).toEqual({ bar: 1 });
});

test("postMessage calls global postMessage", () => {
  (globalThis).postMessage = (m) => `P:${m}`;
  expect(windowModule.postMessage("msg")).toBe("P:msg");
});
test("postMessageFrom calls postMessage on passed window", () => {
  const win = { postMessage: (m) => `WP:${m}` };
  expect(windowModule.postMessageFrom(win, "ms")).toBe("WP:ms");
});

test("print calls global print", () => {
  (globalThis).print = () => "PRINT";
  expect(windowModule.print()).toBe("PRINT");
});
test("printFrom calls print on passed window", () => {
  const win = { print: () => "WPRINT" };
  expect(windowModule.printFrom(win)).toBe("WPRINT");
});

test("prompt calls global prompt", () => {
  (globalThis).prompt = () => "PROMPT";
  expect(windowModule.prompt()).toBe("PROMPT");
});
test("promptFrom calls prompt on passed window", () => {
  const win = { prompt: () => "WP" };
  expect(windowModule.promptFrom(win)).toBe("WP");
});

test("queryLocalFonts calls global queryLocalFonts", () => {
  (globalThis).queryLocalFonts = () => [1];
  expect(windowModule.queryLocalFonts()).toEqual([1]);
});
test("queryLocalFontsFrom calls queryLocalFonts on passed window", () => {
  const win = { queryLocalFonts: () => [2] };
  expect(windowModule.queryLocalFontsFrom(win)).toEqual([2]);
});

test("queueMicrotask calls global queueMicrotask", () => {
  (globalThis).queueMicrotask = (cb) => cb("q");
  let val = "";
  windowModule.queueMicrotask((v) => (val = v));
  expect(val).toBe("q");
});
test("queueMicrotaskFrom calls queueMicrotask on passed window", () => {
  const win = { queueMicrotask: (cb) => cb(5) };
  let n = 0;
  windowModule.queueMicrotaskFrom(win, (v) => (n = v));
  expect(n).toBe(5);
});

test("reportError calls global reportError", () => {
  (globalThis).reportError = (e) => `R:${e}`;
  expect(windowModule.reportError("err")).toBe("R:err");
});
test("reportErrorFrom calls reportError on passed window", () => {
  const win = { reportError: (e) => `WR:${e}` };
  expect(windowModule.reportErrorFrom(win, "e")).toBe("WR:e");
});

test("requestAnimationFrame calls global requestAnimationFrame", () => {
  (globalThis).requestAnimationFrame = (cb) => cb(3);
  let r = 0;
  windowModule.requestAnimationFrame((v) => (r = v));
  expect(r).toBe(3);
});
test("requestAnimationFrameFrom calls requestAnimationFrame on passed window", () => {
  const win = { requestAnimationFrame: (cb) => cb(7) };
  let r = 0;
  windowModule.requestAnimationFrameFrom(win, (v) => (r = v));
  expect(r).toBe(7);
});

test("requestIdleCallback calls global requestIdleCallback", () => {
  (globalThis).requestIdleCallback = (cb) => cb("done");
  let r;
  windowModule.requestIdleCallback((v) => (r = v));
  expect(r).toBe("done");
});
test("requestIdleCallbackFrom calls requestIdleCallback on passed window", () => {
  const win = { requestIdleCallback: (cb) => cb("wdone") };
  let r;
  windowModule.requestIdleCallbackFrom(win, (v) => (r = v));
  expect(r).toBe("wdone");
});

test("resizeBy calls global resizeBy", () => {
  (globalThis).resizeBy = (x, y) => x - y;
  expect(windowModule.resizeBy(5, 3)).toBe(2);
});
test("resizeByFrom calls resizeBy on passed window", () => {
  const win = { resizeBy: (x, y) => x * y };
  expect(windowModule.resizeByFrom(win, 2, 4)).toBe(8);
});

test("resizeTo calls global resizeTo", () => {
  (globalThis).resizeTo = (x, y) => x + y;
  expect(windowModule.resizeTo(1, 2)).toBe(3);
});
test("resizeToFrom calls resizeTo on passed window", () => {
  const win = { resizeTo: (x, y) => y - x };
  expect(windowModule.resizeToFrom(win, 1, 5)).toBe(4);
});

test("scheduler returns global scheduler", () => {
  (globalThis).scheduler = { schedule: true };
  expect(windowModule.scheduler()).toEqual({ schedule: true });
});

test("screen returns global screen", () => {
  (globalThis).screen = { colorDepth: 24 };
  expect(windowModule.screen()).toEqual({ colorDepth: 24 });
});

test("screenLeft returns global screenLeft", () => {
  (globalThis).screenLeft = 10;
  expect(windowModule.screenLeft()).toBe(10);
});

test("screenTop returns global screenTop", () => {
  (globalThis).screenTop = 20;
  expect(windowModule.screenTop()).toBe(20);
});

test("screenX returns global screenX", () => {
  (globalThis).screenX = 30;
  expect(windowModule.screenX()).toBe(30);
});

test("screenY returns global screenY", () => {
  (globalThis).screenY = 40;
  expect(windowModule.screenY()).toBe(40);
});

test("scroll calls global scroll", () => {
  (globalThis).scroll = (...a) => a.join("-");
  expect(windowModule.scroll(1, 2)).toBe("1-2");
});
test("scrollFrom calls scroll on passed window", () => {
  const win = { scroll: (...a) => a.length };
  expect(windowModule.scrollFrom(win, "a", "b")).toBe(2);
});

test("scrollbars returns global scrollbars", () => {
  (globalThis).scrollbars = { present: true };
  expect(windowModule.scrollbars()).toEqual({ present: true });
});

test("scrollBy calls global scrollBy", () => {
  (globalThis).scrollBy = (x, y) => x + y;
  expect(windowModule.scrollBy(3, 4)).toBe(7);
});
test("scrollByFrom calls scrollBy on passed window", () => {
  const win = { scrollBy: (x, y) => x * y };
  expect(windowModule.scrollByFrom(win, 2, 5)).toBe(10);
});

test("scrollByLines calls global scrollByLines", () => {
  (globalThis).scrollByLines = (l) => l + 1;
  expect(windowModule.scrollByLines(2)).toBe(3);
});
test("scrollByLinesFrom calls scrollByLines on passed window", () => {
  const win = { scrollByLines: (l) => l - 1 };
  expect(windowModule.scrollByLinesFrom(win, 4)).toBe(3);
});

test("scrollByPages calls global scrollByPages", () => {
  (globalThis).scrollByPages = (p) => p * 2;
  expect(windowModule.scrollByPages(3)).toBe(6);
});
test("scrollByPagesFrom calls scrollByPages on passed window", () => {
  const win = { scrollByPages: (p) => p + 2 };
  expect(windowModule.scrollByPagesFrom(win, 1)).toBe(3);
});

test("scrollMaxX returns global scrollMaxX", () => {
  (globalThis).scrollMaxX = 50;
  expect(windowModule.scrollMaxX()).toBe(50);
});

test("scrollMaxY returns global scrollMaxY", () => {
  (globalThis).scrollMaxY = 60;
  expect(windowModule.scrollMaxY()).toBe(60);
});

test("scrollTo calls global scrollTo", () => {
  (globalThis).scrollTo = (...a) => a.reverse();
  expect(windowModule.scrollTo(1, 2)).toEqual([2, 1]);
});
test("scrollToFrom calls scrollTo on passed window", () => {
  const win = { scrollTo: (...a) => a.join(":" ) };
  expect(windowModule.scrollToFrom(win, "x", "y")).toBe("x:y");
});

test("scrollX returns global scrollX", () => {
  (globalThis).scrollX = 70;
  expect(windowModule.scrollX()).toBe(70);
});

test("scrollY returns global scrollY", () => {
  (globalThis).scrollY = 80;
  expect(windowModule.scrollY()).toBe(80);
});

test("self returns global self", () => {
  (globalThis).self = { self: true };
  expect(windowModule.self()).toEqual({ self: true });
});

test("sessionStorage returns global sessionStorage", () => {
  (globalThis).sessionStorage = { session: 1 };
  expect(windowModule.sessionStorage()).toEqual({ session: 1 });
});

test("setInterval calls global setInterval", () => {
  (globalThis).setInterval = (cb, t) => `${cb}:${t}`;
  expect(windowModule.setInterval("cb", 1)).toBe("cb:1");
});
test("setIntervalFrom calls setInterval on passed window", () => {
  const win = { setInterval: (c, t) => t * 2 };
  expect(windowModule.setIntervalFrom(win, "c", 2)).toBe(4);
});

test("setTimeout calls global setTimeout", () => {
  (globalThis).setTimeout = (cb, t) => `${t}`;
  expect(windowModule.setTimeout(() => 0, 5)).toBe("5");
});
test("setTimeoutFrom calls setTimeout on passed window", () => {
  const win = { setTimeout: (cb, t) => cb + t };
  expect(windowModule.setTimeoutFrom(win, 1, 3)).toBe(4);
});

test("sharedStorage returns global sharedStorage", () => {
  (globalThis).sharedStorage = { shared: true };
  expect(windowModule.sharedStorage()).toEqual({ shared: true });
});

test("showDirectoryPicker calls global showDirectoryPicker", () => {
  (globalThis).showDirectoryPicker = () => "dir";
  expect(windowModule.showDirectoryPicker()).toBe("dir");
});
test("showDirectoryPickerFrom calls showDirectoryPicker on passed window", () => {
  const win = { showDirectoryPicker: () => "wdir" };
  expect(windowModule.showDirectoryPickerFrom(win)).toBe("wdir");
});

test("showOpenFilePicker calls global showOpenFilePicker", () => {
  (globalThis).showOpenFilePicker = () => [1];
  expect(windowModule.showOpenFilePicker()).toEqual([1]);
});
test("showOpenFilePickerFrom calls showOpenFilePicker on passed window", () => {
  const win = { showOpenFilePicker: () => [2] };
  expect(windowModule.showOpenFilePickerFrom(win)).toEqual([2]);
});

test("showSaveFilePicker calls global showSaveFilePicker", () => {
  (globalThis).showSaveFilePicker = () => ({ save: true });
  expect(windowModule.showSaveFilePicker()).toEqual({ save: true });
});
test("showSaveFilePickerFrom calls showSaveFilePicker on passed window", () => {
  const win = { showSaveFilePicker: () => ({ wsave: true }) };
  expect(windowModule.showSaveFilePickerFrom(win)).toEqual({ wsave: true });
});

test("sizeToContent calls global sizeToContent", () => {
  (globalThis).sizeToContent = () => "sz";
  expect(windowModule.sizeToContent()).toBe("sz");
});
test("sizeToContentFrom calls sizeToContent on passed window", () => {
  const win = { sizeToContent: () => "wsz" };
  expect(windowModule.sizeToContentFrom(win)).toBe("wsz");
});

test("speechSynthesis returns global speechSynthesis", () => {
  (globalThis).speechSynthesis = { speak: true };
  expect(windowModule.speechSynthesis()).toEqual({ speak: true });
});

test("statusbar returns global statusbar", () => {
  (globalThis).statusbar = { visible: false };
  expect(windowModule.statusbar()).toEqual({ visible: false });
});

test("stop calls global stop", () => {
  (globalThis).stop = () => "STOP";
  expect(windowModule.stop()).toBe("STOP");
});
test("stopFrom calls stop on passed window", () => {
  const win = { stop: () => "WSTOP" };
  expect(windowModule.stopFrom(win)).toBe("WSTOP");
});

test("structuredClone calls global structuredClone", () => {
  (globalThis).structuredClone = (o) => ({ c: o });
  expect(windowModule.structuredClone(5)).toEqual({ c: 5 });
});
test("structuredCloneFrom calls structuredClone on passed window", () => {
  const win = { structuredClone: (o) => o };
  expect(windowModule.structuredCloneFrom(win, "x")).toBe("x");
});

test("toolbar returns global toolbar", () => {
  (globalThis).toolbar = { tools: 1 };
  expect(windowModule.toolbar()).toEqual({ tools: 1 });
});

test("top returns global top", () => {
  (globalThis).top = { top: true };
  expect(windowModule.top()).toEqual({ top: true });
});

test("trustedTypes returns global trustedTypes", () => {
  (globalThis).trustedTypes = { trust: true };
  expect(windowModule.trustedTypes()).toEqual({ trust: true });
});

test("visualViewport returns global visualViewport", () => {
  (globalThis).visualViewport = { height: 100 };
  expect(windowModule.visualViewport()).toEqual({ height: 100 });
});

test("window returns global window", () => {
  (globalThis).window = { w: 1 };
  expect(windowModule.window()).toEqual({ w: 1 });
});

// New tests for instance-specific functions
const windowInstance = {};
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
      expect((windowModule)[fnName](windowInstance)).toEqual(
        windowInstance[propName]
      );
    });
  });
