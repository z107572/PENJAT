/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
                var vidas = 7;
                var paraula ="";
                var fallos = "";
                var seconds = 0;
              
                function timer() {
                seconds = seconds + 1;
                document.getElementById("counter").innerHTML = seconds;
                }
                setInterval(timer, 1000);

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
        if (((lletra >="a") && (lletra <="m")) || (lletra === "ç")) {
            window.alert("Correcte");
            document.getElementById("aciertob").play();
            document.getElementById("paraula").innerHTML =
            paraula = paraula + lletra + " ";
            document.getElementById("clock").play();
        } else if (((lletra >="n") && (lletra <="z")) || (lletra === "ñ"))
        {
            document.getElementById("fallo").innerHTML =
            fallos = fallos + lletra + " ";
            window.alert("Incorrecte");
            document.getElementById("incorrectob").play();
            vidas = vidas - 1;
            document.getElementById("clock").play();
            muestraimg();
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
                if (paraula.length >= 14) {
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