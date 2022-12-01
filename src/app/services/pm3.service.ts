import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PMS3 } from '../models/PMS3';

@Injectable({
  providedIn: 'root'
})

export class Pm3Service {

  constructor(private http: HttpClient) { }

  savePM3(pm3: PMS3): Observable<any> {
    const url = "http://localhost:8080/pm3/saveOne";
    return this.http.post(url, pm3);
  }

  getAllPM3S(): Observable<PMS3[]> {
    const url = "http://localhost:8080/pm3/findAll";
    return this.http.get<PMS3[]>(url);
  }

  getPM3ById(id: any): Observable<PMS3> {
    const url = `http://localhost:8080/pm3/${id}`;
    return this.http.get<PMS3>(url);
  }
}
