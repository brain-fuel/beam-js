import * as documentModule from "../../src/document";
import { expect, test } from "bun:test";

test("Document returns global Document", () => {
  function MyDoc() {}
  (globalThis as any).Document = MyDoc;
  expect(documentModule.Document()).toBe(MyDoc);
});

test("activeElement returns document.activeElement", () => {
  (globalThis as any).document = { activeElement: "el" };
  expect(documentModule.activeElement()).toBe("el");
});

test("adoptedStyleSheets returns document.adoptedStyleSheets", () => {
  (globalThis as any).document = { adoptedStyleSheets: [1,2,3] };
  expect(documentModule.adoptedStyleSheets()).toEqual([1,2,3]);
});

test("adoptNode calls document.adoptNode", () => {
  (globalThis as any).document = { adoptNode: (n: any) => ({ node: n }) };
  expect(documentModule.adoptNode("n")).toEqual({ node: "n" });
});
test("adoptNodeFrom calls adoptNode on passed document", () => {
  const doc: any = { adoptNode: (x: any) => `ad:${x}` };
  expect(documentModule.adoptNodeFrom(doc, 1)).toBe("ad:1");
});

test("append calls document.append", () => {
  (globalThis as any).document = { append: (...a: any[]) => a.join("-") };
  expect(documentModule.append("a", "b")).toBe("a-b");
});
test("appendFrom calls append on passed document", () => {
  const doc: any = { append: (...a: any[]) => a.length };
  expect(documentModule.appendFrom(doc, 1, 2)).toBe(2);
});

test("body returns document.body", () => {
  (globalThis as any).document = { body: "b" };
  expect(documentModule.body()).toBe("b");
});

test("browsingTopics calls document.browsingTopics", () => {
  (globalThis as any).document = { browsingTopics: () => [1] };
  expect(documentModule.browsingTopics()).toEqual([1]);
});
test("browsingTopicsFrom calls browsingTopics on passed document", () => {
  const doc: any = { browsingTopics: () => [2] };
  expect(documentModule.browsingTopicsFrom(doc)).toEqual([2]);
});

test("caretPositionFromPoint calls document.caretPositionFromPoint", () => {
  (globalThis as any).document = {
    caretPositionFromPoint: (x: any, y: any) => x + y,
  };
  expect(documentModule.caretPositionFromPoint(1, 2)).toBe(3);
});
test("caretPositionFromPointFrom calls caretPositionFromPoint on passed document", () => {
  const doc: any = { caretPositionFromPoint: (x: any, y: any) => x * y };
  expect(documentModule.caretPositionFromPointFrom(doc, 2, 3)).toBe(6);
});

test("caretRangeFromPoint calls document.caretRangeFromPoint", () => {
  (globalThis as any).document = {
    caretRangeFromPoint: (x: any, y: any) => `${x},${y}`,
  };
  expect(documentModule.caretRangeFromPoint(1, 1)).toBe("1,1");
});
test("caretRangeFromPointFrom calls caretRangeFromPoint on passed document", () => {
  const doc: any = { caretRangeFromPoint: () => "r" };
  expect(documentModule.caretRangeFromPointFrom(doc, 0, 0)).toBe("r");
});

test("characterSet returns document.characterSet", () => {
  (globalThis as any).document = { characterSet: "UTF-8" };
  expect(documentModule.characterSet()).toBe("UTF-8");
});

test("childElementCount returns document.childElementCount", () => {
  (globalThis as any).document = { childElementCount: 5 };
  expect(documentModule.childElementCount()).toBe(5);
});

test("children returns document.children", () => {
  (globalThis as any).document = { children: ["a", "b"] };
  expect(documentModule.children()).toEqual(["a", "b"]);
});

test("clear calls document.clear", () => {
  (globalThis as any).document = { clear: () => 1 };
  expect(documentModule.clear()).toBe(1);
});
test("clearFrom calls clear on passed document", () => {
  const doc: any = { clear: () => 2 };
  expect(documentModule.clearFrom(doc)).toBe(2);
});

test("close calls document.close", () => {
  (globalThis as any).document = { close: () => "c" };
  expect(documentModule.close()).toBe("c");
});
test("closeFrom calls close on passed document", () => {
  const doc: any = { close: () => "dc" };
  expect(documentModule.closeFrom(doc)).toBe("dc");
});

