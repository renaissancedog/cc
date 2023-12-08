var version = "b.12.8.g";
function q(id) {
    return document.getElementById(id);
}

class Building {
    constructor(baseCps, cost) {
        this.multiplier=1;
        this.baseCps = baseCps;
        this.cost = cost;
        this.costMultiplier = 1.15;
        this.count = 0;
    }

    buy(cookies) {
        if (cookies >= this.currentCost) {
            cookies -= this.currentCost;
            this.count++;
            this.cost*=this.costMultiplier;
        }
    }

    getCps() {
        return this.count * this.baseCps * this.multiplier;
    }
}
const cursors = new Building(0.1, 15);
const grandmas = new Building(1, 100);
const farms = new Building(8, 1100);
const mines = new Building(47, 13000);
const factories = new Building(260, 130000);
const banks = new Building(1400, 1400000);
const temples = new Building(7800, 20000000);
const wizards = new Building(44000, 330000000);
const shipments = new Building(260000, 5100000000);
const labs = new Building(1600000, 75000000000);

class CookieClicker {
    constructor() {
        this.cookies = 0;
        this.totalcookies = 0;
        this.cps = 0;
        this.clickmulti = 1;
    }
    add(add) {
        this.cookies+=add;
    }
    clicked() {
        this.cookies += this.clickmulti;
        this.totalcookies += this.clickmulti;
    }
    update() {
        
        this.cps = cursors.getCps + grandmas.getCps + farms.getCps + mines.getCps + factories.getCPS + banks.getCPS 
            + temples.getCps + wizards.getCps + shipments.getCps + labs.getCps;

        q("cursor-data").innerHTML = "You have " + cursors.count + " cursors, producing " + Math.round(cursors.getCps()*10) / 10 + " cps. Buy one for " + (Math.round(cursors.cost + 0.49)) + " cookies.";
        q("grandma-data").innerHTML = "You have " + grandmas.count + " grandmas, producing " + Math.round(grandmas.getCps()* 10) / 10 + " cps. Buy one for " + (Math.round(grandmas.cost + 0.49)) + " cookies.";
        q("farm-data").innerHTML = "You have " + farms.count + " farms, producing " + Math.round(farms.getCps() * 10) / 10 + " cps. Buy one for " + (Math.round(farms.cost + 0.49)) + " cookies.";
        q("mine-data").innerHTML = "You have " + mines.count + " mines, producing " + Math.round(mines.getCps() * 10) / 10 + " cps. Buy one for " + (Math.round(mines.cost + 0.49)) + " cookies.";
        q("factory-data").innerHTML = "You have " + factories.count + " factories, producing " + Math.round(factories.getCps() * 10) / 10 + " cps. Buy one for " + (Math.round(factories.cost + 0.49)) + " cookies.";
        q("bank-data").innerHTML = "You have " + banks.count + " banks, producing " + Math.round(banks.getCps() * 10) / 10 + " cps. Buy one for " + (Math.round(banks.cost + 0.49)) + " cookies.";
        q("temple-data").innerHTML = "You have " + temples.count + " temples, producing " + Math.round(temples.getCps() * 10) / 10 + " cps. Buy one for " + (Math.round(temples.cost + 0.49)) + " cookies.";
        q("wizard-data").innerHTML = "You have " + wizards.count + " wizard towers, producing " + Math.round(wizards.getCps() * 10) / 10 + " cps. Buy one for " + (Math.round(wizards.cost + 0.49)) + " cookies.";
        q("shipment-data").innerHTML = "You have " + shipments.count + " shipments, producing " + Math.round(shipments.getCps() * 10) / 10 + " cps. Buy one for " + (Math.round(shipments.cost + 0.49)) + " cookies.";
        q("lab-data").innerHTML = "You have " + labs.count + " alchemy labs, producing " + (Math.round(labs.getCps() * 10) / 10) + " cps. Buy one for " + (Math.round(labs.cost + 0.49)) + " cookies.";

        this.cookies += this.cps / 10;
        this.totalcookies += this.cps / 10;

        q("cookie_counter").innerHTML = "Cookies: " + Math.round(this.cookies - 0.5);
        q("cps_counter").innerHTML = "CPS: " + Math.round(this.cps * 10) / 10;
        q("total_cookies").innerHTML = "Total Cookies produced ever: " + Math.round(this.totalcookies - 0.5);
        q("version").innerHTML = "Version " + version;
    }
    static exportSave() {
        //var exportCode = (cookies + "/" + totalcookies + "/" + clickmulti + "/" + cps + "/" + cursors + "/" + grandmas + "/" + farms + "/" + mines + "/" + factories + "/" +
        //  banks + "/" + temples + "/" + wizards + "/" + shipments + "/" + labs + "/" + (cursors * 3 + grandmas * 17 + factories * 5 + banks * 55 + farms * 6 + labs * 8));
        //navigator.clipboard.writeText(exportCode);
    }
    static importSave() {
        //var importCode = prompt("Enter save code: ");
        //const importArray = importCode.split("/");
        //cookies = importArray[0];
        //totalcookies = importArray[1];
        //clickmulti = importArray[2];
        //cps = importArray[3];
        //cursors = importArray[4];
    }
    
}
const game = new CookieClicker();
setInterval(() => {
    game.update();
}, 100);
