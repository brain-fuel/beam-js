import {
  Document,
  activeElement,
  adoptedStyleSheets,
  adoptNode,
  append,
  browsingTopics,
  caretPositionFromPoint,
  caretRangeFromPoint,
  createAttribute,
  createAttributeNS,
  createCDATASection,
  createComment,
  createDocumentFragment,
  createElement,
  createElementNS,
  createEvent,
  body,
  characterSet,
  childElementCount,
  children,
  compatMode,
  contentType,
  currentScript,
  doctype,
  documentElement,
  documentURI,
  embeds,
  featurePolicy,
  firstElementChild,
  fonts,
  forms,
  fragmentDirective,
  fullscreenElement,
  head,
  hidden,
  images,
  implementation,
  lastElementChild,
  links,
  pictureInPictureElement,
  pictureInPictureEnabled,
  plugins,
  pointerLockElement,
  prerendering,
  scripts,
  scrollingElement,
  styleSheets,
  timeline,
  visibilityState,
  cookie,
  defaultView,
  designMode,
  dir,
  fullscreenEnabled,
  lastModified,
  location,
  readyState,
  referrer,
  title,
  URL,
} from "../../src/document";
import * as documentModule from "../../src/document";
import { expect, test } from "bun:test";

test("Document returns global Document", () => {
  function MyDoc() {}
  (globalThis as any).Document = MyDoc;
  expect(Document()).toBe(MyDoc);
});

test("activeElement returns document.activeElement", () => {
  (globalThis as any).document = { activeElement: "el" };
  expect(activeElement()).toBe("el");
});

test("adoptedStyleSheets returns document.adoptedStyleSheets", () => {
  (globalThis as any).document = { adoptedStyleSheets: [1,2,3] };
  expect(adoptedStyleSheets()).toEqual([1,2,3]);
});

test("adoptNode calls document.adoptNode", () => {
  (globalThis as any).document = { adoptNode: (n: any) => ({ node: n }) };
  expect(adoptNode("n")).toEqual({ node: "n" });
});
test("adoptNodeFrom calls adoptNode on passed document", () => {
  const doc: any = { adoptNode: (x: any) => `ad:${x}` };
  expect(documentModule.adoptNodeFrom(doc, 1)).toBe("ad:1");
});

test("append calls document.append", () => {
  (globalThis as any).document = { append: (...a: any[]) => a.join("-") };
  expect(append("a", "b")).toBe("a-b");
});
test("appendFrom calls append on passed document", () => {
  const doc: any = { append: (...a: any[]) => a.length };
  expect(documentModule.appendFrom(doc, 1, 2)).toBe(2);
});

test("browsingTopics calls document.browsingTopics", () => {
  (globalThis as any).document = { browsingTopics: () => [1] };
  expect(browsingTopics()).toEqual([1]);
});
test("browsingTopicsFrom calls browsingTopics on passed document", () => {
  const doc: any = { browsingTopics: () => [2] };
  expect(documentModule.browsingTopicsFrom(doc)).toEqual([2]);
});

test("caretPositionFromPoint calls document.caretPositionFromPoint", () => {
  (globalThis as any).document = {
    caretPositionFromPoint: (x: any, y: any) => x + y,
  };
  expect(caretPositionFromPoint(1, 2)).toBe(3);
});
test("caretPositionFromPointFrom calls caretPositionFromPoint on passed document", () => {
  const doc: any = { caretPositionFromPoint: (x: any, y: any) => x * y };
  expect(documentModule.caretPositionFromPointFrom(doc, 2, 3)).toBe(6);
});

test("caretRangeFromPoint calls document.caretRangeFromPoint", () => {
  (globalThis as any).document = {
    caretRangeFromPoint: (x: any, y: any) => `${x},${y}`,
  };
  expect(caretRangeFromPoint(1, 1)).toBe("1,1");
});
test("caretRangeFromPointFrom calls caretRangeFromPoint on passed document", () => {
  const doc: any = { caretRangeFromPoint: () => "r" };
  expect(documentModule.caretRangeFromPointFrom(doc, 0, 0)).toBe("r");
});

test("createAttribute calls document.createAttribute", () => {
  (globalThis as any).document = { createAttribute: (n: any) => ({ n }) };
  expect(createAttribute("id")).toEqual({ n: "id" });
});
test("createAttributeFrom calls createAttribute on passed document", () => {
  const doc: any = { createAttribute: (n: any) => n.toUpperCase() };
  expect(documentModule.createAttributeFrom(doc, "x")).toBe("X");
});

test("createAttributeNS calls document.createAttributeNS", () => {
  (globalThis as any).document = { createAttributeNS: (ns: any, n: any) => ns+n };
  expect(createAttributeNS("ns", "n")).toBe("nsn");
});
test("createAttributeNSFrom calls createAttributeNS on passed document", () => {
  const doc: any = { createAttributeNS: (ns: any, n: any) => `${ns}:${n}` };
  expect(documentModule.createAttributeNSFrom(doc, "a", "b")).toBe("a:b");
});

