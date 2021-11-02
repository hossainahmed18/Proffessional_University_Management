import { visitValue } from '@angular/compiler/src/util';
import { Component, HostListener, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  hide = false;
  animteachers = 0;
  animcourses = 0;
  animSatisfiedClients = 0;
  animStudents = 0;

  totalTeachers = 60;
  totalCourses = 50;
  totalStudents = 900;
  totalSatisfiedClients = 3675;

  check: Record<string,number>={
    value: 10
};
 



  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    },
    nav: true
  }

  ngOnInit(): void {
    this.animteachers = 0;
    this.animcourses = 0;
    this.animSatisfiedClients = 0;
    this.animStudents = 0;
    console.log(Object.keys(this.check));
  }

  GoToTop(){
    window.scrollTo(0,0);
  }
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
     let height = document.documentElement.scrollTop;
     if(height > 1000){
       this.hide = false;
     }else if(height <300 ){
      this.hide = true;
     }


     const configuratorContainer = document.getElementById('vvvvvvvvvvvvv') as HTMLElement;
	   let offset = configuratorContainer.getBoundingClientRect().top;

     if(offset < 300 && this.animteachers == 0){
        this.addCounter();
     }


  }


  addCounter(){
    
     setInterval(()=>{
         if(this.animteachers < this.totalTeachers){
           this.animteachers = this.animteachers + 1;
         }
         if(this.animcourses < this.totalCourses){
          this.animcourses = this.animcourses + 1;
         } 
         if(this.animStudents < this.totalStudents){
          let addAmountStudents = (this.totalStudents-this.animStudents) > 18 ? 18 : (this.totalStudents-this.animStudents) ;
          this.animStudents = this.animStudents + addAmountStudents;
         }
         if(this.animSatisfiedClients < this.totalSatisfiedClients){
          let addAmountClients = (this.totalSatisfiedClients-this.animSatisfiedClients) > 60 ? 60 : this.totalSatisfiedClients-this.animSatisfiedClients ;
          this.animSatisfiedClients = this.animSatisfiedClients + addAmountClients;
         }
         
     },80)
  }

  
}
