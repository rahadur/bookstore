import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CreatePageComponent } from './pages/create-page/create-page.component';
import { TemplateFormComponent } from './pages/template-form/template-form.component';
import { ReactiveFormComponent } from './pages/reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path: '',
    component: ProductPageComponent
  },
  {
    path: 'create',
    component: CreatePageComponent
  },
  {
    path: 'template-form',
    component: TemplateFormComponent
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
