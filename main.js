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


var version="0.5.21.1040";
var cookies=0;
var totalcookies=0;
var cps=0;

var cursors=0;
var grandmas=0;
var farms=0;
var mines=0;
var factories=0;
var banks=0;
var temples=0;
var wizards=0;
var shipments=0;
var labs=0;

var cursorcost=15;
var grandmacost=100;
var farmcost=1100;
var minecost=12000;
var factorycost=130000;
var bankcost=1400000;
var templecost=20000000;
var wizardcost=330000000;
var shipmentcost=5100000000;
var labcost=75000000000;

var cursormulti=1;
var grandmamulti=1;
var farmmulti=1;
var minemulti=1;
var factorymulti=1;
var bankmulti=1;
var templemulti=1;
var wizardmulti=1;
var shipmentmulti=1;
var labmulti=1;

setInterval(update, 100);
setInterval(draw, 1000);

function update() {
	cps=cursors*0.1*cursormulti+grandmas*grandmamulti+farms*8*farmmulti+mines*47*minemulti+factories*260*factorymulti+banks*1400*bankmulti+temples*7800*templemulti+wizards*44000*wizardmulti+shipments*260000*shipmentmulti+labs*labmulti*1600000;
	
	q("cookie_counter").innerHTML = "Cookies: "+Math.round(cookies-0.5);  
	q("cps_counter").innerHTML = "CPS: "+Math.round(cps*10)/10;
	q("cursor_btn").innerHTML = "You have "+cursors+" cursors. Buy one for "+(Math.round(cursorcost+0.49))+" cookies.";
	q("grandma_btn").innerHTML = "You have "+grandmas+" grandmas. Buy one for "+(Math.round(grandmacost+0.49))+" cookies.";
	q("farm_btn").innerHTML = "You have "+farms+" farms. Buy one for "+(Math.round(farmcost+0.49))+" cookies.";
	q("mine_btn").innerHTML = "You have "+mines+" mines. Buy one for "+(Math.round(minecost+0.49))+" cookies.";
	q("factory_btn").innerHTML = "You have "+factories+" factories. Buy one for "+(Math.round(factorycost+0.49))+" cookies.";
	q("bank_btn").innerHTML = "You have "+banks+" banks. Buy one for "+(Math.round(bankcost+0.49))+" cookies.";
	q("temple_btn").innerHTML = "You have "+temples+" temples. Buy one for "+(Math.round(templecost+0.49))+" cookies.";
	q("wizard_btn").innerHTML = "You have "+wizards+" wizards. Buy one for "+(Math.round(wizardcost+0.49))+" cookies.";
	q("shipment_btn").innerHTML = "You have "+shipments+" shipments. Buy one for "+(Math.round(shipmentcost+0.49))+" cookies.";
	q("lab_btn").innerHTML = "You have "+labs+" alchemy labs. Buy one for "+(Math.round(labcost+0.49))+" cookies.";
	
	cookies+=cps/10;
	totalcookies+=cps/10;
}
function draw() {
	const myParagraph = document.querySelector("#my-paragraph");
	q("version").innerHTML = "Version "+version;
}
function clicked() {
    cookies+=1;
    totalcookies+=1;
    update();
}

function buy_cursor() {
    if (cookies>=cursorcost) {
        cookies-=cursorcost;
        cursors+=1;
        cursorcost*=1.15;
    }
    update();
}
function buy_grandma() {
    if (cookies>=grandmacost) {
        cookies-=grandmacost;
        grandmas+=1;
        grandmacost*=1.15;
    }
    update();
}
function buy_farm() {
    if (cookies>=farmcost) {
        cookies-=farmcost;
        farms+=1;
        farmcost*=1.15;
    }
    update();
}
function buy_mine() {
    if (cookies>=minecost) {
        cookies-=minecost;
    	mines+=1;
        minecost*=1.15;
    }
    update();
}
function buy_factory() {
    if (cookies>=factorycost) {
        cookies-=factorycost;
    	factories+=1;
        factorycost*=1.15;
    }
    update();
}
function buy_bank() {
    if (cookies>=bankcost) {
        cookies-=bankcost;
        banks+=1;
        bankcost*=1.15;
    }
    update();
}
function buy_temple() {
    if (cookies>=templecost) {
        cookies-=templecost;
        temples+=1;
        templecost*=1.15;
    }
    update();
}
function buy_wizard() {
    if (cookies>=wizardcost) {
        cookies-=wizardcost;
        wizards+=1;
        wizardcost*=1.15;
    }
    update();
}
function buy_shipment() {
    if (cookies>=shipmentcost) {
        cookies-=shipmentcost;
        shipments+=1;
        shipmentcost*=1.15;
    }
    update();
}
function buy_lab() {
    if (cookies>=labcost) {
        cookies-=labcost;
        labs+=1;
        labcost*=1.15;
    }
    update();
}

function upg(id) {
    if (id==0) {
		if (cookies>=100) {
        	cookies-=100;
	   		cursormulti*=2;
			document.getElementById("upg1").remove();
		} else {
			console.log("Out of cookies.");	
		}	
    } else if (id==1) {
		if (cookies>=500) {
        	cookies-=500;
	   		cursormulti*=2;
			document.getElementById("upg2").remove();
		} else {
			console.log("Out of cookies.");	
		}
    } 
}
