import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RegisterserviceService } from './registerservice.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
     /*  {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },  
    */
   /*  {
      title: 'Contact',
      url: '/contact',
      icon: 'contact'
    }, */
    /* {
      title: 'Login',
      url: '/login',
      icon: 'log-in'
    } */
   /*  {
      title: 'Contact',
      url: '/contact',
      icon: 'contact'
    }, */
      /* {
      title: 'Day',
      url: '/day',
      icon: 'sunny'
    }, */  
    
     {
      title: 'My Day',
      url: '/day',
      icon: 'sunny'
    } , 
    {
      title: 'Importance',
      url: '/importance',
      icon: 'star'
    } ,
    {
      title: 'GeoLocation',
      url: '/geolocation',
      icon: 'globe'
    } ,
    {
      title: 'Task',
      url: '/addtask',
      icon: 'checkbox'
    } ,

    {
      title: 'Reminder',
      url: '/remind',
      icon: 'time'
    },
    {
      title: 'Basic Details',
      url: '/basic',
      icon: 'menu'
    } ,
    {
      title: 'NewList',
      url: '/newlist',
      icon: 'add'
    },
    {
      title: 'LogOut',
      url: '/contact',
      icon: 'log-in'
    }
    /* {
      title: 'ion',
      url: '/ion',
      icon: 'more'
    }
    /* {
      title: 'sort',
      url: '/sort',
      icon: 'more'
    }
     */
    /* {
      title: 'Reminder',
      url: '/Reminder',
      icon: 'time'
    } */

    
  ];
  data:any;
  contact:any;
  name:any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private v:RegisterserviceService
  ) {
    this.initializeApp();
    let token=this.v.getTkn();
  this.v.data(token).subscribe(res=>{
    this.data=res[0];
    this.contact=this.data.contact;
    this.name=this.data.name;
});
   
}

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
