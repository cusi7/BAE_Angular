import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//componentes
import { AppComponent } from './app.component';

//agular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarModule } from './components/navbar/navbar.module';
import { UserHomeComponent } from './pages/userHome/user-home/user-home.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    UserHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
