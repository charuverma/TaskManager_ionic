import { Component, OnInit } from '@angular/core';
import { RegisterserviceService } from '../registerservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newlist',
  templateUrl: './newlist.page.html',
  styleUrls: ['./newlist.page.scss'],
})
export class NewlistPage implements OnInit {
  data:any;
  constructor(private v:RegisterserviceService,private r:Router) { }
  cross(){
    this.r.navigate(['/day']);
  }
  list($title){
    // let data= new listmodel(title.value);
    this.data=$title.value;
     this.v.list1(this.data) ;
    }
  ngOnInit() {
  }
  


} 
