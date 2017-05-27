
import { GameStatus } from "./gameStatus";
import { Team } from "./team";
import { Bet } from "./bet";

export class Arbitrage {
    public teamA : Team;
    public teamB : Team;

    public betA : Bet;
    public betB : Bet;

    public dTime : Date;
    public status : GameStatus;

    constructor(){

    }

    
}