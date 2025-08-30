import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { Information } from '../../interface';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,   // 👈 ye likhna zaroori hai standalone component ke liye
  imports: [FormsModule,RouterLink,RouterOutlet,NgIf,FormsModule], // 👈 FormsModule chahiye ngModel ke liye
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // 👈 styleUrls (plural)
})
export class LoginComponent {
  constructor(private inf1:RegisterService){}

  credentials = {
    email: "",
    password: ""
  };
 
  onsubmit() {
  
 this.inf1.Getinfo().subscribe((data: Information[]) => {
  const user = data.find(element =>
    element.email == this.credentials.email &&
    element.password ==this.credentials.password
  );

  if (user) {
    localStorage.setItem("email", this.credentials.email);
      
    window.location.href="/home"
  } 
  else {
    
    alert("Wrong email or password");
  }
});
    
      //  genrate token
  

      
  }
}
