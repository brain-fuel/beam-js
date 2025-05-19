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
} from "../src/document";
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
