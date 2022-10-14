import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

import { SupporterInfo } from 'src/app/typings/supporter-info';

import {
  CONFIG_TOKEN,
  EuiAppConfig,
} from '@eui/core';

import { Country } from 'src/app/typings/country'
import { InitiativeInfo } from 'src/app/typings/initiative-info';

@Injectable({
  providedIn: 'root'
})
export class InitiativeDataService {
  private url: string;
  private headers = new HttpHeaders(
    {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  );
  constructor(private http: HttpClient, @Inject(CONFIG_TOKEN) private config: EuiAppConfig) {
    const moduleCoreApi = this.config.modules.core;
    this.url = `${moduleCoreApi.base}`;
  }

  getCountries(): Observable<object> {
    return this.http.get<Country[]>(`${this.url}/countries`);
  }

  getInitiative(): Observable<object> {
    return this.http.get<InitiativeInfo>(`${this.url}/initiative`);
  }

  supportInitiative(initiative: SupporterInfo): Observable<object> {
    if(initiative.firstName && initiative.lastName && initiative.statement && initiative.certify && initiative.documentId && initiative.legalDocument) { 
      if(typeof initiative.dateOfBirth != 'string') {
        let dateOfBirth = `${initiative.dateOfBirth?.day || 1}/${initiative.dateOfBirth?.month || 1}/${initiative.dateOfBirth?.year || 1900}`;
        initiative.dateOfBirth = dateOfBirth;
      }    
      const body = new HttpParams({ fromObject: initiative as any});
      const options = { headers: this.headers};
      return this.http.post<InitiativeInfo>(`${this.url}/initiative`, body, options);
    }
    else {
      console.log('Insufficient data.', initiative);
      alert('insufficient data.');
      // throw error
    }
  }
}
