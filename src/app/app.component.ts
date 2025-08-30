import { afterNextRender, afterRender, Component, computed, effect, Signal, signal, ViewChild, viewChild, WritableSignal } from '@angular/core';
// import { Route, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms'; // ✅ This is needed
import { CommonModule, NgFor, ɵnormalizeQueryParams } from '@angular/common';
// import { LoginComponent } from "./Pagenotfound/login.component";
import { Route, Router, RouterLink, RouterOutlet,RouterLinkActive } from '@angular/router';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
// import { CurrencyconverterPipe } from './pipe/currencyconverter.pipe';
import { ProductService } from './services/product.service';
import {Posttype} from './interface';
import { HomeComponent } from './mycomponents/home/home.component';
@Component({
  selector: 'app-root',
  imports: [ ReactiveFormsModule,CommonModule,FormsModule,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';




}



