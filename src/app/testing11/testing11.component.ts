import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Testing10Component } from '../testing10/testing10.component';
import { MockData } from '../monaco-editor-config/mock-data';
import { DiffEditorModel } from 'ngx-monaco-editor';

@Component({
  selector: 'app-testing11',
  templateUrl: './testing11.component.html',
  styleUrls: ['./testing11.component.scss']
})
export class Testing11Component implements OnInit {

  closeResult: any;

  mockData: MockData = new MockData();

  editor: any;

  constructor(private modalService: NgbModal) { }

  editorOptions = {
    theme: 'vs-light', 
    language: 'json', 
    readOnly: false,
    minimap: { enabled: false },
    lineNumbers: false
  };
  code: string= 'function x() {\nconsole.log("Hello world!");\n}';

   originalModel: DiffEditorModel = {
    code: 'heLLo world!',
    language: 'json'
  };
 
  modifiedModel: DiffEditorModel = {
    code: 'hello orlando!',
    language: 'json'
  };

  ngOnInit(): void {
    this.code = this.mockData.getMockJson();

    this.originalModel.code = this.mockData.compObjOne();
    this.modifiedModel.code = this.mockData.compObjTwo();
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
