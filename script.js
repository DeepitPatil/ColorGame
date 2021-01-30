var t1 = document.getElementById("1");
var t2 = document.getElementById("2");
var t3 = document.getElementById("3");
var t4 = document.getElementById("4");
var t5 = document.getElementById("5");
var t6 = document.getElementById("6");
var m1 = document.getElementById("m1");
var m2 = document.getElementById("m2");
var button = document.getElementById("button");
var tries_disp = document.getElementById("tries");
var x;
var tries;
var correctColor;

function getRandomColor() {
var letters = "0123456789ABCDEF";
var color = "#";
for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
}
return color;
}

function newGame() {
m1.textContent = "";
m2.textContent = "";
tries = 0;
tries_disp.textContent = "Number of Tries : 0"
document.getElementById("container").background = "#253939";

t1.style.background = getRandomColor();
t2.style.background = getRandomColor();
t3.style.background = getRandomColor();
t4.style.background = getRandomColor();
t5.style.background = getRandomColor();
t6.style.background = getRandomColor();

t1.style.visibility = "visible";
t2.style.visibility = "visible";
t3.style.visibility = "visible";
t4.style.visibility = "visible";
t5.style.visibility = "visible";
t6.style.visibility = "visible";

x = Math.floor(Math.random() * 6 + 1);

switch(x) {
    case 1:
        correctColor = t1.style.background;
        break;
    case 2:
        correctColor = t2.style.background;
        break;
    case 3:
        correctColor = t3.style.background;
        break;
    case 4:
        correctColor = t4.style.background;
        break;
    case 5:
        correctColor = t5.style.background;
        break;
    case 6:
        correctColor = t6.style.background;
        break;
}
console.log(x);
console.log(correctColor);

document.getElementById("header-clue").innerHTML = correctColor;
}

function gameOver(i) {
    console.log("One try "+i)
    m1.style.fontSize = "80px"
    switch(i){
        case 1:
            m1.textContent = "Wow! That's Perfect!!!";
            m2.textContent = "You got the correct color in your first try!"
            break;
        case 2:
            m1.textContent = "Wow! You're Pretty Good!";
            m2.textContent = "You got the correct color in your second try!"
            break;
        case 3:
            m1.textContent = "Woah! Good One!";
            m2.textContent = "You got the correct color in your third try!"
            break;
        case 4:
            m1.textContent = "Not Bad!";
            m2.textContent = "You got the correct color in your fourth try!"
            break;
        case 5:
            m1.textContent = "You Can Do Better";
            m2.textContent = "You got the correct color in your fifth try"
            break;
        case 6:
            m1.textContent = "Better Luck Next Time :(";
            m2.textContent = "You got the correct color in your sixth try"
            break;
    }
}

t1.addEventListener("click", function () {
    tries += 1;
    tries_disp.textContent = "Number of Tries : "+tries;
    if (t1.style.background == correctColor) {
        t1.style.visibility = "hidden";
        t2.style.visibility = "hidden";
        t3.style.visibility = "hidden";
        t4.style.visibility = "hidden";
        t5.style.visibility = "hidden";
        t6.style.visibility = "hidden";
        gameOver(tries);
        document.getElementById("container").style.background = correctColor;
    } else {
        t1.style.visibility = "hidden";
    }
});

t2.addEventListener("click", function () {
    tries += 1;
    tries_disp.textContent = "Number of Tries : "+tries;
    if (t2.style.background == correctColor) {
        t1.style.visibility = "hidden";
        t2.style.visibility = "hidden";
        t3.style.visibility = "hidden";
        t4.style.visibility = "hidden";
        t5.style.visibility = "hidden";
        t6.style.visibility = "hidden";
        gameOver(tries);
        document.getElementById("container").style.background = correctColor;
    } else {
        t2.style.visibility = "hidden";
    }
});

t3.addEventListener("click", function () {
    tries += 1;
    tries_disp.textContent = "Number of Tries : "+tries;
if (t3.style.background == correctColor) {
    t1.style.visibility = "hidden";
        t2.style.visibility = "hidden";
        t3.style.visibility = "hidden";
        t4.style.visibility = "hidden";
        t5.style.visibility = "hidden";
        t6.style.visibility = "hidden";
        gameOver(tries);
        document.getElementById("container").style.background = correctColor;
} else {
    t3.style.visibility = "hidden";
}
});

t4.addEventListener("click", function () {
    tries += 1;
    tries_disp.textContent = "Number of Tries : "+tries;
    if (t4.style.background == correctColor) {
        t1.style.visibility = "hidden";
        t2.style.visibility = "hidden";
        t3.style.visibility = "hidden";
        t4.style.visibility = "hidden";
        t5.style.visibility = "hidden";
        t6.style.visibility = "hidden";
        gameOver(tries);
        document.getElementById("container").style.background = correctColor;
    } else {
        t4.style.visibility = "hidden";
    }
});

t5.addEventListener("click", function () {
    tries += 1;
    tries_disp.textContent = "Number of Tries : "+tries;
if (t5.style.background == correctColor) {
    t1.style.visibility = "hidden";
        t2.style.visibility = "hidden";
        t3.style.visibility = "hidden";
        t4.style.visibility = "hidden";
        t5.style.visibility = "hidden";
        t6.style.visibility = "hidden";
        gameOver(tries);
        document.getElementById("container").style.background = correctColor;
} else {
    t5.style.visibility = "hidden";
}
});

t6.addEventListener("click", function () {
    tries += 1;
    tries_disp.textContent = "Number of Tries : "+tries;
    if (t6.style.background == correctColor) {
        t1.style.visibility = "hidden";
        t2.style.visibility = "hidden";
        t3.style.visibility = "hidden";
        t4.style.visibility = "hidden";
        t5.style.visibility = "hidden";
        t6.style.visibility = "hidden";
        gameOver(tries);
        document.getElementById("container").style.background = correctColor;
    } else {
        t6.style.visibility = "hidden";
    }
});

button.addEventListener("click", function(){
    newGame();
});