import { Component, OnInit } from '@angular/core';
import { diff } from 'deep-diff';
//import { diff } from 'just-diff';

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightSearch2',
})
export class HighlightSearchPipe2 implements PipeTransform {
  transform(value: any, results: any, path: any, displayName: any): any {
    if (!results) {
      return value;
    }

    //value = value.map(x => x.name).join(', ')

    console.log('value', value);
    console.log('path', path);

    const samePaths = results.filter(x => JSON.stringify(x.path) == JSON.stringify(path));
    if (samePaths.length > 0) {
      
      // Loop through these and work out what to display with this list
      // samePaths.forEach(path => {
      //   if (path.item.kind === 'D') {
      //     console.log('Deleted');
      //     // Add these deleted items to the list but display them in blue
      //     value = value + (`<span class='deleted'>, ${path.item.lhs.name}</span>`)
      //   }
      // });  

      // If there are any then we can just return the whole list as "edited"
      value = `<span class='highlight'> ${ value.map(x => x[displayName]).join(', ') }</span>`;
    }
  
    return value;
  }
}

@Pipe({
  name: 'highlightSearch',
})
export class HighlightSearchPipe implements PipeTransform {
  transform(value: any, results: any, path: any): any {
    if (!results) {
      return value;
    }

    const samePaths = results.filter(x => JSON.stringify(x.path) == JSON.stringify(path));
    if (samePaths.length > 0) {
      return value.replace(value, `<span class='highlight'>${value}</span>`);
    }

    return value;
  }
}

@Component({
  selector: 'app-testing20',
  templateUrl: './testing20.component.html',
  styleUrls: ['./testing20.component.scss']
})
export class Testing20Component implements OnInit {

  model1: any =   {
    "_id": "61afd2b126d520b5c17e3219",
    "index": 0,
    "guid": "fe1bf33b-743b-4ab2-8e82-cbab901e2aaa",
    "isActive": true,
    "balance": "$1,268.34",
    "picture": "http://placehold.it/32x32",
    "age": 20,
    "eyeColor": "green",
    "name": "Shelley Boooooooooooooooooone",
    "gender": "female",
    "company": "BIOSPAN",
    "email": "shelleyboone@biospan.com",
    "phone": "+1 (973) 490-2158",
    "address": "175 Kossuth Place, Sandston, Arkansas, 5933",
    "about": "Deserunt consectetur sunt non incididunt dolor consequat Lorem deserunt ullamco nisi reprehenderit. Do eiusmod labore ad incididunt. Cillum labore ut adipisicing magna dolor esse reprehenderit et. Id eu sunt sunt ad officia commodo minim sint do culpa. Commodo proident consectetur aliqua sunt.\r\n",
    "registered": "2019-01-31T02:24:30 -00:00",
    "latitude": 26.692526,
    "longitude": 159.961879,
    "tags": [
      "culpa",
      "do",
      "nisi",
      "cupidatat",
      "sunt",
      "esse",
      "nostrud"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Salazar Howard"
      },
      {
        "id": 1,
        "name": "Chan Hatfield"
      },
      {
        "id": 2,
        "name": "Stuart Hodges"
      }
    ],
    "greeting": "Hello, Shelley Boone! You have 2 unread messages.",
    "test": "This is a mtest message",
    "favoriteFruit": "banana"
  }

  model2: any =   {
    "_id": "1234567",
    "index": 0,
    "guid": "fe1bf33b-743b-4ab2-8e82-cbab901e2aaa",
    "isActive": true,
    "balance": "$1,268.34",
    "picture": "http://placehold.it/32x32_new",
    "age": 20,
    "eyeColor": "green",
    "name": "Shelley Boone",
    "gender": "female",
    "company": "BIOSPAN",
    "email": "shelleyboone@biospan.com",
    "phone": "+1 (973) 490-2158",
    "address": "175 Kossuth Place, Sandston, Arkansas, 5933",
    "about": "Deserunt consectetur sunt non incididunt dolor consequat Lorem deserunt ullamco nisi reprehenderit. Do eiusmod labore ad incididunt. Cillum labore ut adipisicing magna dolor esse reprehenderit et. Id eu sunt sunt ad officia commodo minim sint do culpa. Commodo proident consectetur aliqua sunt.\r\n",
    "registered": "2019-01-31T02:24:30 -00:00",
    "latitude": 26.692526,
    "longitude": 159.961879,
    "tags": [
      "do",
      "cupidatat",
      "sunt",
      "esse",
      "nostrud"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Salazar Howard"
      },
      {
        "id": 2,
        "name": "Stuart Hodges"
      }
    ],
    "greeting": "This great has changed",
    "favoriteFruit": "banana"
  }

  result: any;

  constructor() { }

  ngOnInit(): void {
    this.result = diff(this.model1, this.model2);
    console.log(this.result);
  }

}
