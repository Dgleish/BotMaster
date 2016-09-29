import { Component, OnInit} from '@angular/core'
import { ActivatedRoute, Params }   from '@angular/router';

import { Bot } from './bot';

import { BotService } from './bot.service';

@Component({
    moduleId: module.id,
    selector: 'bot',
    templateUrl: 'bot.component.html',
})
export class BotComponent implements OnInit {

    botID: string;
    bot: Bot;
    constructor(
        private route: ActivatedRoute,
        private botService: BotService){}

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            this.botID = id;
        });
        this.botService.getBot(this.botID)
            .then(
                bot => this.bot = bot,
                error => console.error(<any>error)
            )

    }

    doBadThings(): void {
        console.log(`RAAAAR ${this.bot.ip}:${this.bot.port}`);
    }
}