"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const band_1 = __importDefault(require("./band"));
class BandList {
    constructor() {
        this.bands = [
            new band_1.default('Band1'),
            new band_1.default('Band2'),
            new band_1.default('Band3'),
            new band_1.default('Band4'),
            new band_1.default('Band5')
        ];
    }
    addBand(name) {
        this.bands.push(new band_1.default(name));
        return this.bands;
    }
    removeBand(id) {
        this.bands = this.bands.filter(band => band.id !== id);
    }
    getBands() {
        return this.bands;
    }
    increseVotes(id) {
        this.bands = this.bands.map(band => {
            if (band.id === id) {
                band.votes += 1;
            }
            return band;
        });
    }
    changeBandName(id, newName) {
        this.bands = this.bands.map(band => {
            if (band.id === id) {
                band.name = newName;
            }
            return band;
        });
    }
}
exports.default = BandList;
