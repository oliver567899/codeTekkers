const character = document.getElementById("character");
const game = document.getElementById("game");
const block = document.getElementById("block");
const lives = document.getElementById("lives");
const pausebtn = document.getElementById("pausebtn");
const dt = document.getElementById("darktheme");
const lt = document.getElementById("lighttheme");

game.addEventListener("click", () => {
    character.style.top = "750px";
    setTimeout((e)=>{character.style.top = "800px"},500);
});

document.addEventListener("keyup", characterMove);

function characterMove(e) {
    switch (e.key) {
        case "ArrowUp":
            character.style.top = "750px";
            setTimeout((e)=>{character.style.top = "800px"},1000);
            break;
        case "w":
            character.style.top = "750px";
            setTimeout((e)=>{character.style.top = "800px"},1000);
            break;
        default:
            break;
    }
}

var checkDead = setInterval(function() {

    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft<20 && blockLeft>-20 && characterTop>=780){
        alert("Game Over");
        location.reload();
    }

}, 10);

pausebtn.addEventListener("click", function() {
    alert('Game paused. \n Click "Ok" to resume.')
});

dt.addEventListener("click", darkTheme);
lt.addEventListener("click", lightTheme);

function darkTheme() {
    game.style.background = "black";    
}
function lightTheme() {
    game.style.background = "White";
}
