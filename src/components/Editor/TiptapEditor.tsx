import { useEditor, EditorContent } from '@tiptap/react';
import { useEditorConfig } from '../../hooks/useEditorConfig';
import { EditorToolbar } from './EditorToolbar';

export function TiptapEditor() {
  const { extensions, editorProps } = useEditorConfig();
  
  const editor = useEditor({
    extensions,
    content: '<p>Try selecting some text and highlighting it!</p>',
    editorProps: {
      ...editorProps,
      attributes: {
        ...editorProps.attributes,
        class: `${editorProps.attributes.class} transition-all duration-200`,
      },
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="editor-container">
      <div className="editor-wrapper">
        <EditorToolbar editor={editor} />
        <EditorContent editor={editor} className="min-h-[200px] focus-within:shadow-lg transition-shadow duration-300" />
      </div>
    </div>
  );
}