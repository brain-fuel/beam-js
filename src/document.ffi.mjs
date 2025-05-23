/**
 * Returns `globalThis.Document` from the global context.
 * @returns {typeof Document}
 */
export function Document() {
  return (globalThis).Document;
}

/**
 * Returns `document.activeElement` from the global context.
 * @returns {(Element|null|undefined)}
 */
export function activeElement() {
  return (globalThis).document?.activeElement;
}
/**
 * Returns `doc.activeElement` from the provided document.
 * @param {Document} doc
 * @returns {(Element|null|undefined)}
 */
export function activeElementFrom(doc) {
  return (doc).activeElement;
}

/**
 * Returns `document.adoptedStyleSheets` from the global context.
 * @returns {unknown}
 */
export function adoptedStyleSheets() {
  return (globalThis).document?.adoptedStyleSheets;
}
/**
 * Returns `doc.adoptedStyleSheets` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function adoptedStyleSheetsFrom(doc) {
  return (doc).adoptedStyleSheets;
}

/**
 * Calls `document.adoptNode()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function adoptNode(...args) {
  return (globalThis).document?.adoptNode(...args);
}
/**
 * Calls `doc.adoptNode()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function adoptNodeFrom(doc, ...args) {
  return (doc).adoptNode(...args);
}

/**
 * Calls `document.append()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function append(...args) {
  return (globalThis).document?.append(...args);
}
/**
 * Calls `doc.append()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function appendFrom(doc, ...args) {
  return (doc).append(...args);
}

/**
 * Returns `document.body` from the global context.
 * @returns {(HTMLElement|null|undefined)}
 */
export function body() {
  return (globalThis).document?.body;
}
/**
 * Returns `doc.body` from the provided document.
 * @param {Document} doc
 * @returns {(HTMLElement|null|undefined)}
 */
export function bodyFrom(doc) {
  return (doc).body;
}

/**
 * Calls `document.browsingTopics()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function browsingTopics(...args) {
  return (globalThis).document?.browsingTopics(...args);
}
/**
 * Calls `doc.browsingTopics()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function browsingTopicsFrom(doc, ...args) {
  return (doc).browsingTopics(...args);
}

/**
 * Calls `document.caretPositionFromPoint()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function caretPositionFromPoint(...args) {
  return (globalThis).document?.caretPositionFromPoint(...args);
}
/**
 * Calls `doc.caretPositionFromPoint()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function caretPositionFromPointFrom(doc, ...args) {
  return (doc).caretPositionFromPoint(...args);
}

/**
 * Calls `document.caretRangeFromPoint()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function caretRangeFromPoint(...args) {
  return (globalThis).document?.caretRangeFromPoint(...args);
}
/**
 * Calls `doc.caretRangeFromPoint()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function caretRangeFromPointFrom(doc, ...args) {
  return (doc).caretRangeFromPoint(...args);
}

/**
 * Returns `document.characterSet` from the global context.
 * @returns {(string|undefined)}
 */
export function characterSet() {
  return (globalThis).document?.characterSet;
}
/**
 * Returns `doc.characterSet` from the provided document.
 * @param {Document} doc
 * @returns {(string|undefined)}
 */
export function characterSetFrom(doc) {
  return (doc).characterSet;
}

/**
 * Returns `document.childElementCount` from the global context.
 * @returns {number}
 */
export function childElementCount() {
  return (globalThis).document?.childElementCount;
}
/**
 * Returns `doc.childElementCount` from the provided document.
 * @param {Document} doc
 * @returns {number}
 */
export function childElementCountFrom(doc) {
  return (doc).childElementCount;
}

/**
 * Returns `document.children` from the global context.
 * @returns {unknown}
 */
