const actionNavTop = document.querySelector(".menu");
const eventNavTop = document.querySelector(".navTop");

eventNavTop.style.display = "none";

function menuDisplay() {
    if(eventNavTop.style.display == "none") {
        eventNavTop.style.display = "block";
        actionNavTop.innerText = "x";
    } else {
        eventNavTop.style.display = "none";
        actionNavTop.innerText = "=";
    }
}

actionNavTop.onclick = menuDisplay;