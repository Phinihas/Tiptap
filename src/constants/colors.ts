export const HIGHLIGHT_COLORS = ['yellow', 'red', 'green', 'blue', 'purple'] as const;

export type HighlightColor = (typeof HIGHLIGHT_COLORS)[number];