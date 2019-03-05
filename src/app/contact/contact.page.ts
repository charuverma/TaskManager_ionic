import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { loginmodel } from './loginmodel';
import { Router } from '@angular/router';
import { RegisterserviceService } from '../registerservice.service';
import { NavController } from '@ionic/angular'; 



@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage {
    
  constructor(private r:Router,private v:RegisterserviceService,private navcrt:NavController) {
    localStorage.clear();
   }
  ul:loginmodel;
  c;
  d:Subscription;
  tempToken;
  //function call
  btn(c:number){
    if(!c){
      alert("Required contact")
    }
    else{
    this. ul=new loginmodel(c);
    console.log(this.ul);

    this.c = this.v.add(this.ul);
    this.d = this.c.subscribe( (data) => {
      this.tempToken = data.headers.get('x-token');
      this.v.setTkn(this.tempToken);
      this.r.navigate(['/day']);
    },
    (err)=>{
      console.log(err);
    },
    ()=>{
      console.log("User Data Checks Out"); 
    });

  }
}
  //navigate function
  sign(){
    this.navcrt.navigateRoot('/login');
  }

  ngOnInit() {
  }
 

}
