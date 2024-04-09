let homeCounter=0;
let awayCounter=0;
document.getElementById("scoreHome").textContent=homeCounter;
document.getElementById("scoreAway").textContent=awayCounter;

function homeAdd1() {
    homeCounter+=1;
    document.getElementById("scoreHome").textContent=homeCounter;
}
function homeAdd2() {
    homeCounter+=2;
    document.getElementById("scoreHome").textContent=homeCounter;
}
function homeAdd3() {
    homeCounter+=3;
    document.getElementById("scoreHome").textContent=homeCounter;
}
function resetHome() {
    homeCounter=0;
    document.getElementById("scoreHome").textContent=homeCounter;
}

function resetAway() {
    awayCounter=0;
    document.getElementById("scoreAway").textContent=awayCounter;
}

function awayAdd1() {
    awayCounter+=1;
    document.getElementById("scoreAway").textContent=awayCounter;
}
function awayAdd2() {
    awayCounter+=2;
    document.getElementById("scoreAway").textContent=awayCounter;
}
function awayAdd3() {
    awayCounter+=3;
    document.getElementById("scoreAway").textContent=awayCounter;
}
function reset() {
    awayCounter=0;
    document.getElementById("scoreAway").textContent=awayCounter;
}