import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  @Input() name: string;
  @Input() avatar: string;

  constructor() { }

  ngOnInit() {
  }

}
