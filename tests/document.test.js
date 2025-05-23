import * as documentModule from "../src/document.ffi.mjs";
import { expect, test } from "bun:test";

test("Document returns global Document", () => {
  function MyDoc() {}
  (globalThis).Document = MyDoc;
  expect(documentModule.Document()).toBe(MyDoc);
});

test("activeElement returns document.activeElement", () => {
  (globalThis).document = { activeElement: "el" };
  expect(documentModule.activeElement()).toBe("el");
});

test("adoptedStyleSheets returns document.adoptedStyleSheets", () => {
  (globalThis).document = { adoptedStyleSheets: [1,2,3] };
  expect(documentModule.adoptedStyleSheets()).toEqual([1,2,3]);
});

test("adoptNode calls document.adoptNode", () => {
  (globalThis).document = { adoptNode: (n) => ({ node: n }) };
  expect(documentModule.adoptNode("n")).toEqual({ node: "n" });
});
test("adoptNodeFrom calls adoptNode on passed document", () => {
  const doc = { adoptNode: (x) => `ad:${x}` };
  expect(documentModule.adoptNodeFrom(doc, 1)).toBe("ad:1");
});

test("append calls document.append", () => {
  (globalThis).document = { append: (...a) => a.join("-") };
  expect(documentModule.append("a", "b")).toBe("a-b");
});
test("appendFrom calls append on passed document", () => {
  const doc = { append: (...a) => a.length };
  expect(documentModule.appendFrom(doc, 1, 2)).toBe(2);
});

test("body returns document.body", () => {
  (globalThis).document = { body: "b" };
  expect(documentModule.body()).toBe("b");
});

test("browsingTopics calls document.browsingTopics", () => {
  (globalThis).document = { browsingTopics: () => [1] };
  expect(documentModule.browsingTopics()).toEqual([1]);
});
test("browsingTopicsFrom calls browsingTopics on passed document", () => {
  const doc = { browsingTopics: () => [2] };
  expect(documentModule.browsingTopicsFrom(doc)).toEqual([2]);
});

test("caretPositionFromPoint calls document.caretPositionFromPoint", () => {
  (globalThis).document = {
    caretPositionFromPoint: (x, y) => x + y,
  };
  expect(documentModule.caretPositionFromPoint(1, 2)).toBe(3);
});
test("caretPositionFromPointFrom calls caretPositionFromPoint on passed document", () => {
  const doc = { caretPositionFromPoint: (x, y) => x * y };
  expect(documentModule.caretPositionFromPointFrom(doc, 2, 3)).toBe(6);
});

test("caretRangeFromPoint calls document.caretRangeFromPoint", () => {
  (globalThis).document = {
    caretRangeFromPoint: (x, y) => `${x},${y}`,
  };
  expect(documentModule.caretRangeFromPoint(1, 1)).toBe("1,1");
});
test("caretRangeFromPointFrom calls caretRangeFromPoint on passed document", () => {
  const doc = { caretRangeFromPoint: () => "r" };
  expect(documentModule.caretRangeFromPointFrom(doc, 0, 0)).toBe("r");
});

test("characterSet returns document.characterSet", () => {
  (globalThis).document = { characterSet: "UTF-8" };
  expect(documentModule.characterSet()).toBe("UTF-8");
});

test("childElementCount returns document.childElementCount", () => {
  (globalThis).document = { childElementCount: 5 };
  expect(documentModule.childElementCount()).toBe(5);
});

test("children returns document.children", () => {
  (globalThis).document = { children: ["a", "b"] };
  expect(documentModule.children()).toEqual(["a", "b"]);
});

test("clear calls document.clear", () => {
  (globalThis).document = { clear: () => 1 };
  expect(documentModule.clear()).toBe(1);
});
test("clearFrom calls clear on passed document", () => {
  const doc = { clear: () => 2 };
  expect(documentModule.clearFrom(doc)).toBe(2);
});

test("close calls document.close", () => {
  (globalThis).document = { close: () => "c" };
  expect(documentModule.close()).toBe("c");
});
test("closeFrom calls close on passed document", () => {
  const doc = { close: () => "dc" };
  expect(documentModule.closeFrom(doc)).toBe("dc");
});

test("compatMode returns document.compatMode", () => {
  (globalThis).document = { compatMode: "CSS1Compat" };
  expect(documentModule.compatMode()).toBe("CSS1Compat");
});

