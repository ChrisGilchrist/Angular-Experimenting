import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyPastureComponent } from './ng-content-video/my-pasture/my-pasture.component';
import { MySheepComponent } from './ng-content-video/my-sheep/my-sheep.component';
import { MyElephantComponent } from './ng-content-video/my-elephant/my-elephant.component';
import { ShellComponent } from './shell/shell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from  '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MyPastureComponent,
    MySheepComponent,
    MyElephantComponent,
    ShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
