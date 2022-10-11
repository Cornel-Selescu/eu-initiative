import { NgModule } from '@angular/core';
import { SubmittedRoutingModule } from './submitted-routing.module';
import { SubmittedComponent } from './submitted.component';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        SubmittedRoutingModule,
    ],
    declarations: [
        SubmittedComponent,
    ],
})
export class Module {
}
