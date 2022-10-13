import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable , Inject} from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import {
  CONFIG_TOKEN,
  EuiAppConfig,
} from '@eui/core';

import { Country } from 'src/app/typings/country'
import { InitiativeDetails } from 'src/app/typings/initiative-details';

@Injectable({
  providedIn: 'root'
})
export class InitiativeDataService {
  private url: string;
  constructor(private http: HttpClient, @Inject(CONFIG_TOKEN) private config: EuiAppConfig) { 
    const moduleCoreApi = this.config.modules.core;
    this.url = `${moduleCoreApi.base}`;
  }
 
  getCountries(): Observable<object> {
    return this.http.get<Country[]>(`${this.url}/countries`);
  }

  getInitiative(): Observable<object> {
    return this.http.get<InitiativeDetails>(`${this.url}/initiative`);
  }

}
