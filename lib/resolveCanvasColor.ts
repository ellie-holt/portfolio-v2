export function resolveCanvasColor(
  canvas: HTMLCanvasElement,
  color: string,
): string {
  const trimmedColor = color.trim();

  if (trimmedColor.length === 0) {
    return trimmedColor;
  }

  const computedStyle = getComputedStyle(canvas);

  if (trimmedColor === "currentColor") {
    return computedStyle.color || trimmedColor;
  }

  const cssVariableMatch = trimmedColor.match(
    /^var\(\s*(--[^,\s)]+)\s*(?:,\s*(.+))?\)$/,
  );

  if (!cssVariableMatch) {
    return trimmedColor;
  }

  const [, variableName, fallbackColor] = cssVariableMatch;
  const resolvedValue =
    computedStyle.getPropertyValue(variableName).trim() ||
    getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();

  if (resolvedValue) {
    return resolvedValue;
  }

  return fallbackColor
    ? resolveCanvasColor(canvas, fallbackColor.trim())
    : trimmedColor;
}
