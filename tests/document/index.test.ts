import {
  Document,
  activeElement,
  adoptedStyleSheets,
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
} from "../../src/document";
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
