import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Testing10Component } from '../testing10/testing10.component';
import { MockData } from '../monaco-editor-config/mock-data';
import { DiffEditorModel } from 'ngx-monaco-editor';
import * as YAML from 'yaml'

@Component({
  selector: 'app-testing11',
  templateUrl: './testing11.component.html',
  styleUrls: ['./testing11.component.scss']
})
export class Testing11Component implements OnInit {

  closeResult: any;

  mockData: MockData = new MockData();

  editor: any;

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

  language = 'yaml';
  theme = 'light';
  compareMode = false;
  inlineDiff = false;

  constructor(private modalService: NgbModal) { }

  editorOptions = {
    theme: 'vs-light', 
    language: 'yaml', 
    readOnly: false,
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

  ngOnInit(): void {
    this.code = this.mockData.getMockJson();

    //this.originalModel.code = JSON.stringify(this.user, undefined, 4);
    this.modifiedModel.code = YAML.stringify(this.user);
    this.originalModel.code = YAML.stringify(this.user);

    //this.originalModel.code = this.mockData.compObjOne();
    //this.modifiedModel.code = this.mockData.compObjTwo();
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
    this.editorOptions = {...this.editor, language: this.language};
    Object.assign({}, this.editorOptions, {language: this.language});
  }

  themeSelected(): void {
    this.editorOptions = {...this.editorOptions, theme: this.theme};
    Object.assign({}, this.editorOptions, {theme: this.theme});
  }

  onChangeInline(): void {
    this.editorOptions = Object.assign({}, this.editorOptions, { renderSideBySide: true });
  }






  open(content): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'xl'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  open2(): void {
    const modalRef = this.modalService.open(Testing10Component);
    modalRef.componentInstance.name = 'World';
  }

  onInit(editor): void {
    console.log(editor)
    this.editor = editor;
    editor.trigger('format', 'editor.action.format');
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
