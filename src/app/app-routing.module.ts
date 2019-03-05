import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'day',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'add', loadChildren: './add/add.module#AddPageModule' },
  { path: 'day', loadChildren: './day/day.module#DayPageModule' },
  { path: 'my-day', loadChildren: './my-day/my-day.module#MyDayPageModule' },
  { path: 'importance', loadChildren: './importance/importance.module#ImportancePageModule' },
  { path: 'task', loadChildren: './task/task.module#TaskPageModule' },
  { path: 'reminder', loadChildren: './reminder/reminder.module#ReminderPageModule' },
  { path: 'basic', loadChildren: './basic/basic.module#BasicPageModule' },
  { path: 'newlist', loadChildren: './newlist/newlist.module#NewlistPageModule' },
  { path: 'remind', loadChildren: './remind/remind.module#RemindPageModule' },
  { path: 'ion', loadChildren: './ion/ion.module#IonPageModule' },
  { path: 'sort', loadChildren: './sort/sort.module#SortPageModule' },
  { path: 'addtask', loadChildren: './addtask/addtask.module#AddtaskPageModule' },
  { path: 'logout', loadChildren: './logout/logout.module#LogoutPageModule' },
  { path: 'geolocation', loadChildren: './geolocation/geolocation.module#GeolocationPageModule' }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
