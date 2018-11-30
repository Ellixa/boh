import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TitleComponent} from './components/title component/title.component';
import { Title2Component } from './title2/title2.component';
import { DescriptionComponent } from './description/description.component';
import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    Title2Component,
    DescriptionComponent,
    LikeComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