test("createCDATASection calls document.createCDATASection", () => {
  (globalThis as any).document = { createCDATASection: (t: any) => `<${t}>` };
  expect(createCDATASection("c")).toBe("<c>");
});
test("createCDATASectionFrom calls createCDATASection on passed document", () => {
  const doc: any = { createCDATASection: (t: any) => t };
  expect(documentModule.createCDATASectionFrom(doc, "t")).toBe("t");
});

test("createComment calls document.createComment", () => {
  (globalThis as any).document = { createComment: (t: any) => `c:${t}` };
  expect(createComment("m")).toBe("c:m");
});
test("createCommentFrom calls createComment on passed document", () => {
  const doc: any = { createComment: () => "d" };
  expect(documentModule.createCommentFrom(doc, "d")).toBe("d");
});

test("createDocumentFragment calls document.createDocumentFragment", () => {
  (globalThis as any).document = { createDocumentFragment: () => "frag" };
  expect(createDocumentFragment()).toBe("frag");
});
test("createDocumentFragmentFrom calls createDocumentFragment on passed document", () => {
  const doc: any = { createDocumentFragment: () => "df" };
  expect(documentModule.createDocumentFragmentFrom(doc)).toBe("df");
});

test("createElement calls document.createElement", () => {
  (globalThis as any).document = { createElement: (t: any) => ({ t }) };
  expect(createElement("div")).toEqual({ t: "div" });
});
test("createElementFrom calls createElement on passed document", () => {
  const doc: any = { createElement: (t: any) => t + t };
  expect(documentModule.createElementFrom(doc, "d")).toBe("dd");
});

test("createElementNS calls document.createElementNS", () => {
  (globalThis as any).document = { createElementNS: (ns: any, q: any) => ns+q };
  expect(createElementNS("s", "q")).toBe("sq");
});
test("createElementNSFrom calls createElementNS on passed document", () => {
  const doc: any = { createElementNS: (ns: any, q: any) => `${ns}/${q}` };
  expect(documentModule.createElementNSFrom(doc, "n", "q")).toBe("n/q");
});

test("createEvent calls document.createEvent", () => {
  (globalThis as any).document = { createEvent: (t: any) => ({ e: t }) };
  expect(createEvent("evt")).toEqual({ e: "evt" });
});
test("createEventFrom calls createEvent on passed document", () => {
  const doc: any = { createEvent: (t: any) => t };
  expect(documentModule.createEventFrom(doc, "evt")).toBe("evt");
});

test("body returns document.body", () => {
  (globalThis as any).document = { body: "b" };
  expect(body()).toBe("b");
});

test("characterSet returns document.characterSet", () => {
  (globalThis as any).document = { characterSet: "UTF-8" };
  expect(characterSet()).toBe("UTF-8");
});

test("childElementCount returns document.childElementCount", () => {
  (globalThis as any).document = { childElementCount: 5 };
  expect(childElementCount()).toBe(5);
});

test("children returns document.children", () => {
  (globalThis as any).document = { children: ["a", "b"] };
  expect(children()).toEqual(["a", "b"]);
});

test("compatMode returns document.compatMode", () => {
  (globalThis as any).document = { compatMode: "CSS1Compat" };
  expect(compatMode()).toBe("CSS1Compat");
});

test("contentType returns document.contentType", () => {
  (globalThis as any).document = { contentType: "text/html" };
  expect(contentType()).toBe("text/html");
});

test("currentScript returns document.currentScript", () => {
  (globalThis as any).document = { currentScript: "script.js" };
  expect(currentScript()).toBe("script.js");
});

test("doctype returns document.doctype", () => {
  (globalThis as any).document = { doctype: "doctype" };
  expect(doctype()).toBe("doctype");
});

test("documentElement returns document.documentElement", () => {
  (globalThis as any).document = { documentElement: { node: true } };
  expect(documentElement()).toEqual({ node: true });
});

test("documentURI returns document.documentURI", () => {
  (globalThis as any).document = { documentURI: "http://example" };
  expect(documentURI()).toBe("http://example");
});

test("embeds returns document.embeds", () => {
  (globalThis as any).document = { embeds: [1, 2] };
  expect(embeds()).toEqual([1, 2]);
});

test("featurePolicy returns document.featurePolicy", () => {
  (globalThis as any).document = { featurePolicy: { features: true } };
  expect(featurePolicy()).toEqual({ features: true });
});

test("firstElementChild returns document.firstElementChild", () => {
  (globalThis as any).document = { firstElementChild: { child: 1 } };
  expect(firstElementChild()).toEqual({ child: 1 });
});

test("fonts returns document.fonts", () => {
  (globalThis as any).document = { fonts: ["Arial"] };
  expect(fonts()).toEqual(["Arial"]);
});