export function children() {
  return (globalThis).document?.children;
}
/**
 * Returns `doc.children` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function childrenFrom(doc) {
  return (doc).children;
}

/**
 * Calls `document.clear()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function clear(...args) {
  return (globalThis).document?.clear(...args);
}
/**
 * Calls `doc.clear()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function clearFrom(doc, ...args) {
  return (doc).clear(...args);
}

/**
 * Calls `document.close()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function close(...args) {
  return (globalThis).document?.close(...args);
}
/**
 * Calls `doc.close()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function closeFrom(doc, ...args) {
  return (doc).close(...args);
}

/**
 * Returns `document.compatMode` from the global context.
 * @returns {(string|undefined)}
 */
export function compatMode() {
  return (globalThis).document?.compatMode;
}
/**
 * Returns `doc.compatMode` from the provided document.
 * @param {Document} doc
 * @returns {(string|undefined)}
 */
export function compatModeFrom(doc) {
  return (doc).compatMode;
}

/**
 * Returns `document.contentType` from the global context.
 * @returns {(string|undefined)}
 */
export function contentType() {
  return (globalThis).document?.contentType;
}
/**
 * Returns `doc.contentType` from the provided document.
 * @param {Document} doc
 * @returns {(string|undefined)}
 */
export function contentTypeFrom(doc) {
  return (doc).contentType;
}

/**
 * Returns `document.cookie` from the global context.
 * @returns {(string|undefined)}
 */
export function cookie() {
  return (globalThis).document?.cookie;
}
/**
 * Returns `doc.cookie` from the provided document.
 * @param {Document} doc
 * @returns {(string|undefined)}
 */
export function cookieFrom(doc) {
  return (doc).cookie;
}

/**
 * Calls `document.createAttribute()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function createAttribute(...args) {
  return (globalThis).document?.createAttribute(...args);
}
/**
 * Calls `doc.createAttribute()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function createAttributeFrom(doc, ...args) {
  return (doc).createAttribute(...args);
}

/**
 * Calls `document.createAttributeNS()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function createAttributeNS(...args) {
  return (globalThis).document?.createAttributeNS(...args);
}
/**
 * Calls `doc.createAttributeNS()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function createAttributeNSFrom(doc, ...args) {
  return (doc).createAttributeNS(...args);
}

/**
 * Calls `document.createCDATASection()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function createCDATASection(...args) {
  return (globalThis).document?.createCDATASection(...args);
}
/**
 * Calls `doc.createCDATASection()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function createCDATASectionFrom(doc, ...args) {
  return (doc).createCDATASection(...args);
}

/**
 * Calls `document.createComment()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function createComment(...args) {
  return (globalThis).document?.createComment(...args);
}
/**
 * Calls `doc.createComment()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function createCommentFrom(doc, ...args) {
  return (doc).createComment(...args);
}

/**
 * Calls `document.createDocumentFragment()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function createDocumentFragment(...args) {
  return (globalThis).document?.createDocumentFragment(...args);
}
/**
 * Calls `doc.createDocumentFragment()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function createDocumentFragmentFrom(doc, ...args) {
  return (doc).createDocumentFragment(...args);
}

/**
 * Calls `document.createElement()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function createElement(...args) {
  return (globalThis).document?.createElement(...args);
}
/**
 * Calls `doc.createElement()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function createElementFrom(doc, ...args) {
  return (doc).createElement(...args);
}

/**
 * Calls `document.createElementNS()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function createElementNS(...args) {
  return (globalThis).document?.createElementNS(...args);
}
/**
 * Calls `doc.createElementNS()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function createElementNSFrom(doc, ...args) {
  return (doc).createElementNS(...args);
}

/**
 * Calls `document.createEvent()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function createEvent(...args) {
  return (globalThis).document?.createEvent(...args);
}
/**
 * Calls `doc.createEvent()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function createEventFrom(doc, ...args) {
  return (doc).createEvent(...args);
}

/**
 * Calls `document.createExpression()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function createExpression(...args) {
  return (globalThis).document?.createExpression(...args);
}
/**
 * Calls `doc.createExpression()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function createExpressionFrom(doc, ...args) {
  return (doc).createExpression(...args);
}

/**
 * Calls `document.createNodeIterator()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function createNodeIterator(...args) {
  return (globalThis).document?.createNodeIterator(...args);
}
/**
 * Calls `doc.createNodeIterator()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function createNodeIteratorFrom(doc, ...args) {
  return (doc).createNodeIterator(...args);
}

/**
 * Calls `document.createNSResolver()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function createNSResolver(...args) {
  return (globalThis).document?.createNSResolver(...args);
}
/**
 * Calls `doc.createNSResolver()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function createNSResolverFrom(doc, ...args) {
  return (doc).createNSResolver(...args);
}

/**
 * Calls `document.createProcessingInstruction()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function createProcessingInstruction(...args) {
  return (globalThis).document?.createProcessingInstruction(...args);
}
/**
 * Calls `doc.createProcessingInstruction()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function createProcessingInstructionFrom(doc, ...args) {
  return (doc).createProcessingInstruction(...args);
}

/**
 * Calls `document.createRange()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function createRange(...args) {
  return (globalThis).document?.createRange(...args);
}
/**
 * Calls `doc.createRange()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function createRangeFrom(doc, ...args) {
  return (doc).createRange(...args);
}

/**
 * Calls `document.createTextNode()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function createTextNode(...args) {
  return (globalThis).document?.createTextNode(...args);
}
/**
 * Calls `doc.createTextNode()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function createTextNodeFrom(doc, ...args) {
  return (doc).createTextNode(...args);
}

/**
 * Calls `document.createTouch()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function createTouch(...args) {
  return (globalThis).document?.createTouch(...args);
}
/**
 * Calls `doc.createTouch()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function createTouchFrom(doc, ...args) {
  return (doc).createTouch(...args);
}

/**
 * Calls `document.createTouchList()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function createTouchList(...args) {
  return (globalThis).document?.createTouchList(...args);
}
/**
 * Calls `doc.createTouchList()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function createTouchListFrom(doc, ...args) {
  return (doc).createTouchList(...args);
}

/**
 * Calls `document.createTreeWalker()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function createTreeWalker(...args) {
  return (globalThis).document?.createTreeWalker(...args);
}
/**
 * Calls `doc.createTreeWalker()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function createTreeWalkerFrom(doc, ...args) {
  return (doc).createTreeWalker(...args);
}

/**
 * Returns `document.currentScript` from the global context.
 * @returns {unknown}
 */
