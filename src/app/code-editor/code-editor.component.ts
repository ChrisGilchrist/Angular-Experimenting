import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DiffEditorModel } from 'ngx-monaco-editor';
import * as YAML from 'yaml'
import { BottomPanelService } from '../bottom-panel.service';
import { MockData } from '../monaco-editor-config/mock-data';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements OnInit {


  user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }

  mockData: MockData = new MockData();

  language = 'yaml';
  theme = 'light';
  compareMode = false;
  inlineDiff = true;

  editorOptions = {
    theme: 'vs-light', 
    language: 'yaml', 
    readOnly: false,
    renderSideBySide: this.inlineDiff,
    minimap: { enabled: false },
    lineNumbers: false
  };
  code: string= 'function x() {\nconsole.log("Hello world!");\n}';

   originalModel: DiffEditorModel = {
    code: 'heLLo world!',
    language: 'yaml'
  };
 
  modifiedModel: DiffEditorModel = {
    code: 'hello orlando!',
    language: 'yaml'
  };


  constructor(public bottomPanelService: BottomPanelService) {
  }

  ngOnInit(): void {
    this.code = this.mockData.getMockJson();
    this.modifiedModel.code = YAML.stringify(this.user);
    this.originalModel.code = YAML.stringify(this.user);
  }

  languageSelected(): void {

    switch(this.language) {
      case 'json':
        let parse = YAML.parse(this.modifiedModel.code);
        this.modifiedModel = Object.assign({}, this.modifiedModel, { code: JSON.stringify(parse, undefined, 4) });
        let parse2 = YAML.parse(this.originalModel.code);
        this.originalModel = Object.assign({}, this.originalModel, { code: JSON.stringify(parse2, undefined, 4) });
        break;

      case 'yaml':
        let parse3 = JSON.parse(this.modifiedModel.code);
        this.modifiedModel = Object.assign({}, this.modifiedModel, { code: YAML.stringify(parse3) });
        let parse4 = JSON.parse(this.originalModel.code);
        this.originalModel = Object.assign({}, this.originalModel, { code: YAML.stringify(parse4) });
        break;
    }

    this.originalModel = {...this.originalModel, language: this.language}
    this.modifiedModel = {...this.modifiedModel, language: this.language}
    this.editorOptions = {...this.editorOptions, language: this.language};
    Object.assign({}, this.editorOptions, {language: this.language});
  }

  themeSelected(): void {
    this.editorOptions = {...this.editorOptions, theme: this.theme};
    Object.assign({}, this.editorOptions, {theme: this.theme});
  }

  onChangeInline(): void {
    this.editorOptions = Object.assign({}, this.editorOptions, { renderSideBySide: this.inlineDiff });
  }

}
