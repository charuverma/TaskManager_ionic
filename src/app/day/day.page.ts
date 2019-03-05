import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterserviceService } from '../registerservice.service';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-day',
  templateUrl: './day.page.html',
  styleUrls: ['./day.page.scss'],
})
export class DayPage implements OnInit {
data1:any;
title:any;

  constructor(private r:Router,private v:RegisterserviceService,private action:ActionSheetController) {
    let tok =this.v.getTkn();
    if(!tok)
    {
      this.r.navigate(['/contact']);
    }

   this.v.search1().subscribe(res=>{
     // console.log(res);
      this.data1=res;
      });
    
    
   }
 today: number =Date.now();
  send(title){
this.v.send(title);
  }
 
  mor(){
    this.r.navigate(['/ion']);
  }
 async showactionsheet(){
    let actionsheet = await this.action.create({
      header : 'Add Task',
      buttons : [
      ]
    });
   await actionsheet.present();
  }
  async actionsheet(){
    let actionsheet = await this.action.create({
      header : 'Completed Task',
      buttons : [
      ]
    });
   await actionsheet.present();
  }
   
   

  ngOnInit() {
  }
  

}
