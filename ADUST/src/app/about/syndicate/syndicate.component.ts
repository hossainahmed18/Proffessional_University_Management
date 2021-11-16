import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-syndicate',
  templateUrl: './syndicate.component.html',
  styleUrls: ['./syndicate.component.scss']
})
export class SyndicateComponent implements OnInit {

  hide = false;
  constructor() { }

  ngOnInit(): void {
  }
  GoToTop(){
    window.scrollTo(0,0);
  }

}
