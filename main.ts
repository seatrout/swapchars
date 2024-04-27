import { Editor, MarkdownView, Plugin } from 'obsidian';

// Remember to rename these classes and interfaces!


export default class ACB_class extends Plugin {

	async onload() {
		
		
		// This adds an editor command that can perform some operation on the current editor instance
		this.addCommand({
			id: 'acb-swapchars',
			name: 'SwapChars',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				console.log(editor.getSelection());
				const cursor = editor.getCursor();
				const line = editor.getLine(cursor.line);
				const char1 = line.charAt(cursor.ch);
				console.log(char1);
				const char2 = line.charAt(cursor.ch + 1);
				console.log(char2);
				editor.replaceRange(char2+char1, {line: cursor.line, ch: cursor.ch}, {line: cursor.line, ch: cursor.ch + 1});
			}
		});

	}
	onunload() {
		console.log('unloading plugin');
	}
}
