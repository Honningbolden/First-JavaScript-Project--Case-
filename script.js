let doobieCounter = document.getElementById("doobieCounter");
doobieCounter.innerText = doobieCount = 0;

const scopeButton = document.getElementById("button1")
const dopeButton = document.getElementById("button2")
const smokeButton = document.getElementById("button3")

let scopeBoolean = false;
let dopeBoolean = false;
let smokeBoolean = false;

scopeButton.addEventListener("click", scopeIt)
dopeButton.addEventListener("click", dopeIt)
smokeButton.addEventListener("click", smokeIt)

function scopeIt() {
    scopeBoolean = true;
}

function dopeIt() {
    if (scopeBoolean === true) {
        dopeBoolean = true;
    }
}

function smokeIt() {
    if (scopeBoolean === true && dopeBoolean === true) {
        smokeBoolean = true;
        checkConditions();
    }
}

function checkConditions() {if (scopeBoolean === true && dopeBoolean === true && smokeBoolean === true) {
    doobieCount += 1;
    doobieCounter.innerText = doobieCount;
    }
};