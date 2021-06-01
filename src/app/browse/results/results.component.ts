import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  items = [
    {
      url: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/audi-rs5-4-star-car_0.jpg?itok=FA5cAQqo',
      title: 'New Car',
      desc: '1.4l etron TFSI',
      tags: ['NEW', 'COOL', '2017'],
      price: '19,500'
    },

    {
      url: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/audi-rs5-4-star-car_0.jpg?itok=FA5cAQqo',
      title: 'New Car',
      desc: '1.4l etron TFSI',
      tags: ['NEW', 'COOL', '2017'],
      price: '19,500'
    },

    {
      url: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/audi-rs5-4-star-car_0.jpg?itok=FA5cAQqo',
      title: 'New Car',
      desc: '1.4l etron TFSI',
      tags: ['NEW', 'COOL', '2017'],
      price: '19,500'
    },
    {
      url: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/audi-rs5-4-star-car_0.jpg?itok=FA5cAQqo',
      title: 'New Car',
      desc: '1.4l etron TFSI',
      tags: ['NEW', 'COOL', '2017'],
      price: '19,500'
    },

    {
      url: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/audi-rs5-4-star-car_0.jpg?itok=FA5cAQqo',
      title: 'New Car',
      desc: '1.4l etron TFSI',
      tags: ['NEW', 'COOL', '2017'],
      price: '19,500'
    },

    {
      url: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/audi-rs5-4-star-car_0.jpg?itok=FA5cAQqo',
      title: 'New Car',
      desc: '1.4l etron TFSI',
      tags: ['NEW', 'COOL', '2017'],
      price: '19,500'
    },
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
