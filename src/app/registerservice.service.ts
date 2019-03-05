import { Injectable } from '@angular/core';
import { registermodel } from './login/registermodel';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { loginmodel } from './contact/loginmodel';
import { Observable } from 'rxjs';
import { remindermodel } from './reminder/remindermodel';
import { titletask } from './addtask/titletask';


@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {
title:any;
data1:any;
  constructor(private r:Router, private http:HttpClient) { }
  //register fuc call
  user:registermodel;
  add1(data)
  {
    console.log(data);
  return this.http.post("http://localhost:3000/register",data);
  }
  setTkn(j:string)
  {
  	localStorage.setItem('x-token', j);
  }
  getTkn()
    {
      return localStorage.getItem('x-token');
    }
    //get data
    data(token){
      let params: HttpParams=new HttpParams().set('tokens',token);
      return this.http.get("http://localhost:3000/dataretrieve",{params});
    }
    //contact loginio
  add(j:loginmodel): Observable<HttpResponse<loginmodel>>
  {
  	return this.http.post<loginmodel>("http://localhost:3000/login", j, {observe: 'response'});
  }
  //reminder fnc call
  set1 (data:remindermodel){
    console.log(data);
    return this.http.post("http://localhost:3000/reminder",data).subscribe((res) =>
    {
      console.log('done');

    
    this.r.navigate(['/remind']);
  });
 
  }
  //addtask
  task(data1:titletask){
  
    console.log(data1);
    return this.http.post("http://localhost:3000/addtask",data1).subscribe(res=>{ 
    
       this.r.navigate(['/day']); 
    }); 
  }
  //newlist
  list1(data){
    console.log(data);
    this.title=data;
    this.r.navigate(['/day']);
  }
   

  //addtask

 send(data){
  this.title=data;
  this.r.navigate(['/day']);
}
//fetch data in newlist
search1(){
  return this.http.get("http://localhost:3000/search1");
}
//fetch data in reminder
search2(){
  return this.http.get("http://localhost:3000/search2");
}
}

