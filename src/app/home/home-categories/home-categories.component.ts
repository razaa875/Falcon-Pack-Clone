import { Component } from '@angular/core';

@Component({
  selector: 'app-home-categories',
  templateUrl: './home-categories.component.html',
  styleUrls: ['./home-categories.component.css']
})
export class HomeCategoriesComponent {

  texts: string[] = ['Aluminium Foil', 'Cling Films', 'Containers', 'Baking Products', 'Tableware', 'Boxes', 'Eco-Friendly', 'Wooden Products', 'Paper Bags'];
  currentIndex: number = 0;
  displayedTexts: string[] = this.texts.slice(this.currentIndex, this.currentIndex + 2);

  showNext() {
    this.currentIndex += 1;
    if (this.currentIndex >= this.texts.length) {
      this.currentIndex = 0;
    }
    this.displayedTexts = this.texts.slice(this.currentIndex, this.currentIndex + 2);
  }
  showPre() {
    this.currentIndex -= 1;
    if (this.currentIndex < 0) {
      this.currentIndex = this.texts.length - 1;
    }
    this.displayedTexts = this.texts.slice(this.currentIndex, this.currentIndex + 2);
  }
}
