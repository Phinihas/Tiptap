# Tiptap Custom Extension with ReactJS

This project demonstrates how to create a custom Tiptap extension in ReactJS to add text highlighting functionality. The implementation includes modular components, TypeScript integration, and animations to enhance the user experience.

## Features

- **Custom Tiptap Extension**: Adds a `highlight` mark for text highlighting.
- **Multiple Highlight Colors**: Supports various colors for text highlights.
- **Remove Highlight**: Easily remove text highlights with a dedicated button.
- **Animations and Effects**: Smooth transitions, hover effects, and gradient backgrounds.
- **Modular Architecture**: Clean separation of concerns and reusable components.
- **TypeScript Integration**: Strong typing for better maintainability.
- **Responsive UI**: Professional styling with responsive designs.

## Project Structure

### Key Files and Directories

- `src/extensions/ColorHighlight/`
  - `index.ts`: Core functionality of the highlight extension.
  - `attributes.ts`: Attribute definitions for the extension.
  - `types.ts`: Type definitions for the extension.

- `src/components/Editor/`
  - `TiptapEditor.tsx`: Main editor component integrating the Tiptap editor.
  - `EditorToolbar.tsx`: Toolbar with color buttons for highlighting.
  - `HighlightButton.tsx`: Button for applying specific highlight colors.
  - `RemoveHighlightButton.tsx`: Button for removing highlights.

- `src/constants/editor.ts`: Centralized constants for editor configuration.
- `src/hooks/useEditorConfig.ts`: Custom hook for editor setup.
- `src/hooks/useHighlightCommands.ts`: Commands for managing highlights.
- `src/utils/className.ts`: Utility for handling conditional class names.
- `src/index.css`: Styles and animations for the project.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-folder>

2. Install dependencies: npm install

3. Start the development server: npm run dev

