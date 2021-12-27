import { Component } from '@angular/core';

@Component({
  selector: 'app-nopagefoun',
  templateUrl: './nopagefoun.component.html',
  styleUrls: ['./nopagefoun.component.css']
})
export class NopagefounComponent {

  public year = new Date().getFullYear();

}
