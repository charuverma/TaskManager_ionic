import { Component, OnInit } from '@angular/core';
import { registermodel } from './registermodel';
import { RegisterserviceService } from '../registerservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( private v:RegisterserviceService,private r:Router) { }
  arrow(){
    this.r.navigate(['/contact']);
  }
  bt(f,l,u,g){
    if(!f.value || !l.value|| !u.value || !g.value ||f.value.length!=10){
      alert("Required all fields");
    }
    else{
    let data=new registermodel(f.value,l.value,u.value,g.value);
    
    this.v.add1(data).subscribe((res)=>{
      console.log(res['tokens']);
      res as {};
      this.v.setTkn(res['tokens']);
      this.r.navigate(['/day']);
    });
  }
}

  ngOnInit() {
  }
  
}
