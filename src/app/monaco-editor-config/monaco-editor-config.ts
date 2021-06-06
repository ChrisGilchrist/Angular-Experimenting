import { NgxMonacoEditorConfig } from 'ngx-monaco-editor';
import './monaco-editor-loader';

declare let monaco: any;

export function myMonacoLoad() {
  monaco.languages.register({ id: 'dummy' });
  monaco.languages.registerCompletionItemProvider('dummy', {
    provideCompletionItems: () => {
      var suggestions = [
        {
          label: 'simpleText',
          kind: monaco.languages.CompletionItemKind.Text,
          insertText: '<reims></reims>',
        },
        {
          label: 'testing',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'testing(${1:condition})',
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
        },
        {
          label: 'ifelse',
          kind: monaco.languages.CompletionItemKind.Snippet,
          insertText: ['if (${1:condition}) {', '\t$0', '} else {', '\t', '}'].join('\n'),
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'If-Else Statement',
        },
      ];
      return { suggestions: suggestions };
    },
  });
}
export const monacoConfig: NgxMonacoEditorConfig = {
  baseUrl: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.23.0/min/vs/loader.min.js',
  onMonacoLoad: myMonacoLoad,
};
