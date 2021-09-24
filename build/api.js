"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
var express_1 = __importDefault(require("express"));
var API = /** @class */ (function () {
    function API(config) {
        this.app = express_1.default();
        this.config = config;
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        this.generateEndpoints();
    }
    API.prototype.generateEndpoints = function () {
        this.app.get("/status", function (req, res) {
            res.send("Online");
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