import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { SyndicateComponent } from './syndicate/syndicate.component';
import { AcademicCouncilComponent } from './academic-council/academic-council.component';
import { AdminstrationComponent } from './adminstration/adminstration.component';


@NgModule({
  declarations: [
    AboutComponent,
    SyndicateComponent,
    AcademicCouncilComponent,
    AdminstrationComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
