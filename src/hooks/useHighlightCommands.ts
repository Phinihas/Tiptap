import { Editor } from '@tiptap/react';
import { HighlightColor } from '../types/editor';

export function useHighlightCommands(editor: Editor) {
  const setHighlight = (color: HighlightColor) => {
    editor.chain().focus().setHighlight(color).run();
    
    // Add highlight animation to the selected text
    const marks = document.querySelectorAll('mark[data-color]');
    marks.forEach(mark => {
      mark.classList.add('highlight-animation');
      mark.addEventListener('animationend', () => {
        mark.classList.remove('highlight-animation');
      }, { once: true });
    });
  };

  const removeHighlight = () => {
    editor.chain().focus().unsetHighlight().run();
  };

  const isHighlighted = (color?: HighlightColor) => {
    return editor.isActive('highlight', color ? { color } : {});
  };

  return {
    setHighlight,
    removeHighlight,
    isHighlighted,
  };
}