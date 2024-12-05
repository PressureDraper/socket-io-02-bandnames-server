import { v4 } from 'uuid';

class Band {
    name: string;
    id: string;
    votes: number;

    constructor(name: string) {

        this.id = v4();
        this.name = name;
        this.votes = 0;
        
    }
}

export default Band;