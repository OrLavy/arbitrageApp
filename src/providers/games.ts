import { Arbitrage } from "../common/models/arbitrage";
import *  as TEAMS from "./teams";
import * as SITES from "./sites";
import { GameStatus } from "../common/models/gameStatus";

export const PAST_GAMES : Arbitrage[] = [
    {
         teamA : TEAMS.CHICAGO_BULLS,
         teamB : TEAMS.BOSTON_CELTICS,
         betA : {
            ratio : 2.2,
            site : SITES.BET365
         },
         betB : {
            ratio : 2.1,
            site : SITES.BET_ONLINE
         },
         dTime : new Date(2017,3, 26),
         status : GameStatus.Finished
    },
    {
         teamA : TEAMS.UTAH_JAZZ,
         teamB : TEAMS.LA_CLIPPERS,
         betA : {
            ratio : 2.05,
            site : SITES.BET_ONLINE
         },
         betB : {
            ratio : 2.3,
            site : SITES.BET_ONLINE
         },
         dTime : new Date(2017,3, 30),
         status : GameStatus.Finished
    },
        {
         teamA : TEAMS.BOSTON_CELTICS,
         teamB : TEAMS.WASHINGTON_WIZARDS,
         betA : {
            ratio : 2.05,
            site : SITES.BET_ONLINE
         },
         betB : {
            ratio : 2.3,
            site : SITES.B_WIN
         },
         dTime : new Date(2017,4, 4),
         status : GameStatus.Finished
    },
        {
         teamA : TEAMS.LA_CLIPPERS,
         teamB : TEAMS.UTAH_JAZZ,
         betA : {
            ratio : 1.8,
            site : SITES.BET_ONLINE
         },
         betB : {
            ratio : 3.0,
            site : SITES.BET_AWAY
         },
         dTime : new Date(2017,3, 23),
         status : GameStatus.Finished
    },
];

export const FUTURE_GAMES : Arbitrage[] = [
    {
         teamA : TEAMS.CLEVELAND_CAVALIERS,
         teamB : TEAMS.UTAH_JAZZ,
         betA : {
            ratio : 2.5,
            site : SITES.BET365
         },
         betB : {
            ratio : 2.01,
            site : SITES.BET_ONLINE
         },
         dTime : new Date(2017,4, 8),
         status : GameStatus.Schedualed
    }
];