test("contentType returns document.contentType", () => {
  (globalThis).document = { contentType: "text/html" };
  expect(documentModule.contentType()).toBe("text/html");
});

test("cookie returns document.cookie", () => {
  (globalThis).document = { cookie: "a=b" };
  expect(documentModule.cookie()).toBe("a=b");
});

test("createAttribute calls document.createAttribute", () => {
  (globalThis).document = { createAttribute: (n) => ({ n }) };
  expect(documentModule.createAttribute("id")).toEqual({ n: "id" });
});
test("createAttributeFrom calls createAttribute on passed document", () => {
  const doc = { createAttribute: (n) => n.toUpperCase() };
  expect(documentModule.createAttributeFrom(doc, "x")).toBe("X");
});

test("createAttributeNS calls document.createAttributeNS", () => {
  (globalThis).document = { createAttributeNS: (ns, n) => ns+n };
  expect(documentModule.createAttributeNS("ns", "n")).toBe("nsn");
});
test("createAttributeNSFrom calls createAttributeNS on passed document", () => {
  const doc = { createAttributeNS: (ns, n) => `${ns}:${n}` };
  expect(documentModule.createAttributeNSFrom(doc, "a", "b")).toBe("a:b");
});

test("createCDATASection calls document.createCDATASection", () => {
  (globalThis).document = { createCDATASection: (t) => `<${t}>` };
  expect(documentModule.createCDATASection("c")).toBe("<c>");
});
test("createCDATASectionFrom calls createCDATASection on passed document", () => {
  const doc = { createCDATASection: (t) => t };
  expect(documentModule.createCDATASectionFrom(doc, "t")).toBe("t");
});

test("createComment calls document.createComment", () => {
  (globalThis).document = { createComment: (t) => `c:${t}` };
  expect(documentModule.createComment("m")).toBe("c:m");
});
test("createCommentFrom calls createComment on passed document", () => {
  const doc = { createComment: () => "d" };
  expect(documentModule.createCommentFrom(doc, "d")).toBe("d");
});

test("createDocumentFragment calls document.createDocumentFragment", () => {
  (globalThis).document = { createDocumentFragment: () => "frag" };
  expect(documentModule.createDocumentFragment()).toBe("frag");
});
test("createDocumentFragmentFrom calls createDocumentFragment on passed document", () => {
  const doc = { createDocumentFragment: () => "df" };
  expect(documentModule.createDocumentFragmentFrom(doc)).toBe("df");
});

test("createElement calls document.createElement", () => {
  (globalThis).document = { createElement: (t) => ({ t }) };
  expect(documentModule.createElement("div")).toEqual({ t: "div" });
});
test("createElementFrom calls createElement on passed document", () => {
  const doc = { createElement: (t) => t + t };
  expect(documentModule.createElementFrom(doc, "d")).toBe("dd");
});

test("createElementNS calls document.createElementNS", () => {
  (globalThis).document = { createElementNS: (ns, q) => ns+q };
  expect(documentModule.createElementNS("s", "q")).toBe("sq");
});
test("createElementNSFrom calls createElementNS on passed document", () => {
  const doc = { createElementNS: (ns, q) => `${ns}/${q}` };
  expect(documentModule.createElementNSFrom(doc, "n", "q")).toBe("n/q");
});

test("createEvent calls document.createEvent", () => {
  (globalThis).document = { createEvent: (t) => ({ e: t }) };
  expect(documentModule.createEvent("evt")).toEqual({ e: "evt" });
});
test("createEventFrom calls createEvent on passed document", () => {
  const doc = { createEvent: (t) => t };
  expect(documentModule.createEventFrom(doc, "evt")).toBe("evt");
});

test("createExpression calls document.createExpression", () => {
  (globalThis).document = { createExpression: (x) => x + "e" };
  expect(documentModule.createExpression("x")).toBe("xe");
});
test("createExpressionFrom calls createExpression on passed document", () => {
  const doc = { createExpression: (v) => v };
  expect(documentModule.createExpressionFrom(doc, 1)).toBe(1);
});

test("createNodeIterator calls document.createNodeIterator", () => {
  (globalThis).document = { createNodeIterator: (n) => ({ n }) };
  expect(documentModule.createNodeIterator("n")).toEqual({ n: "n" });
});
test("createNodeIteratorFrom calls createNodeIterator on passed document", () => {
  const doc = { createNodeIterator: (n) => n + "F" };
  expect(documentModule.createNodeIteratorFrom(doc, "x")).toBe("xF");
});

