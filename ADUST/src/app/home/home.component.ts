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
  selectedCourse = "all";


  customOptionsStudents: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    navSpeed: 100,
    navText: ['', ''],
    autoplay: true,
    nav: true,
    items: 3,
    rewind: true,
    responsive: {
      0: {
        items: 1,
        loop: true,
        nav: true,
        rewind: true
      },
      400: {
        items: 2,
        loop: true,
        nav: true,
        rewind: true
      },
      740: {
        items: 3,
        loop: true,
        nav: true,
        rewind: true
      },
      940: {
        items: 3,
        loop: true,
        nav: true,
        rewind: true
      }
    }
    
  }

  customOptionsTopManage: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    navSpeed: 100,
    navText: ['', ''],
    autoplay: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
        loop: true,
        nav: true,
        
      },
      400: {
        items: 2,
        loop: true,
        nav: true,
      
      },
      740: {
        items: 3,
        loop: true,
        nav: true,
        
      },
      940: {
        items: 3,
        loop: true,
        nav: true,
      
      }
    }  
    
  }

  customOptionsPartners: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    navSpeed: 100,
    navText: ['', ''],
    autoplay: true,
    nav: true,
    items: 5,
    rewind: true,
    responsive: {
      0: {
        items: 2,
        loop: true,
        nav: true,
        rewind: true
      },
      400: {
        items: 3,
        loop: true,
        nav: true,
        rewind: true
      },
      740: {
        items: 5,
        loop: true,
        nav: true,
        rewind: true
      },
      940: {
        items: 5,
        loop: true,
        nav: true,
        rewind: true
      }
    }
    
  }



  mainSlider=[
    {
     title: 'Quality Education | Affordable Cost',
     source: 'assets/images/slider/Slider-1.jpg'
    },
    {
      title: 'Near Metro Rail Station',
      source: 'assets/images/slider/slider-2.jpg'
     },
     {
      title: 'Permanent Campus',
      source: 'assets/images/slider/slider-3.jpg',
     }
 ];
 mainSliderOffset = 1;
 mainSliderIndex = 0;
 mainSlideCurrentSlides:any[]=[];


 topManageSlider=[
  {
   name: 'LIAKAT ALI SIKDAR',
   designation: 'assets/images/slider/Slider-1.jpg',
   dialouge: 'Entrusted with planning, implementation and evaluation.',
   image:'assets/images/management/chairman.jpg'
  },
  {
    name: 'DR. RAFIQUE U AHMED',
    designation: 'Vice Chancellor',
    dialouge: 'Entrusted with planning, implementation and evaluation.',
    image:'assets/images/management/vc.jpg'
   }
];
topManageSliderOffset = 2;
topManageSliderIndex = 0;
topManageSliderCurrentSlides:any[]=[];

letf = 0;


  ngOnInit(): void {
    this.animteachers = 0;
    this.animcourses = 0;
    this.animSatisfiedClients = 0;
    this.animStudents = 0;
    this.selectedCourse = 'all';
    this.slideTopManageSlider();
  }

  GoToTop(){
    window.scrollTo(0,0);
  }

  changeSelectedCourse(courseName:string){
      this.selectedCourse = courseName;
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
     let height = document.documentElement.scrollTop;
     if(height > window.innerHeight + 100){
       this.hide = false;
     }else if(height < window.innerHeight + 100 ){
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



  slideTopManageSlider(currentIndex?: number, action?:string) {
    if (currentIndex != undefined) {
      if(action == 'prev'){
        if(currentIndex == 0){
          this.topManageSliderIndex =  this.topManageSlider.length - 2;
        }else if(currentIndex < 2){
          this.topManageSliderIndex =  0;
        }else{
          this.topManageSliderIndex = currentIndex - 2;
        }
      }else {
        this.topManageSliderIndex = currentIndex;
      }
    }
    if ((this.topManageSlider.length - 1) - this.topManageSliderIndex < this.topManageSliderOffset) {
      let remaining = (this.topManageSlider.length) - this.topManageSliderIndex;
      let extra = this.topManageSliderOffset - remaining;
      this.topManageSliderCurrentSlides = [...this.topManageSlider.slice(this.topManageSliderIndex), ...this.topManageSlider.slice(0, extra)];
      this.topManageSliderIndex = extra;
    } else {
      this.topManageSliderCurrentSlides =  this.topManageSlider.slice(this.topManageSliderIndex, this.topManageSliderIndex + this.mainSliderOffset);
      this.topManageSliderIndex = this.topManageSliderIndex + this.topManageSliderOffset;
    }
    
  }
  add(){
    this.letf = this.letf - 350;

  }
  
}
