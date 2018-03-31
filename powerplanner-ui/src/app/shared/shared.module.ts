import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [MaterialModule, CommonModule, RouterModule],
    exports: [
        MaterialModule,
        CommonModule,
        NavigationComponent,
        RouterModule
    ],
    declarations: [
        NavigationComponent
    ],
    providers: []
})
export class SharedModule { }

