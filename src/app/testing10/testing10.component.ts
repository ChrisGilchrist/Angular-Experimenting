import { Component, OnInit } from '@angular/core';

class TreeNode {
  id: number;
  children: TreeNode[];
  locked: boolean;
}

@Component({
  selector: 'app-testing10',
  templateUrl: './testing10.component.html',
  styleUrls: ['./testing10.component.scss']
})
export class Testing10Component implements OnInit {

  path: number[] = [];
  tree: TreeNode;
  pathLevelCount = -1;

  editorOptions = {theme: 'vs-dark', language: 'javascript'};
  code: string= 'function x() {\nconsole.log("Hello world!");\n}';

  constructor() { }

  ngOnInit(): void {

    this.path = [8, 22, 23, 24];

    this.tree =
    {
      id: 10,
      children: [

        {
          id: 1,
          children: [],
          locked: false
        },
        {
          id: 2,
          children: [
            {
              id: 3,
              children: [
                {
                  id: 4,
                  children: [],
                  locked: false
                }
              ],
              locked: false
            },
            {
              id: 6,
              children: [],
              locked: false
            },
            {
              id: 11,
              children: [],
              locked: false
            }
          ],
          locked: false
        },
        {
          id: 7,
          children: [
            {
              id: 15,
              children: [],
              locked: false
            }
          ],
          locked: false
        },
        {
          id: 8,
          children: [
            {
              id: 21,
              children: [],
              locked: false
            },
            {
              id: 22,
              children: [
                {
                  id: 23,
                  children: [
                    {
                      id: 24,
                      children: [],
                      locked: false
                    },
                    {
                      id: 25,
                      children: [],
                      locked: false
                    }
                  ],
                  locked: false
                }
              ],
              locked: false
            }
          ],
          locked: false
        }

      ],
      locked: false
    }

    this.accessLockTree(this.tree);
  }


  accessLockTree(item: TreeNode) {

    this.pathLevelCount = this.pathLevelCount + 1;

    item.children.forEach(child => {
      if (child.id === this.path[this.pathLevelCount]) {
        // We found it
        child.locked = true;
        this.accessLockTree(child);
      }
    });

  }

}



