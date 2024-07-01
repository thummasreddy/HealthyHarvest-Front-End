import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: '../home_slider/slider_component.html',
  styleUrls: ['../home_slider/slider_component.scss']
})
export class SliderComponent {
  slides = [
    {
      image: 'assets/slide1.jpg',
      title: 'ORGANIC MILK PRODUCTS',
      description: 'Free delivery of fresh milk and cheese from the local farm',
      button: 'Read More'
    },
    {
      image: 'assets/slide2.jpg',
      title: 'FRESH DAIRY PRODUCE',
      description: 'Providing locals and guests with wholesome milk products',
      button: 'Read More'
    }
  ];
}
