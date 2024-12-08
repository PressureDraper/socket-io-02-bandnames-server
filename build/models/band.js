"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Band {
    constructor(name) {
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.votes = 0;
    }
}
exports.default = Band;
