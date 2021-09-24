import express from "express";

export class API {
    app: express.Application;
    config: ApiConfig;
    constructor(config: ApiConfig) {
        this.app = express();
        this.config = config;

        this.app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        })

        this.generateEndpoints();
    }

    private generateEndpoints() {
        this.app.get("/status", (req, res) => {
            res.send("Online");
        })
    }

    public start() {
        this.app.listen(3000, () => {
            console.log("`api.wavelink.me` has started on port " + this.config.PORT);
        });
    }
}

type ApiConfig = {
    PORT: number;
}