test("compatMode returns document.compatMode", () => {
  (globalThis as any).document = { compatMode: "CSS1Compat" };
  expect(documentModule.compatMode()).toBe("CSS1Compat");
});

test("contentType returns document.contentType", () => {
  (globalThis as any).document = { contentType: "text/html" };
  expect(documentModule.contentType()).toBe("text/html");
});

test("cookie returns document.cookie", () => {
  (globalThis as any).document = { cookie: "a=b" };
  expect(documentModule.cookie()).toBe("a=b");
});

test("createAttribute calls document.createAttribute", () => {
  (globalThis as any).document = { createAttribute: (n: any) => ({ n }) };
  expect(documentModule.createAttribute("id")).toEqual({ n: "id" });
});
test("createAttributeFrom calls createAttribute on passed document", () => {
  const doc: any = { createAttribute: (n: any) => n.toUpperCase() };
  expect(documentModule.createAttributeFrom(doc, "x")).toBe("X");
});

test("createAttributeNS calls document.createAttributeNS", () => {
  (globalThis as any).document = { createAttributeNS: (ns: any, n: any) => ns+n };
  expect(documentModule.createAttributeNS("ns", "n")).toBe("nsn");
});
test("createAttributeNSFrom calls createAttributeNS on passed document", () => {
  const doc: any = { createAttributeNS: (ns: any, n: any) => `${ns}:${n}` };
  expect(documentModule.createAttributeNSFrom(doc, "a", "b")).toBe("a:b");
});

test("createCDATASection calls document.createCDATASection", () => {
  (globalThis as any).document = { createCDATASection: (t: any) => `<${t}>` };
  expect(documentModule.createCDATASection("c")).toBe("<c>");
});
test("createCDATASectionFrom calls createCDATASection on passed document", () => {
  const doc: any = { createCDATASection: (t: any) => t };
  expect(documentModule.createCDATASectionFrom(doc, "t")).toBe("t");
});

test("createComment calls document.createComment", () => {
  (globalThis as any).document = { createComment: (t: any) => `c:${t}` };
  expect(documentModule.createComment("m")).toBe("c:m");
});
test("createCommentFrom calls createComment on passed document", () => {
  const doc: any = { createComment: () => "d" };
  expect(documentModule.createCommentFrom(doc, "d")).toBe("d");
});

test("createDocumentFragment calls document.createDocumentFragment", () => {
  (globalThis as any).document = { createDocumentFragment: () => "frag" };
  expect(documentModule.createDocumentFragment()).toBe("frag");
});
test("createDocumentFragmentFrom calls createDocumentFragment on passed document", () => {
  const doc: any = { createDocumentFragment: () => "df" };
  expect(documentModule.createDocumentFragmentFrom(doc)).toBe("df");
});

test("createElement calls document.createElement", () => {
  (globalThis as any).document = { createElement: (t: any) => ({ t }) };
  expect(documentModule.createElement("div")).toEqual({ t: "div" });
});
test("createElementFrom calls createElement on passed document", () => {
  const doc: any = { createElement: (t: any) => t + t };
  expect(documentModule.createElementFrom(doc, "d")).toBe("dd");
});

test("createElementNS calls document.createElementNS", () => {
  (globalThis as any).document = { createElementNS: (ns: any, q: any) => ns+q };
  expect(documentModule.createElementNS("s", "q")).toBe("sq");
});
test("createElementNSFrom calls createElementNS on passed document", () => {
  const doc: any = { createElementNS: (ns: any, q: any) => `${ns}/${q}` };
  expect(documentModule.createElementNSFrom(doc, "n", "q")).toBe("n/q");
});

test("createEvent calls document.createEvent", () => {
  (globalThis as any).document = { createEvent: (t: any) => ({ e: t }) };
  expect(documentModule.createEvent("evt")).toEqual({ e: "evt" });
});
test("createEventFrom calls createEvent on passed document", () => {
  const doc: any = { createEvent: (t: any) => t };
  expect(documentModule.createEventFrom(doc, "evt")).toBe("evt");
});

test("createExpression calls document.createExpression", () => {
  (globalThis as any).document = { createExpression: (x: any) => x + "e" };
  expect(documentModule.createExpression("x")).toBe("xe");
});
test("createExpressionFrom calls createExpression on passed document", () => {
  const doc: any = { createExpression: (v: any) => v };
  expect(documentModule.createExpressionFrom(doc, 1)).toBe(1);
});

