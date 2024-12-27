import { HIGHLIGHT_COLORS } from '../constants/editor';

export type HighlightColor = (typeof HIGHLIGHT_COLORS)[number];

export interface EditorConfig {
  extensions: any[];
  editorProps: {
    attributes: {
      class: string;
    };
  };
}