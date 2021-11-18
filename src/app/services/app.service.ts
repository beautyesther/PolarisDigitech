import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  baseURL = environment.baseURL;

  constructor(private http: HttpClient) { }

  getDataFromTypicode(): Observable<any> {
    return this.http.get<any[]>(`${this.baseURL}todos`).pipe(
      // *********** editing the response by adding more value so that the ***********
      // *********** data structure with be the same with the table on figma ***********
      map(res => {
        res.filter(r => r.price = Math.floor(1000 + Math.random() * 9000));
        res.filter(r => r.transactionNo = r.id);
        res.filter(r => r.time = '12:30');
        res.filter(r => r.status = r.completed === false ? 'Reconcilled' : 'Un-Reconcilled');
        res.filter(r => r.item = r.title);

        return res;
      })
    );
  }
}
