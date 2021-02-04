setInterval(() => {
let hodiny = new Date().getHours()
let minuty = new Date().getMinutes()
let sekundy = new Date().getSeconds()
if(hodiny < 10){
    hodiny = `0${hodiny}`
}
if(minuty < 10){
    minuty = `0${minuty}`
}
if(sekundy < 10){
    sekundy = `0${sekundy}`
}
document.getElementsByClassName("čas")[0].innerHTML = `${hodiny}:${minuty}:${sekundy}`
}, 750);


function ano() {
    Number2 = Math.floor (Math.random() * (20))
    if(Number2 === 1){
        document.getElementById("jez").value = "Aďulinkáááá, hezůlinkáá <3"
    } else return
}

function ne() {
    Number1 = Math.floor (Math.random() * (10))
    if(Number1 < 1){
        ne()
    }
    if(Number1 > 1){
    document.getElementsByClassName("nadpis")[0].innerHTML = "Klikyyy"
}
    if(Number1 === 1){
        document.getElementsByClassName("nadpis")[0].innerHTML = "Zmáčkni mě 🥰"
    }
}

function kliky() {
    Number1 = Math.floor (Math.random() * (50))
    document.getElementById("list").textContent = Number1 + " kliků" 
    
}
