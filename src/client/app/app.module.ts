import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MiddleContainerComponent } from './middle-container/middle-container.component';
import { UserContainerComponent } from './user-container/user-container.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, TopBarComponent, MiddleContainerComponent, UserContainerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
