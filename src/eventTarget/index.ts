export function addEventListener(...args: any[]): unknown {
  return (globalThis as any).addEventListener(...args);
}
export function addEventListenerTo(target: any, ...args: any[]): unknown {
  return (target as any).addEventListener(...args);
}

export function dispatchEvent(...args: any[]): unknown {
  return (globalThis as any).dispatchEvent(...args);
}
export function dispatchEventTo(target: any, ...args: any[]): unknown {
  return (target as any).dispatchEvent(...args);
}

export function removeEventListener(...args: any[]): unknown {
  return (globalThis as any).removeEventListener(...args);
}
export function removeEventListenerFrom(target: any, ...args: any[]): unknown {
  return (target as any).removeEventListener(...args);
}

