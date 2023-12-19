import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: LandingpageComponent },
    { path: 'home', component: HomeComponent },

];