test("createNSResolver calls document.createNSResolver", () => {
  (globalThis).document = { createNSResolver: (n) => n };
  expect(documentModule.createNSResolver("n")).toBe("n");
});
test("createNSResolverFrom calls createNSResolver on passed document", () => {
  const doc = { createNSResolver: (n) => `${n}-d` };
  expect(documentModule.createNSResolverFrom(doc, "m")).toBe("m-d");
});

test("createProcessingInstruction calls document.createProcessingInstruction", () => {
  (globalThis).document = { createProcessingInstruction: (t, d) => `${t}:${d}` };
  expect(documentModule.createProcessingInstruction("t","d")).toBe("t:d");
});
test("createProcessingInstructionFrom calls createProcessingInstruction on passed document", () => {
  const doc = { createProcessingInstruction: () => "pi" };
  expect(documentModule.createProcessingInstructionFrom(doc, "a","b")).toBe("pi");
});

test("createRange calls document.createRange", () => {
  (globalThis).document = { createRange: () => "R" };
  expect(documentModule.createRange()).toBe("R");
});
test("createRangeFrom calls createRange on passed document", () => {
  const doc = { createRange: () => "DR" };
  expect(documentModule.createRangeFrom(doc)).toBe("DR");
});

test("createTextNode calls document.createTextNode", () => {
  (globalThis).document = { createTextNode: (t) => t + t };
  expect(documentModule.createTextNode("a")).toBe("aa");
});
test("createTextNodeFrom calls createTextNode on passed document", () => {
  const doc = { createTextNode: (t) => t.toUpperCase() };
  expect(documentModule.createTextNodeFrom(doc, "b")).toBe("B");
});

test("createTouch calls document.createTouch", () => {
  (globalThis).document = { createTouch: (v) => ({ v }) };
  expect(documentModule.createTouch(1)).toEqual({ v: 1 });
});
test("createTouchFrom calls createTouch on passed document", () => {
  const doc = { createTouch: (v) => ({ dv: v }) };
  expect(documentModule.createTouchFrom(doc, 2)).toEqual({ dv: 2 });
});

test("createTouchList calls document.createTouchList", () => {
  (globalThis).document = { createTouchList: (...a) => a.length };
  expect(documentModule.createTouchList(1,2)).toBe(2);
});
test("createTouchListFrom calls createTouchList on passed document", () => {
  const doc = { createTouchList: () => 5 };
  expect(documentModule.createTouchListFrom(doc)).toBe(5);
});

test("createTreeWalker calls document.createTreeWalker", () => {
  (globalThis).document = { createTreeWalker: (n) => ({ node: n }) };
  expect(documentModule.createTreeWalker("n")).toEqual({ node: "n" });
});
test("createTreeWalkerFrom calls createTreeWalker on passed document", () => {
  const doc = { createTreeWalker: () => "tw" };
  expect(documentModule.createTreeWalkerFrom(doc, 0)).toBe("tw");
});

test("currentScript returns document.currentScript", () => {
  (globalThis).document = { currentScript: "script.js" };
  expect(documentModule.currentScript()).toBe("script.js");
});

test("defaultView returns document.defaultView", () => {
  (globalThis).document = { defaultView: { win: true } };
  expect(documentModule.defaultView()).toEqual({ win: true });
});

test("designMode returns document.designMode", () => {
  (globalThis).document = { designMode: "on" };
  expect(documentModule.designMode()).toBe("on");
});

test("dir returns document.dir", () => {
  (globalThis).document = { dir: "ltr" };
  expect(documentModule.dir()).toBe("ltr");
});

test("doctype returns document.doctype", () => {
  (globalThis).document = { doctype: "doctype" };
  expect(documentModule.doctype()).toBe("doctype");
});

test("documentElement returns document.documentElement", () => {
  (globalThis).document = { documentElement: { node: true } };
  expect(documentModule.documentElement()).toEqual({ node: true });
});

test("documentURI returns document.documentURI", () => {
  (globalThis).document = { documentURI: "http://example" };
  expect(documentModule.documentURI()).toBe("http://example");
});

test("elementFromPoint calls document.elementFromPoint", () => {
  (globalThis).document = { elementFromPoint: (x, y) => `${x}-${y}` };
  expect(documentModule.elementFromPoint(1,2)).toBe("1-2");
});
test("elementFromPointFrom calls elementFromPoint on passed document", () => {
  const doc = { elementFromPoint: () => "el" };
  expect(documentModule.elementFromPointFrom(doc, 0,0)).toBe("el");
});

