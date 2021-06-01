import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

class Module {
  name: string;
  credits: number;
  courseworks: Coursework[];
}

class Coursework {
  name: string;
  weighing: number;
  grade: number;
}


@Component({
  selector: 'app-testing8',
  templateUrl: './testing8.component.html',
  styleUrls: ['./testing8.component.scss']
})
export class Testing8Component implements OnInit {

  form: FormGroup;

  selectedModule: Module;

  moduleName: string;
  moduleWeighing: number;

  courseworkName: string;
  courseworkWeighing: number;
  courseworkGrade: number;

  constructor(private fb: FormBuilder) { }

  lengthOfCourse: number;

  modules: Module[] = [
    {
      name: 'Project Management',
      credits: 20,
      courseworks: [
        {
          name: 'Coursework One',
          weighing: 25,
          grade: 70
        },
        {
          name: 'Coursework Two',
          weighing: 75,
          grade: 55
        }
      ]
    },
    {
      name: 'Dissertation',
      credits: 60,
      courseworks: [
        {
          name: 'Report',
          weighing: 100,
          grade: 80
        }
      ]
    }
  ]

  ngOnInit(): void {
  }

  initForm(): void {
  }

  addModule(): void {

  }

}
