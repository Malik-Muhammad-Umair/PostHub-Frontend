import { Routes } from '@angular/router';
// import { LoginComponent } from './Pagenotfound/login.component';
import { PostComponent } from './mycomponents/post/post.component';
import { ShowComponent } from './mycomponents/show/show.component';
import { AppComponent } from './app.component';
import { UpdateComponent } from './mycomponents/update/update.component';
import { HomeComponent } from './mycomponents/home/home.component';
import { Page404Component } from './mycomponents/page404/page404.component';
// import { ChatComponent } from './mycomponents/chat/chat.component';
import { RegisterComponent } from './mycomponents/register/register.component';
import { LoginComponent } from './mycomponents/login/login.component';
import { HelpComponent } from './mycomponents/help/help.component';
// import { AboutandfeaturesComponent } from './mycomponents/aboutandfeatures/aboutandfeatures.component';
import { AboutComponent } from './mycomponents/about/about.component';
import { FeaturesComponent } from './mycomponents/features/features.component';
// import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', component:RegisterComponent },
  { path: 'about', component:AboutComponent},
  { path: 'login', component: LoginComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'help', component:HelpComponent },
  { path: 'update', component:UpdateComponent },
  { path: 'home', component: HomeComponent },
  { path: 'post', component: PostComponent },
  { path: 'show', component: ShowComponent },
  // { path: 'chat', component: ChatComponent },   // 👈 chat pehle
  { path: 'show/:id', component: UpdateComponent }, // 👈 dynamic baad me
  { path: '**', component: Page404Component }
];
