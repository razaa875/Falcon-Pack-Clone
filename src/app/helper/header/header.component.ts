import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
      menuVariable = false;
      openMenu(){
        this.menuVariable = !this.menuVariable;
      }

  toggleNav() {
    this.menuVariable = !this.menuVariable;
  }
}
