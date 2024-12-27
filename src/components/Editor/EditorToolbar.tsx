import { Editor } from '@tiptap/react';
import { HIGHLIGHT_COLORS } from '../../constants/editor';
import { HighlightButton } from './HighlightButton';
import { RemoveHighlightButton } from './RemoveHighlightButton';

interface EditorToolbarProps {
  editor: Editor;
}

export function EditorToolbar({ editor }: EditorToolbarProps) {
  return (
    <div className="mb-4 flex items-center gap-2 border-b pb-4">
      <RemoveHighlightButton editor={editor} />
      {HIGHLIGHT_COLORS.map((color) => (
        <HighlightButton key={color} color={color} editor={editor} />
      ))}
    </div>
  );
}