import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { AlertModule } from '@coreui/angular';
import { HeaderModule, GridModule, NavModule, DropdownModule, CardModule, ButtonModule, ImgModule } from '@coreui/angular';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule,
    HeaderModule,
    GridModule, 
    NavModule, 
    DropdownModule,
    CardModule,
    ButtonModule,
    ImgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
