import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-explore-page',
  templateUrl: './explore-page.component.html',
  styleUrls: ['./explore-page.component.scss']
})
export class ExplorePageComponent implements OnInit {

  isShow = true;

  constructor(
    private router: Router,
    private homeService: HomeService
  ) { }

  ngOnInit(): void {

  }

  showHello(): void {
    console.log(this.homeService.getHello());
    
  }

}
