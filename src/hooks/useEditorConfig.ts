import StarterKit from '@tiptap/starter-kit';
import { ColorHighlight } from '../extensions/ColorHighlight';
import { EDITOR_CLASS } from '../constants/editor';
import type { EditorConfig } from '../types/editor';

export function useEditorConfig(): EditorConfig {
  return {
    extensions: [StarterKit, ColorHighlight],
    editorProps: {
      attributes: {
        class: EDITOR_CLASS,
      },
    },
  };
}