test("createNodeIterator calls document.createNodeIterator", () => {
  (globalThis as any).document = { createNodeIterator: (n: any) => ({ n }) };
  expect(documentModule.createNodeIterator("n")).toEqual({ n: "n" });
});
test("createNodeIteratorFrom calls createNodeIterator on passed document", () => {
  const doc: any = { createNodeIterator: (n: any) => n + "F" };
  expect(documentModule.createNodeIteratorFrom(doc, "x")).toBe("xF");
});

test("createNSResolver calls document.createNSResolver", () => {
  (globalThis as any).document = { createNSResolver: (n: any) => n };
  expect(documentModule.createNSResolver("n")).toBe("n");
});
test("createNSResolverFrom calls createNSResolver on passed document", () => {
  const doc: any = { createNSResolver: (n: any) => `${n}-d` };
  expect(documentModule.createNSResolverFrom(doc, "m")).toBe("m-d");
});

test("createProcessingInstruction calls document.createProcessingInstruction", () => {
  (globalThis as any).document = { createProcessingInstruction: (t: any, d: any) => `${t}:${d}` };
  expect(documentModule.createProcessingInstruction("t","d")).toBe("t:d");
});
test("createProcessingInstructionFrom calls createProcessingInstruction on passed document", () => {
  const doc: any = { createProcessingInstruction: () => "pi" };
  expect(documentModule.createProcessingInstructionFrom(doc, "a","b")).toBe("pi");
});

test("createRange calls document.createRange", () => {
  (globalThis as any).document = { createRange: () => "R" };
  expect(documentModule.createRange()).toBe("R");
});
test("createRangeFrom calls createRange on passed document", () => {
  const doc: any = { createRange: () => "DR" };
  expect(documentModule.createRangeFrom(doc)).toBe("DR");
});

test("createTextNode calls document.createTextNode", () => {
  (globalThis as any).document = { createTextNode: (t: any) => t + t };
  expect(documentModule.createTextNode("a")).toBe("aa");
});
test("createTextNodeFrom calls createTextNode on passed document", () => {
  const doc: any = { createTextNode: (t: any) => t.toUpperCase() };
  expect(documentModule.createTextNodeFrom(doc, "b")).toBe("B");
});

test("createTouch calls document.createTouch", () => {
  (globalThis as any).document = { createTouch: (v: any) => ({ v }) };
  expect(documentModule.createTouch(1)).toEqual({ v: 1 });
});
test("createTouchFrom calls createTouch on passed document", () => {
  const doc: any = { createTouch: (v: any) => ({ dv: v }) };
  expect(documentModule.createTouchFrom(doc, 2)).toEqual({ dv: 2 });
});

test("createTouchList calls document.createTouchList", () => {
  (globalThis as any).document = { createTouchList: (...a: any[]) => a.length };
  expect(documentModule.createTouchList(1,2)).toBe(2);
});
test("createTouchListFrom calls createTouchList on passed document", () => {
  const doc: any = { createTouchList: () => 5 };
  expect(documentModule.createTouchListFrom(doc)).toBe(5);
});

test("createTreeWalker calls document.createTreeWalker", () => {
  (globalThis as any).document = { createTreeWalker: (n: any) => ({ node: n }) };
  expect(documentModule.createTreeWalker("n")).toEqual({ node: "n" });
});
test("createTreeWalkerFrom calls createTreeWalker on passed document", () => {
  const doc: any = { createTreeWalker: () => "tw" };
  expect(documentModule.createTreeWalkerFrom(doc, 0)).toBe("tw");
});

test("currentScript returns document.currentScript", () => {
  (globalThis as any).document = { currentScript: "script.js" };
  expect(documentModule.currentScript()).toBe("script.js");
});

test("defaultView returns document.defaultView", () => {
  (globalThis as any).document = { defaultView: { win: true } };
  expect(documentModule.defaultView()).toEqual({ win: true });
});

test("designMode returns document.designMode", () => {
  (globalThis as any).document = { designMode: "on" };
  expect(documentModule.designMode()).toBe("on");
});

test("dir returns document.dir", () => {
  (globalThis as any).document = { dir: "ltr" };
  expect(documentModule.dir()).toBe("ltr");
});

