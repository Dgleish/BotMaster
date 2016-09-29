"use strict";
var Bot = (function () {
    function Bot(id, name, ip, port) {
        if (name === void 0) { name = "Smith"; }
        this.id = id;
        this.name = name;
        this.ip = ip;
        this.port = port;
    }
    return Bot;
}());
exports.Bot = Bot;
//# sourceMappingURL=bot.js.map