export function currentScript() {
  return (globalThis).document?.currentScript;
}
/**
 * Returns `doc.currentScript` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function currentScriptFrom(doc) {
  return (doc).currentScript;
}

/**
 * Returns `document.defaultView` from the global context.
 * @returns {unknown}
 */
export function defaultView() {
  return (globalThis).document?.defaultView;
}
/**
 * Returns `doc.defaultView` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function defaultViewFrom(doc) {
  return (doc).defaultView;
}

/**
 * Returns `document.designMode` from the global context.
 * @returns {unknown}
 */
export function designMode() {
  return (globalThis).document?.designMode;
}
/**
 * Returns `doc.designMode` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function designModeFrom(doc) {
  return (doc).designMode;
}

/**
 * Returns `document.dir` from the global context.
 * @returns {unknown}
 */
export function dir() {
  return (globalThis).document?.dir;
}
/**
 * Returns `doc.dir` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function dirFrom(doc) {
  return (doc).dir;
}

/**
 * Returns `document.doctype` from the global context.
 * @returns {unknown}
 */
export function doctype() {
  return (globalThis).document?.doctype;
}
/**
 * Returns `doc.doctype` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function doctypeFrom(doc) {
  return (doc).doctype;
}

/**
 * Returns `document.documentElement` from the global context.
 * @returns {unknown}
 */
export function documentElement() {
  return (globalThis).document?.documentElement;
}
/**
 * Returns `doc.documentElement` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function documentElementFrom(doc) {
  return (doc).documentElement;
}

/**
 * Returns `document.documentURI` from the global context.
 * @returns {unknown}
 */
