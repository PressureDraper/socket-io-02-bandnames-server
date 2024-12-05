import Band from "./band";

class BandList {
    bands: Band[];

    constructor() {
        this.bands = [
            new Band('Band1'),
            new Band('Band2'),
            new Band('Band3'),
            new Band('Band4'),
            new Band('Band5')
        ]
    }

    addBand(name: string) {
        this.bands.push(new Band(name));
        return this.bands;
    }

    removeBand(id: string) {
        this.bands = this.bands.filter(band => band.id !== id);
    }

    getBands() {
        return this.bands;
    }

    increseVotes(id: string) {
        this.bands = this.bands.map(band => {

            if (band.id === id) {
                band.votes += 1;
            }

            return band;
        })
    }

    changeBandName(id: string, newName: string) {
        this.bands = this.bands.map(band => {
            if (band.id === id) {
                band.name = newName;
            }

            return band;
        })
    }

}

export default BandList;