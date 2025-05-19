export function Document(): unknown {
  return (globalThis as any).Document;
}

export function activeElement(): unknown {
  return (globalThis as any).document?.activeElement;
}
export function activeElementFrom(doc: any): unknown {
  return (doc as any).activeElement;
}

export function adoptedStyleSheets(): unknown {
  return (globalThis as any).document?.adoptedStyleSheets;
}
export function adoptedStyleSheetsFrom(doc: any): unknown {
  return (doc as any).adoptedStyleSheets;
}

export function adoptNode(...args: any[]): unknown {
  return (globalThis as any).document?.adoptNode(...args);
}
export function adoptNodeFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).adoptNode(...args);
}

export function append(...args: any[]): unknown {
  return (globalThis as any).document?.append(...args);
}
export function appendFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).append(...args);
}

export function body(): unknown {
  return (globalThis as any).document?.body;
}
export function bodyFrom(doc: any): unknown {
  return (doc as any).body;
}

export function browsingTopics(...args: any[]): unknown {
  return (globalThis as any).document?.browsingTopics(...args);
}
export function browsingTopicsFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).browsingTopics(...args);
}

export function caretPositionFromPoint(...args: any[]): unknown {
  return (globalThis as any).document?.caretPositionFromPoint(...args);
}
export function caretPositionFromPointFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).caretPositionFromPoint(...args);
}

export function caretRangeFromPoint(...args: any[]): unknown {
  return (globalThis as any).document?.caretRangeFromPoint(...args);
}
export function caretRangeFromPointFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).caretRangeFromPoint(...args);
}

export function characterSet(): string | undefined {
  return (globalThis as any).document?.characterSet;
}
export function characterSetFrom(doc: any): unknown {
  return (doc as any).characterSet;
}

export function childElementCount(): number | undefined {
  return (globalThis as any).document?.childElementCount;
}
export function childElementCountFrom(doc: any): unknown {
  return (doc as any).childElementCount;
}

export function children(): unknown {
  return (globalThis as any).document?.children;
}
export function childrenFrom(doc: any): unknown {
  return (doc as any).children;
}

export function clear(...args: any[]): unknown {
  return (globalThis as any).document?.clear(...args);
}
export function clearFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).clear(...args);
}

export function close(...args: any[]): unknown {
  return (globalThis as any).document?.close(...args);
}
export function closeFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).close(...args);
}

export function compatMode(): string | undefined {
  return (globalThis as any).document?.compatMode;
}
export function compatModeFrom(doc: any): unknown {
  return (doc as any).compatMode;
}

export function contentType(): string | undefined {
  return (globalThis as any).document?.contentType;
}
export function contentTypeFrom(doc: any): unknown {
  return (doc as any).contentType;
}

export function cookie(): string | undefined {
  return (globalThis as any).document?.cookie;
}
export function cookieFrom(doc: any): unknown {
  return (doc as any).cookie;
}

export function createAttribute(...args: any[]): unknown {
  return (globalThis as any).document?.createAttribute(...args);
}
export function createAttributeFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).createAttribute(...args);
}

export function createAttributeNS(...args: any[]): unknown {
  return (globalThis as any).document?.createAttributeNS(...args);
}
export function createAttributeNSFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).createAttributeNS(...args);
}

export function createCDATASection(...args: any[]): unknown {
  return (globalThis as any).document?.createCDATASection(...args);
}
export function createCDATASectionFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).createCDATASection(...args);
}

export function createComment(...args: any[]): unknown {
  return (globalThis as any).document?.createComment(...args);
}
export function createCommentFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).createComment(...args);
}

export function createDocumentFragment(...args: any[]): unknown {
  return (globalThis as any).document?.createDocumentFragment(...args);
}
export function createDocumentFragmentFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).createDocumentFragment(...args);
}

export function createElement(...args: any[]): unknown {
  return (globalThis as any).document?.createElement(...args);
}
export function createElementFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).createElement(...args);
}

export function createElementNS(...args: any[]): unknown {
  return (globalThis as any).document?.createElementNS(...args);
}
export function createElementNSFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).createElementNS(...args);
}

export function createEvent(...args: any[]): unknown {
  return (globalThis as any).document?.createEvent(...args);
}
export function createEventFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).createEvent(...args);
}

export function createExpression(...args: any[]): unknown {
  return (globalThis as any).document?.createExpression(...args);
}
export function createExpressionFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).createExpression(...args);
}

export function createNodeIterator(...args: any[]): unknown {
  return (globalThis as any).document?.createNodeIterator(...args);
}
export function createNodeIteratorFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).createNodeIterator(...args);
}

export function createNSResolver(...args: any[]): unknown {
  return (globalThis as any).document?.createNSResolver(...args);
}
export function createNSResolverFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).createNSResolver(...args);
}

