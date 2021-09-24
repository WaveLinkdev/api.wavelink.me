"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("./api");
require("dotenv").config();
console.log(process.env.PORT);
var api = new api_1.API({
    PORT: process.env.PORT || 3000,
});
api.start();
//# sourceMappingURL=index.js.map