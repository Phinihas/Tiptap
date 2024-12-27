import { Editor } from '@tiptap/react';
import { X } from 'lucide-react';
import { cn } from '../../utils/className';
import { useHighlightCommands } from '../../hooks/useHighlightCommands';

interface RemoveHighlightButtonProps {
  editor: Editor;
}

export function RemoveHighlightButton({ editor }: RemoveHighlightButtonProps) {
  const { removeHighlight, isHighlighted } = useHighlightCommands(editor);

  return (
    <button
      onClick={removeHighlight}
      className={cn(
        'toolbar-button',
        !isHighlighted() && 'opacity-50'
      )}
      title="Remove highlight"
    >
      <X className={cn(
        'w-5 h-5 transition-transform duration-200',
        'hover:rotate-90'
      )} />
    </button>
  );
}