test("elementsFromPoint calls document.elementsFromPoint", () => {
  (globalThis).document = { elementsFromPoint: () => ["a"] };
  expect(documentModule.elementsFromPoint()).toEqual(["a"]);
});
test("elementsFromPointFrom calls elementsFromPoint on passed document", () => {
  const doc = { elementsFromPoint: () => ["b"] };
  expect(documentModule.elementsFromPointFrom(doc)).toEqual(["b"]);
});

test("embeds returns document.embeds", () => {
  (globalThis).document = { embeds: [1, 2] };
  expect(documentModule.embeds()).toEqual([1, 2]);
});

test("enableStyleSheetsForSet calls document.enableStyleSheetsForSet", () => {
  (globalThis).document = { enableStyleSheetsForSet: (s) => s };
  expect(documentModule.enableStyleSheetsForSet("set")).toBe("set");
});
test("enableStyleSheetsForSetFrom calls enableStyleSheetsForSet on passed document", () => {
  const doc = { enableStyleSheetsForSet: (s) => `d:${s}` };
  expect(documentModule.enableStyleSheetsForSetFrom(doc, "s")).toBe("d:s");
});

test("evaluate calls document.evaluate", () => {
  (globalThis).document = { evaluate: (x) => x * 2 };
  expect(documentModule.evaluate(2)).toBe(4);
});
test("evaluateFrom calls evaluate on passed document", () => {
  const doc = { evaluate: (x) => x + 1 };
  expect(documentModule.evaluateFrom(doc, 3)).toBe(4);
});

test("execCommand calls document.execCommand", () => {
  (globalThis).document = { execCommand: (c) => c + "!" };
  expect(documentModule.execCommand("a")).toBe("a!");
});
test("execCommandFrom calls execCommand on passed document", () => {
  const doc = { execCommand: (c) => c };
  expect(documentModule.execCommandFrom(doc, "b")).toBe("b");
});

test("exitFullscreen calls document.exitFullscreen", () => {
  (globalThis).document = { exitFullscreen: () => "ef" };
  expect(documentModule.exitFullscreen()).toBe("ef");
});
test("exitFullscreenFrom calls exitFullscreen on passed document", () => {
  const doc = { exitFullscreen: () => "wf" };
  expect(documentModule.exitFullscreenFrom(doc)).toBe("wf");
});

test("exitPictureInPicture calls document.exitPictureInPicture", () => {
  (globalThis).document = { exitPictureInPicture: () => 1 };
  expect(documentModule.exitPictureInPicture()).toBe(1);
});
test("exitPictureInPictureFrom calls exitPictureInPicture on passed document", () => {
  const doc = { exitPictureInPicture: () => 2 };
  expect(documentModule.exitPictureInPictureFrom(doc)).toBe(2);
});

test("exitPointerLock calls document.exitPointerLock", () => {
  (globalThis).document = { exitPointerLock: () => "pl" };
  expect(documentModule.exitPointerLock()).toBe("pl");
});
test("exitPointerLockFrom calls exitPointerLock on passed document", () => {
  const doc = { exitPointerLock: () => "dpl" };
  expect(documentModule.exitPointerLockFrom(doc)).toBe("dpl");
});

test("featurePolicy returns document.featurePolicy", () => {
  (globalThis).document = { featurePolicy: { features: true } };
  expect(documentModule.featurePolicy()).toEqual({ features: true });
});

test("firstElementChild returns document.firstElementChild", () => {
  (globalThis).document = { firstElementChild: { child: 1 } };
  expect(documentModule.firstElementChild()).toEqual({ child: 1 });
});

test("fonts returns document.fonts", () => {
  (globalThis).document = { fonts: ["Arial"] };
  expect(documentModule.fonts()).toEqual(["Arial"]);
});

test("forms returns document.forms", () => {
  (globalThis).document = { forms: [1, 2] };
  expect(documentModule.forms()).toEqual([1, 2]);
});

test("fragmentDirective returns document.fragmentDirective", () => {
  (globalThis).document = { fragmentDirective: { text: "d" } };
  expect(documentModule.fragmentDirective()).toEqual({ text: "d" });
});

test("fullscreenElement returns document.fullscreenElement", () => {
  (globalThis).document = { fullscreenElement: { el: true } };
  expect(documentModule.fullscreenElement()).toEqual({ el: true });
});

