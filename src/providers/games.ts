import { Arbitrage } from "../common/models/arbitrage";
import *  as TEAMS from "./teams";
import * as SITES from "./sites";
import { GameStatus } from "../common/models/gameStatus";

export const PAST_GAMES: Arbitrage[] = [
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
                displayName: "M.United",
            },
            homeTeam: {
                displayName: "F.C Barcelona",
            },
            date: new Date("2017-09-27T16:38:10.433"),

            gameSiteRatios : []
        },
        homeRatioSite: {
            name: "bla2",
            url: "http://bla2.com",
            image: "bla2.jpg",
        },
        gameId: 1,
        homeRatio: 2.1,
        drawRatio: 2.9,
        awayRatio: 3.0,
        homeBetPercent: 0.33,
        drawBetPercent: 0.34,
        awayBetPercent: 0.33,
        profitPercent: 0.3,
        isActive: true,
        findTime: new Date("2017-05-27T16:38:14.69"),
        ExpireTime : new Date("2017-07-27T16:38:14.69")
    };
const arbitrageB : Arbitrage = {
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
                displayName: "Real Madrid",
            },
            homeTeam: {
                displayName: "Arsenal",
            },
            date: new Date("2017-09-25T10:00:00.433"),

            gameSiteRatios : []
        },
        homeRatioSite: {
            name: "bla2",
            url: "http://bla2.com",
            image: "bla2.jpg",
        },
        gameId: 1,
        homeRatio: 2.1,
        drawRatio: 2.9,
        awayRatio: 3.0,
        homeBetPercent: 0.33,
        drawBetPercent: 0.34,
        awayBetPercent: 0.33,
        profitPercent: 0.3,
        isActive: true,
        findTime: new Date("2017-05-27T16:38:14.69"),
        ExpireTime : new Date("2017-07-27T16:38:14.69")
    };

    export const FUTURE_GAMES: Arbitrage[] = [
    arbitrageA,
    arbitrageB
];