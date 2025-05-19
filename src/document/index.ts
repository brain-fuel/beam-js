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

export function childElementCount(): number | undefined {
  return (globalThis as any).document?.childElementCount;
}

export function children(): unknown {
  return (globalThis as any).document?.children;
}

export function compatMode(): string | undefined {
  return (globalThis as any).document?.compatMode;
}

export function contentType(): string | undefined {
  return (globalThis as any).document?.contentType;
}

export function currentScript(): unknown {
  return (globalThis as any).document?.currentScript;
}

export function doctype(): unknown {
  return (globalThis as any).document?.doctype;
}

export function documentElement(): unknown {
  return (globalThis as any).document?.documentElement;
}

export function documentURI(): string | undefined {
  return (globalThis as any).document?.documentURI;
}

export function embeds(): unknown {
  return (globalThis as any).document?.embeds;
}

export function featurePolicy(): unknown {
  return (globalThis as any).document?.featurePolicy;
}

export function firstElementChild(): unknown {
  return (globalThis as any).document?.firstElementChild;
}

export function fonts(): unknown {
  return (globalThis as any).document?.fonts;
}

export function forms(): unknown {
  return (globalThis as any).document?.forms;
}

export function fragmentDirective(): unknown {
  return (globalThis as any).document?.fragmentDirective;
}

export function fullscreenElement(): unknown {
  return (globalThis as any).document?.fullscreenElement;
}