export function documentURI() {
  return (globalThis).document?.documentURI;
}
/**
 * Returns `doc.documentURI` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function documentURIFrom(doc) {
  return (doc).documentURI;
}

/**
 * Calls `document.elementsFromPoint()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function elementsFromPoint(...args) {
  return (globalThis).document?.elementsFromPoint(...args);
}
/**
 * Calls `doc.elementsFromPoint()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function elementsFromPointFrom(doc, ...args) {
  return (doc).elementsFromPoint(...args);
}

/**
 * Returns `document.embeds` from the global context.
 * @returns {unknown}
 */
export function embeds() {
  return (globalThis).document?.embeds;
}
/**
 * Returns `doc.embeds` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function embedsFrom(doc) {
  return (doc).embeds;
}
/**
 * Calls `document.elementFromPoint()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function elementFromPoint(...args) {
  return (globalThis).document?.elementFromPoint(...args);
}
/**
 * Calls `doc.elementFromPoint()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function elementFromPointFrom(doc, ...args) {
  return (doc).elementFromPoint(...args);
}

/**
 * Calls `document.enableStyleSheetsForSet()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function enableStyleSheetsForSet(...args) {
  return (globalThis).document?.enableStyleSheetsForSet(...args);
}
/**
 * Calls `doc.enableStyleSheetsForSet()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function enableStyleSheetsForSetFrom(doc, ...args) {
  return (doc).enableStyleSheetsForSet(...args);
}

/**
 * Calls `document.evaluate()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function evaluate(...args) {
  return (globalThis).document?.evaluate(...args);
}
/**
 * Calls `doc.evaluate()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function evaluateFrom(doc, ...args) {
  return (doc).evaluate(...args);
}

/**
 * Calls `document.execCommand()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function execCommand(...args) {
  return (globalThis).document?.execCommand(...args);
}
/**
 * Calls `doc.execCommand()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function execCommandFrom(doc, ...args) {
  return (doc).execCommand(...args);
}

/**
 * Calls `document.exitFullscreen()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function exitFullscreen(...args) {
  return (globalThis).document?.exitFullscreen(...args);
}
/**
 * Calls `doc.exitFullscreen()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function exitFullscreenFrom(doc, ...args) {
  return (doc).exitFullscreen(...args);
}

/**
 * Calls `document.exitPictureInPicture()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function exitPictureInPicture(...args) {
  return (globalThis).document?.exitPictureInPicture(...args);
}
/**
 * Calls `doc.exitPictureInPicture()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function exitPictureInPictureFrom(doc, ...args) {
  return (doc).exitPictureInPicture(...args);
}

/**
 * Calls `document.exitPointerLock()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function exitPointerLock(...args) {
  return (globalThis).document?.exitPointerLock(...args);
}
/**
 * Calls `doc.exitPointerLock()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function exitPointerLockFrom(doc, ...args) {
  return (doc).exitPointerLock(...args);
}

/**
 * Returns `document.featurePolicy` from the global context.
 * @returns {unknown}
 */
export function featurePolicy() {
  return (globalThis).document?.featurePolicy;
}
/**
 * Returns `doc.featurePolicy` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function featurePolicyFrom(doc) {
  return (doc).featurePolicy;
}

/**
 * Returns `document.firstElementChild` from the global context.
 * @returns {unknown}
 */
export function firstElementChild() {
  return (globalThis).document?.firstElementChild;
}
/**
 * Returns `doc.firstElementChild` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function firstElementChildFrom(doc) {
  return (doc).firstElementChild;
}

/**
 * Returns `document.fonts` from the global context.
 * @returns {unknown}
 */
export function fonts() {
  return (globalThis).document?.fonts;
}
/**
 * Returns `doc.fonts` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function fontsFrom(doc) {
  return (doc).fonts;
}

/**
 * Returns `document.forms` from the global context.
 * @returns {unknown}
 */
