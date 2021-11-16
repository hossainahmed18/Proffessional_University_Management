import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  hide = false;
  constructor() { }

  ngOnInit(): void {
  }
  GoToTop(){
    window.scrollTo(0,0);
  }

}
