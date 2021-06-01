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
  baseUrl: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.18.1/min/vs',
  onMonacoLoad: myMonacoLoad,
};
