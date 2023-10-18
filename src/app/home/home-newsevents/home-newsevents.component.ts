import { Text } from '@angular/compiler';
import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-newsevents',
  templateUrl: './home-newsevents.component.html',
  styleUrls: ['./home-newsevents.component.css']
})
export class HomeNewseventsComponent {
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
      title: "Falcon Pack Wear it Pink for Breast Cancer",
      desc: "To raise awareness for breast cancer, Falcon Pack office 'wore it pink' for a day! Falcon Pack employs more than 80...",
      image: "../../../assets/Rectangle 2738.png"
    },
    {
      title: "Together for a better environment UAE Clean up Drive",
      desc: "Falcon Pack employees dedicated their time towards environment support to remove approximately 1 Ton of waste...",
      image: "../../../assets/Rectangle 2738-1.png"
    },
    {
      title: "Plantation Drive - Each one Plant one",
      desc: "Tree plantation is a necessity to protect our environment against polution and global warming Falcon Pack in...",
      image: "../../../assets/Rectangle 2738-2.png"
    }]
  
}
