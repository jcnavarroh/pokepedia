import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'card/:id', component: CardsComponent},
  {path: '**',  redirectTo: 'home', pathMatch:'full'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);



