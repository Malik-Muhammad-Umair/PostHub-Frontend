import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { Information } from '../../interface';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [FormsModule,RouterOutlet,RouterLink,NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  constructor(private inf:RegisterService){

  }
  
  credentials :Information= {
    name:"",
    email: "",
    password: ""
  };

  onsubmit() {
    if((this.credentials.email!=''&& this.credentials.name!='' && this.credentials.password!='') && (this.credentials.email!=null && this.credentials.name!=null && this.credentials.password!=null)){
   this.inf.SubmitInfo(this.credentials).subscribe((data:Information)=>{
     localStorage.setItem("name", this.credentials.name);
    if(data){
    window.location.href="/login";
      
      this.credentials.email='';
      this.credentials.name='';
      this.credentials.password='';

      
    }
  
   })
      //  genrate token
  }
  else{
      alert("Form not submitted!");
      
  }
}
 
}
