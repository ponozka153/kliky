let x = localStorage.kliky
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
document.getElementsByClassName("čas")[0].innerHTML = `<b>${hodiny}:${minuty}:${sekundy}</b>`
document.getElementsByClassName("hezky")[0].textContent = x
}, 750);

function ano() {
    Number2 = Math.floor (Math.random() * (10))
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
    if(Number1 === 1){
    document.getElementById("list").textContent = Number1 + " klik"
    localStorage.setItem("kliky", `( naposled ${Number1} klik )`)
    
}
    if(Number1 === 0){
        document.getElementById("list").textContent = Number1 + " kliků"
        localStorage.setItem("kliky", `( naposled ${Number1} kliků )`)
        
        
    }
    if(Number1 > 1){
        if(Number1 < 5){
            document.getElementById("list").textContent = Number1 + " kliky"
            localStorage.setItem("kliky", `( naposled ${Number1} kliky )`)
            
        }
        }
    if(Number1 > 4){
        document.getElementById("list").textContent = Number1 + " kliků"
        localStorage.setItem("kliky", `( naposled ${Number1} kliků )`)
    
}
}

setTimeout(() => {
    ano()
    ne()
  }, 1)