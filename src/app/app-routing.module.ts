import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { TestingComponent } from './testing/testing.component';
import { BoardComponent } from './board/board.component';
import { Testing2Component } from './testing2/testing2.component';
import { Testing3Component } from './testing3/testing3.component';
import { Testing4Component } from './testing4/testing4.component';
import { Testing5Component } from './testing5/testing5.component';
import { Testing6Component } from './testing6/testing6.component';
import { Testing7Component } from './testing7/testing7.component';
import { Testing8Component } from './testing8/testing8.component';
import { Testing9Component } from './testing9/testing9.component';
import { Testing10Component } from './testing10/testing10.component';
import { Testing11Component } from './testing11/testing11.component';
import { Testing12Component } from './testing12/testing12.component';
import { Testing13Component } from './testing13/testing13.component';
import { Testing14Component } from './testing14/testing14.component';
import { Testing15Component } from './testing15/testing15.component';
import { Testing16Component } from './testing16/testing16.component';
import { Testing17Component } from './testing17/testing17.component';
import { Testing18Component } from './testing18/testing18.component';
import { Testing19Component } from './testing19/testing19.component';
import { Testing20Component } from './testing20/testing20.component';
import { Testing21Component } from './testing21/testing21.component';
import { Testing22Component } from './testing22/testing22.component';

// Shows how to create a layout where you dont have to ngIf the nav bar
const routes: Routes = [
  {
    path: '', component: ShellComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'test', component: TestingComponent },
      { path: 'test2', component: Testing2Component },
      { path: 'test3', component: Testing3Component },
      { path: 'test4', component: Testing4Component },
      { path: 'test5', component: Testing5Component },
      { path: 'test6', component: Testing6Component },
      { path: 'test7', component: Testing7Component },
      { path: 'test8', component: Testing8Component },
      { path: 'test9', component: Testing9Component },
      { path: 'test10', component: Testing10Component },
      { path: 'test11', component: Testing11Component },
      { path: 'test12', component: Testing12Component },
      { path: 'test13', component: Testing13Component },
      { path: 'test14', component: Testing14Component },
      { path: 'test15', component: Testing15Component },
      { path: 'test16', component: Testing16Component },
      { path: 'test17', component: Testing17Component },
      { path: 'test18', component: Testing18Component },
      { path: 'test19', component: Testing19Component },
      { path: 'test20', component: Testing20Component },
      { path: 'test21', component: Testing21Component },
      { path: 'test22', component: Testing22Component }

    ],
  },
  { path: 'board', component: BoardComponent },

  { path: '**', redirectTo: 'home' }
  //{ path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
