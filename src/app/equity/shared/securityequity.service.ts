import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Securityequity} from './securityequity.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityequityService {
  readonly Equityurl="https://localhost:44362/api";
  formdata:Securityequity;


  constructor(private http:HttpClient) { }

  selectequity():Observable<any[]>{
    return this.http.get<any>(this.Equityurl+'/equity');
  }
  selectactivity():Observable<any[]>{
    return this.http.get<any>(this.Equityurl+'/equity/activity');
  }

  updateequity(formdata:Securityequity){
    return this.http.put(this.Equityurl+'/equity',formdata);
  }
  addequity(val:any){
    return this.http.post(this.Equityurl+'/equity',val);
  }
  deleteequity(id:number){
    return this.http.delete(this.Equityurl+'/equity/'+id);
  }

}
