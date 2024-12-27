import { Extension, Mark } from '@tiptap/core';
import { Plugin, PluginKey } from '@tiptap/pm/state';
import { HighlightColor } from '../types/editor';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    colorHighlight: {
      /**
       * Set a highlight mark
       */
      setHighlight: (color: HighlightColor) => ReturnType;
      /**
       * Unset a highlight mark
       */
      unsetHighlight: () => ReturnType;
    };
  }
}

export const ColorHighlight = Mark.create({
  name: 'highlight',

  addOptions() {
    return {
      multicolor: true,
      HTMLAttributes: {},
    };
  },

  addAttributes() {
    return {
      color: {
        default: 'yellow',
        parseHTML: element => element.getAttribute('data-color') || 'yellow',
        renderHTML: attributes => ({
          'data-color': attributes.color,
          style: `background-color: ${attributes.color}`,
        }),
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'mark[data-color]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['mark', HTMLAttributes, 0];
  },

  addCommands() {
    return {
      setHighlight:
        (color: HighlightColor) =>
        ({ commands }) => {
          return commands.setMark(this.name, { color });
        },
      unsetHighlight:
        () =>
        ({ commands }) => {
          return commands.unsetMark(this.name);
        },
    };
  },
});