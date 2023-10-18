import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-linkedinfeed',
  templateUrl: './home-linkedinfeed.component.html',
  styleUrls: ['./home-linkedinfeed.component.css']
})
export class HomeLinkedinfeedComponent {
  customOptions: OwlOptions  = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
cards:any[] = [
    {
      image: "../../../assets/l1.jfif"
    },
    {
      image: "../../../assets/l2.jfif"
    },
    {
      image: "../../../assets/l3.jfif"
    },
    {
      image: "../../../assets/l4.jfif"
    },
  ]
}
