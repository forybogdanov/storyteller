var texts = ["You wake up in a prison cell. You do not remember anything.", "Text 2", "Text 3", "Text 4", "Text 5", "Text 6", "Text 7", "Text 8"], pathsTo = [[1, 2, 3], [4, 5, 6]], choices = [["Ask the guard why are you here."], ["option for text 2 1", "option for text 2 2", "option for text 2 3"]], currentText = 0;

var buttons = []; 
var textP = document.getElementById("textParagraph");

function startGame() {
    textP.innerHTML = texts[0];
    for (let i = 0; i < choices[0].length; i++) {
        buttons.push(document.createElement("BUTTON"));
        document.getElementById("options").appendChild(buttons[buttons.length - 1]);
        buttons[i].innerHTML = choices[0][i];
        buttons[i].onclick = goToAnotherText(pathsTo[0][i]);
    }
};
function goToAnotherText(id) {
    return function () {
        textP.innerHTML = texts[id];
        currentText = id;
        for (let i = 0; i < choices[id].length; i++) {
            if (buttons.length < choices[id].length) {
                buttons.push(document.createElement("BUTTON"));
                document.getElementById("options").appendChild(buttons[buttons.length - 1]);
            }
            buttons[i].innerHTML = choices[id][i];
            buttons[i].onclick = goToAnotherText(pathsTo[id][i]);
        }
        for (let i = choices[id].length; i < buttons.length; i++) {
            buttons[i].style.display = "none";
        }
    }
};
startGame();