export function createProcessingInstruction(...args: any[]): unknown {
  return (globalThis as any).document?.createProcessingInstruction(...args);
}
export function createProcessingInstructionFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).createProcessingInstruction(...args);
}

export function createRange(...args: any[]): unknown {
  return (globalThis as any).document?.createRange(...args);
}
export function createRangeFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).createRange(...args);
}

export function createTextNode(...args: any[]): unknown {
  return (globalThis as any).document?.createTextNode(...args);
}
export function createTextNodeFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).createTextNode(...args);
}

export function createTouch(...args: any[]): unknown {
  return (globalThis as any).document?.createTouch(...args);
}
export function createTouchFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).createTouch(...args);
}

export function createTouchList(...args: any[]): unknown {
  return (globalThis as any).document?.createTouchList(...args);
}
export function createTouchListFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).createTouchList(...args);
}

export function createTreeWalker(...args: any[]): unknown {
  return (globalThis as any).document?.createTreeWalker(...args);
}
export function createTreeWalkerFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).createTreeWalker(...args);
}

export function currentScript(): unknown {
  return (globalThis as any).document?.currentScript;
}
export function currentScriptFrom(doc: any): unknown {
  return (doc as any).currentScript;
}

export function defaultView(): unknown {
  return (globalThis as any).document?.defaultView;
}
export function defaultViewFrom(doc: any): unknown {
  return (doc as any).defaultView;
}

export function designMode(): string | undefined {
  return (globalThis as any).document?.designMode;
}
export function designModeFrom(doc: any): unknown {
  return (doc as any).designMode;
}

export function dir(): string | undefined {
  return (globalThis as any).document?.dir;
}
export function dirFrom(doc: any): unknown {
  return (doc as any).dir;
}

export function doctype(): unknown {
  return (globalThis as any).document?.doctype;
}
export function doctypeFrom(doc: any): unknown {
  return (doc as any).doctype;
}

export function documentElement(): unknown {
  return (globalThis as any).document?.documentElement;
}
export function documentElementFrom(doc: any): unknown {
  return (doc as any).documentElement;
}

export function documentURI(): string | undefined {
  return (globalThis as any).document?.documentURI;
}
export function documentURIFrom(doc: any): unknown {
  return (doc as any).documentURI;
}

export function elementsFromPoint(...args: any[]): unknown {
  return (globalThis as any).document?.elementsFromPoint(...args);
}
export function elementsFromPointFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).elementsFromPoint(...args);
}

export function embeds(): unknown {
  return (globalThis as any).document?.embeds;
}
export function embedsFrom(doc: any): unknown {
  return (doc as any).embeds;
}
export function elementFromPoint(...args: any[]): unknown {
  return (globalThis as any).document?.elementFromPoint(...args);
}
export function elementFromPointFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).elementFromPoint(...args);
}

export function enableStyleSheetsForSet(...args: any[]): unknown {
  return (globalThis as any).document?.enableStyleSheetsForSet(...args);
}
export function enableStyleSheetsForSetFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).enableStyleSheetsForSet(...args);
}

export function evaluate(...args: any[]): unknown {
  return (globalThis as any).document?.evaluate(...args);
}
export function evaluateFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).evaluate(...args);
}

export function execCommand(...args: any[]): unknown {
  return (globalThis as any).document?.execCommand(...args);
}
export function execCommandFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).execCommand(...args);
}

export function exitFullscreen(...args: any[]): unknown {
  return (globalThis as any).document?.exitFullscreen(...args);
}
export function exitFullscreenFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).exitFullscreen(...args);
}

export function exitPictureInPicture(...args: any[]): unknown {
  return (globalThis as any).document?.exitPictureInPicture(...args);
}
export function exitPictureInPictureFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).exitPictureInPicture(...args);
}

export function exitPointerLock(...args: any[]): unknown {
  return (globalThis as any).document?.exitPointerLock(...args);
}
export function exitPointerLockFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).exitPointerLock(...args);
}

export function featurePolicy(): unknown {
  return (globalThis as any).document?.featurePolicy;
}
export function featurePolicyFrom(doc: any): unknown {
  return (doc as any).featurePolicy;
}

export function firstElementChild(): unknown {
  return (globalThis as any).document?.firstElementChild;
}
export function firstElementChildFrom(doc: any): unknown {
  return (doc as any).firstElementChild;
}

export function fonts(): unknown {
  return (globalThis as any).document?.fonts;
}
export function fontsFrom(doc: any): unknown {
  return (doc as any).fonts;
}

export function forms(): unknown {
  return (globalThis as any).document?.forms;
}
export function formsFrom(doc: any): unknown {
  return (doc as any).forms;
}

