import { Component, OnInit } from '@angular/core';
import { RegisterserviceService } from '../registerservice.service';
import { remindermodel } from './remindermodel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.page.html',
  styleUrls: ['./reminder.page.scss'],
})
export class ReminderPage implements OnInit {
data:any;
  constructor(private v:RegisterserviceService,private r:Router) { }
  

  ngOnInit() {
  }
  set(title,date,time){
    let data= new remindermodel(title.value,date.value,time.value);
    this.v.set1(data)  ;

   }

}
