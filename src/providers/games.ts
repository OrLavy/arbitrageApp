import { Arbitrage } from "../common/models/arbitrage";
import *  as TEAMS from "./teams";
import * as SITES from "./sites";
import { GameStatus } from "../common/models/gameStatus";

export const PAST_GAMES: Arbitrage[] = [
    {
        teamA: TEAMS.CHICAGO_BULLS,
        teamB: TEAMS.BOSTON_CELTICS,
        betA: {
            ratio: 2.2,
            site: SITES.BET365
        },
        betB: {
            ratio: 2.1,
            site: SITES.BET_ONLINE
        },
        dTime: new Date(2017, 3, 26),
        status: GameStatus.Finished
    },
    {
        teamA: TEAMS.UTAH_JAZZ,
        teamB: TEAMS.LA_CLIPPERS,
        betA: {
            ratio: 2.05,
            site: SITES.BET_ONLINE
        },
        betB: {
            ratio: 2.3,
            site: SITES.BET_ONLINE
        },
        dTime: new Date(2017, 3, 30),
        status: GameStatus.Finished
    },
    {
        teamA: TEAMS.BOSTON_CELTICS,
        teamB: TEAMS.WASHINGTON_WIZARDS,
        betA: {
            ratio: 2.05,
            site: SITES.BET_ONLINE
        },
        betB: {
            ratio: 2.3,
            site: SITES.B_WIN
        },
        dTime: new Date(2017, 4, 4),
        status: GameStatus.Finished
    },
    {
        teamA: TEAMS.LA_CLIPPERS,
        teamB: TEAMS.UTAH_JAZZ,
        betA: {
            ratio: 1.8,
            site: SITES.BET_ONLINE
        },
        betB: {
            ratio: 3.0,
            site: SITES.BET_AWAY
        },
        dTime: new Date(2017, 3, 23),
        status: GameStatus.Finished
    },
];

const arbitrageA : Arbitrage = {
        awayRatioSite: {
            name: "bla",
            url: "http://bla.com",
            image: "bla.jpg"
        },
        drawRatioSite: {
            name: "bla3",
            url: "http://bla3.com",
            image: "bla3.jpg",
        },
        game: {
            awayTeam: {
                displayName: "Second",
            },
            homeTeam: {
                displayName: "First",
            },
            date: new Date("2017-05-27T16:38:10.433"),

            gameSiteRatios : []
        },
        homeRatioSite: {
            name: "bla2",
            url: "http://bla2.com",
            image: "bla2.jpg",
        },
        gameId: 1,
        homeRatio: 3.1,
        drawRatio: 3.1,
        awayRatio: 3.1,
        homeBetPercent: 0.33,
        drawBetPercent: 0.34,
        awayBetPercent: 0.33,
        profitPercent: 0.3,
        isActive: true,
        findTime: new Date("2017-05-27T16:38:14.69"),
        ExpireTime : new Date("2017-07-27T16:38:14.69")
    };

export const FUTURE_GAMES: Arbitrage[] = [
    arbitrageA
];