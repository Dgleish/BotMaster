import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Bot } from './bot';

@Injectable()
export class BotService {
    private baseUrl = 'http://127.0.0.1:3005/api/';

    constructor(private http: Http) { }

    getBots(): Observable<Bot[]> {
        let fullUrl = this.baseUrl + "Bots";
        return this.http.get(fullUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getBot(id: string): Promise<Bot> {
        let fullUrl = this.baseUrl + "Bots/" + id;
        return this.http.get(fullUrl).toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    private extractData(res: Response){
        let body = res.json();
        return body || {};
    }

    private handleError(error: any){
        let errMsg = error.message ? error.message :
            error.status ? `${error.status} - ${error.statusText}` :
                "Server error";
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    addBot(name: string): Observable<Bot> {
        let body = JSON.stringify({ 'name':name });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.baseUrl + "Bots", body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
}