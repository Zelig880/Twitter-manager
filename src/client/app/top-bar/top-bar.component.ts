import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent implements OnInit {
  userInfo;
  error

  constructor(private apiService: ApiService) { 
    
    this.apiService.getUserInfo()
      .subscribe(
        (data) => this.userInfo = { ...data.data }, // success path
        error => this.error = error // error path
      );
  }

  ngOnInit() {
  }

}


 