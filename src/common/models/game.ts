import { Team } from "./team";
import { GameSiteRatio } from "./gameSiteRatio";

export class Game {
    public date : Date;
    public homeTeam : Team;
    public awayTeam : Team;
    public gameSiteRatios : Array<GameSiteRatio>;   
}