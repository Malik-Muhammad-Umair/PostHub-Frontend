import { Component } from '@angular/core';
import { Posttype } from '../../interface';
import { ProductService } from '../../services/product.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-show',
  imports: [RouterLink,RouterOutlet,RouterLinkActive],
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent {
  getemail!:any;
  constructor(private product: ProductService) {
     this.getemail=localStorage.getItem('email');
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

}
