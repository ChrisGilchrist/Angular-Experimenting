import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { faAlignCenter, faAlignLeft, faAlignRight, faBold, faHeading, faImage, faInfo, faInfoCircle, faItalic, faLink, faList, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

export interface Option {
  title: String;
  children: Option[];
}

export enum TextAligns {
  LEFT = 1,
  CENTER,
  RIGHT
};

@Component({
  selector: 'app-testing2',
  templateUrl: './testing2.component.html',
  styleUrls: ['./testing2.component.scss']
})
export class Testing2Component implements OnInit {
  
  editorBody: string = '';

  textAligns = TextAligns;
  alignSetting = this.textAligns.RIGHT;

  faInfo = faInfoCircle;

  icons = [
    faBold,
    faItalic,
    faHeading,
    faList,
    faQuoteLeft,
    faLink,
    faImage,
    faAlignLeft,
    faAlignCenter,
    faAlignRight
  ];

  title = 'Title';

  showMarkdownHelp = false;

  constructor() { }

  ngOnInit(): void {
  }


  // Markdown Rules
  // # <--- Means Header
  // * <--- Bullet point
  // 

  onValueChange(event) {
    this.editorBody = event.target.value;
  }

  public iconClick(icon) {
    switch (icon) {
      case faBold:
        this.editorBody = this.editorBody + '** **'; 
      break;

      case faHeading:
        this.editorBody = this.editorBody + '# '; 
      break;

      case faLink:
        this.editorBody = this.editorBody + '* '; 
      break;

      case faAlignLeft:
        this.alignSetting = this.textAligns.LEFT;
      break;

      case faAlignCenter:
        this.alignSetting = this.textAligns.CENTER;
      break;

      case faAlignRight:
        this.alignSetting = this.textAligns.RIGHT;
      break;
    }
  } 


}
