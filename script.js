// Fetching Snoop Dogg photo
let snoopPhoto = document.getElementById("SnoopDoggFace")

// Fetching and creating doobie counter
let doobieCounter = document.getElementById("doobieCounter");
doobieCounter.innerText = doobieCount = 0;

// Fetching and creating doobie counter
let doobieStatusElement = document.getElementById("doobieStatus");
    doobieStatus = false;
    doobieStatusElement.innerText = "Do Snoopy a Doobie"

// doobieCountdown
let doobieCountdown = 0;

// Change text when doobieStatus changes
// function checkDoobieStatus() {
//     switch (doobieStatus) {
//     case (true):
//         doobieStatusElement.innerText = "Snoopy Doobie Doo";
        
//         break;
//     case (false):
//         doobieStatusElement.innerText = "Do Snoopy a Doobie"
//         break;
//     }    
// };

// Implementing doobieCountdown–"countdown"–function
function Countdown() {
    if (doobieCountdown > 0) {
            doobieCountdown -= 1;
            doobieStatusElement.innerText = "Snoopy Doobie Doo";
    } else {
        doobieStatus = false;
        doobieStatusElement.innerText = "Do Snoopy a Doobie"
    };
    // setInterval(Countdown, 1000);

//     switch (doobieCountdown) {
//     case(0):
//         doobieStatus = false;
//         checkDoobieStatus()
// //        unsatisfiedSnoopCountdown()
//         break;
//     case(1):
//     case(2):
//     case(3):
//     case(4):
//     case(5):

//         break;
//     }
};

// doobieStaus.innerText = "Do Snoopy a Doobie"

// Button Mechanics
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
        doobieIncrement();
    }
}

// Set booleans to false when doobieIncrement() is activated
function doobieIncrement() {if (scopeBoolean === true && dopeBoolean === true && smokeBoolean === true) {
    doobieCount += 1;
    doobieCounter.innerText = doobieCount;

    scopeBoolean = false;
    dopeBoolean = false;
    smokeBoolean = false;
    }
};

// If doobieCount is greater than 0, Snoopy will smoke a doobie
function doobieReduction() {
    if (doobieCount > 0) {  // && doobieStatus === false
        setTimeout(function() {
        doobieCount -= 1; // If the conditions are met, the script will run after a 500 ms delay
        doobieCounter.innerText = doobieCount;



        doobieStatus = true;
        snoopPhoto.src = "Snoop Dogg Faces/snoop-dogg-normal.png";
        doobieCountdown = 5;
        // console.log(doobieCountdown);
        Countdown();
        }, 1500);
    } else {
        doobieStatus = false;
        doobieStatusElement.innerText = "Do Snoopy a Doobie";
        snoopPhoto.src = "Snoop Dogg Faces/snoop-dogg-angrier.png";
    }
} 

setInterval(doobieReduction, 2000)


// let snoopAngerLevel = 5;

// function unsatisfiedSnoopCountdown() {
//     switch (snoopAngerLevel) {
//         case(1):
//         case(2):
//         case(3):
//             snoopAngerLevel -= 1;
//             console.log(snoopAngerLevel + "Test");
//             setInterval(unsatisfiedSnoopCountdown, 1000);
//             break;
//         case(0):
//             console.log(snoopAngerLevel + "AngerLevel");
//             break;
//         }
// }