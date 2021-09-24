import { API } from "./api";

require("dotenv").config();

console.log(process.env.PORT);

const api = new API({
    PORT: (process.env.PORT as unknown) as number || 3000,
});
api.start();