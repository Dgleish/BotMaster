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
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var BotService = (function () {
    function BotService(http) {
        this.http = http;
        this.baseUrl = 'http://127.0.0.1:3005/api/';
    }
    BotService.prototype.getBots = function () {
        var fullUrl = this.baseUrl + "Bots";
        return this.http.get(fullUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    BotService.prototype.getBot = function (id) {
        var fullUrl = this.baseUrl + "Bots/" + id;
        return this.http.get(fullUrl).toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    BotService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    BotService.prototype.handleError = function (error) {
        var errMsg = error.message ? error.message :
            error.status ? error.status + " - " + error.statusText :
                "Server error";
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    BotService.prototype.addBot = function (name) {
        var body = JSON.stringify({ 'name': name });
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "Bots", body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    BotService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BotService);
    return BotService;
}());
exports.BotService = BotService;
//# sourceMappingURL=bot.service.js.map