export function forms() {
  return (globalThis).document?.forms;
}
/**
 * Returns `doc.forms` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function formsFrom(doc) {
  return (doc).forms;
}

/**
 * Returns `document.fragmentDirective` from the global context.
 * @returns {unknown}
 */
export function fragmentDirective() {
  return (globalThis).document?.fragmentDirective;
}
/**
 * Returns `doc.fragmentDirective` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function fragmentDirectiveFrom(doc) {
  return (doc).fragmentDirective;
}

/**
 * Returns `document.fullscreenElement` from the global context.
 * @returns {unknown}
 */
export function fullscreenElement() {
  return (globalThis).document?.fullscreenElement;
}
/**
 * Returns `doc.fullscreenElement` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function fullscreenElementFrom(doc) {
  return (doc).fullscreenElement;
}

/**
 * Returns `document.fullscreenEnabled` from the global context.
 * @returns {unknown}
 */
export function fullscreenEnabled() {
  return (globalThis).document?.fullscreenEnabled;
}
/**
 * Returns `doc.fullscreenEnabled` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function fullscreenEnabledFrom(doc) {
  return (doc).fullscreenEnabled;
}

/**
 * Calls `document.getAnimations()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function getAnimations(...args) {
  return (globalThis).document?.getAnimations(...args);
}
/**
 * Calls `doc.getAnimations()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function getAnimationsFrom(doc, ...args) {
  return (doc).getAnimations(...args);
}

/**
 * Calls `document.getElementById()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function getElementById(...args) {
  return (globalThis).document?.getElementById(...args);
}
/**
 * Calls `doc.getElementById()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function getElementByIdFrom(doc, ...args) {
  return (doc).getElementById(...args);
}

/**
 * Calls `document.getElementsByClassName()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function getElementsByClassName(...args) {
  return (globalThis).document?.getElementsByClassName(...args);
}
/**
 * Calls `doc.getElementsByClassName()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function getElementsByClassNameFrom(doc, ...args) {
  return (doc).getElementsByClassName(...args);
}

/**
 * Calls `document.getElementsByName()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function getElementsByName(...args) {
  return (globalThis).document?.getElementsByName(...args);
}
/**
 * Calls `doc.getElementsByName()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function getElementsByNameFrom(doc, ...args) {
  return (doc).getElementsByName(...args);
}

/**
 * Calls `document.getElementsByTagName()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function getElementsByTagName(...args) {
  return (globalThis).document?.getElementsByTagName(...args);
}
/**
 * Calls `doc.getElementsByTagName()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function getElementsByTagNameFrom(doc, ...args) {
  return (doc).getElementsByTagName(...args);
}

/**
 * Calls `document.getElementsByTagNameNS()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function getElementsByTagNameNS(...args) {
  return (globalThis).document?.getElementsByTagNameNS(...args);
}
/**
 * Calls `doc.getElementsByTagNameNS()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function getElementsByTagNameNSFrom(doc, ...args) {
  return (doc).getElementsByTagNameNS(...args);
}

/**
 * Calls `document.getSelection()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function getSelection(...args) {
  return (globalThis).document?.getSelection(...args);
}
/**
 * Calls `doc.getSelection()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function getSelectionFrom(doc, ...args) {
  return (doc).getSelection(...args);
}

/**
 * Calls `document.hasFocus()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function hasFocus(...args) {
  return (globalThis).document?.hasFocus(...args);
}
/**
 * Calls `doc.hasFocus()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function hasFocusFrom(doc, ...args) {
  return (doc).hasFocus(...args);
}

/**
 * Calls `document.hasStorageAccess()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function hasStorageAccess(...args) {
  return (globalThis).document?.hasStorageAccess(...args);
}
/**
 * Calls `doc.hasStorageAccess()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function hasStorageAccessFrom(doc, ...args) {
  return (doc).hasStorageAccess(...args);
}

/**
 * Calls `document.hasUnpartitionedCookieAccess()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function hasUnpartitionedCookieAccess(...args) {
  return (globalThis).document?.hasUnpartitionedCookieAccess(...args);
}
/**
 * Calls `doc.hasUnpartitionedCookieAccess()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function hasUnpartitionedCookieAccessFrom(doc, ...args) {
  return (doc).hasUnpartitionedCookieAccess(...args);
}

/**
 * Returns `document.head` from the global context.
 * @returns {unknown}
 */
