import { Site } from "./Site";

export class Bet {
    public site : Site;
    public ratio : number;

    constructor(site : Site, ratio : number){
        this.site = site;
        this.ratio = ratio;
    }
}