test("doctype returns document.doctype", () => {
  (globalThis as any).document = { doctype: "doctype" };
  expect(documentModule.doctype()).toBe("doctype");
});

test("documentElement returns document.documentElement", () => {
  (globalThis as any).document = { documentElement: { node: true } };
  expect(documentModule.documentElement()).toEqual({ node: true });
});

test("documentURI returns document.documentURI", () => {
  (globalThis as any).document = { documentURI: "http://example" };
  expect(documentModule.documentURI()).toBe("http://example");
});

test("elementFromPoint calls document.elementFromPoint", () => {
  (globalThis as any).document = { elementFromPoint: (x: any, y: any) => `${x}-${y}` };
  expect(documentModule.elementFromPoint(1,2)).toBe("1-2");
});
test("elementFromPointFrom calls elementFromPoint on passed document", () => {
  const doc: any = { elementFromPoint: () => "el" };
  expect(documentModule.elementFromPointFrom(doc, 0,0)).toBe("el");
});

test("elementsFromPoint calls document.elementsFromPoint", () => {
  (globalThis as any).document = { elementsFromPoint: () => ["a"] };
  expect(documentModule.elementsFromPoint()).toEqual(["a"]);
});
test("elementsFromPointFrom calls elementsFromPoint on passed document", () => {
  const doc: any = { elementsFromPoint: () => ["b"] };
  expect(documentModule.elementsFromPointFrom(doc)).toEqual(["b"]);
});

test("embeds returns document.embeds", () => {
  (globalThis as any).document = { embeds: [1, 2] };
  expect(documentModule.embeds()).toEqual([1, 2]);
});

test("enableStyleSheetsForSet calls document.enableStyleSheetsForSet", () => {
  (globalThis as any).document = { enableStyleSheetsForSet: (s: any) => s };
  expect(documentModule.enableStyleSheetsForSet("set")).toBe("set");
});
test("enableStyleSheetsForSetFrom calls enableStyleSheetsForSet on passed document", () => {
  const doc: any = { enableStyleSheetsForSet: (s: any) => `d:${s}` };
  expect(documentModule.enableStyleSheetsForSetFrom(doc, "s")).toBe("d:s");
});

test("evaluate calls document.evaluate", () => {
  (globalThis as any).document = { evaluate: (x: any) => x * 2 };
  expect(documentModule.evaluate(2)).toBe(4);
});
test("evaluateFrom calls evaluate on passed document", () => {
  const doc: any = { evaluate: (x: any) => x + 1 };
  expect(documentModule.evaluateFrom(doc, 3)).toBe(4);
});

test("execCommand calls document.execCommand", () => {
  (globalThis as any).document = { execCommand: (c: any) => c + "!" };
  expect(documentModule.execCommand("a")).toBe("a!");
});
test("execCommandFrom calls execCommand on passed document", () => {
  const doc: any = { execCommand: (c: any) => c };
  expect(documentModule.execCommandFrom(doc, "b")).toBe("b");
});

test("exitFullscreen calls document.exitFullscreen", () => {
  (globalThis as any).document = { exitFullscreen: () => "ef" };
  expect(documentModule.exitFullscreen()).toBe("ef");
});
test("exitFullscreenFrom calls exitFullscreen on passed document", () => {
  const doc: any = { exitFullscreen: () => "wf" };
  expect(documentModule.exitFullscreenFrom(doc)).toBe("wf");
});

test("exitPictureInPicture calls document.exitPictureInPicture", () => {
  (globalThis as any).document = { exitPictureInPicture: () => 1 };
  expect(documentModule.exitPictureInPicture()).toBe(1);
});
test("exitPictureInPictureFrom calls exitPictureInPicture on passed document", () => {
  const doc: any = { exitPictureInPicture: () => 2 };
  expect(documentModule.exitPictureInPictureFrom(doc)).toBe(2);
});

test("exitPointerLock calls document.exitPointerLock", () => {
  (globalThis as any).document = { exitPointerLock: () => "pl" };
  expect(documentModule.exitPointerLock()).toBe("pl");
});
test("exitPointerLockFrom calls exitPointerLock on passed document", () => {
  const doc: any = { exitPointerLock: () => "dpl" };
  expect(documentModule.exitPointerLockFrom(doc)).toBe("dpl");
});

