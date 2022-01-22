const express = require("express");
const db = require("./database/config");
const mongoose = require("mongoose");
const HOST = '0.0.0.0';
const PORT = process.env.PORT || 5000;

class App {
    constructor() {
        this.express = express();

        this.database();
        this.middlewares();
        this.routes();

        this.express.listen(PORT, HOST, () => {
            console.log(`Application running on port ${PORT}`);
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
