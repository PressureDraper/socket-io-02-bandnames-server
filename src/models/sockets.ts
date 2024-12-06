import { Socket } from "socket.io";
import BandList from './band-list';

class Sockets {
    io: Socket;
    bandList: BandList;

    constructor(io: Socket) {
        this.io = io;

        this.bandList = new BandList();

        this.socketEvents();
    }

    socketEvents() {
        this.io.on('connection', (socket: Socket) => {
            console.log('Client connected: ', socket.id, socket.handshake.address);

            this.io.emit('getBands', this.bandList.getBands());

            //increase votes
            socket.on('increseVotes', (id: string) => {
                console.log('Event received - Increment', id);
                
                this.bandList.increseVotes(id);
                this.io.emit('getBands', this.bandList.getBands());
            });

            //delete band
            socket.on('deleteBand', (id: string) => {
                console.log('Event received - Delete', id);

                this.bandList.removeBand(id);
                this.io.emit('getBands', this.bandList.getBands());
            })

            //change name to band
            socket.on('changeBandName', (id: string, name: string) => {
                console.log('Event received - Change BandName');

                this.bandList.changeBandName(id, name);
                this.io.emit('getBands', this.bandList.getBands());
            })

            socket.on('addBand', (name: string) => {
                console.log('Event received - Add Band');

                this.bandList.addBand(name);
                this.io.emit('getBands', this.bandList.getBands());
            })

            //on disconnected client
            socket.on("disconnect", () => {
                console.log('Client disconnected: ', socket.id, socket.handshake.address, '\n');
            });
        });
    }
}

export default Sockets;