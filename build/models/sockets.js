"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const band_list_1 = __importDefault(require("./band-list"));
class Sockets {
    constructor(io) {
        this.io = io;
        this.bandList = new band_list_1.default();
        this.socketEvents();
    }
    socketEvents() {
        this.io.on('connection', (socket) => {
            console.log('Client connected: ', socket.id, socket.handshake.address);
            this.io.emit('getBands', this.bandList.getBands());
            //increase votes
            socket.on('increseVotes', (id) => {
                console.log('Event received - Increment', id);
                this.bandList.increseVotes(id);
                this.io.emit('getBands', this.bandList.getBands());
            });
            //delete band
            socket.on('deleteBand', (id) => {
                console.log('Event received - Delete', id);
                this.bandList.removeBand(id);
                this.io.emit('getBands', this.bandList.getBands());
            });
            //change name to band
            socket.on('changeBandName', (id, name) => {
                console.log('Event received - Change BandName');
                this.bandList.changeBandName(id, name);
                this.io.emit('getBands', this.bandList.getBands());
            });
            socket.on('addBand', (name) => {
                console.log('Event received - Add Band');
                this.bandList.addBand(name);
                this.io.emit('getBands', this.bandList.getBands());
            });
            //on disconnected client
            socket.on("disconnect", () => {
                console.log('Client disconnected: ', socket.id, socket.handshake.address, '\n');
            });
        });
    }
}
exports.default = Sockets;