test("fullscreenEnabled returns document.fullscreenEnabled", () => {
  (globalThis).document = { fullscreenEnabled: true };
  expect(documentModule.fullscreenEnabled()).toBe(true);
});

test("getAnimations calls document.getAnimations", () => {
  (globalThis).document = { getAnimations: () => [1] };
  expect(documentModule.getAnimations()).toEqual([1]);
});
test("getAnimationsFrom calls getAnimations on passed document", () => {
  const doc = { getAnimations: () => [2] };
  expect(documentModule.getAnimationsFrom(doc)).toEqual([2]);
});

test("getElementById calls document.getElementById", () => {
  (globalThis).document = { getElementById: (id) => id };
  expect(documentModule.getElementById("a")).toBe("a");
});
test("getElementByIdFrom calls getElementById on passed document", () => {
  const doc = { getElementById: (id) => id + "d" };
  expect(documentModule.getElementByIdFrom(doc, "b")).toBe("bd");
});

test("getElementsByClassName calls document.getElementsByClassName", () => {
  (globalThis).document = { getElementsByClassName: (n) => [n] };
  expect(documentModule.getElementsByClassName("c")).toEqual(["c"]);
});
test("getElementsByClassNameFrom calls getElementsByClassName on passed document", () => {
  const doc = { getElementsByClassName: (n) => n.length };
  expect(documentModule.getElementsByClassNameFrom(doc, "xx")).toBe(2);
});

test("getElementsByName calls document.getElementsByName", () => {
  (globalThis).document = { getElementsByName: (n) => [n] };
  expect(documentModule.getElementsByName("n")).toEqual(["n"]);
});
test("getElementsByNameFrom calls getElementsByName on passed document", () => {
  const doc = { getElementsByName: (n) => n + "w" };
  expect(documentModule.getElementsByNameFrom(doc, "g")).toBe("gw");
});

test("getElementsByTagName calls document.getElementsByTagName", () => {
  (globalThis).document = { getElementsByTagName: (t) => [t, t] };
  expect(documentModule.getElementsByTagName("t")).toEqual(["t", "t"]);
});
test("getElementsByTagNameFrom calls getElementsByTagName on passed document", () => {
  const doc = { getElementsByTagName: () => [1] };
  expect(documentModule.getElementsByTagNameFrom(doc, "a")).toEqual([1]);
});

test("getElementsByTagNameNS calls document.getElementsByTagNameNS", () => {
  (globalThis).document = { getElementsByTagNameNS: () => ["n"] };
  expect(documentModule.getElementsByTagNameNS()).toEqual(["n"]);
});
test("getElementsByTagNameNSFrom calls getElementsByTagNameNS on passed document", () => {
  const doc = { getElementsByTagNameNS: () => ["w"] };
  expect(documentModule.getElementsByTagNameNSFrom(doc, "n")).toEqual(["w"]);
});

test("getSelection calls document.getSelection", () => {
  (globalThis).document = { getSelection: () => "sel" };
  expect(documentModule.getSelection()).toBe("sel");
});
test("getSelectionFrom calls getSelection on passed document", () => {
  const doc = { getSelection: () => "dsel" };
  expect(documentModule.getSelectionFrom(doc)).toBe("dsel");
});

test("hasFocus calls document.hasFocus", () => {
  (globalThis).document = { hasFocus: () => true };
  expect(documentModule.hasFocus()).toBe(true);
});
test("hasFocusFrom calls hasFocus on passed document", () => {
  const doc = { hasFocus: () => false };
  expect(documentModule.hasFocusFrom(doc)).toBe(false);
});

test("hasStorageAccess calls document.hasStorageAccess", () => {
  (globalThis).document = { hasStorageAccess: () => Promise.resolve(1) };
  expect(documentModule.hasStorageAccess()).resolves.toBe(1);
});
test("hasStorageAccessFrom calls hasStorageAccess on passed document", () => {
  const doc = { hasStorageAccess: () => Promise.resolve(2) };
  expect(documentModule.hasStorageAccessFrom(doc)).resolves.toBe(2);
});

test("hasUnpartitionedCookieAccess calls document.hasUnpartitionedCookieAccess", () => {
  (globalThis).document = { hasUnpartitionedCookieAccess: () => 3 };
  expect(documentModule.hasUnpartitionedCookieAccess()).toBe(3);
});
test("hasUnpartitionedCookieAccessFrom calls hasUnpartitionedCookieAccess on passed document", () => {
  const doc = { hasUnpartitionedCookieAccess: () => 4 };
  expect(documentModule.hasUnpartitionedCookieAccessFrom(doc)).toBe(4);
});

