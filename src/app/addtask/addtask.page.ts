import { Component, OnInit } from '@angular/core';
import { RegisterserviceService } from '../registerservice.service';
import { titletask } from './titletask';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.page.html',
  styleUrls: ['./addtask.page.scss'],
})
export class AddtaskPage implements OnInit {
  data1:any;
title:any;

  constructor( private v:RegisterserviceService) { 
    this.title="";
  }
 task($second){
   let data=new titletask(this.title,$second.value);
   this.v.task(data);
   
  }

  ngOnInit() {
  }

}
