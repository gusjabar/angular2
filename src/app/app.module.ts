import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TwitterServices } from "app/twitter.services";
import { TwitterComponent } from './twitter.component';
import { LikeComponent } from './like.component';



import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TwitterComponent,
    LikeComponent
    
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],

  bootstrap: [AppComponent],
  providers: [TwitterServices]
})
export class AppModule { }
