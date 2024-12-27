import { Editor } from '@tiptap/react';
import { Highlighter } from 'lucide-react';
import { HighlightColor } from '../../types/editor';
import { cn } from '../../utils/className';
import { useHighlightCommands } from '../../hooks/useHighlightCommands';

interface HighlightButtonProps {
  color: HighlightColor;
  editor: Editor;
}

export function HighlightButton({ color, editor }: HighlightButtonProps) {
  const { setHighlight, isHighlighted } = useHighlightCommands(editor);

  return (
    <button
      onClick={() => setHighlight(color)}
      className={cn(
        'toolbar-button relative group',
        isHighlighted(color) && 'bg-gray-100'
      )}
      title={`Highlight ${color}`}
    >
      <Highlighter 
        className={cn(
          'w-5 h-5 transition-transform duration-200',
          'group-hover:rotate-12'
        )} 
        style={{ color }} 
      />
      <span
        className={cn(
          'absolute inset-0 opacity-20 rounded',
          'group-hover:opacity-30 transition-opacity duration-200'
        )}
        style={{ backgroundColor: color }}
      />
    </button>
  );
}