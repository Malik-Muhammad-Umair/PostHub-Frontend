import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-help',
  imports: [RouterLink,RouterOutlet,RouterLinkActive],
  templateUrl: './help.component.html',
  styleUrl: './help.component.css'
})
export class HelpComponent {

lgo(){
  localStorage.setItem("name","");
}

}
