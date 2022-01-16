import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyPastureComponent } from './ng-content-video/my-pasture/my-pasture.component';
import { MySheepComponent } from './ng-content-video/my-sheep/my-sheep.component';
import { MyElephantComponent } from './ng-content-video/my-elephant/my-elephant.component';
import { ShellComponent } from './shell/shell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from  '@angular/material/button';
import { MatCardModule } from  '@angular/material/card';
import { MatGridListModule } from  '@angular/material/grid-list';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { FilterComponent } from './browse/filter/filter.component';
import { ResultsComponent } from './browse/results/results.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { TestingComponent } from './testing/testing.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BoardComponent } from './board/board.component';
import { GridsterModule } from 'angular-gridster2';
import {MatIconModule} from '@angular/material/icon';
import { WeekTodoListComponent } from './week-todo-list/week-todo-list.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Testing2Component } from './testing2/testing2.component';
import { MarkdownModule } from 'ngx-markdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Testing3Component } from './testing3/testing3.component';
import { Testing4Component } from './testing4/testing4.component';
import { CodePreviewComponent } from './code-preview/code-preview.component';
import { Testing5Component } from './testing5/testing5.component';
import { Testing6Component } from './testing6/testing6.component';
import { Testing7Component } from './testing7/testing7.component';
import { Testing8Component } from './testing8/testing8.component';
import { Testing9Component } from './testing9/testing9.component';
import { Testing10Component } from './testing10/testing10.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { Testing11Component } from './testing11/testing11.component';
import { monacoConfig } from './monaco-editor-config/monaco-editor-config';
import { Testing12Component } from './testing12/testing12.component';
import { Testing13Component } from './testing13/testing13.component';
import { BottomPanelComponent, TabComponent } from './bottom-panel/bottom-panel.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { Testing14Component } from './testing14/testing14.component';
import { Testing15Component } from './testing15/testing15.component';
import { Testing16Component } from './testing16/testing16.component';
import { Testing17Component } from './testing17/testing17.component';
import { Testing18Component } from './testing18/testing18.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FieldComponent } from './dynamic-form/field/field.component';
import { Testing19Component } from './testing19/testing19.component';
import { HighlightSearchPipe, HighlightSearchPipe2, Testing20Component } from './testing20/testing20.component';
import { Testing21Component } from './testing21/testing21.component';
import { ToasterDirective } from './Directives/toaster.directive';
import { ToasterComponent } from './toaster/toaster.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { ContextMenuItemDirective } from './context-menu/context-menu-item.directive';
import { ContextMenuDirective } from './context-menu/context-menu.directive';
import { ContextMenuContentComponent } from './context-menu/context-menu-content/context-menu-content.component';
import { Testing22Component } from './testing22/testing22.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPastureComponent,
    MySheepComponent,
    MyElephantComponent,
    ShellComponent,
    HomeComponent,
    BrowseComponent,
    FilterComponent,
    ResultsComponent,
    TestingComponent,
    BoardComponent,
    WeekTodoListComponent,
    Testing2Component,
    Testing3Component,
    Testing4Component,
    CodePreviewComponent,
    Testing5Component,
    Testing6Component,
    Testing7Component,
    Testing8Component,
    Testing9Component,
    Testing10Component,
    Testing11Component,
    Testing12Component,
    Testing13Component,
    TabComponent,
    BottomPanelComponent,
    CodeEditorComponent,
    Testing14Component,
    Testing15Component,
    Testing16Component,
    Testing17Component,
    Testing18Component,
    DynamicFormComponent,
    FieldComponent,
    Testing19Component,
    Testing20Component,
    HighlightSearchPipe,
    HighlightSearchPipe2,
    Testing21Component,
    ToasterDirective,
    ToasterComponent,
    ContextMenuComponent,
    ContextMenuItemDirective,
    ContextMenuDirective,
    ContextMenuContentComponent,
    Testing22Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    DragDropModule,
    GridsterModule,
    MatIconModule,
    MatCheckboxModule,
    MarkdownModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    MonacoEditorModule.forRoot(),
    //ChartsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
