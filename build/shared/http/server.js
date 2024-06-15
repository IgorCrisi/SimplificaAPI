"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
var app_1 = require("./app");
var typeorm_1 = require("../typeorm");
typeorm_1.dataSource.initialize().then(function () {
    try {
        var server = app_1.app.listen(3333, function () {
            console.log('Server started on port 3333! 🚀');
        });
    }
    catch (error) {
        console.log(error);
    }
});
