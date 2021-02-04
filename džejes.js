const ajpí = fetch("http://api.ipify.org/?format=json").then(results => results.json())

function ano() {
    ajpí.then(data => alert(data.ip))

    //if(ajpí.then(data => data.ip === "109.108.110.250")){
//ajpí.then(data => localStorage.setItem("key", data.ip))
//localStorage.setItem("hezů", "hezů")
//document.getElementsByClassName("bu")[0].innerHTML = localStorage.getItem("key")}
//else{document.getElementsByClassName("bu")[0].innerHTML = "Ahuuuj"}
}

function ne() {
    Number1 = Math.floor (Math.random() * (10))
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
