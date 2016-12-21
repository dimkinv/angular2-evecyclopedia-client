export interface IShipsService{
    getShips:()=>string[];
}

export class ShipsService{
    ships:string[] = ['Apocalypse Imperial Issue','Armageddon Imperial Issue','Apocalypse Navy Issue','Bhaalgorn','Armageddon Navy Issue'];
    getShips(){
        return this.ships;
    }
}