import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academic-council',
  templateUrl: './academic-council.component.html',
  styleUrls: ['./academic-council.component.scss']
})
export class AcademicCouncilComponent implements OnInit {

  hide = false;
  constructor() { }

  ngOnInit(): void {
  }
  GoToTop(){
    window.scrollTo(0,0);
  }

}
