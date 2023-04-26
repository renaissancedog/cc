var cookies=0;
var totalcookies=0;
var cps=0;

var cursors=0;
var grandmas=0;
var farms=0;
var mines=0;

var cursorcost=15;
var grandmacost=100;
var farmcost=1100;
var minecost=12000;

setInterval(function() {
  update();
}, 100);

function update() {
	cps=cursors*0.1+grandmas+farms*8+mines*47;
	document.getElementById("cookie_counter").innerHTML = "Cookies: "+Math.round(cookies-0.5);  
    document.getElementById("cps_counter").innerHTML = "CPS: "+Math.round(cps*10)/10;
    document.getElementById("cursor_btn").innerHTML = "Buy Cursor for "+(Math.round(cursorcost+0.49))+" cookies";
    document.getElementById("grandma_btn").innerHTML = "Buy Grandma for "+(Math.round(grandmacost+0.49))+" cookies";
    cookies+=cps/10;
    totalcookies+=cps/10;
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