export function fragmentDirective(): unknown {
  return (globalThis as any).document?.fragmentDirective;
}
export function fragmentDirectiveFrom(doc: any): unknown {
  return (doc as any).fragmentDirective;
}

export function fullscreenElement(): unknown {
  return (globalThis as any).document?.fullscreenElement;
}
export function fullscreenElementFrom(doc: any): unknown {
  return (doc as any).fullscreenElement;
}

export function fullscreenEnabled(): boolean | undefined {
  return (globalThis as any).document?.fullscreenEnabled;
}
export function fullscreenEnabledFrom(doc: any): unknown {
  return (doc as any).fullscreenEnabled;
}

export function getAnimations(...args: any[]): unknown {
  return (globalThis as any).document?.getAnimations(...args);
}
export function getAnimationsFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).getAnimations(...args);
}

export function getElementById(...args: any[]): unknown {
  return (globalThis as any).document?.getElementById(...args);
}
export function getElementByIdFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).getElementById(...args);
}

export function getElementsByClassName(...args: any[]): unknown {
  return (globalThis as any).document?.getElementsByClassName(...args);
}
export function getElementsByClassNameFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).getElementsByClassName(...args);
}

export function getElementsByName(...args: any[]): unknown {
  return (globalThis as any).document?.getElementsByName(...args);
}
export function getElementsByNameFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).getElementsByName(...args);
}

export function getElementsByTagName(...args: any[]): unknown {
  return (globalThis as any).document?.getElementsByTagName(...args);
}
export function getElementsByTagNameFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).getElementsByTagName(...args);
}

export function getElementsByTagNameNS(...args: any[]): unknown {
  return (globalThis as any).document?.getElementsByTagNameNS(...args);
}
export function getElementsByTagNameNSFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).getElementsByTagNameNS(...args);
}

export function getSelection(...args: any[]): unknown {
  return (globalThis as any).document?.getSelection(...args);
}
export function getSelectionFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).getSelection(...args);
}

export function hasFocus(...args: any[]): unknown {
  return (globalThis as any).document?.hasFocus(...args);
}
export function hasFocusFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).hasFocus(...args);
}

export function hasStorageAccess(...args: any[]): unknown {
  return (globalThis as any).document?.hasStorageAccess(...args);
}
export function hasStorageAccessFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).hasStorageAccess(...args);
}

export function hasUnpartitionedCookieAccess(...args: any[]): unknown {
  return (globalThis as any).document?.hasUnpartitionedCookieAccess(...args);
}
export function hasUnpartitionedCookieAccessFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).hasUnpartitionedCookieAccess(...args);
}

export function head(): unknown {
  return (globalThis as any).document?.head;
}
export function headFrom(doc: any): unknown {
  return (doc as any).head;
}

export function hidden(): boolean | undefined {
  return (globalThis as any).document?.hidden;
}
export function hiddenFrom(doc: any): unknown {
  return (doc as any).hidden;
}

export function images(): unknown {
  return (globalThis as any).document?.images;
}
export function imagesFrom(doc: any): unknown {
  return (doc as any).images;
}

export function implementation(): unknown {
  return (globalThis as any).document?.implementation;
}
export function implementationFrom(doc: any): unknown {
  return (doc as any).implementation;
}

export function importNode(...args: any[]): unknown {
  return (globalThis as any).document?.importNode(...args);
}
export function importNodeFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).importNode(...args);
}

export function lastElementChild(): unknown {
  return (globalThis as any).document?.lastElementChild;
}
export function lastElementChildFrom(doc: any): unknown {
  return (doc as any).lastElementChild;
}

export function lastModified(): string | undefined {
  return (globalThis as any).document?.lastModified;
}
export function lastModifiedFrom(doc: any): unknown {
  return (doc as any).lastModified;
}

export function links(): unknown {
  return (globalThis as any).document?.links;
}
export function linksFrom(doc: any): unknown {
  return (doc as any).links;
}

export function location(): unknown {
  return (globalThis as any).document?.location;
}
export function locationFrom(doc: any): unknown {
  return (doc as any).location;
}

export function moveBefore(...args: any[]): unknown {
  return (globalThis as any).document?.moveBefore(...args);
}
export function moveBeforeFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).moveBefore(...args);
}

export function mozSetImageElement(...args: any[]): unknown {
  return (globalThis as any).document?.mozSetImageElement(...args);
}
export function mozSetImageElementFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).mozSetImageElement(...args);
}

export function open(...args: any[]): unknown {
  return (globalThis as any).document?.open(...args);
}
export function openFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).open(...args);
}

export function pictureInPictureElement(): unknown {
  return (globalThis as any).document?.pictureInPictureElement;
}
export function pictureInPictureElementFrom(doc: any): unknown {
  return (doc as any).pictureInPictureElement;
}