export function head() {
  return (globalThis).document?.head;
}
/**
 * Returns `doc.head` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function headFrom(doc) {
  return (doc).head;
}

/**
 * Returns `document.hidden` from the global context.
 * @returns {unknown}
 */
export function hidden() {
  return (globalThis).document?.hidden;
}
/**
 * Returns `doc.hidden` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function hiddenFrom(doc) {
  return (doc).hidden;
}

/**
 * Returns `document.images` from the global context.
 * @returns {unknown}
 */
export function images() {
  return (globalThis).document?.images;
}
/**
 * Returns `doc.images` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function imagesFrom(doc) {
  return (doc).images;
}

/**
 * Returns `document.implementation` from the global context.
 * @returns {unknown}
 */
export function implementation() {
  return (globalThis).document?.implementation;
}
/**
 * Returns `doc.implementation` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function implementationFrom(doc) {
  return (doc).implementation;
}

/**
 * Calls `document.importNode()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function importNode(...args) {
  return (globalThis).document?.importNode(...args);
}
/**
 * Calls `doc.importNode()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function importNodeFrom(doc, ...args) {
  return (doc).importNode(...args);
}

/**
 * Returns `document.lastElementChild` from the global context.
 * @returns {unknown}
 */
export function lastElementChild() {
  return (globalThis).document?.lastElementChild;
}
/**
 * Returns `doc.lastElementChild` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function lastElementChildFrom(doc) {
  return (doc).lastElementChild;
}

/**
 * Returns `document.lastModified` from the global context.
 * @returns {unknown}
 */
export function lastModified() {
  return (globalThis).document?.lastModified;
}
/**
 * Returns `doc.lastModified` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function lastModifiedFrom(doc) {
  return (doc).lastModified;
}

/**
 * Returns `document.links` from the global context.
 * @returns {unknown}
 */
export function links() {
  return (globalThis).document?.links;
}
/**
 * Returns `doc.links` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function linksFrom(doc) {
  return (doc).links;
}

/**
 * Returns `document.location` from the global context.
 * @returns {unknown}
 */
export function location() {
  return (globalThis).document?.location;
}
/**
 * Returns `doc.location` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function locationFrom(doc) {
  return (doc).location;
}

/**
 * Calls `document.moveBefore()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function moveBefore(...args) {
  return (globalThis).document?.moveBefore(...args);
}
/**
 * Calls `doc.moveBefore()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function moveBeforeFrom(doc, ...args) {
  return (doc).moveBefore(...args);
}

/**
 * Calls `document.mozSetImageElement()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function mozSetImageElement(...args) {
  return (globalThis).document?.mozSetImageElement(...args);
}
/**
 * Calls `doc.mozSetImageElement()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function mozSetImageElementFrom(doc, ...args) {
  return (doc).mozSetImageElement(...args);
}

/**
 * Calls `document.open()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function open(...args) {
  return (globalThis).document?.open(...args);
}
/**
 * Calls `doc.open()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function openFrom(doc, ...args) {
  return (doc).open(...args);
}

/**
 * Returns `document.pictureInPictureElement` from the global context.
 * @returns {unknown}
 */
export function pictureInPictureElement() {
  return (globalThis).document?.pictureInPictureElement;
}
/**
 * Returns `doc.pictureInPictureElement` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function pictureInPictureElementFrom(doc) {
  return (doc).pictureInPictureElement;
}

/**
 * Returns `document.pictureInPictureEnabled` from the global context.
 * @returns {unknown}
 */
