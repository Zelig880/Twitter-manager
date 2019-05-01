import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  userInfo: object

  constructor(private ApiService: ApiService) { 
    this.userInfo = this.ApiService.getUserInfo();
  }

  ngOnInit() {
  }

}


 