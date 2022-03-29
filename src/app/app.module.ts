import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './github/components/logo/logo.component';
import { UserComponent } from './github/components/user/user.component';
import { HomeComponent } from './github/container/home/home.component';
import { ListComponent } from './github/components/list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from './github/pipes/datePipe.pipe';
import { FormatUrlPipe } from './github/pipes/formatUrl.pipe';
import { ComponentComponent } from './github/components/carregando/component/component.component';
import { PaginacaoComponent } from './github/paginacao/paginacao.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FiltrarComponent } from './github/filtrar/filtrar.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    UserComponent,
    HomeComponent,
    ListComponent,
    DatePipe,
    FormatUrlPipe,
    ComponentComponent,
    PaginacaoComponent,
    FiltrarComponent,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
