import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { InfoSupportComponent } from '../../components/info-support/info-support.component';
import { InitiaviveTitleComponent } from '../../components/initiavive-title/initiavive-title.component';
import { InitiativeInfoComponent } from '../../components/initiative-info/initiative-info.component';
import { RecentSignatoriesComponent } from '../../components/recent-signatories/recent-signatories.component';
import { OnlineSignaturesComponent } from '../../components/online-signatures/online-signatures.component';
import { InitiativeFormComponent } from '../../components/initiative-form/initiative-form.component';
import { CountrySelectorComponent } from '../../components/country-selector/country-selector.component';
import { CountrySupportComponent } from '../../components/country-support/country-support.component';
import { SupporterInfoComponent } from '../../components/supporter-info/supporter-info.component';

@NgModule({
    imports: [
        SharedModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        InfoSupportComponent,
        InitiaviveTitleComponent,
        InitiativeInfoComponent,
        RecentSignatoriesComponent, 
        OnlineSignaturesComponent,
        InitiativeFormComponent,
        CountrySelectorComponent,
        CountrySupportComponent,
        SupporterInfoComponent
    ]
})
export class Module { }
