import { Component, OnInit} from '@angular/core';
import { Bot } from './bot';
import { Router } from '@angular/router';

import { BotService } from './bot.service';

@Component({
    moduleId: module.id,
    selector: 'bot-list',
    templateUrl: './bot-list.component.html',
    styleUrls: ['./bot-list.component.css']
})
export class BotListComponent implements OnInit{

  bots: Bot[];
  botCount: Number;
  errorText: string;

  constructor(
    private router: Router,
    private botService: BotService){}

  ngOnInit(): void {
    this.botService.getBots()
    .subscribe(
        bots => {
          this.bots = bots;
          this.botCount = bots.length;
        },
        error => this.errorText = <any>error
    )
  }

  gotoBot(bot: Bot){
      let link = ['/bot', bot.id];
      this.router.navigate(link);
  }
}