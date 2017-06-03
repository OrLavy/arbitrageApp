import {Game} from './game';
import {Site} from './site';

export class GameSiteRatio {
    public gameId : number;
    public siteId : number;
    public homeRatio : number;
    public drawRatio : number;
    public awayRatio : number;
    public lastUpdateTime : Date;

    public site : Site;
    public game : Game;
}