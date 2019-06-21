import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CONSTANTS } from './app.constants';
import { Product, Survey } from './app.interface';
@Injectable({
    providedIn: 'root'
})
export class LoginService {

    public accessToken: string = localStorage.getItem(CONSTANTS.ACCESS_TOKEN);

    public productUrl: string = CONSTANTS.PRODUCTURL;

    public surveyUrl: string = CONSTANTS.SURVEYURL;

    public actionPlanUrl: string = CONSTANTS.SURVEYURL;

    constructor(private http: HttpClient) { }

    public getProduct(): Observable<Product> {
        const token = localStorage.getItem(CONSTANTS.ACCESS_TOKEN);
        const headers = new HttpHeaders({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: ('Bearer ' + token),
        });
        return this.http.get<Product>(`${this.productUrl}`, { headers });
    }


    public getSurvey(): Observable<Survey> {
        const token = localStorage.getItem(CONSTANTS.ACCESS_TOKEN);
        const headers = new HttpHeaders({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: ('Bearer ' + token),
        });
        return this.http.get<Survey>(`${this.surveyUrl}`, { headers });
    }
    public getActionPlan(): Observable<any> {
        const token = localStorage.getItem(CONSTANTS.ACCESS_TOKEN);
        const headers = new HttpHeaders({
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: ('Bearer ' + token),
        });
        return this.http.get<any>(`${this.actionPlanUrl}`, { headers });
    }

}

