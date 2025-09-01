import { Component, NgModule } from '@angular/core';
import { Posttype } from '../../interface';
import { ProductService } from '../../services/product.service';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-post',
  imports: [ReactiveFormsModule,CommonModule,FormsModule,RouterLink,RouterOutlet,RouterLinkActive,NgIf],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  getemail:any=""
  getname:any=""
constructor(private product: ProductService) {
    this.getemail=localStorage.getItem("email");
    this.getname=localStorage.getItem("name");
}

Credentials: Posttype = {
  name: this.getname,
  email: this.getemail,
  post: "",
  id: "",
  displayPicture: undefined
};

onfileselected(event: any) {
  this.Credentials.displayPicture = event.target.files[0];
}

onsubmit(formValue: any) {
  this.Credentials = { ...formValue, displayPicture: this.Credentials.displayPicture };

  const formData = new FormData();
  formData.append("name", this.Credentials.name);
  formData.append("email", this.Credentials.email);
  formData.append("post", this.Credentials.post);

  if (this.Credentials.displayPicture) {
    formData.append("file", this.Credentials.displayPicture);
    // formData.append("displayPicture", this.Credentials.displayPicture);//galat
    
    
  }

  this.product.posts2(formData).subscribe(res => {
    if(res){
     window.location.href="/home";
    }
    else{
      alert("Image file is large");
    }
  });
}
trick(){
  setTimeout(()=>{
alert("Image must be less than 5MB");
  },4000)
}
lgo(){
  localStorage.setItem("name","");
}

}
