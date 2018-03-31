import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { TaskCreationComponent } from './task-creation/task-creation.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    TaskCreationComponent,
    DashboardComponent
  ],
  declarations: [
    TaskCreationComponent,
    DashboardComponent
]
})
export class TaskModule { }
