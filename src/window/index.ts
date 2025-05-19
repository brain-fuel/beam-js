export function caches(): unknown {
  return (globalThis as any).caches;
}

export function clientInformation(): unknown {
  return (globalThis as any).clientInformation;
}

export function closed(): boolean {
  return (globalThis as any).closed;
}

export function cookieStore(): unknown {
  return (globalThis as any).cookieStore;
}

export function credentialless(): boolean {
  return (globalThis as any).credentialless;
}
