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
	cps=cursors*0.1*cursormulti+grandmas+farms*8+mines*47+factories*260+banks*1400+temples*7800+wizards*44000+shipments*260000+labs*1600000;
	
	document.getElementById("cookie_counter").innerHTML = "Cookies: "+Math.round(cookies-0.5);  
	document.getElementById("cps_counter").innerHTML = "CPS: "+Math.round(cps*10)/10;
	document.getElementById("cursor_btn").innerHTML = "You have "+cursors+" cursors. Buy one for "+(Math.round(cursorcost+0.49))+" cookies.";
	document.getElementById("grandma_btn").innerHTML = "You have "+grandmas+" grandmas. Buy one for "+(Math.round(grandmacost+0.49))+" cookies.";
	document.getElementById("farm_btn").innerHTML = "You have "+farms+" farms. Buy one for "+(Math.round(farmcost+0.49))+" cookies.";
	document.getElementById("mine_btn").innerHTML = "You have "+mines+" mines. Buy one for "+(Math.round(minecost+0.49))+" cookies.";
	document.getElementById("factory_btn").innerHTML = "You have "+factories+" factories. Buy one for "+(Math.round(factorycost+0.49))+" cookies.";
	document.getElementById("bank_btn").innerHTML = "You have "+banks+" banks. Buy one for "+(Math.round(bankcost+0.49))+" cookies.";
	document.getElementById("temple_btn").innerHTML = "You have "+temples+" temples. Buy one for "+(Math.round(templecost+0.49))+" cookies.";
	document.getElementById("wizard_btn").innerHTML = "You have "+wizards+" wizards. Buy one for "+(Math.round(wizardcost+0.49))+" cookies.";
	document.getElementById("shipment_btn").innerHTML = "You have "+shipments+" shipments. Buy one for "+(Math.round(shipmentcost+0.49))+" cookies.";
	document.getElementById("lab_btn").innerHTML = "You have "+labs+" alchemy labs. Buy one for "+(Math.round(labcost+0.49))+" cookies.";
	
	cookies+=cps/10;
	totalcookies+=cps/10;
}
function draw() {
	const version = "0.5.9.2037";
	const myParagraph = document.querySelector("#my-paragraph");
	document.getElementById("version").innerHTML = "Version "+version;
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
    if (id==1) {
		if (cookies>=100) {
        	cookies-=100;
	   		cursormulti*=2;
		} else {
			console.log("Out of cookies.");	
		}	
    } else if (id==2) {
		if (cookies>=500) {
        	cookies-=500;
	   		cursormulti*=2;
		} else {
			console.log("Out of cookies.");	
		}	
    } else {
		console.log('no upgrade found");
	}
}
var buttons = document.querySelectorAll('.upg');
var infoBox = document.createElement('div');
infoBox.id = 'infoBox';

buttons.forEach(function(button) {
  button.addEventListener('mouseover', function() {
    var infoText = this.getAttribute('data-info');
    infoBox.innerHTML = infoText;
    infoBox.style.display = 'block';
  });

  button.addEventListener('mouseout', function() {
    infoBox.style.display = 'none';
  });
});