export function pictureInPictureEnabled(): boolean | undefined {
  return (globalThis as any).document?.pictureInPictureEnabled;
}
export function pictureInPictureEnabledFrom(doc: any): unknown {
  return (doc as any).pictureInPictureEnabled;
}

export function plugins(): unknown {
  return (globalThis as any).document?.plugins;
}
export function pluginsFrom(doc: any): unknown {
  return (doc as any).plugins;
}

export function pointerLockElement(): unknown {
  return (globalThis as any).document?.pointerLockElement;
}
export function pointerLockElementFrom(doc: any): unknown {
  return (doc as any).pointerLockElement;
}

export function prepend(...args: any[]): unknown {
  return (globalThis as any).document?.prepend(...args);
}
export function prependFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).prepend(...args);
}

export function prerendering(): boolean | undefined {
  return (globalThis as any).document?.prerendering;
}
export function prerenderingFrom(doc: any): unknown {
  return (doc as any).prerendering;
}

export function queryCommandEnabled(...args: any[]): unknown {
  return (globalThis as any).document?.queryCommandEnabled(...args);
}
export function queryCommandEnabledFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).queryCommandEnabled(...args);
}

export function queryCommandState(...args: any[]): unknown {
  return (globalThis as any).document?.queryCommandState(...args);
}
export function queryCommandStateFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).queryCommandState(...args);
}

export function queryCommandSupported(...args: any[]): unknown {
  return (globalThis as any).document?.queryCommandSupported(...args);
}
export function queryCommandSupportedFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).queryCommandSupported(...args);
}

export function querySelector(...args: any[]): unknown {
  return (globalThis as any).document?.querySelector(...args);
}
export function querySelectorFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).querySelector(...args);
}

export function querySelectorAll(...args: any[]): unknown {
  return (globalThis as any).document?.querySelectorAll(...args);
}
export function querySelectorAllFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).querySelectorAll(...args);
}

export function readyState(): string | undefined {
  return (globalThis as any).document?.readyState;
}
export function readyStateFrom(doc: any): unknown {
  return (doc as any).readyState;
}

export function referrer(): string | undefined {
  return (globalThis as any).document?.referrer;
}
export function referrerFrom(doc: any): unknown {
  return (doc as any).referrer;
}

export function releaseCapture(...args: any[]): unknown {
  return (globalThis as any).document?.releaseCapture(...args);
}
export function releaseCaptureFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).releaseCapture(...args);
}

export function replaceChildren(...args: any[]): unknown {
  return (globalThis as any).document?.replaceChildren(...args);
}
export function replaceChildrenFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).replaceChildren(...args);
}

export function requestStorageAccess(...args: any[]): unknown {
  return (globalThis as any).document?.requestStorageAccess(...args);
}
export function requestStorageAccessFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).requestStorageAccess(...args);
}

export function requestStorageAccessFor(...args: any[]): unknown {
  return (globalThis as any).document?.requestStorageAccessFor(...args);
}
export function requestStorageAccessForFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).requestStorageAccessFor(...args);
}

export function scripts(): unknown {
  return (globalThis as any).document?.scripts;
}
export function scriptsFrom(doc: any): unknown {
  return (doc as any).scripts;
}

export function scrollingElement(): unknown {
  return (globalThis as any).document?.scrollingElement;
}
export function scrollingElementFrom(doc: any): unknown {
  return (doc as any).scrollingElement;
}

export function startViewTransition(...args: any[]): unknown {
  return (globalThis as any).document?.startViewTransition(...args);
}
export function startViewTransitionFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).startViewTransition(...args);
}

export function styleSheets(): unknown {
  return (globalThis as any).document?.styleSheets;
}
export function styleSheetsFrom(doc: any): unknown {
  return (doc as any).styleSheets;
}

export function timeline(): unknown {
  return (globalThis as any).document?.timeline;
}
export function timelineFrom(doc: any): unknown {
  return (doc as any).timeline;
}

export function title(): string | undefined {
  return (globalThis as any).document?.title;
}
export function titleFrom(doc: any): unknown {
  return (doc as any).title;
}

export function URL(): string | undefined {
  return (globalThis as any).document?.URL;
}
export function URLFrom(doc: any): unknown {
  return (doc as any).URL;
}

export function visibilityState(): unknown {
  return (globalThis as any).document?.visibilityState;
}
export function visibilityStateFrom(doc: any): unknown {
  return (doc as any).visibilityState;
}

export function write(...args: any[]): unknown {
  return (globalThis as any).document?.write(...args);
}
export function writeFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).write(...args);
}

export function writeln(...args: any[]): unknown {
  return (globalThis as any).document?.writeln(...args);
}
export function writelnFrom(doc: any, ...args: any[]): unknown {
  return (doc as any).writeln(...args);
}
