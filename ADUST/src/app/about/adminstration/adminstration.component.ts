import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminstration',
  templateUrl: './adminstration.component.html',
  styleUrls: ['./adminstration.component.scss']
})
export class AdminstrationComponent implements OnInit {

  hide = false;
  constructor() { }

  ngOnInit(): void {
  }
  GoToTop(){
    window.scrollTo(0,0);
  }

}
