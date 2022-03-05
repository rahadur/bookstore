import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExplorePageComponent } from './pages/explore-page/explore-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';

const routes: Routes = [
  {
    path: '',
    component: ExplorePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
