import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor() {
    
   }
   title='To-do';
   isSelected=true;
   classes=this.isSelected ? ['titulo_principal', 'titulo_xl'] : ['titulo_principal'];

}
