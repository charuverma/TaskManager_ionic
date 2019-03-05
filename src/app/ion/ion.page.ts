import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ion',
  templateUrl: './ion.page.html',
  styleUrls: ['./ion.page.scss'],
})
export class IonPage implements OnInit {

  constructor(private r:Router) { }
share(){
  this.r.navigate(['/sort']);
}
theme(){
  this.r.navigate(['/newlist']);
}
  ngOnInit() {
  }

}
