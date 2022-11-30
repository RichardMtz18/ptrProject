import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ptr crud';
  open: boolean = false;

  openNav(){
    this.open = !this.open;
  }
}