export function pictureInPictureEnabled() {
  return (globalThis).document?.pictureInPictureEnabled;
}
/**
 * Returns `doc.pictureInPictureEnabled` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function pictureInPictureEnabledFrom(doc) {
  return (doc).pictureInPictureEnabled;
}

/**
 * Returns `document.plugins` from the global context.
 * @returns {unknown}
 */
export function plugins() {
  return (globalThis).document?.plugins;
}
/**
 * Returns `doc.plugins` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function pluginsFrom(doc) {
  return (doc).plugins;
}

/**
 * Returns `document.pointerLockElement` from the global context.
 * @returns {unknown}
 */
export function pointerLockElement() {
  return (globalThis).document?.pointerLockElement;
}
/**
 * Returns `doc.pointerLockElement` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function pointerLockElementFrom(doc) {
  return (doc).pointerLockElement;
}

/**
 * Calls `document.prepend()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function prepend(...args) {
  return (globalThis).document?.prepend(...args);
}
/**
 * Calls `doc.prepend()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function prependFrom(doc, ...args) {
  return (doc).prepend(...args);
}

/**
 * Returns `document.prerendering` from the global context.
 * @returns {unknown}
 */
export function prerendering() {
  return (globalThis).document?.prerendering;
}
/**
 * Returns `doc.prerendering` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function prerenderingFrom(doc) {
  return (doc).prerendering;
}

/**
 * Calls `document.queryCommandEnabled()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function queryCommandEnabled(...args) {
  return (globalThis).document?.queryCommandEnabled(...args);
}
/**
 * Calls `doc.queryCommandEnabled()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function queryCommandEnabledFrom(doc, ...args) {
  return (doc).queryCommandEnabled(...args);
}

/**
 * Calls `document.queryCommandState()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function queryCommandState(...args) {
  return (globalThis).document?.queryCommandState(...args);
}
/**
 * Calls `doc.queryCommandState()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function queryCommandStateFrom(doc, ...args) {
  return (doc).queryCommandState(...args);
}

/**
 * Calls `document.queryCommandSupported()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function queryCommandSupported(...args) {
  return (globalThis).document?.queryCommandSupported(...args);
}
/**
 * Calls `doc.queryCommandSupported()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function queryCommandSupportedFrom(doc, ...args) {
  return (doc).queryCommandSupported(...args);
}

/**
 * Calls `document.querySelector()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function querySelector(...args) {
  return (globalThis).document?.querySelector(...args);
}
/**
 * Calls `doc.querySelector()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function querySelectorFrom(doc, ...args) {
  return (doc).querySelector(...args);
}

/**
 * Calls `document.querySelectorAll()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function querySelectorAll(...args) {
  return (globalThis).document?.querySelectorAll(...args);
}
/**
 * Calls `doc.querySelectorAll()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function querySelectorAllFrom(doc, ...args) {
  return (doc).querySelectorAll(...args);
}

/**
 * Returns `document.readyState` from the global context.
 * @returns {unknown}
 */
export function readyState() {
  return (globalThis).document?.readyState;
}
/**
 * Returns `doc.readyState` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function readyStateFrom(doc) {
  return (doc).readyState;
}

/**
 * Returns `document.referrer` from the global context.
 * @returns {unknown}
 */
