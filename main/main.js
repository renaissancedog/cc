var version = "b.12.8.d";
function q(id) {
    return document.getElementById(id);
}

class Building {
    constructor(name, baseCps, baseCost) {
        this.name = name;
        this.baseCps = baseCps;
        this.baseCost = baseCost;
        this.costMultiplier = 1.15;
        this.count = 0;
        this.currentCost = baseCost;
    }

    buy() {
        if (game.cookies >= this.currentCost) {
            game.cookies -= this.currentCost;
            this.count++;
            this.currentCost = Math.round(this.baseCost * Math.pow(this.costMultiplier, this.count));
            game.update();
        }
    }

    getCps() {
        return this.count * this.baseCps;
    }

    getCost() {
        return this.currentCost;
    }

    getInfo() {
        return `You have ${this.count} ${this.name}s, producing ${Math.round(this.getCps() * 10) / 10} cps. Buy one for ${Math.round(this.getCost() + 0.49)} cookies.`;
    }
}
const cursors = new Building("cursor", 0.1, 15);
const grandmas = new Building("grandma", 1, 100);
const farms = new Building("farm", 8, 1100);
const mines = new Building("mine", 47, 13000);
const factories = new Building("factory", 8, 1100);
const banks = new Building("bank", 8, 1100);
const temples = new Building("temple", 8, 1100);
const wizards = new Building("wizard", 8, 1100);
const shipments = new Building("shipment", 8, 1100);
const labs = new Building("lab", 8, 1100);
cursors.buy();

class CookieClicker {
    constructor() {
        var cookies = 0;
        var totalcookies = 0;
        var cps = 0;
        var clickmulti = 1;

        var cursors = 0;
        var grandmas = 0;
        var farms = 0;
        var mines = 0;
        var factories = 0;
        var banks = 0;
        var temples = 0;
        var wizards = 0;
        var shipments = 0;
        var labs = 0;

        var cursormulti = 1;
        var grandmamulti = 1;
        var farmmulti = 1;
        var minemulti = 1;
        var factorymulti = 1;
        var bankmulti = 1;
        var templemulti = 1;
        var wizardmulti = 1;
        var shipmentmulti = 1;
        var labmulti = 1;
    }
    add(add) {
        this.cookies+=add;
    }
    update() {
        cursors=cursors.count;
        
        cps = cursors * 0.1 * cursormulti + grandmas * grandmamulti + farms * 8 * farmmulti + mines * 47 * minemulti + factories * 260 * factorymulti + banks *
            1400 * bankmulti + temples * 7800 * templemulti + wizards * 44000 * wizardmulti + shipments * 260000 * shipmentmulti + labs * 1600000 * labmulti;

        q("cursor-data").innerHTML = "You have " + this.cursors + " cursors, producing " + Math.round(cursors * 0.1 * cursormulti * 10) / 10 + " cps. Buy one for " + (Math.round(cursors.currentCost + 0.49)) + " cookies.";
        q("grandma-data").innerHTML = "You have " + this.grandmas + " grandmas, producing " + Math.round(grandmas * 1 * grandmamulti * 10) / 10 + " cps. Buy one for " + (Math.round(grandmas.currentCost + 0.49)) + " cookies.";
        q("farm-data").innerHTML = "You have " + this.farms + " farms, producing " + Math.round(farms * 8 * farmmulti * 10) / 10 + " cps. Buy one for " + (Math.round(farmcost + 0.49)) + " cookies.";
        q("mine-data").innerHTML = "You have " + this.mines + " mines, producing " + Math.round(mines * 47 * minemulti * 10) / 10 + " cps. Buy one for " + (Math.round(minecost + 0.49)) + " cookies.";
        q("factory-data").innerHTML = "You have " + this.factories + " factories, producing " + Math.round(factories * 260 * factorymulti * 10) / 10 + " cps. Buy one for " + (Math.round(factorycost + 0.49)) + " cookies.";
        q("bank-data").innerHTML = "You have " + this.banks + " banks, producing " + Math.round(banks * 1400 * bankmulti * 10) / 10 + " cps. Buy one for " + (Math.round(bankcost + 0.49)) + " cookies.";
        q("temple-data").innerHTML = "You have " + this.temples + " temples, producing " + Math.round(temples * 7800 * templemulti * 10) / 10 + " cps. Buy one for " + (Math.round(templecost + 0.49)) + " cookies.";
        q("wizard-data").innerHTML = "You have " + this.wizards + " wizard towers, producing " + Math.round(wizards * 44000 * wizardmulti * 10) / 10 + " cps. Buy one for " + (Math.round(wizardcost + 0.49)) + " cookies.";
        q("shipment-data").innerHTML = "You have " + this.shipments + " shipments, producing " + Math.round(shipments * 260000 * shipmentmulti * 10) / 10 + " cps. Buy one for " + (Math.round(shipmentcost + 0.49)) + " cookies.";
        q("lab-data").innerHTML = "You have " + this.labs + " alchemy labs, producing " + (Math.round(labs * 1600000 * labmulti * 10) / 10) + " cps. Buy one for " + (Math.round(labcost + 0.49)) + " cookies.";

        cookies += this.cps / 10;
        totalcookies += cps / 10;

        q("cookie_counter").innerHTML = "Cookies: " + Math.round(cookies - 0.5);
        q("cps_counter").innerHTML = "CPS: " + Math.round(cps * 10) / 10;
        q("total_cookies").innerHTML = "Total Cookies produced ever: " + Math.round(totalcookies - 0.5);
        q("version").innerHTML = "Version " + version;
    }
    static exportSave() {
        var exportCode = (cookies + "/" + totalcookies + "/" + clickmulti + "/" + cps + "/" + cursors + "/" + grandmas + "/" + farms + "/" + mines + "/" + factories + "/" +
            banks + "/" + temples + "/" + wizards + "/" + shipments + "/" + labs + "/" + (cursors * 3 + grandmas * 17 + factories * 5 + banks * 55 + farms * 6 + labs * 8));
        navigator.clipboard.writeText(exportCode);
    }
    static importSave() {
        var importCode = prompt("Enter save code: ");
        const importArray = importCode.split("/");
        cookies = importArray[0];
        totalcookies = importArray[1];
        clickmulti = importArray[2];
        cps = importArray[3];
        cursors = importArray[4];
    }
}
const game = new CookieClicker();

//UPGRADES
function Upgrade(cost, multi, upgid, id) {
    this.cost = cost;
    this.multi = multi;
    this.upgid = upgid;
    this.id = id;
    this.upgrade = function() {
        if (cookies >= cost) {
            cookies -= cost;
            cursormulti *= 2;
            clickmulti *= 2;
            let zz = q(this.id);
            zz.remove();
        }
    }
}
var upg0 = new Upgrade(100, 2, 0, "upg0");
var upg1 = new Upgrade(500, 2, 1, "upg1");

function clicked() {
    game.cookies += game.clickmulti;
    game.totalcookies += game.clickmulti;
    game.update();
}

setInterval(() => {
    game.update();
}, 100);
