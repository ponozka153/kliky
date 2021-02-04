
function ne() {
    Number1 = Math.floor (Math.random() * (10))
    if(Number1 > 1){
    document.getElementsByClassName("nadpis")[0].innerHTML = "Klikyyy"
}
    if(Number1 === 1){s
        document.getElementsByClassName("nadpis")[0].innerHTML = "Zmáčkni mě 🥰"
    }
}

function kliky() {
    Number1 = Math.floor (Math.random() * (50))
    document.getElementById("list").textContent = Number1 + " kliků"
}
