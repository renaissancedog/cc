var version = "b.12.9.i";

function q(id) {
    return document.getElementById(id);
}

class Building {
    constructor(baseCps, cost) {
        this.multiplier = 1;
        this.baseCps = baseCps;
        this.baseCost = cost;
        this.cost = cost;
        this.costMultiplier = 1.15;
        this.count = 0;
    }
    buy(cookies) {
        if (cookies >= this.cost) {
            game.remove(this.cost);
            this.count++;
            this.cost *= this.costMultiplier;
        }
    }
    getCps() {
        return this.count * this.baseCps * this.multiplier;
    }
}

const cursors = new Building(0.1, 15);
const grandmas = new Building(1, 100);
const farms = new Building(8, 1100);
const mines = new Building(47, 12000);
const factories = new Building(260, 130000);
const banks = new Building(1400, 1400000);
const temples = new Building(7800, 20000000);
const wizards = new Building(44000, 330000000);
const shipments = new Building(260000, 5100000000);
const labs = new Building(1600000, 75000000000);
const buildings = [cursors, grandmas, farms, mines, factories, banks, temples, wizards, shipments, labs];
class CookieClicker {
    constructor() {
        this.cookies = 0;
        this.totalcookies = 0;
        this.cps = 0;
        this.clickmulti = 1;
    }
    add(amt) {
        this.cookies += amt;
    }
    remove(amt) {
        this.cookies -= amt;
    }
    clicked() {
        this.cookies += this.clickmulti;
        this.totalcookies += this.clickmulti;
    }
    update() {
        this.cps = cursors.getCps() + grandmas.getCps() + farms.getCps() + mines.getCps() + factories.getCps() + banks.getCps() +
            temples.getCps() + wizards.getCps() + shipments.getCps() + labs.getCps();
        
        q("cursor-data").innerHTML = "You have " + cursors.count + " cursors, producing " + Math.round(cursors.getCps() * 10) / 10 + " cps. Buy one for " + (Math.round(cursors.cost + 0.49)) + " cookies.";
        q("grandma-data").innerHTML = "You have " + grandmas.count + " grandmas, producing " + Math.round(grandmas.getCps() * 10) / 10 + " cps. Buy one for " + (Math.round(grandmas.cost + 0.49)) + " cookies.";
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
    exportSave() {
        var exportCode = this.cookies + "/" + this.totalcookies + "/" + this.clickmulti + "/" + this.cps + "/" + cursors.count + "/" + grandmas.count + "/" + farms.count + "/" + mines.count + "/" + factories.count + "/" +
            banks.count + "/" + temples.count + "/" + wizards.count + "/" + shipments.count + "/" + labs.count + "/" + (cursors.count * 92 + grandmas.count * 32 + farms.count * 16);
        navigator.clipboard.writeText(exportCode);
    }
    importSave() {
        var importCode = prompt("Enter save code: ");
        const importArray = importCode.split("/");
        var check = parseInt(importArray[14]);
        if (check != (parseInt(importArray[4]) * 92 + parseInt(importArray[5]) * 32 + parseInt(importArray[6]) * 16)) {
            alert("Invalid save");
        } else {
            this.cookies = parseInt(importArray[0]);
            this.totalcookies = parseInt(importArray[1]);
            this.clickmulti = parseInt(importArray[2]);
            this.cps = parseInt(importArray[3]);

            cursors.count = parseInt(importArray[4]);
            cursors.cost = cursors.baseCost*(Math.pow(1.15, cursors.count));
            grandmas.count = parseInt(importArray[5]);
            grandmas.cost = grandmas.baseCost* (Math.pow(1.15, grandmas.count));
            farms.count = parseInt(importArray[6]);
            farms.cost = farms.baseCost* (Math.pow(1.15, farms.count));
            mines.count = parseInt(importArray[7]);
            mines.cost = mines.baseCost* (Math.pow(1.15, mines.count));
            factories.count = parseInt(importArray[8]);
            factories.cost = factories.baseCost* (Math.pow(1.15, factories.count));
            banks.count = parseInt(importArray[9]);
            banks.cost = banks.baseCost* (Math.pow(1.15, banks.count));
            temples.count = parseInt(importArray[10]);
            temples.cost = temples.baseCost* (Math.pow(1.15, temples.count));
            wizards.count = parseInt(importArray[11]);
            wizards.cost = wizards.baseCost* (Math.pow(1.15, wizards.count));
            shipments.count = parseInt(importArray[12]);
            shipments.cost = shipments.baseCost* (Math.pow(1.15, shipments.count));
            labs.count = parseInt(importArray[13]);
            labs.cost = labs.baseCost* (Math.pow(1.15, labs.count));
        }
    }
}
const game = new CookieClicker();
setInterval(() => {
    game.update();
}, 100);
