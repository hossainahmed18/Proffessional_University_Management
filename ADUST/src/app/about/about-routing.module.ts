import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { AcademicCouncilComponent } from './academic-council/academic-council.component';
import { AdminstrationComponent } from './adminstration/adminstration.component';
import { SyndicateComponent } from './syndicate/syndicate.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
  },
  {
    path: 'syndicate',
    component: SyndicateComponent,
  },
  {
    path: 'academic-council',
    component: AcademicCouncilComponent,
  },
  {
    path: 'adminstration',
    component: AdminstrationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
