import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-preview',
  templateUrl: './code-preview.component.html',
  styleUrls: ['./code-preview.component.scss']
})
export class CodePreviewComponent implements OnInit {

  @Input() activeTab: Number;
  @Input() hideCodePreview = false;

  constructor() { }

  ngOnInit(): void {
  }

}
