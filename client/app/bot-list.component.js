"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var bot_service_1 = require('./bot.service');
var BotListComponent = (function () {
    function BotListComponent(router, botService) {
        this.router = router;
        this.botService = botService;
    }
    BotListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.botService.getBots()
            .subscribe(function (bots) {
            _this.bots = bots;
            _this.botCount = bots.length;
        }, function (error) { return _this.errorText = error; });
    };
    BotListComponent.prototype.gotoBot = function (bot) {
        var link = ['/bot', bot.id];
        this.router.navigate(link);
    };
    BotListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'bot-list',
            templateUrl: './bot-list.component.html',
            styleUrls: ['./bot-list.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, bot_service_1.BotService])
    ], BotListComponent);
    return BotListComponent;
}());
exports.BotListComponent = BotListComponent;
//# sourceMappingURL=bot-list.component.js.map