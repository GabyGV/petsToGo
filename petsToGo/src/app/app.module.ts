import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { AlertModule } from '@coreui/angular';
import { HeaderModule, GridModule, NavModule, DropdownModule, CardModule, ButtonModule, ImgModule, FooterModule, FormModule, SidebarModule} from '@coreui/angular';
import { RegisterComponent } from './components/register/register.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent
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
    ImgModule,
    FooterModule,
    NgbModule,
    FormsModule,
    FormModule,
    SidebarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
