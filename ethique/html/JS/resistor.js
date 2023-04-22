var noir = "black";
var marron = "brown";
var rouge = "red";
var orange = "orange";

var coul = "green";


//dessin de la resistance
var canvas = document.getElementById("resistor");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "#ddd";
ctx.fillRect(100, 50, 600, 200);

ctx.fillStyle = "#777";
ctx.fillRect(50, 25, 50, 250);
ctx.fillRect(700, 25, 50, 250);

ctx.fillStyle = "brown";
ctx.fillRect(150, 70, 50, 160);
ctx.fillStyle = "black";
ctx.fillRect(250, 70, 50, 160);
ctx.fillStyle = "red";
ctx.fillRect(350, 70, 50, 160);
ctx.fillStyle = "gold";
ctx.fillRect(600, 70, 50, 160);

ctx.strokeStyle = "#777";
ctx.lineWidth = 6;
ctx.beginPath();
ctx.moveTo(0, 150);
ctx.lineTo(50, 150);
ctx.moveTo(750, 150);
ctx.lineTo(800, 150);
ctx.stroke();



var select = document.getElementById("couleur1-select");

var textElement = document.getElementById("myText");


function myFunction() {

    const selectElement1 = document.getElementById("couleur1-select");
    const selectedValue1 = selectElement1.value;
    const selectElement2 = document.getElementById("couleur2-select");
    const selectedValue2 = selectElement2.value;
    const selectElement3 = document.getElementById("couleur3-select");
    const selectedValue3 = selectElement3.value;
    const selectElement4 = document.getElementById("couleur4-select");
    const selectedValue4 = selectElement4.value;

    ctx.fillStyle = selectedValue1;
    ctx.fillRect(150, 70, 50, 160);
    ctx.fillStyle = selectedValue2;
    ctx.fillRect(250, 70, 50, 160);
    ctx.fillStyle = selectedValue3;
    ctx.fillRect(350, 70, 50, 160);
    ctx.fillStyle = selectedValue4;
    ctx.fillRect(600, 70, 50, 160);

    var valeur1 = "";
    var valeur2 = "";
    var valeur3 = "";
    var valeur4 = "";

    if (selectedValue1 == "black"){valeur1 = "0";}
    else if (selectedValue1 == "brown"){valeur1 = "1";}
    else if (selectedValue1 == "red"){valeur1 = "2";}
    else if (selectedValue1 == "orange"){valeur1 = "3";}
    else if (selectedValue1 == "yellow"){valeur1 = "4";}
    else if (selectedValue1 == "green"){valeur1 = "5";}
    else if (selectedValue1 == "blue"){valeur1 = "6";}
    else if (selectedValue1 == "violet"){valeur1 = "7";}
    else if (selectedValue1 == "grey"){valeur1 = "8";}
    else if (selectedValue1 == "white"){valeur1 = "9";}

    if (selectedValue2 == "black"){valeur2 = "0";}
    else if (selectedValue2 == "brown"){valeur2 = "1";}
    else if (selectedValue2 == "red"){valeur2 = "2";}
    else if (selectedValue2 == "orange"){valeur2 = "3";}
    else if (selectedValue2 == "yellow"){valeur2 = "4";}
    else if (selectedValue2 == "green"){valeur2 = "5";}
    else if (selectedValue2 == "blue"){valeur2 = "6";}
    else if (selectedValue2 == "violet"){valeur2 = "7";}
    else if (selectedValue2 == "grey"){valeur2 = "8";}
    else if (selectedValue2 == "white"){valeur2 = "9";}

    if (selectedValue3 == "black"){valeur3 = "";}
    else if (selectedValue3 == "brown"){valeur3 = "0";}
    else if (selectedValue3 == "red"){valeur3 = "00";}
    else if (selectedValue3 == "orange"){valeur3 = "k";}
    else if (selectedValue3 == "yellow"){valeur3 = "0k";}
    else if (selectedValue3 == "green"){valeur3 = "00k";}
    else if (selectedValue3 == "blue"){valeur3 = "M";}
    else if (selectedValue3 == "violet"){valeur3 = "0M";}
    else if (selectedValue3 == "grey"){valeur3 = "00M";}
    else if (selectedValue3 == "white"){valeur3 = "G";}

    if (selectedValue4 == "gold"){valeur4 = "5";}
    else if (selectedValue4 == "silver"){valeur4 = "10";}

    const paragraphElement = document.getElementById("myText");
    paragraphElement.innerHTML = "Valeur de la résistance : " + valeur1 + valeur2 + valeur3 + " ohms " + "+-" + valeur4 + "%";

}