test("featurePolicy returns document.featurePolicy", () => {
  (globalThis as any).document = { featurePolicy: { features: true } };
  expect(documentModule.featurePolicy()).toEqual({ features: true });
});

test("firstElementChild returns document.firstElementChild", () => {
  (globalThis as any).document = { firstElementChild: { child: 1 } };
  expect(documentModule.firstElementChild()).toEqual({ child: 1 });
});

test("fonts returns document.fonts", () => {
  (globalThis as any).document = { fonts: ["Arial"] };
  expect(documentModule.fonts()).toEqual(["Arial"]);
});

test("forms returns document.forms", () => {
  (globalThis as any).document = { forms: [1, 2] };
  expect(documentModule.forms()).toEqual([1, 2]);
});

test("fragmentDirective returns document.fragmentDirective", () => {
  (globalThis as any).document = { fragmentDirective: { text: "d" } };
  expect(documentModule.fragmentDirective()).toEqual({ text: "d" });
});

test("fullscreenElement returns document.fullscreenElement", () => {
  (globalThis as any).document = { fullscreenElement: { el: true } };
  expect(documentModule.fullscreenElement()).toEqual({ el: true });
});

test("fullscreenEnabled returns document.fullscreenEnabled", () => {
  (globalThis as any).document = { fullscreenEnabled: true };
  expect(documentModule.fullscreenEnabled()).toBe(true);
});

test("getAnimations calls document.getAnimations", () => {
  (globalThis as any).document = { getAnimations: () => [1] };
  expect(documentModule.getAnimations()).toEqual([1]);
});
test("getAnimationsFrom calls getAnimations on passed document", () => {
  const doc: any = { getAnimations: () => [2] };
  expect(documentModule.getAnimationsFrom(doc)).toEqual([2]);
});

test("getElementById calls document.getElementById", () => {
  (globalThis as any).document = { getElementById: (id: any) => id };
  expect(documentModule.getElementById("a")).toBe("a");
});
test("getElementByIdFrom calls getElementById on passed document", () => {
  const doc: any = { getElementById: (id: any) => id + "d" };
  expect(documentModule.getElementByIdFrom(doc, "b")).toBe("bd");
});

test("getElementsByClassName calls document.getElementsByClassName", () => {
  (globalThis as any).document = { getElementsByClassName: (n: any) => [n] };
  expect(documentModule.getElementsByClassName("c")).toEqual(["c"]);
});
test("getElementsByClassNameFrom calls getElementsByClassName on passed document", () => {
  const doc: any = { getElementsByClassName: (n: any) => n.length };
  expect(documentModule.getElementsByClassNameFrom(doc, "xx")).toBe(2);
});

test("getElementsByName calls document.getElementsByName", () => {
  (globalThis as any).document = { getElementsByName: (n: any) => [n] };
  expect(documentModule.getElementsByName("n")).toEqual(["n"]);
});
test("getElementsByNameFrom calls getElementsByName on passed document", () => {
  const doc: any = { getElementsByName: (n: any) => n + "w" };
  expect(documentModule.getElementsByNameFrom(doc, "g")).toBe("gw");
});

test("getElementsByTagName calls document.getElementsByTagName", () => {
  (globalThis as any).document = { getElementsByTagName: (t: any) => [t, t] };
  expect(documentModule.getElementsByTagName("t")).toEqual(["t", "t"]);
});
test("getElementsByTagNameFrom calls getElementsByTagName on passed document", () => {
  const doc: any = { getElementsByTagName: () => [1] };
  expect(documentModule.getElementsByTagNameFrom(doc, "a")).toEqual([1]);
});

test("getElementsByTagNameNS calls document.getElementsByTagNameNS", () => {
  (globalThis as any).document = { getElementsByTagNameNS: () => ["n"] };
  expect(documentModule.getElementsByTagNameNS()).toEqual(["n"]);
});
test("getElementsByTagNameNSFrom calls getElementsByTagNameNS on passed document", () => {
  const doc: any = { getElementsByTagNameNS: () => ["w"] };
  expect(documentModule.getElementsByTagNameNSFrom(doc, "n")).toEqual(["w"]);
});

test("getSelection calls document.getSelection", () => {
  (globalThis as any).document = { getSelection: () => "sel" };
  expect(documentModule.getSelection()).toBe("sel");
});
test("getSelectionFrom calls getSelection on passed document", () => {
  const doc: any = { getSelection: () => "dsel" };
  expect(documentModule.getSelectionFrom(doc)).toBe("dsel");
});

