import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-department-home',
  templateUrl: './department-home.component.html',
  styleUrls: ['./department-home.component.scss']
})
export class DepartmentHomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private apiService:ApiService) {}

	routerSubscription!: Subscription;
  department:string = "still on dev";

  customOptionsStudents: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    navSpeed: false,
    navText: ['', ''],
    autoplay: true,
    nav: true,
    items: 2,
    rewind: true,
    margin: 30,
    autoplayTimeout: 5000,
    smartSpeed: 1200,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        dots: false
      },
      768: {
        items: 2 ,
        nav: true ,
        dots: false 
      },
      992: {
        items: 2 ,
        nav: true ,
        dots: false 
      }
    }
    
  }


  ngOnInit(){
    
    this.routerSubscription = this.route.paramMap.subscribe((paramMap:any) => {
      if(paramMap.params.department){
        this.department =  paramMap.params.department
      }
    });
  }
  ngOnDestroy(){
    this.routerSubscription.unsubscribe();
  }

}
