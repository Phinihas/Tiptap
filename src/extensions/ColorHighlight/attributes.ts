export const highlightAttributes = {
  color: {
    default: 'yellow',
    parseHTML: (element: HTMLElement) => element.getAttribute('data-color') || 'yellow',
    renderHTML: (attributes: { color: string }) => ({
      'data-color': attributes.color,
      style: `background-color: ${attributes.color}`,
    }),
  },
};