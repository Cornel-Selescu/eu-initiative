import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmittedComponent } from './submitted.component';

const routes: Routes = [
    { path: '', component: SubmittedComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', component: SubmittedComponent }
        ])
    ],
})
export class SubmittedRoutingModule {}
