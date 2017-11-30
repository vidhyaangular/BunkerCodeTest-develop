import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './routing/routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { AddPersonComponent } from "app/addperson/addperson.component";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddPersonComponent,
    InstructionsComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
