var version = "b.8.30.d";

//COOL FUNCTIONS
function q(id) {
        return document.getElementById(id);
}


//VARIABLES
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

var cursorcost = 15;
var grandmacost = 100;
var farmcost = 1100;
var minecost = 12000;
var factorycost = 130000;
var bankcost = 1400000;
var templecost = 20000000;
var wizardcost = 330000000;
var shipmentcost = 5100000000;
var labcost = 75000000000;

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

//LOOPS
setInterval(update, 100);

function update() {
        cps = cursors * 0.1 * cursormulti + grandmas * grandmamulti + farms * 8 * farmmulti + mines * 47 * minemulti + factories * 260 * factorymulti + banks *
                1400 * bankmulti + temples * 7800 * templemulti + wizards * 44000 * wizardmulti + shipments * 260000 * shipmentmulti + labs * 1600000 * labmulti;

        q("cursor-data").innerHTML = "You have " + cursors + " cursors, producing " + Math.round(cursors * 0.1 * cursormulti * 10) / 10 + " cps. Buy one for " + (Math.round(cursorcost + 0.49)) + " cookies.";
        q("grandma-data").innerHTML = "You have " + grandmas + " grandmas, producing " + Math.round(grandmas * 1 * grandmamulti * 10) / 10 + " cps. Buy one for " + (Math.round(grandmacost + 0.49)) + " cookies.";
        q("farm-data").innerHTML = "You have " + farms + " farms, producing " + Math.round(farms * 8 * farmmulti * 10) / 10 + " cps. Buy one for " + (Math.round(farmcost + 0.49)) + " cookies.";
        q("mine-data").innerHTML = "You have " + mines + " mines, producing " + Math.round(mines * 47 * minemulti * 10) / 10 + " cps. Buy one for " + (Math.round(minecost + 0.49)) + " cookies.";
        q("factory-data").innerHTML = "You have " + factories + " factories, producing " + Math.round(factories * 260 * factorymulti * 10) / 10 + " cps. Buy one for " + (Math.round(factorycost + 0.49)) + " cookies.";
        q("bank-data").innerHTML = "You have " + banks + " banks, producing " + Math.round(banks * 1400 * bankmulti * 10) / 10 + " cps. Buy one for " + (Math.round(bankcost + 0.49)) + " cookies.";
        q("temple-data").innerHTML = "You have " + temples + " temples, producing " + Math.round(temples * 7800 * templemulti * 10) / 10 + " cps. Buy one for " + (Math.round(templecost + 0.49)) + " cookies.";
        q("wizard-data").innerHTML = "You have " + wizards + " wizard towers, producing " + Math.round(wizards * 44000 * wizardmulti * 10) / 10 + " cps. Buy one for " + (Math.round(wizardcost + 0.49)) + " cookies.";
        q("shipment-data").innerHTML = "You have " + shipments + " shipments, producing " + Math.round(shipments * 260000 * shipmentmulti * 10) / 10 + " cps. Buy one for " + (Math.round(shipmentcost + 0.49)) + " cookies.";
        q("lab-data").innerHTML = "You have " + labs + " alchemy labs, producing " + (Math.round(labs * 1600000 * labmulti * 10) / 10) + " cps. Buy one for " + (Math.round(labcost + 0.49)) + " cookies.";

        cookies += cps / 10;
        totalcookies += cps / 10;

        q("cookie_counter").innerHTML = "Cookies: " + Math.round(cookies - 0.5);
        q("cps_counter").innerHTML = "CPS: " + Math.round(cps * 10) / 10;
        q("total_cookies").innerHTML = "Total Cookies produced ever: " + Math.round(totalcookies - 0.5);
        q("version").innerHTML = "Version " + version;
}	
function exportSave() {
  	var exportCode = (cookies+"/"+totalcookies+"/"+clickmulti+"/"+cps+"/"+cursors+"/"+grandmas+"/"+farms+"/"+mines+"/"+factories+"/"
			  +banks+"/"+temples+"/"+wizards+"/"+shipments+"/"+labs+"/"+(cursors*3+grandmas*17+factories*5+banks*55+farms*6+labs*8));
	navigator.clipboard.writeText(exportCode);
}
function importSave() {
  	var importCode = prompt("Enter save code: ");
	const importArray=importCode.split("/");
	cookies=importArray[0];
	totalcookies=importArray[1];
	clickmulti=importArray[2];
	cps=importArray[3];
	cursors=importArray[4];
}
//ONCLICKS
function clicked() {
        cookies += clickmulti;
        totalcookies += clickmulti;
        update();
}
//BUILDING BUYING

function buy_cursor() {
        if (cookies >= cursorcost) {
                cookies -= cursorcost;
                cursors += 1;
                cursorcost *= 1.15;
        }
        update();
}

function buy_grandma() {
        if (cookies >= grandmacost) {
                cookies -= grandmacost;
                grandmas += 1;
                grandmacost *= 1.15;
        }
        update();
}

function buy_farm() {
        if (cookies >= farmcost) {
                cookies -= farmcost;
                farms += 1;
                farmcost *= 1.15;
        }
        update();
}

function buy_mine() {
        if (cookies >= minecost) {
                cookies -= minecost;
                mines += 1;
                minecost *= 1.15;
        }
        update();
}

function buy_factory() {
        if (cookies >= factorycost) {
                cookies -= factorycost;
                factories += 1;
                factorycost *= 1.15;
        }
        update();
}

function buy_bank() {
        if (cookies >= bankcost) {
                cookies -= bankcost;
                banks += 1;
                bankcost *= 1.15;
        }
        update();
}

function buy_temple() {
        if (cookies >= templecost) {
                cookies -= templecost;
                temples += 1;
                templecost *= 1.15;
        }
        update();
}

function buy_wizard() {
        if (cookies >= wizardcost) {
                cookies -= wizardcost;
                wizards += 1;
                wizardcost *= 1.15;
        }
        update();
}

function buy_shipment() {
        if (cookies >= shipmentcost) {
                cookies -= shipmentcost;
                shipments += 1;
                shipmentcost *= 1.15;
        }
        update();
}

function buy_lab() {
        if (cookies >= labcost) {
                cookies -= labcost;
                labs += 1;
                labcost *= 1.15;
        }
        update();
}

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
