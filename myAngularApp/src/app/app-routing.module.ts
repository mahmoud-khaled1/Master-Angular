import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: '', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent, },
  // Routing Parameters
    { path: 'about/:name/:id', component: AboutComponent },
  // routing with query params
    { path: 'footer', component: FooterComponent }
    
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