test("head returns document.head", () => {
  (globalThis).document = { head: { head: true } };
  expect(documentModule.head()).toEqual({ head: true });
});

test("hidden returns document.hidden", () => {
  (globalThis).document = { hidden: false };
  expect(documentModule.hidden()).toBe(false);
});

test("images returns document.images", () => {
  (globalThis).document = { images: [1, 2] };
  expect(documentModule.images()).toEqual([1, 2]);
});

test("implementation returns document.implementation", () => {
  (globalThis).document = { implementation: { impl: true } };
  expect(documentModule.implementation()).toEqual({ impl: true });
});

test("importNode calls document.importNode", () => {
  (globalThis).document = { importNode: (n) => ({ node: n }) };
  expect(documentModule.importNode("n")).toEqual({ node: "n" });
});
test("importNodeFrom calls importNode on passed document", () => {
  const doc = { importNode: (n) => n };
  expect(documentModule.importNodeFrom(doc, 1)).toBe(1);
});

test("lastElementChild returns document.lastElementChild", () => {
  (globalThis).document = { lastElementChild: { last: 1 } };
  expect(documentModule.lastElementChild()).toEqual({ last: 1 });
});

test("lastModified returns document.lastModified", () => {
  (globalThis).document = { lastModified: "today" };
  expect(documentModule.lastModified()).toBe("today");
});

test("links returns document.links", () => {
  (globalThis).document = { links: ["a"] };
  expect(documentModule.links()).toEqual(["a"]);
});

test("location returns document.location", () => {
  (globalThis).document = { location: { href: "http://example" } };
  expect(documentModule.location()).toEqual({ href: "http://example" });
});

test("moveBefore calls document.moveBefore", () => {
  (globalThis).document = { moveBefore: (a, b) => `${a},${b}` };
  expect(documentModule.moveBefore(1, 2)).toBe("1,2");
});
test("moveBeforeFrom calls moveBefore on passed document", () => {
  const doc = { moveBefore: () => "mb" };
  expect(documentModule.moveBeforeFrom(doc, 1, 2)).toBe("mb");
});

test("mozSetImageElement calls document.mozSetImageElement", () => {
  (globalThis).document = { mozSetImageElement: (n, v) => n + v };
  expect(documentModule.mozSetImageElement("n", 1)).toBe("n1");
});
test("mozSetImageElementFrom calls mozSetImageElement on passed document", () => {
  const doc = { mozSetImageElement: () => "d" };
  expect(documentModule.mozSetImageElementFrom(doc, "n", 0)).toBe("d");
});

test("open calls document.open", () => {
  (globalThis).document = { open: (u) => `O:${u}` };
  expect(documentModule.open("u")).toBe("O:u");
});
test("openFrom calls open on passed document", () => {
  const doc = { open: (u) => `D:${u}` };
  expect(documentModule.openFrom(doc, "z")).toBe("D:z");
});

test("pictureInPictureElement returns document.pictureInPictureElement", () => {
  (globalThis).document = { pictureInPictureElement: { pip: true } };
  expect(documentModule.pictureInPictureElement()).toEqual({ pip: true });
});

test("pictureInPictureEnabled returns document.pictureInPictureEnabled", () => {
  (globalThis).document = { pictureInPictureEnabled: true };
  expect(documentModule.pictureInPictureEnabled()).toBe(true);
});

test("plugins returns document.plugins", () => {
  (globalThis).document = { plugins: [1] };
  expect(documentModule.plugins()).toEqual([1]);
});

test("pointerLockElement returns document.pointerLockElement", () => {
  (globalThis).document = { pointerLockElement: { el: 1 } };
  expect(documentModule.pointerLockElement()).toEqual({ el: 1 });
});

test("prepend calls document.prepend", () => {
  (globalThis).document = { prepend: (...a) => a.length };
  expect(documentModule.prepend(1, 2)).toBe(2);
});
test("prependFrom calls prepend on passed document", () => {
  const doc = { prepend: (...a) => a.join("-") };
  expect(documentModule.prependFrom(doc, "a", "b")).toBe("a-b");
});

test("prerendering returns document.prerendering", () => {
  (globalThis).document = { prerendering: false };
  expect(documentModule.prerendering()).toBe(false);
});

