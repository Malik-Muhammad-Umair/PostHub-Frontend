import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Posttype } from '../../interface';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-update',
  imports: [ReactiveFormsModule, CommonModule, FormsModule,RouterLink,RouterOutlet,RouterLinkActive,NgIf],
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id!: string;
  selectedpost: undefined | Posttype;

  constructor(
    private activatedRoute: ActivatedRoute,
    private product: ProductService
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getuser();
  }

  getuser() {
    this.product.Getuser(this.id).subscribe((data: Posttype) => {
      this.selectedpost = data;
      console.log(this.selectedpost);
    });
  }

  update(val: any) {
    const userdata = { ...val, id: this.selectedpost?.id }; // safe access
    this.product.Updateuser(userdata).subscribe((data: Posttype) => {
      if (data) {
        this.ngOnInit();
        this.selectedpost = undefined;
      }
    });
  }

lgo(){
  localStorage.setItem("name","");
}

}
