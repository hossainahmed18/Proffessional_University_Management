import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  hide = false;
  constructor() { }

  ngOnInit(): void {
  }
  GoToTop(){
    window.scrollTo(0,0);
  }

}