test("hasFocus calls document.hasFocus", () => {
  (globalThis as any).document = { hasFocus: () => true };
  expect(documentModule.hasFocus()).toBe(true);
});
test("hasFocusFrom calls hasFocus on passed document", () => {
  const doc: any = { hasFocus: () => false };
  expect(documentModule.hasFocusFrom(doc)).toBe(false);
});

test("hasStorageAccess calls document.hasStorageAccess", () => {
  (globalThis as any).document = { hasStorageAccess: () => Promise.resolve(1) };
  expect(documentModule.hasStorageAccess()).resolves.toBe(1);
});
test("hasStorageAccessFrom calls hasStorageAccess on passed document", () => {
  const doc: any = { hasStorageAccess: () => Promise.resolve(2) };
  expect(documentModule.hasStorageAccessFrom(doc)).resolves.toBe(2);
});

test("hasUnpartitionedCookieAccess calls document.hasUnpartitionedCookieAccess", () => {
  (globalThis as any).document = { hasUnpartitionedCookieAccess: () => 3 };
  expect(documentModule.hasUnpartitionedCookieAccess()).toBe(3);
});
test("hasUnpartitionedCookieAccessFrom calls hasUnpartitionedCookieAccess on passed document", () => {
  const doc: any = { hasUnpartitionedCookieAccess: () => 4 };
  expect(documentModule.hasUnpartitionedCookieAccessFrom(doc)).toBe(4);
});

test("head returns document.head", () => {
  (globalThis as any).document = { head: { head: true } };
  expect(documentModule.head()).toEqual({ head: true });
});

test("hidden returns document.hidden", () => {
  (globalThis as any).document = { hidden: false };
  expect(documentModule.hidden()).toBe(false);
});

test("images returns document.images", () => {
  (globalThis as any).document = { images: [1, 2] };
  expect(documentModule.images()).toEqual([1, 2]);
});

test("implementation returns document.implementation", () => {
  (globalThis as any).document = { implementation: { impl: true } };
  expect(documentModule.implementation()).toEqual({ impl: true });
});

test("importNode calls document.importNode", () => {
  (globalThis as any).document = { importNode: (n: any) => ({ node: n }) };
  expect(documentModule.importNode("n")).toEqual({ node: "n" });
});
test("importNodeFrom calls importNode on passed document", () => {
  const doc: any = { importNode: (n: any) => n };
  expect(documentModule.importNodeFrom(doc, 1)).toBe(1);
});

test("lastElementChild returns document.lastElementChild", () => {
  (globalThis as any).document = { lastElementChild: { last: 1 } };
  expect(documentModule.lastElementChild()).toEqual({ last: 1 });
});

test("lastModified returns document.lastModified", () => {
  (globalThis as any).document = { lastModified: "today" };
  expect(documentModule.lastModified()).toBe("today");
});

test("links returns document.links", () => {
  (globalThis as any).document = { links: ["a"] };
  expect(documentModule.links()).toEqual(["a"]);
});

test("location returns document.location", () => {
  (globalThis as any).document = { location: { href: "http://example" } };
  expect(documentModule.location()).toEqual({ href: "http://example" });
});

test("moveBefore calls document.moveBefore", () => {
  (globalThis as any).document = { moveBefore: (a: any, b: any) => `${a},${b}` };
  expect(documentModule.moveBefore(1, 2)).toBe("1,2");
});
test("moveBeforeFrom calls moveBefore on passed document", () => {
  const doc: any = { moveBefore: () => "mb" };
  expect(documentModule.moveBeforeFrom(doc, 1, 2)).toBe("mb");
});

test("mozSetImageElement calls document.mozSetImageElement", () => {
  (globalThis as any).document = { mozSetImageElement: (n: any, v: any) => n + v };
  expect(documentModule.mozSetImageElement("n", 1)).toBe("n1");
});
test("mozSetImageElementFrom calls mozSetImageElement on passed document", () => {
  const doc: any = { mozSetImageElement: () => "d" };
  expect(documentModule.mozSetImageElementFrom(doc, "n", 0)).toBe("d");
});

