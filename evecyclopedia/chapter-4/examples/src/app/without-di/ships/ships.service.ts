export interface IShipsService{
    getShips:()=>string[];
}

export class ShipsService{
    ships:string[] = ['Vengeance', 'Retribution', 'Rifter', 'Bowhead', 'Orca'];
    getShips(){
        return this.ships;
    }
}