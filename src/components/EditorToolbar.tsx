import { Editor } from '@tiptap/react';
import { Highlighter, X } from 'lucide-react';
import { HIGHLIGHT_COLORS } from '../constants/colors';

interface EditorToolbarProps {
  editor: Editor;
}

export function EditorToolbar({ editor }: EditorToolbarProps) {
  return (
    <div className="mb-4 flex items-center gap-2 border-b pb-4">
      <button
        onClick={() => editor.chain().focus().unsetHighlight().run()}
        className="p-2 rounded hover:bg-gray-100"
        title="Remove highlight"
      >
        <X className="w-5 h-5" />
      </button>
      {HIGHLIGHT_COLORS.map((color) => (
        <button
          key={color}
          onClick={() => editor.chain().focus().setHighlight(color).run()}
          className="p-2 rounded hover:bg-gray-100 relative group"
          title={`Highlight ${color}`}
        >
          <Highlighter className="w-5 h-5" style={{ color }} />
          <span
            className="absolute inset-0 opacity-20 group-hover:opacity-30"
            style={{ backgroundColor: color }}
          />
        </button>
      ))}
    </div>
  );
}