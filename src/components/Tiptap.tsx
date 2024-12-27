import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { ColorHighlight } from '../extensions/ColorHighlight';
import { EditorToolbar } from './EditorToolbar';

export default function Tiptap() {
  const editor = useEditor({
    extensions: [StarterKit, ColorHighlight],
    content: '<p>Try selecting some text and highlighting it!</p>',
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
      },
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <EditorToolbar editor={editor} />
        <EditorContent editor={editor} className="min-h-[200px]" />
      </div>
    </div>
  );
}