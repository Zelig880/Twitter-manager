import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-middle-container',
  templateUrl: './middle-container.component.html',
  styleUrls: ['./middle-container.component.css']
})
export class MiddleContainerComponent implements OnInit {
  followers;
  following;
  error;
  

  constructor(private apiService: ApiService) {


    this.apiService.getDummyFollowers()
      .subscribe(
        (data) => this.followers = { ...data.data }, // success path
        error => this.error = error // error path
      );
      
    // this.apiService.getFollowing()
    //   .subscribe(
    //     (data) => this.following = { ...data.data.users }, // success path
    //     error => this.error = error // error path
    //   );
   }

  ngOnInit() {
  }

}
