import { Editor, MarkdownView, Plugin } from 'obsidian';


export default class ACB_class extends Plugin {

	async onload() {
		this.addCommand({
			id: 'acb-swapchars',
			name: 'SwapChars',
			icon: 'arrow-left-right',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				const cursor = editor.getCursor();
				const line = editor.getLine(cursor.line);
				const char1 = line.charAt(cursor.ch-1);
				const char2 = line.charAt(cursor.ch);
				//console.log("ORiginal pair is " + char1 + char2);
				//console.log("New pair is " + char2 + char1);
				editor.replaceRange(char2+char1, {line: cursor.line, ch: cursor.ch-1}, {line: cursor.line, ch: cursor.ch+1});
				editor.setCursor({line: cursor.line, ch: cursor.ch});
			}
		});

	}
	onunload() {
		console.log('unloading plugin');
	}
}
