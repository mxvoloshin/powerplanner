import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskCreationComponent } from './task-module/task-creation/task-creation.component';
import { DashboardComponent } from './task-module/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'createtask', component: TaskCreationComponent },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

