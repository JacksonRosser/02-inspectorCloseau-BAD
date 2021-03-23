document.querySelector("#title").innerText = "Inspector Clouseau"
document.querySelector("#slogan").innerText = "Police Detective of the French Sûreté"

function reDisplay() {
let windowSizes = `The Window size is ${window.innerWidth}px wide by ${window.innerHeight}px tall.`

let offset = `Window offset ${window.screenX}px from the left edge and ${window.screenY}px from the top of the display.`

let myWindow = document.querySelector("#windowProp").innerText= windowSizes + '\n' + offset
}


let urlInfo = document.querySelector("#documentProp").innerText= `The page URL is ${Location.href}`
reDisplay()