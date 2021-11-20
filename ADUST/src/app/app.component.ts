import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ADUST';
  constructor(private router: Router) { }

  ngOnInit() {
    let lastReloadTime: any = localStorage.getItem('lastReloadTime');
    if (lastReloadTime) {
      lastReloadTime = new Date(lastReloadTime);
      let currentTime: any = new Date();
      let diff = currentTime - lastReloadTime;
      if (diff > 10000) {
        this.reload();
      }
    } else {
      this.reload();
    }
  }

  reload() {
    console.log("......reload.........");
    setTimeout(() => {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/']);
      localStorage.setItem('lastReloadTime', String(new Date()));
    }, 3000);
  }
}
