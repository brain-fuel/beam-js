export function addEventListener(...args) {
  return (globalThis).addEventListener(...args);
}
export function addEventListenerTo(target, ...args) {
  return (target).addEventListener(...args);
}

export function dispatchEvent(...args) {
  return (globalThis).dispatchEvent(...args);
}
export function dispatchEventTo(target, ...args) {
  return (target).dispatchEvent(...args);
}

export function removeEventListener(...args) {
  return (globalThis).removeEventListener(...args);
}
export function removeEventListenerFrom(target, ...args) {
  return (target).removeEventListener(...args);
}

