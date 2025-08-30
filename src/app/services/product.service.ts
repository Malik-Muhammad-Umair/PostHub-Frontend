import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posttype } from '../interface';
import { FormsModule } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

constructor(private http:HttpClient){

}
getpost():Observable<Posttype[]>{
  const url="http://localhost:8080/api/users";
  return this.http.get<Posttype[]>(url);
}
posts(post:Posttype):Observable<Posttype>{
  const url="http://localhost:8080/api/user";
  return this.http.post<Posttype>(url,post);
}
posts2(form:FormData):Observable<any>{
  const url="http://localhost:8080/api/user";
  return this.http.post<any>(url,form);
}
delete(id:string):Observable<Posttype>{
  const url="http://localhost:8080/api/user";
  return this.http.delete<Posttype>(`${url}/${id}`);
}
Getuser(id:string):Observable<Posttype>{
  const url="http://localhost:8080/api/user";
  return this.http.get<Posttype>(`${url}/${id}`);
}
Updateuser(post:Posttype):Observable<Posttype>{
  const url="http://localhost:8080/api/user";
  return this.http.put<Posttype>(`${url}/${post.id}`,post);
}

}
