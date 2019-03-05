import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.page.html',
  styleUrls: ['./sort.page.scss'],
})
export class SortPage implements OnInit {

  constructor(private r:Router) { }
  today: number =Date.now();
  importance(){
    this.r.navigate(['/importance']);
  }
  CreateTask(){
    this.r.navigate(['/addtask']);
  }
  completedTask(){
    this.r.navigate(['/day']);
  }


  ngOnInit() {
  }

}
