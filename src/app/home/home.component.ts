import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items = [
    {url: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/audi-rs5-4-star-car_0.jpg?itok=FA5cAQqo'},
    {url: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/audi-rs5-4-star-car_0.jpg?itok=FA5cAQqo'},
    {url: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/audi-rs5-4-star-car_0.jpg?itok=FA5cAQqo'},
    {url: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/audi-rs5-4-star-car_0.jpg?itok=FA5cAQqo'},
    {url: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/audi-rs5-4-star-car_0.jpg?itok=FA5cAQqo'},
    {url: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/audi-rs5-4-star-car_0.jpg?itok=FA5cAQqo'},
    {url: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/audi-rs5-4-star-car_0.jpg?itok=FA5cAQqo'},
    {url: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/audi-rs5-4-star-car_0.jpg?itok=FA5cAQqo'},
    {url: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/audi-rs5-4-star-car_0.jpg?itok=FA5cAQqo'},
    {url: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/audi-rs5-4-star-car_0.jpg?itok=FA5cAQqo'},
    {url: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/audi-rs5-4-star-car_0.jpg?itok=FA5cAQqo'},
    {url: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/audi-rs5-4-star-car_0.jpg?itok=FA5cAQqo'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
