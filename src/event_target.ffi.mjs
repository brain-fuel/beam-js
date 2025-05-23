/**
 * Calls `window.addEventListener()` from the global context.
 * @param {...any} args
 * @returns {void}
 */
export function addEventListener(...args) {
  return (globalThis).addEventListener(...args);
}
/**
 * Calls `target.addEventListener()` on the provided target.
 * @param {EventTarget} target
 * @param {...any} args
 * @returns {void}
 */
export function addEventListenerTo(target, ...args) {
  return (target).addEventListener(...args);
}

/**
 * Calls `globalThis.dispatchEvent()` from the global context.
 * @param {...any} args
 * @returns {boolean}
 */
export function dispatchEvent(...args) {
  return (globalThis).dispatchEvent(...args);
}
/**
 * Calls `target.dispatchEvent()` on the provided target.
 * @param {EventTarget} target
 * @param {...any} args
 * @returns {boolean}
 */
export function dispatchEventTo(target, ...args) {
  return (target).dispatchEvent(...args);
}

/**
 * Calls `globalThis.removeEventListener()` from the global context.
 * @param {...any} args
 * @returns {void}
 */
export function removeEventListener(...args) {
  return (globalThis).removeEventListener(...args);
}
/**
 * Calls `target.removeEventListener()` on the provided target.
 * @param {EventTarget} target
 * @param {...any} args
 * @returns {void}
 */
export function removeEventListenerFrom(target, ...args) {
  return (target).removeEventListener(...args);
}

