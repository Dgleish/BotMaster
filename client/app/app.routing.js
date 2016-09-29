"use strict";
var router_1 = require('@angular/router');
var bot_list_component_1 = require('./bot-list.component');
var dashboard_component_1 = require('./dashboard.component');
var bot_component_1 = require('./bot.component');
var appRoutes = [
    {
        path: 'botlist',
        component: bot_list_component_1.BotListComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: '',
        redirectTo: 'botlist',
        pathMatch: 'full'
    },
    {
        path: 'bot/:id',
        component: bot_component_1.BotComponent,
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map