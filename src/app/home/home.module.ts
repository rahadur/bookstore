import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ExplorePageComponent } from './pages/explore-page/explore-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HelloComponent } from './components/hello/hello.component';

import { HomeService } from './services/home.service';


@NgModule({
  declarations: [
    ExplorePageComponent,
    AboutPageComponent,
    HelloComponent
  ],
  providers: [
    HomeService
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [HelloComponent]
})
export class HomeModule { }