test("queryCommandEnabled calls document.queryCommandEnabled", () => {
  (globalThis).document = { queryCommandEnabled: (c) => c };
  expect(documentModule.queryCommandEnabled("cmd")).toBe("cmd");
});
test("queryCommandEnabledFrom calls queryCommandEnabled on passed document", () => {
  const doc = { queryCommandEnabled: (c) => `${c}!` };
  expect(documentModule.queryCommandEnabledFrom(doc, "x")).toBe("x!");
});

test("queryCommandState calls document.queryCommandState", () => {
  (globalThis).document = { queryCommandState: () => true };
  expect(documentModule.queryCommandState()).toBe(true);
});
test("queryCommandStateFrom calls queryCommandState on passed document", () => {
  const doc = { queryCommandState: () => false };
  expect(documentModule.queryCommandStateFrom(doc)).toBe(false);
});

test("queryCommandSupported calls document.queryCommandSupported", () => {
  (globalThis).document = { queryCommandSupported: (c) => c.length };
  expect(documentModule.queryCommandSupported("abc")).toBe(3);
});
test("queryCommandSupportedFrom calls queryCommandSupported on passed document", () => {
  const doc = { queryCommandSupported: () => 5 };
  expect(documentModule.queryCommandSupportedFrom(doc, "x")).toBe(5);
});

test("querySelector calls document.querySelector", () => {
  (globalThis).document = { querySelector: (s) => s };
  expect(documentModule.querySelector("sel")).toBe("sel");
});
test("querySelectorFrom calls querySelector on passed document", () => {
  const doc = { querySelector: (s) => `d${s}` };
  expect(documentModule.querySelectorFrom(doc, "s")).toBe("ds");
});

test("querySelectorAll calls document.querySelectorAll", () => {
  (globalThis).document = { querySelectorAll: (s) => [s] };
  expect(documentModule.querySelectorAll("q")).toEqual(["q"]);
});
test("querySelectorAllFrom calls querySelectorAll on passed document", () => {
  const doc = { querySelectorAll: () => [1] };
  expect(documentModule.querySelectorAllFrom(doc, "r")).toEqual([1]);
});

test("readyState returns document.readyState", () => {
  (globalThis).document = { readyState: "complete" };
  expect(documentModule.readyState()).toBe("complete");
});

test("referrer returns document.referrer", () => {
  (globalThis).document = { referrer: "http://ref" };
  expect(documentModule.referrer()).toBe("http://ref");
});

test("releaseCapture calls document.releaseCapture", () => {
  (globalThis).document = { releaseCapture: () => "rc" };
  expect(documentModule.releaseCapture()).toBe("rc");
});
test("releaseCaptureFrom calls releaseCapture on passed document", () => {
  const doc = { releaseCapture: () => "drc" };
  expect(documentModule.releaseCaptureFrom(doc)).toBe("drc");
});

test("replaceChildren calls document.replaceChildren", () => {
  (globalThis).document = { replaceChildren: (...a) => a.join(":" ) };
  expect(documentModule.replaceChildren("a", "b")).toBe("a:b");
});
test("replaceChildrenFrom calls replaceChildren on passed document", () => {
  const doc = { replaceChildren: (...a) => a.length };
  expect(documentModule.replaceChildrenFrom(doc, 1, 2, 3)).toBe(3);
});

test("requestStorageAccess calls document.requestStorageAccess", () => {
  (globalThis).document = { requestStorageAccess: () => Promise.resolve(9) };
  expect(documentModule.requestStorageAccess()).resolves.toBe(9);
});
test("requestStorageAccessFrom calls requestStorageAccess on passed document", () => {
  const doc = { requestStorageAccess: () => Promise.resolve(8) };
  expect(documentModule.requestStorageAccessFrom(doc)).resolves.toBe(8);
});

test("requestStorageAccessFor calls document.requestStorageAccessFor", () => {
  (globalThis).document = { requestStorageAccessFor: (o) => o };
  expect(documentModule.requestStorageAccessFor("org")).toBe("org");
});
test("requestStorageAccessForFrom calls requestStorageAccessFor on passed document", () => {
  const doc = { requestStorageAccessFor: () => "d" };
  expect(documentModule.requestStorageAccessForFrom(doc, "o")).toBe("d");
});

test("scripts returns document.scripts", () => {
  (globalThis).document = { scripts: ["s"] };
  expect(documentModule.scripts()).toEqual(["s"]);
});

test("scrollingElement returns document.scrollingElement", () => {
  (globalThis).document = { scrollingElement: { se: 1 } };
  expect(documentModule.scrollingElement()).toEqual({ se: 1 });
});