test("open calls document.open", () => {
  (globalThis as any).document = { open: (u: any) => `O:${u}` };
  expect(documentModule.open("u")).toBe("O:u");
});
test("openFrom calls open on passed document", () => {
  const doc: any = { open: (u: any) => `D:${u}` };
  expect(documentModule.openFrom(doc, "z")).toBe("D:z");
});

test("pictureInPictureElement returns document.pictureInPictureElement", () => {
  (globalThis as any).document = { pictureInPictureElement: { pip: true } };
  expect(documentModule.pictureInPictureElement()).toEqual({ pip: true });
});

test("pictureInPictureEnabled returns document.pictureInPictureEnabled", () => {
  (globalThis as any).document = { pictureInPictureEnabled: true };
  expect(documentModule.pictureInPictureEnabled()).toBe(true);
});

test("plugins returns document.plugins", () => {
  (globalThis as any).document = { plugins: [1] };
  expect(documentModule.plugins()).toEqual([1]);
});

test("pointerLockElement returns document.pointerLockElement", () => {
  (globalThis as any).document = { pointerLockElement: { el: 1 } };
  expect(documentModule.pointerLockElement()).toEqual({ el: 1 });
});

test("prepend calls document.prepend", () => {
  (globalThis as any).document = { prepend: (...a: any[]) => a.length };
  expect(documentModule.prepend(1, 2)).toBe(2);
});
test("prependFrom calls prepend on passed document", () => {
  const doc: any = { prepend: (...a: any[]) => a.join("-") };
  expect(documentModule.prependFrom(doc, "a", "b")).toBe("a-b");
});

test("prerendering returns document.prerendering", () => {
  (globalThis as any).document = { prerendering: false };
  expect(documentModule.prerendering()).toBe(false);
});

test("queryCommandEnabled calls document.queryCommandEnabled", () => {
  (globalThis as any).document = { queryCommandEnabled: (c: any) => c };
  expect(documentModule.queryCommandEnabled("cmd")).toBe("cmd");
});
test("queryCommandEnabledFrom calls queryCommandEnabled on passed document", () => {
  const doc: any = { queryCommandEnabled: (c: any) => `${c}!` };
  expect(documentModule.queryCommandEnabledFrom(doc, "x")).toBe("x!");
});

test("queryCommandState calls document.queryCommandState", () => {
  (globalThis as any).document = { queryCommandState: () => true };
  expect(documentModule.queryCommandState()).toBe(true);
});
test("queryCommandStateFrom calls queryCommandState on passed document", () => {
  const doc: any = { queryCommandState: () => false };
  expect(documentModule.queryCommandStateFrom(doc)).toBe(false);
});

test("queryCommandSupported calls document.queryCommandSupported", () => {
  (globalThis as any).document = { queryCommandSupported: (c: any) => c.length };
  expect(documentModule.queryCommandSupported("abc")).toBe(3);
});
test("queryCommandSupportedFrom calls queryCommandSupported on passed document", () => {
  const doc: any = { queryCommandSupported: () => 5 };
  expect(documentModule.queryCommandSupportedFrom(doc, "x")).toBe(5);
});

test("querySelector calls document.querySelector", () => {
  (globalThis as any).document = { querySelector: (s: any) => s };
  expect(documentModule.querySelector("sel")).toBe("sel");
});
test("querySelectorFrom calls querySelector on passed document", () => {
  const doc: any = { querySelector: (s: any) => `d${s}` };
  expect(documentModule.querySelectorFrom(doc, "s")).toBe("ds");
});

test("querySelectorAll calls document.querySelectorAll", () => {
  (globalThis as any).document = { querySelectorAll: (s: any) => [s] };
  expect(documentModule.querySelectorAll("q")).toEqual(["q"]);
});
test("querySelectorAllFrom calls querySelectorAll on passed document", () => {
  const doc: any = { querySelectorAll: () => [1] };
  expect(documentModule.querySelectorAllFrom(doc, "r")).toEqual([1]);
});

test("readyState returns document.readyState", () => {
  (globalThis as any).document = { readyState: "complete" };
  expect(documentModule.readyState()).toBe("complete");
});

test("referrer returns document.referrer", () => {
  (globalThis as any).document = { referrer: "http://ref" };
  expect(documentModule.referrer()).toBe("http://ref");
});

