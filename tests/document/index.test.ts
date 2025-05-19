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

test("createNodeIterator calls document.createNodeIterator", () => {
  (globalThis as any).document = { createNodeIterator: (n: any) => ({ n }) };
  expect(documentModule.createNodeIterator("n")).toEqual({ n: "n" });
});
test("createNodeIteratorFrom calls createNodeIterator on passed document", () => {
  const doc: any = { createNodeIterator: (n: any) => n + "F" };
  expect(documentModule.createNodeIteratorFrom(doc, "x")).toBe("xF");
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

test("body returns document.body", () => {
  (globalThis as any).document = { body: "b" };
  expect(documentModule.body()).toBe("b");
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

test("compatMode returns document.compatMode", () => {
  (globalThis as any).document = { compatMode: "CSS1Compat" };
  expect(documentModule.compatMode()).toBe("CSS1Compat");
});

test("contentType returns document.contentType", () => {
  (globalThis as any).document = { contentType: "text/html" };
  expect(documentModule.contentType()).toBe("text/html");
});

test("currentScript returns document.currentScript", () => {
  (globalThis as any).document = { currentScript: "script.js" };
  expect(documentModule.currentScript()).toBe("script.js");
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

test("embeds returns document.embeds", () => {
  (globalThis as any).document = { embeds: [1, 2] };
  expect(documentModule.embeds()).toEqual([1, 2]);
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

test("enableStyleSheetsForSet calls document.enableStyleSheetsForSet", () => {
  (globalThis as any).document = { enableStyleSheetsForSet: (s: any) => s };
  expect(documentModule.enableStyleSheetsForSet("set")).toBe("set");
});
test("enableStyleSheetsForSetFrom calls enableStyleSheetsForSet on passed document", () => {
  const doc: any = { enableStyleSheetsForSet: (s: any) => `d:${s}` };
  expect(documentModule.enableStyleSheetsForSetFrom(doc, "s")).toBe("d:s");
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

test("lastElementChild returns document.lastElementChild", () => {
  (globalThis as any).document = { lastElementChild: { last: 1 } };
  expect(documentModule.lastElementChild()).toEqual({ last: 1 });
});

test("links returns document.links", () => {
  (globalThis as any).document = { links: ["a"] };
  expect(documentModule.links()).toEqual(["a"]);
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

test("prerendering returns document.prerendering", () => {
  (globalThis as any).document = { prerendering: false };
  expect(documentModule.prerendering()).toBe(false);
});

test("scripts returns document.scripts", () => {
  (globalThis as any).document = { scripts: ["s"] };
  expect(documentModule.scripts()).toEqual(["s"]);
});

test("scrollingElement returns document.scrollingElement", () => {
  (globalThis as any).document = { scrollingElement: { se: 1 } };
  expect(documentModule.scrollingElement()).toEqual({ se: 1 });
});

test("styleSheets returns document.styleSheets", () => {
  (globalThis as any).document = { styleSheets: ["ss"] };
  expect(documentModule.styleSheets()).toEqual(["ss"]);
});

test("timeline returns document.timeline", () => {
  (globalThis as any).document = { timeline: { t: 1 } };
  expect(documentModule.timeline()).toEqual({ t: 1 });
});

test("visibilityState returns document.visibilityState", () => {
  (globalThis as any).document = { visibilityState: "visible" };
  expect(documentModule.visibilityState()).toBe("visible");
});

test("cookie returns document.cookie", () => {
  (globalThis as any).document = { cookie: "a=b" };
  expect(documentModule.cookie()).toBe("a=b");
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

test("fullscreenEnabled returns document.fullscreenEnabled", () => {
  (globalThis as any).document = { fullscreenEnabled: true };
  expect(documentModule.fullscreenEnabled()).toBe(true);
});

test("lastModified returns document.lastModified", () => {
  (globalThis as any).document = { lastModified: "today" };
  expect(documentModule.lastModified()).toBe("today");
});

test("location returns document.location", () => {
  (globalThis as any).document = { location: { href: "http://example" } };
  expect(documentModule.location()).toEqual({ href: "http://example" });
});

test("readyState returns document.readyState", () => {
  (globalThis as any).document = { readyState: "complete" };
  expect(documentModule.readyState()).toBe("complete");
});

test("referrer returns document.referrer", () => {
  (globalThis as any).document = { referrer: "http://ref" };
  expect(documentModule.referrer()).toBe("http://ref");
});

test("title returns document.title", () => {
  (globalThis as any).document = { title: "My Page" };
  expect(documentModule.title()).toBe("My Page");
});

test("URL returns document.URL", () => {
  (globalThis as any).document = { URL: "http://url" };
  expect(documentModule.URL()).toBe("http://url");
});

// New tests for instance-specific document functions
const documentInstance: any = {};
const skipDocumentFromFns = [
  "adoptNodeFrom",
  "appendFrom",
  "browsingTopicsFrom",
  "caretPositionFromPointFrom",
  "caretRangeFromPointFrom",
  "createAttributeFrom",
  "createAttributeNSFrom",
  "createCDATASectionFrom",
  "createCommentFrom",
  "createDocumentFragmentFrom",
  "createElementFrom",
  "createElementNSFrom",
  "createEventFrom",
  "createNodeIteratorFrom",
  "createProcessingInstructionFrom",
  "createRangeFrom",
  "createTextNodeFrom",
  "createTouchFrom",
  "createTouchListFrom",
  "createTreeWalkerFrom",
  "elementFromPointFrom",
  "elementsFromPointFrom",
  "enableStyleSheetsForSetFrom",
  "exitFullscreenFrom",
  "exitPictureInPictureFrom",
  "exitPointerLockFrom",
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
