import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './github/components/logo/logo.component';
import { UserComponent } from './github/components/user/user.component';
import { HomeComponent } from './github/container/home/home.component';
import { ListComponent } from './github/components/list/list.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from './github/pipes/datePipe.pipe';
import { FormatUrlPipe } from './github/pipes/formatUrl.pipe';
import { CarregandoComponent } from './github/components/carregando/carregando.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    UserComponent,
    HomeComponent,
    ListComponent,
    DatePipe,
    FormatUrlPipe,
    CarregandoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
