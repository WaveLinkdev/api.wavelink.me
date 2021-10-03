"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
var express_1 = __importDefault(require("express"));
var Webhook = require("discord-webhook-node").Webhook;
var API = /** @class */ (function () {
    function API(config) {
        this.app = express_1.default();
        this.config = config;
        this.generateEndpoints();
    }
    API.prototype.generateEndpoints = function () {
        this.app.get("/", function (req, res) {
            res.send("Hello World");
        });
        this.app.get("/stats", function (req, res) {
            var hook = new Webhook(process.env.discordWebhookAddress);
            hook.setUsername("api.wavelink.me");
            hook.send(req.ip);
        });
    };
    API.prototype.start = function () {
        var _this = this;
        this.app.listen(3000, function () {
            console.log("`api.wavelink.me` has started on port " + _this.config.PORT);
        });
    };
    return API;
}());
exports.API = API;
//# sourceMappingURL=api.js.map