import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { MaterialModule } from './material.module';

@NgModule({
    imports: [MaterialModule],
    exports: [
        MaterialModule,
        NavigationComponent
    ],
    declarations: [
        NavigationComponent
    ],
    providers: []
})
export class SharedModule { }

