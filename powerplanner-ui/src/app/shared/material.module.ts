import {
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule
} from '@angular/material';
import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class MaterialModule { }
