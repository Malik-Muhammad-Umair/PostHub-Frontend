import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Information } from '../interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  SubmitInfo(val:Information):Observable<Information>{
    const url ="http://localhost:8080/login/info";
    return this.http.post<Information>(url,val)
  }
  Getinfo():Observable<Information[]>{
    const url ="http://localhost:8080/login/infos";
    return this.http.get<Information[]>(url)
  }
}
