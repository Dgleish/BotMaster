import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BotListComponent } from './bot-list.component';
import { DashboardComponent } from './dashboard.component';
import { BotComponent } from './bot.component';

import { BotService } from './bot.service';

import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    BotListComponent,
    DashboardComponent,
    BotComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [BotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
