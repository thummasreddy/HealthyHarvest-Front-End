import { Component } from '@angular/core';

interface Slide {
  image: string;
  title: string;
  description: string;
  button: string;
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider_component.html',
  styleUrls: ['./slider_component.scss']
})
export class SliderComponent {
  slides: Slide[] = [
    {
      image: 'assets/image/home_slider/slide1.jpg',
      title: 'ORGANIC MILK PRODUCTS',
      description: 'Free delivery of fresh milk and cheese from the local farm',
      button: 'Read More'
    },
    {
      image: 'assets/image/home_slider/slide2.jpg',
      title: 'FRESH DAIRY PRODUCE',
      description: 'Providing locals and guests with wholesome milk products',
      button: 'Read More'
    }
  ];
}