test("releaseCapture calls document.releaseCapture", () => {
  (globalThis as any).document = { releaseCapture: () => "rc" };
  expect(documentModule.releaseCapture()).toBe("rc");
});
test("releaseCaptureFrom calls releaseCapture on passed document", () => {
  const doc: any = { releaseCapture: () => "drc" };
  expect(documentModule.releaseCaptureFrom(doc)).toBe("drc");
});

test("replaceChildren calls document.replaceChildren", () => {
  (globalThis as any).document = { replaceChildren: (...a: any[]) => a.join(":" ) };
  expect(documentModule.replaceChildren("a", "b")).toBe("a:b");
});
test("replaceChildrenFrom calls replaceChildren on passed document", () => {
  const doc: any = { replaceChildren: (...a: any[]) => a.length };
  expect(documentModule.replaceChildrenFrom(doc, 1, 2, 3)).toBe(3);
});

test("requestStorageAccess calls document.requestStorageAccess", () => {
  (globalThis as any).document = { requestStorageAccess: () => Promise.resolve(9) };
  expect(documentModule.requestStorageAccess()).resolves.toBe(9);
});
test("requestStorageAccessFrom calls requestStorageAccess on passed document", () => {
  const doc: any = { requestStorageAccess: () => Promise.resolve(8) };
  expect(documentModule.requestStorageAccessFrom(doc)).resolves.toBe(8);
});

test("requestStorageAccessFor calls document.requestStorageAccessFor", () => {
  (globalThis as any).document = { requestStorageAccessFor: (o: any) => o };
  expect(documentModule.requestStorageAccessFor("org")).toBe("org");
});
test("requestStorageAccessForFrom calls requestStorageAccessFor on passed document", () => {
  const doc: any = { requestStorageAccessFor: () => "d" };
  expect(documentModule.requestStorageAccessForFrom(doc, "o")).toBe("d");
});

test("scripts returns document.scripts", () => {
  (globalThis as any).document = { scripts: ["s"] };
  expect(documentModule.scripts()).toEqual(["s"]);
});

test("scrollingElement returns document.scrollingElement", () => {
  (globalThis as any).document = { scrollingElement: { se: 1 } };
  expect(documentModule.scrollingElement()).toEqual({ se: 1 });
});

test("startViewTransition calls document.startViewTransition", () => {
  (globalThis as any).document = { startViewTransition: () => 5 };
  expect(documentModule.startViewTransition()).toBe(5);
});
test("startViewTransitionFrom calls startViewTransition on passed document", () => {
  const doc: any = { startViewTransition: () => 6 };
  expect(documentModule.startViewTransitionFrom(doc)).toBe(6);
});

test("styleSheets returns document.styleSheets", () => {
  (globalThis as any).document = { styleSheets: ["ss"] };
  expect(documentModule.styleSheets()).toEqual(["ss"]);
});

test("timeline returns document.timeline", () => {
  (globalThis as any).document = { timeline: { t: 1 } };
  expect(documentModule.timeline()).toEqual({ t: 1 });
});

test("title returns document.title", () => {
  (globalThis as any).document = { title: "My Page" };
  expect(documentModule.title()).toBe("My Page");
});

test("URL returns document.URL", () => {
  (globalThis as any).document = { URL: "http://url" };
  expect(documentModule.URL()).toBe("http://url");
});

test("visibilityState returns document.visibilityState", () => {
  (globalThis as any).document = { visibilityState: "visible" };
  expect(documentModule.visibilityState()).toBe("visible");
});

test("write calls document.write", () => {
  (globalThis as any).document = { write: (...a: any[]) => a.join("-") };
  expect(documentModule.write("a", "b")).toBe("a-b");
});
test("writeFrom calls write on passed document", () => {
  const doc: any = { write: () => 1 };
  expect(documentModule.writeFrom(doc, "x")).toBe(1);
});

test("writeln calls document.writeln", () => {
  (globalThis as any).document = { writeln: () => "L" };
  expect(documentModule.writeln()).toBe("L");
});
test("writelnFrom calls writeln on passed document", () => {
  const doc: any = { writeln: () => "DL" };
  expect(documentModule.writelnFrom(doc)).toBe("DL");
});

// New tests for instance-specific document functions
const documentInstance: any = {};
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
      expect((documentModule as any)[fnName](documentInstance)).toEqual(
        documentInstance[prop]
      );
    });
  });
