import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Posttype } from '../../interface';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [RouterLink,RouterOutlet,FormsModule,RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  change:number=1;
  changeposition(){
     if(this.change==3){
  
    this.change=0;
  }
  this.change++;
  }
  constructor(private product: ProductService) {
   
  }
postlists:Posttype[]=[]
ngOnInit(){
  this.product.getpost().subscribe((data:Posttype[])=>{
    this.postlists=data;
    
    
    
    
    
    
  })

}
getid(id:string){
  this.product.delete(id).subscribe((data:Posttype)=>{

      this.ngOnInit();
    
  })
}
count: number = 0;
bol: boolean = true;

increment() {
  this.count += this.bol ? 1 : -1; // bol true → +1 , bol false → -1
  this.bol = !this.bol;            // bol ko toggle kar do
}
postname:string="";


lgo(){
  localStorage.setItem("name","");
}
hidebanner(){
  const hi:any=document.getElementsByClassName('slider')[0] as HTMLDivElement;
  hi.hidden=true;
  if(this.postname==""){
    hi.hidden=false;
  }
}

}

