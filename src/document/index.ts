export function Document(): unknown {
  return (globalThis as any).Document;
}

export function activeElement(): unknown {
  return (globalThis as any).document?.activeElement;
}

export function adoptedStyleSheets(): unknown {
  return (globalThis as any).document?.adoptedStyleSheets;
}

export function body(): unknown {
  return (globalThis as any).document?.body;
}

export function characterSet(): string | undefined {
  return (globalThis as any).document?.characterSet;
}
