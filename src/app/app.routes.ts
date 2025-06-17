import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { DetailPage } from './pages/detail/detail.page';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: '',
    component: HomePage
  },
  {
    path: "detail/:name",
    component: DetailPage
  },
  {
    path: 'favorites',
    component: HomePage
  }
];
