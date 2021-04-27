function showMenu(){
    togg(".showMenu", "show");
}
function darkMode(){
    togg("body", "dark");
}
function viewHistory(){
    let histor = document.querySelector(".historyOut");
    histor.textContent = "";
    if (history.length !== 0 && histor.classList.contains("notView")) {
        history.forEach(el => {
            let elem = document.createElement("div");
            elem.textContent += el;
            histor.appendChild(elem);
        });
    }
    togg(".container", "notView");
    togg(".historyOut", "notView");
    togg(".ico", "notView");   
}

let togg = (identif, cls) => {
    return document.querySelector(identif).classList.toggle(cls);
}

function clearHistory() {
    history = [];
    document.querySelector(".historyOut").textContent = "";
    console.info("The history is clear...");
}
