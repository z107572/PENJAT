/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
var vidas = 7;
var paraula = [];
var fallos = ["_", "_", "_", "_", "_", "_", "_"];
var Lletres = ["_", "_", "_", "_", "_", "_", "_"];
var seconds = 0;
var palabras = ["cordes", "fetge", "forca", "jutges", "jutjat", "mengen", "penjat", "quinta", "setze"];
var pistas = ["A la quinta forca", "A ca un penjat, no hi anomenis cordes", "Setze jutges d’un jutjat mengen fetge d’un penjat"];
var palabraspistas = [1, 2, 0, 2, 2, 2, 2, 1, 0, 2];

var aleatori = Math.floor(Math.random() * palabras.length);
var Paraula = palabras[aleatori];
var pista = pistas[palabraspistas[aleatori]];

function timer() {
    seconds = seconds + 1;
    document.getElementById("counter").innerHTML = seconds;
    }
    setInterval(timer, 1000);

for (var i = 0; i < Paraula.length; i++) {
    paraula[i] = "_";
}

function muestrapista(){
    window.alert(pista);
    window.alert(Paraula); 
}
function esconder() {
            document.getElementById("ahorcado_6").hidden = true;
            document.getElementById("ahorcado_5").hidden = true;
            document.getElementById("ahorcado_4").hidden = true;
            document.getElementById("ahorcado_3").hidden = true;
            document.getElementById("ahorcado_2").hidden = true;
            document.getElementById("ahorcado_1").hidden = true;
            document.getElementById("ahorcado_0").hidden = true;
            document.getElementById("ahorcado").hidden = true;
            document.getElementById("gato2").hidden = true;
            document.getElementById("gato3").hidden = true;
if (!confirm("Anam a la quinta forca?")) {
 document.body.style.backgroundImage = "url('img/fondo1.png')";
}
        }
function comprovar(){
lletra = document.getElementById("lletra").value;
pos= Paraula.indexOf(lletra);
document.getElementById("lletra").value = "";
lletra = lletra.toLowerCase();  
switch (lletra){
case "á":
case "à":
lletra = "a";
break;
case "é":
case "è":
lletra = "e";
break;
case "í":
case "ï":
lletra = "i";
break;
case "ó":
case "ò":
lletra = "o";
break;
case "ú":
case "ü":
lletra = "u";
break;
} 
if (((lletra >="a") && (lletra <="z")) || (lletra === "ç")) {
if (Paraula.includes(lletra)){
    window.alert("Has acertado");
    pos = Paraula.indexOf(lletra);
    paraula [pos] = lletra;
    for (var i = pos++; i < Paraula.length; i++) {
    if (Paraula[i] === lletra)
     paraula[i] = lletra;   
    }
    document.getElementById("paraula").innerHTML = paraula;
    document.getElementById("aciertob").play();
    document.getElementById("clock").play();
    
}else{
    if (Lletres.indexOf(lletra) !== -1){
    window.alert ("lletra repetida");
}else{
    window.alert ("Has fallado");
    Lletres[7 - vidas] = lletra;
    vidas = vidas -1 ;
   
    muestraimg();
    document.getElementById("fallos").innerHTML = Lletres;
    document.getElementById("incorrecto").play();
    document.getElementById("clock").play();
    
}
}

}else{
    window.alert("caracter no válido");
}


if (vidas <=0) {
aturatot();
window.alert("has perdido");
document.getElementById("pelea").play();
        document.body.style.backgroundImage = "url('img/Jungle.png')";
        document.getElementById("gato1").hidden = true;
        document.getElementById("gato3").hidden = false;
        window.alert("RIP");
        document.getElementById("derrota").play();


} else {
if (paraula.indexOf("_")=== -1) {
    window.alert("Has ganado");
    document.getElementById("victoria").play();
    document.getElementById("gato1").hidden = true;
    document.getElementById("gato2").hidden = false;
    aturatot();
            document.body.style.backgroundImage = "url('img/Party.png')";
            document.getElementById("imatges").hidden = true;
            document.getElementById("ahorcado").hidden = false;
}
}
document.getElementById("vidas").innerHTML = 
"&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + vidas;

        }
        function aturatot(){
            document.getElementById("lletra").disabled = true;
            document.getElementById("comprovar").disabled = true;
        }
        
        function muestraimg(){
            switch (vidas){
            case 6:
            document.getElementById("ahorcado_6").hidden = false;

            break;
            case 5:
            document.getElementById("ahorcado_6").hidden = true;
            document.getElementById("ahorcado_5").hidden = false;

            break;
            case 4:
            document.getElementById("ahorcado_5").hidden = true;
            document.getElementById("ahorcado_4").hidden = false;
            break;
            case 3:
            document.getElementById("ahorcado_4").hidden = true;
            document.getElementById("ahorcado_3").hidden = false;

            break;
            case 2:
            document.getElementById("ahorcado_3").hidden = true;
            document.getElementById("ahorcado_2").hidden = false;

            break;
            case 1:
            document.getElementById("ahorcado_2").hidden = true;
            document.getElementById("ahorcado_1").hidden = false;

            break;
            case 0:
            document.getElementById("ahorcado_1").hidden = true;
            document.getElementById("ahorcado_0").hidden = false;
            break;
            
            
        }
    }
    
    
    function mystery() {
        
        document.getElementById("misterio").play();
    }