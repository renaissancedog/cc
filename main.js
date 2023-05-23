//COOL FUNCTIONS
function q(id) {
	return document.getElementById(id);
}

function formatNumber(val) {
	if (!isFinite(val)) return 'Infinity';
	if (val >= 1000000) {
		val /= 1000;
		var suffix = '';
		while (Math.round(val) >= 1000) {
			val /= 1000;
			suffix += 'K';
		}
		return Math.round(val * 1000) / 1000 + suffix;
	}
	return val.toString();
}

function processNumbers(list, callback) {
	list.forEach(callback);
}


//VARIABLES
var version = "0.5.22.1947 beta";
var cookies = 0;
var totalcookies = 0;
var cps = 0;

class Building {
	constructor(name, cost, cps, id) {
		this.name = name;
		this.cost = cost;
		this.cps = cps;
		this.id = id;
	}
}
//const cursor = new Building("Cursor", 15, 0.1, 0);
//const grandma = new Building("Grandma", 100, 1, 1);

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


var numbers = [cookies, totalcookies, cps, cursors, grandmas, mines, farms, factories, banks, temples, wizards, shipments, labs,
	cursormulti, grandmamulti, farmmulti, minemulti, factorymulti, bankmulti, templemulti, wizardmulti, shipmentmulti, labmulti,
	cursorcost, grandmacost, farmcost, minecost, factorycost, bankcost, templecost, wizardcost, shipmentcost, labcost
];
//LOOPS
setInterval(update, 100);

function update() {
	cps = cursors * 0.1 * cursormulti + grandmas * grandmamulti + farms * 8 * farmmulti + mines * 47 * minemulti + factories * 260 * factorymulti + banks * 1400 * bankmulti + temples * 7800 * templemulti + wizards * 44000 * wizardmulti + shipments * 260000 * shipmentmulti + labs * labmulti * 1600000;

	q("cookie_counter").innerHTML = "Cookies: " + Math.round(cookies - 0.5);
	q("cps_counter").innerHTML = "CPS: " + Math.round(cps * 10) / 10;
	q("cursor_btn").innerHTML = "You have " + cursors + " cursors. Buy one for " + (Math.round(cursorcost + 0.49)) + " cookies.";
	q("grandma_btn").innerHTML = "You have " + grandmas + " grandmas. Buy one for " + (Math.round(grandmacost + 0.49)) + " cookies.";
	q("farm_btn").innerHTML = "You have " + farms + " farms. Buy one for " + (Math.round(farmcost + 0.49)) + " cookies.";
	q("mine_btn").innerHTML = "You have " + mines + " mines. Buy one for " + (Math.round(minecost + 0.49)) + " cookies.";
	q("factory_btn").innerHTML = "You have " + factories + " factories. Buy one for " + (Math.round(factorycost + 0.49)) + " cookies.";
	q("bank_btn").innerHTML = "You have " + banks + " banks. Buy one for " + (Math.round(bankcost + 0.49)) + " cookies.";
	q("temple_btn").innerHTML = "You have " + temples + " temples. Buy one for " + (Math.round(templecost + 0.49)) + " cookies.";
	q("wizard_btn").innerHTML = "You have " + wizards + " wizards. Buy one for " + (Math.round(wizardcost + 0.49)) + " cookies.";
	q("shipment_btn").innerHTML = "You have " + shipments + " shipments. Buy one for " + (Math.round(shipmentcost + 0.49)) + " cookies.";
	q("lab_btn").innerHTML = "You have " + labs + " alchemy labs. Buy one for " + (Math.round(labcost + 0.49)) + " cookies.";

	cookies += cps / 10;
	totalcookies += cps / 10;

	q("version").innerHTML = "Version " + version;
	//processNumbers(numbers, formatNumber);
}

//ONCLICKS

function clicked() {
	cookies += 1;
	totalcookies += 1;
	update();
}
//BUILDING BUYING
function buyItem(cost, quantity) {
	if (cookies >= cost) {
		quantity += 1;
	}
	update();
	return quantity;
}

function itemCost(cost) {
	if (cookies >= cost) {
		cookies -= cost;
		cost *= 1.15;
	}
	update();
	return cost;
}

function buy_cursor() {
	cursorcost = itemCost(cursorcost);
	cursors = buyItem(cursorcost, cursors);
}

function buy_grandma() {
	grandmacost = itemCost(grandmacost);
	grandmas = buyItem(grandmacost, grandmas);
}

function buy_farm() {
	farmcost = itemCost(farmcost);
	farms = buyItem(farmcost, farms);
}

function buy_mine() {
	minecost = itemCost(minecost);
	mines = buyItem(minecost, mines);
}

function buy_factory() {
	factorycost = itemCost(factorycost);
	factories = buyItem(factorycost, factories);
}

function buy_bank() {
	bankcost = itemCost(bankcost);
	banks = buyItem(bankcost, banks);
}

function buy_temple() {
	templecost = itemCost(templecost);
	temples = buyItem(templecost, temples);
}

function buy_wizard() {
	wizardcost = itemCost(wizardcost);
	wizards = buyItem(wizardcost, wizards);
}

function buy_shipment() {
	shipmentcost = itemCost(shipmentcost);
	shipments = buyItem(shipmentcost, shipments);
}

function buy_lab() {
	labcost = itemCost(labcost);
	labs = buyItem(labcost, labs);
}

//UPGRADES
function Upgrade(cost, type, benefit, name, id) {
	this.cost = cost;
	this.type = type;
	this.benefit = benefit;
	this.name = name;
	this.id = id;
}

//const upg1 = new Upgrade("My First Upgrade", 100, 0, 2, 0);
//const upg2 = new Upgrade("My Second Upgrade", 500, 0, 2, 1);

function upg(id) {
	if (id == 0) {
		if (cookies >= 100) {
			cookies -= 100;
			cursormulti *= 2;
			document.getElementById("upg1").remove();
		} else {
			console.log("Out of cookies.");
		}
	} else if (id == 1) {
		if (cookies >= 500) {
			cookies -= 500;
			cursormulti *= 2;
			document.getElementById("upg2").remove();
		} else {
			console.log("Out of cookies.");
		}
	}
}
