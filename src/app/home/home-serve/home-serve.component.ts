import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-serve',
  templateUrl: './home-serve.component.html',
  styleUrls: ['./home-serve.component.css']
})
export class HomeServeComponent {
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
    title: "Restaurants",
    desc: "Restaurants get hygienic and eco-friendly products from Falcon Pack.",
    image: "../../../assets/ind1.png"
  },
  {
    title: "Inflight Catering",
    desc: "Inflight catering uses lightweight and disposable items from Falcon Pack.",
    image: "../../../assets/ind2.png"
  },
  {
      title: "Packaging",
      desc: "Falcon Pack offers innovative and customized packaging solutions.",
      image: "../../../assets/ind3.png"
    },
    {
      title: "Bakeries",
      desc: "Bakeries get attractive and biodegradable packaging from Falcon Pack.",
      image: "../../../assets/ind4.png"
    },
    {
      title: "Hospitals",
      desc: "Hospitals get sterile and protective products from Falcon Pack.",
      image: "../../../assets/ind5.png"
    },
    {
      title: "Hotels",
      desc: "Hotels get elegant and affordable products from Falcon Pack.",
      image: "../../../assets/ind6.png"
    }]

}
