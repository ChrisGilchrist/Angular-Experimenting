import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testing5',
  templateUrl: './testing5.component.html',
  styleUrls: ['./testing5.component.scss']
})
export class Testing5Component implements OnInit {

  sections = [
    { id: 1, color: this.randomColour() },
    { id: 2, color: this.randomColour() },
    { id: 3, color: this.randomColour() },
    { id: 4, color: this.randomColour() },
  ]

  selectedSection = this.sections[0];


  ngOnInit(): void {
  }

  randomColour() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }

  sectionSelected(section) {
    this.selectedSection = section;
    console.log(window.innerHeight * section.id)
    document.getElementById(section.id).scrollIntoView();
  }

}
