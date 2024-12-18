"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sockets_1 = __importDefault(require("./sockets"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        //express server
        this.app = (0, express_1.default)();
        this.port = `${process.env.PORT}`;
        //http server
        this.server = require('http').createServer(this.app);
        //Socket server config
        this.io = require('socket.io')(this.server, {
            cors: {
                origin: '*',
                methods: ['GET', 'POST']
            }
        });
    }
    middlewares() {
        this.app.use(express_1.default.static(__dirname + '../../../public'));
        this.app.use((0, cors_1.default)({
            origin: '*', // all domains allowed use *
            methods: ['GET', 'POST'],
            allowedHeaders: ['Content-Type', 'Authorization']
        }));
    }
    socketIOConfig() {
        new sockets_1.default(this.io);
    }
    execute() {
        this.middlewares();
        this.socketIOConfig();
        this.server.listen(this.port, () => {
            console.log(`Server Running on port ${this.port}...`);
        });
    }
}
exports.default = Server;
