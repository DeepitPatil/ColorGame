var t1 = document.getElementById("1");
var t2 = document.getElementById("2");
var t3 = document.getElementById("3");
var t4 = document.getElementById("4");
var t5 = document.getElementById("5");
var t6 = document.getElementById("6");
var x;
var tries = 0;
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
t1.style.background = getRandomColor();
t2.style.background = getRandomColor();
t3.style.background = getRandomColor();
t4.style.background = getRandomColor();
t5.style.background = getRandomColor();
t6.style.background = getRandomColor();

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

t1.addEventListener("click", function () {
if (t1.style.background == correctColor) {
    t1.style.background = correctColor;
    t2.style.background = correctColor;
    t3.style.background = correctColor;
    t4.style.background = correctColor;
    t5.style.background = correctColor;
    t6.style.background = correctColor;
    document.getElementById("header").style.background = correctColor;
} else {
    t1.style.background = "black";
}
tries += 1;
});

t2.addEventListener("click", function () {
    if (t2.style.background == correctColor) {
        t1.style.background = correctColor;
        t2.style.background = correctColor;
        t3.style.background = correctColor;
        t4.style.background = correctColor;
        t5.style.background = correctColor;
        t6.style.background = correctColor;
        document.getElementById("header").style.background = correctColor;
    } else {
        t2.style.background = "black";
    }
    tries += 1;
});

t3.addEventListener("click", function () {
if (t3.style.background == correctColor) {
    t1.style.background = correctColor;
    t2.style.background = correctColor;
    t3.style.background = correctColor;
    t4.style.background = correctColor;
    t5.style.background = correctColor;
    t6.style.background = correctColor;
    document.getElementById("header").style.background = correctColor;
} else {
    t3.style.background = "black";
}
tries += 1;
});

t4.addEventListener("click", function () {
    if (t4.style.background == correctColor) {
        t1.style.background = correctColor;
        t2.style.background = correctColor;
        t3.style.background = correctColor;
        t4.style.background = correctColor;
        t5.style.background = correctColor;
        t6.style.background = correctColor;
        document.getElementById("header").style.background = correctColor;
    } else {
        t4.style.background = "black";
    }
    tries += 1;
});

t5.addEventListener("click", function () {
if (t5.style.background == correctColor) {
    t1.style.background = correctColor;
    t2.style.background = correctColor;
    t3.style.background = correctColor;
    t4.style.background = correctColor;
    t5.style.background = correctColor;
    t6.style.background = correctColor;
    document.getElementById("header").style.background = correctColor;
} else {
    t5.style.background = "black";
}
tries += 1;
});

t6.addEventListener("click", function () {
    if (t6.style.background == correctColor) {
        t1.style.background = correctColor;
        t2.style.background = correctColor;
        t3.style.background = correctColor;
        t4.style.background = correctColor;
        t5.style.background = correctColor;
        t6.style.background = correctColor;
        document.getElementById("header").style.background = correctColor;
    } else {
        t6.style.background = "black";
    }
    tries += 1;
});