test("startViewTransition calls document.startViewTransition", () => {
  (globalThis).document = { startViewTransition: () => 5 };
  expect(documentModule.startViewTransition()).toBe(5);
});
test("startViewTransitionFrom calls startViewTransition on passed document", () => {
  const doc = { startViewTransition: () => 6 };
  expect(documentModule.startViewTransitionFrom(doc)).toBe(6);
});

test("styleSheets returns document.styleSheets", () => {
  (globalThis).document = { styleSheets: ["ss"] };
  expect(documentModule.styleSheets()).toEqual(["ss"]);
});

test("timeline returns document.timeline", () => {
  (globalThis).document = { timeline: { t: 1 } };
  expect(documentModule.timeline()).toEqual({ t: 1 });
});

test("title returns document.title", () => {
  (globalThis).document = { title: "My Page" };
  expect(documentModule.title()).toBe("My Page");
});

test("URL returns document.URL", () => {
  (globalThis).document = { URL: "http://url" };
  expect(documentModule.URL()).toBe("http://url");
});

test("visibilityState returns document.visibilityState", () => {
  (globalThis).document = { visibilityState: "visible" };
  expect(documentModule.visibilityState()).toBe("visible");
});

test("write calls document.write", () => {
  (globalThis).document = { write: (...a) => a.join("-") };
  expect(documentModule.write("a", "b")).toBe("a-b");
});
test("writeFrom calls write on passed document", () => {
  const doc = { write: () => 1 };
  expect(documentModule.writeFrom(doc, "x")).toBe(1);
});

test("writeln calls document.writeln", () => {
  (globalThis).document = { writeln: () => "L" };
  expect(documentModule.writeln()).toBe("L");
});
test("writelnFrom calls writeln on passed document", () => {
  const doc = { writeln: () => "DL" };
  expect(documentModule.writelnFrom(doc)).toBe("DL");
});

// New tests for instance-specific document functions
const documentInstance = {};
const skipDocumentFromFns = [
  "adoptNodeFrom",
  "appendFrom",
  "browsingTopicsFrom",
  "caretPositionFromPointFrom",
  "caretRangeFromPointFrom",
  "clearFrom",
  "closeFrom",
  "createAttributeFrom",
  "createAttributeNSFrom",
  "createCDATASectionFrom",
  "createCommentFrom",
  "createDocumentFragmentFrom",
  "createElementFrom",
  "createElementNSFrom",
  "createEventFrom",
  "createExpressionFrom",
  "createNodeIteratorFrom",
  "createNSResolverFrom",
  "createProcessingInstructionFrom",
  "createRangeFrom",
  "createTextNodeFrom",
  "createTouchFrom",
  "createTouchListFrom",
  "createTreeWalkerFrom",
  "elementFromPointFrom",
  "elementsFromPointFrom",
  "enableStyleSheetsForSetFrom",
  "evaluateFrom",
  "execCommandFrom",
  "exitFullscreenFrom",
  "exitPictureInPictureFrom",
  "exitPointerLockFrom",
  "getAnimationsFrom",
  "getElementByIdFrom",
  "getElementsByClassNameFrom",
  "getElementsByNameFrom",
  "getElementsByTagNameFrom",
  "getElementsByTagNameNSFrom",
  "getSelectionFrom",
  "hasFocusFrom",
  "hasStorageAccessFrom",
  "hasUnpartitionedCookieAccessFrom",
  "importNodeFrom",
  "moveBeforeFrom",
  "mozSetImageElementFrom",
  "openFrom",
  "prependFrom",
  "queryCommandEnabledFrom",
  "queryCommandStateFrom",
  "queryCommandSupportedFrom",
  "querySelectorAllFrom",
  "querySelectorFrom",
  "releaseCaptureFrom",
  "replaceChildrenFrom",
  "requestStorageAccessForFrom",
  "requestStorageAccessFrom",
  "startViewTransitionFrom",
  "writeFrom",
  "writelnFrom",
];
Object.keys(documentModule)
  .filter((k) => k.endsWith("From") && !skipDocumentFromFns.includes(k))
  .forEach((fnName, idx) => {
    const prop = fnName.slice(0, -4);
    documentInstance[prop] = `doc_${idx}`;
    test(`${fnName} returns ${prop} from passed document`, () => {
      expect((documentModule)[fnName](documentInstance)).toEqual(
        documentInstance[prop]
      );
    });
  });
