import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

// Shows how to create a layout where you dont have to ngIf the nav bar
const routes: Routes = [
  {
    path: '', component: ShellComponent,
    children: [
      //{ path: 'home', component: HomeComponent }
    ],
  },
  //{ path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
