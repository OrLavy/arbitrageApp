
import { GameStatus } from "./gameStatus";
import { Team } from "./team";
import { Bet } from "./bet";
import { Site } from "./site";
import { Game } from "./game";

export class Arbitrage {

    public gameId : number;
    public homeRatio : number;
    public drawRatio : number;
    public awayRatio : number;

    public homeBetPercent : number;
    public drawBetPercent : number;
    public awayBetPercent : number;
    public profitPercent : number;

    public isActive     : boolean;
    public findTime     : Date;
    public ExpireTime   : Date;

    public homeRatioSite : Site;
    public drawRatioSite : Site;
    public awayRatioSite : Site;
    public game : Game;

    constructor(){

    }
}