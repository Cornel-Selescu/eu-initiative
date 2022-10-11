import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { InfoSupportComponent } from '../../components/info-support/info-support.component';
import { InitiaviveTitleComponent } from '../../components/initiavive-title/initiavive-title.component';

@NgModule({
    imports: [
        SharedModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        InfoSupportComponent,
        InitiaviveTitleComponent
    ],
})
export class Module {}