test("forms returns document.forms", () => {
  (globalThis as any).document = { forms: [1, 2] };
  expect(forms()).toEqual([1, 2]);
});

test("fragmentDirective returns document.fragmentDirective", () => {
  (globalThis as any).document = { fragmentDirective: { text: "d" } };
  expect(fragmentDirective()).toEqual({ text: "d" });
});

test("fullscreenElement returns document.fullscreenElement", () => {
  (globalThis as any).document = { fullscreenElement: { el: true } };
  expect(fullscreenElement()).toEqual({ el: true });
});

test("head returns document.head", () => {
  (globalThis as any).document = { head: { head: true } };
  expect(head()).toEqual({ head: true });
});

test("hidden returns document.hidden", () => {
  (globalThis as any).document = { hidden: false };
  expect(hidden()).toBe(false);
});

test("images returns document.images", () => {
  (globalThis as any).document = { images: [1, 2] };
  expect(images()).toEqual([1, 2]);
});

test("implementation returns document.implementation", () => {
  (globalThis as any).document = { implementation: { impl: true } };
  expect(implementation()).toEqual({ impl: true });
});

test("lastElementChild returns document.lastElementChild", () => {
  (globalThis as any).document = { lastElementChild: { last: 1 } };
  expect(lastElementChild()).toEqual({ last: 1 });
});

test("links returns document.links", () => {
  (globalThis as any).document = { links: ["a"] };
  expect(links()).toEqual(["a"]);
});

test("pictureInPictureElement returns document.pictureInPictureElement", () => {
  (globalThis as any).document = { pictureInPictureElement: { pip: true } };
  expect(pictureInPictureElement()).toEqual({ pip: true });
});

test("pictureInPictureEnabled returns document.pictureInPictureEnabled", () => {
  (globalThis as any).document = { pictureInPictureEnabled: true };
  expect(pictureInPictureEnabled()).toBe(true);
});

test("plugins returns document.plugins", () => {
  (globalThis as any).document = { plugins: [1] };
  expect(plugins()).toEqual([1]);
});

test("pointerLockElement returns document.pointerLockElement", () => {
  (globalThis as any).document = { pointerLockElement: { el: 1 } };
  expect(pointerLockElement()).toEqual({ el: 1 });
});

test("prerendering returns document.prerendering", () => {
  (globalThis as any).document = { prerendering: false };
  expect(prerendering()).toBe(false);
});

test("scripts returns document.scripts", () => {
  (globalThis as any).document = { scripts: ["s"] };
  expect(scripts()).toEqual(["s"]);
});

test("scrollingElement returns document.scrollingElement", () => {
  (globalThis as any).document = { scrollingElement: { se: 1 } };
  expect(scrollingElement()).toEqual({ se: 1 });
});

test("styleSheets returns document.styleSheets", () => {
  (globalThis as any).document = { styleSheets: ["ss"] };
  expect(styleSheets()).toEqual(["ss"]);
});

test("timeline returns document.timeline", () => {
  (globalThis as any).document = { timeline: { t: 1 } };
  expect(timeline()).toEqual({ t: 1 });
});

test("visibilityState returns document.visibilityState", () => {
  (globalThis as any).document = { visibilityState: "visible" };
  expect(visibilityState()).toBe("visible");
});

test("cookie returns document.cookie", () => {
  (globalThis as any).document = { cookie: "a=b" };
  expect(cookie()).toBe("a=b");
});

test("defaultView returns document.defaultView", () => {
  (globalThis as any).document = { defaultView: { win: true } };
  expect(defaultView()).toEqual({ win: true });
});

test("designMode returns document.designMode", () => {
  (globalThis as any).document = { designMode: "on" };
  expect(designMode()).toBe("on");
});

test("dir returns document.dir", () => {
  (globalThis as any).document = { dir: "ltr" };
  expect(dir()).toBe("ltr");
});

test("fullscreenEnabled returns document.fullscreenEnabled", () => {
  (globalThis as any).document = { fullscreenEnabled: true };
  expect(fullscreenEnabled()).toBe(true);
});

test("lastModified returns document.lastModified", () => {
  (globalThis as any).document = { lastModified: "today" };
  expect(lastModified()).toBe("today");
});

test("location returns document.location", () => {
  (globalThis as any).document = { location: { href: "http://example" } };
  expect(location()).toEqual({ href: "http://example" });
});

test("readyState returns document.readyState", () => {
  (globalThis as any).document = { readyState: "complete" };
  expect(readyState()).toBe("complete");
});

test("referrer returns document.referrer", () => {
  (globalThis as any).document = { referrer: "http://ref" };
  expect(referrer()).toBe("http://ref");
});

test("title returns document.title", () => {
  (globalThis as any).document = { title: "My Page" };
  expect(title()).toBe("My Page");
});

test("URL returns document.URL", () => {
  (globalThis as any).document = { URL: "http://url" };
  expect(URL()).toBe("http://url");
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
