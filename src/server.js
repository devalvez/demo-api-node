const express = require("express");
const db = require("./database/config");
const mongoose = require("mongoose");

class App {
    constructor() {
        this.express = express();

        this.database();
        this.middlewares();
        this.routes();

        this.express.listen(8080, () => {
            console.log(`Application running on port 8080`);
        });
                           }

        database() {
            mongoose.connect(db.uri, { useNewUrlParser: true });
        }

        middlewares() {
            this.express.use(express.json());
        }

        routes() {
            this.express.use(require("./routes"));
        }
    }
    module.exports = new App().express;