export function referrer() {
  return (globalThis).document?.referrer;
}
/**
 * Returns `doc.referrer` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function referrerFrom(doc) {
  return (doc).referrer;
}

/**
 * Calls `document.releaseCapture()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function releaseCapture(...args) {
  return (globalThis).document?.releaseCapture(...args);
}
/**
 * Calls `doc.releaseCapture()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function releaseCaptureFrom(doc, ...args) {
  return (doc).releaseCapture(...args);
}

/**
 * Calls `document.replaceChildren()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function replaceChildren(...args) {
  return (globalThis).document?.replaceChildren(...args);
}
/**
 * Calls `doc.replaceChildren()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function replaceChildrenFrom(doc, ...args) {
  return (doc).replaceChildren(...args);
}

/**
 * Calls `document.requestStorageAccess()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function requestStorageAccess(...args) {
  return (globalThis).document?.requestStorageAccess(...args);
}
/**
 * Calls `doc.requestStorageAccess()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function requestStorageAccessFrom(doc, ...args) {
  return (doc).requestStorageAccess(...args);
}

/**
 * Calls `document.requestStorageAccessFor()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function requestStorageAccessFor(...args) {
  return (globalThis).document?.requestStorageAccessFor(...args);
}
/**
 * Calls `doc.requestStorageAccessFor()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function requestStorageAccessForFrom(doc, ...args) {
  return (doc).requestStorageAccessFor(...args);
}

/**
 * Returns `document.scripts` from the global context.
 * @returns {unknown}
 */
export function scripts() {
  return (globalThis).document?.scripts;
}
/**
 * Returns `doc.scripts` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function scriptsFrom(doc) {
  return (doc).scripts;
}

/**
 * Returns `document.scrollingElement` from the global context.
 * @returns {unknown}
 */
export function scrollingElement() {
  return (globalThis).document?.scrollingElement;
}
/**
 * Returns `doc.scrollingElement` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function scrollingElementFrom(doc) {
  return (doc).scrollingElement;
}

/**
 * Calls `document.startViewTransition()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function startViewTransition(...args) {
  return (globalThis).document?.startViewTransition(...args);
}
/**
 * Calls `doc.startViewTransition()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function startViewTransitionFrom(doc, ...args) {
  return (doc).startViewTransition(...args);
}

/**
 * Returns `document.styleSheets` from the global context.
 * @returns {unknown}
 */
export function styleSheets() {
  return (globalThis).document?.styleSheets;
}
/**
 * Returns `doc.styleSheets` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function styleSheetsFrom(doc) {
  return (doc).styleSheets;
}

/**
 * Returns `document.timeline` from the global context.
 * @returns {unknown}
 */
export function timeline() {
  return (globalThis).document?.timeline;
}
/**
 * Returns `doc.timeline` from the provided document.
 * @param {Document} doc
 * @returns {unknown}
 */
export function timelineFrom(doc) {
  return (doc).timeline;
}

/**
 * Returns `document.title` from the global context.
 * @returns {(string|undefined)}
 */
export function title() {
  return (globalThis).document?.title;
}
/**
 * Returns `doc.title` from the provided document.
 * @param {Document} doc
 * @returns {(string|undefined)}
 */
export function titleFrom(doc) {
  return (doc).title;
}

/**
 * Returns `document.URL` from the global context.
 * @returns {(string|undefined)}
 */
export function URL() {
  return (globalThis).document?.URL;
}
/**
 * Returns `doc.URL` from the provided document.
 * @param {Document} doc
 * @returns {(string|undefined)}
 */
export function URLFrom(doc) {
  return (doc).URL;
}

/**
 * Returns `document.visibilityState` from the global context.
 * @returns {(string|undefined)}
 */
export function visibilityState() {
  return (globalThis).document?.visibilityState;
}
/**
 * Returns `doc.visibilityState` from the provided document.
 * @param {Document} doc
 * @returns {(string|undefined)}
 */
export function visibilityStateFrom(doc) {
  return (doc).visibilityState;
}

/**
 * Calls `document.write()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function write(...args) {
  return (globalThis).document?.write(...args);
}
/**
 * Calls `doc.write()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function writeFrom(doc, ...args) {
  return (doc).write(...args);
}

/**
 * Calls `document.writeln()` from the global context.
 * @param {...any} args
 * @returns {unknown}
 */
export function writeln(...args) {
  return (globalThis).document?.writeln(...args);
}
/**
 * Calls `doc.writeln()` on the provided document.
 * @param {Document} doc
 * @param {...any} args
 * @returns {unknown}
 */
export function writelnFrom(doc, ...args) {
  return (doc).writeln(...args);
}
