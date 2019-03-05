import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterserviceService } from '../registerservice.service';
@Component({
  selector: 'app-remind',
  templateUrl: './remind.page.html',
  styleUrls: ['./remind.page.scss'],
})
export class RemindPage implements OnInit {
data1:any;
  constructor(private r:Router,private v:RegisterserviceService) { 
   
}
  cir(){
    this.r.navigate(['/reminder']);
  }
  ionViewDidEnter(){
    this.v.search2().subscribe(res=>{
      this.data1=res;
      });
  }
  
ngOnInit(){
  
}
}
