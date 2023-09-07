// const scopeButton = document.getElementById("button1")
// const dopeButton = document.getElementById("button2")
// const smokeButton = document.getElementById("button3")

// let scopeBoolean = 0;
// let dopeBoolean = 0;
// let smokeBoolean = 0;

// scopeButton.addEventListener("click", scopeIt)
// dopeButton.addEventListener("click", dopeIt)
// smokeButton.addEventListener("click", smokeIt)

// function scopeIt() {
//     console.log("scopeIt_Test")
// }

// function dopeIt() {
//     console.log("dopeIt_Test")
// }

// function smokeIt() {
//     console.log("smokeIt_Test")
// }

const buttons = ["scopeButton", "dopeButton", "smokeButton"]

for (let i = 0; i <= buttons.length; i += 1) {
    buttons[i] = document.getElementById(`button${i}`);
}