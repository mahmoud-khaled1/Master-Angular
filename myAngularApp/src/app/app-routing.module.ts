import { DetailsComponent } from './details/details.component';
import { ViewComponent } from './view/view.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
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
    { path: 'footer', component: FooterComponent },
  //routing to doesn't component
  {path:'contact',redirectTo:'about',pathMatch:'full'},
  //childRoutes
  {path:'about',children:[{path:'view',component:ViewComponent},{path:'details',component:DetailsComponent}]},
  // routing for page not found
  {path:'**',component:PagenotfoundComponent}

    
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
