//const TWEEN = require("./tween");
//import scene from "scenejs";

//const TWEEN = require("lib/tween.js");


function cabeça(c, parametroscabeca, parametroscabelo, parametrospescoco, parametrosolho, parametrosobrancelha, parametrosboca, parametrospescoco2){

    c.beginPath();
    c.moveTo(parametroscabeca.x, parametroscabeca.y);   //inicial x:420, y:270
    c.bezierCurveTo(parametroscabeca.x - 15, parametroscabeca.y + 15, parametroscabeca.x - 30, parametroscabeca.y + 15, parametroscabeca.x - 33, parametroscabeca.y + 0);
    c.quadraticCurveTo(parametroscabeca.x - 35 ,parametroscabeca.y -4, parametroscabeca.x - 37, parametroscabeca.y-4);
    c.lineTo(parametroscabeca.x - 32, parametroscabeca.y -10);
    c.bezierCurveTo(parametroscabeca.x - 30, parametroscabeca.y - 15, parametroscabeca.x - 32, parametroscabeca.y - 20, parametroscabeca.x - 30, parametroscabeca.y - 20);
    c.quadraticCurveTo(parametroscabeca.x - 25, parametroscabeca.y - 25, parametroscabeca.x - 20, parametroscabeca.y - 23);
    c.quadraticCurveTo(parametroscabeca.x - 15, parametroscabeca.y - 22, parametroscabeca.x - 10, parametroscabeca.y - 25);
    c.quadraticCurveTo(parametroscabeca.x - 14, parametroscabeca.y - 20, parametroscabeca.x - 8, parametroscabeca.y - 10);
    c.quadraticCurveTo(parametroscabeca.x -5, parametroscabeca.y- 20, parametroscabeca.x - 0, parametroscabeca.y - 8);
    c.quadraticCurveTo(parametroscabeca.x - 5, parametroscabeca.y - 0, parametroscabeca.x -5, parametroscabeca.y - 5);
    c.quadraticCurveTo(parametroscabeca.x - 6, parametroscabeca.y + 5, parametroscabeca.x - 0, parametroscabeca.y + 0);

    c.strokeStyle = "#ad7338";
    c.stroke();

    c.fillStyle = "#ffcccc";
    c.fill();

    c.closePath();


    //Cabelo
    c.beginPath();

    c.moveTo(parametroscabelo.x, parametroscabelo.y);   //inicial x:390, y:250
    c.quadraticCurveTo(parametroscabelo.x + 2, parametroscabelo.y - 6, parametroscabelo.x + 10, parametroscabelo.y - 4);
    c.quadraticCurveTo(parametroscabelo.x + 15, parametroscabelo.y - 2, parametroscabelo.x + 21, parametroscabelo.y - 7);
    c.quadraticCurveTo(parametroscabelo.x + 17, parametroscabelo.y + 0, parametroscabelo.x + 22, parametroscabelo.y + 10);
    c.quadraticCurveTo(parametroscabelo.x + 25, parametroscabelo.y - 2, parametroscabelo.x + 30, parametroscabelo.y + 12);
    c.quadraticCurveTo(parametroscabelo.x + 25, parametroscabelo.y + 21, parametroscabelo.x + 25, parametroscabelo.y + 15);
    c.quadraticCurveTo(parametroscabelo.x + 26, parametroscabelo.y + 24, parametroscabelo.x + 35, parametroscabelo.y + 24);
    c.quadraticCurveTo(parametroscabelo.x + 30, parametroscabelo.y + 15, parametroscabelo.x + 37, parametroscabelo.y + 13);
    c.quadraticCurveTo(parametroscabelo.x + 40, parametroscabelo.y + 10, parametroscabelo.x + 37, parametroscabelo.y + 2);
    c.quadraticCurveTo(parametroscabelo.x + 47, parametroscabelo.y - 5, parametroscabelo.x + 34, parametroscabelo.y - 9);
    c.quadraticCurveTo(parametroscabelo.x + 25, parametroscabelo.y - 30, parametroscabelo.x + 5, parametroscabelo.y - 20 );
    c.quadraticCurveTo(parametroscabelo.x + 0, parametroscabelo.y - 12, parametroscabelo.x - 5, parametroscabelo.y - 22);
    c.quadraticCurveTo(parametroscabelo.x - 15, parametroscabelo.y - 8,parametroscabelo.x - 7, parametroscabelo.y - 10);
    c.quadraticCurveTo(parametroscabelo.x - 15, parametroscabelo.y + 0, parametroscabelo.x + 0, parametroscabelo.y + 0);


    c.fillStyle = "#4d3319";
    c.fill();

    c.strokeStyle = "#4d3319";
    c.stroke();
    c.closePath();

    //Pescoço
    c.beginPath();      
    c.moveTo(parametrospescoco.x, parametrospescoco.y);   //inicial x:415, 275
    c.lineTo(parametrospescoco.x - 3, parametrospescoco.y + 6);
    c.quadraticCurveTo(parametrospescoco.x - 13, parametrospescoco.y + 18, parametrospescoco.x - 23, parametrospescoco.y + 5);

    /*c.beginPath();      //inicial x:415, 275
    c.moveTo(415, 275);
    c.lineTo(412, 281);
    c.quadraticCurveTo(402, 293, 392, 280);*/

    c.fillStyle = "#ffcccc";
    c.fill();

    c.strokeStyle = "#ad7338";
    c.stroke();

    c.closePath();

    c.beginPath(); 

    c.moveTo(parametrospescoco2.x, parametrospescoco2.y); // inicial x:392, y:280
    c.quadraticCurveTo(parametrospescoco2.x + 12, parametrospescoco2.y + 7, parametrospescoco2.x+18, parametrospescoco2.y - 4);
    c.stroke();

    c.closePath();


    //Olho
    c.beginPath();   //inicial x:395, y:259

    c.ellipse(parametrosolho.x, parametrosolho.y, 2, 3, 0, 0, 2*Math.PI);

    c.strokeStyle = "#4d3319";
    c.stroke();
    
    c.fillStyle = "#663300";
    c.fill();


    c.closePath();

    //Boca
    c.beginPath();

    c.moveTo(parametrosboca.x, parametrosboca.y);   //inicial x:390, y:277
    c.quadraticCurveTo(parametrosboca.x + 4, parametrosboca.y + 0, parametrosboca.x + 7, parametrosboca.y + 0 )
    c.quadraticCurveTo(parametrosboca.x +2, parametrosboca.y + 4, parametrosboca.x +1, parametrosboca.y + 1);

    c.strokeStyle = "#4d3319";
    c.stroke();

    c.fillStyle = "#4d3319";
    c.fill();


    c.closePath();


    //sobrancelha
    c.beginPath();

    c.moveTo(parametrosobrancelha.x, parametrosobrancelha.y);   //inicial x:392, y:253

    c.quadraticCurveTo(parametrosobrancelha.x + 3, parametrosobrancelha.y-3, parametrosobrancelha.x + 8, parametrosobrancelha.y+1);
    c.quadraticCurveTo(parametrosobrancelha.x + 4, parametrosobrancelha.y+2, parametrosobrancelha.x + 8, parametrosobrancelha.y+1);
    c.quadraticCurveTo(parametrosobrancelha.x + 3, parametrosobrancelha.y+0, parametrosobrancelha.x - 1, parametrosobrancelha.y+2);
    c.quadraticCurveTo(parametrosobrancelha.x - 3, parametrosobrancelha.y+1, parametrosobrancelha.x + 0, parametrosobrancelha.y+0);

    /* c.quadraticCurveTo(395, 250, 400, 254);
    c.quadraticCurveTo(396, 255, 400, 254);
    c.quadraticCurveTo(395, 253, 391, 255);
    c.quadraticCurveTo(389, 254, 392, 253);*/

    c.strokeStyle = "#996633";
    c.stroke();

    c.fillStyle = "#663300";
    c.fill();

    c.closePath();

}

function tronco(c, parametrostronco, parametroslinha, parametroscalçoes){

    // TSHIRT
    c.beginPath();

    c.moveTo(parametrostronco.x, parametrostronco.y);    //inicio t shirt x: 390, y: 280
    c.lineTo(parametrostronco.x - 25, parametrostronco.y + 10);
    c.quadraticCurveTo(parametrostronco.x- 30,parametrostronco.y + 20, parametrostronco.x - 20,parametrostronco.y + 30);
    c.lineTo(parametrostronco.x - 5, parametrostronco.y + 26);
    c.lineTo(parametrostronco.x - 10, parametrostronco.y + 70);
    c.quadraticCurveTo(parametrostronco.x + 35, parametrostronco.y + 70, parametrostronco.x + 40, parametrostronco.y + 25);
    c.quadraticCurveTo(parametrostronco.x + 45, parametrostronco.y + 30, parametrostronco.x + 58, parametrostronco.y + 10);
    c.quadraticCurveTo(parametrostronco.x + 35, parametrostronco.y + 0,parametrostronco.x +24, parametrostronco.y + 0);
    c.quadraticCurveTo(parametrostronco.x + 15, parametrostronco.y + 15, parametrostronco.x + 0, parametrostronco.y + 0); 

    c.fillStyle = "#ff8000";
    c.fill();

    c.strokeStyle = "#b35900";
    c.stroke();

    c.closePath();

    //Linha
    c.beginPath();
    c.moveTo(parametroslinha.x, parametroslinha.y);   //inicio x:430, y: 305
    c.quadraticCurveTo(parametroslinha.x + 0, parametroslinha.y - 5, parametroslinha.x + 0, parametroslinha.y - 8);
    c.stroke();
    c.closePath();

    //CALÇÕES

    c.beginPath();
 
    c.moveTo(parametroscalçoes.x, parametroscalçoes.y);    //inicial x:380, y:350
    c.quadraticCurveTo(parametroscalçoes.x + 0, parametroscalçoes.y + 10, parametroscalçoes.x + 5,parametroscalçoes.y + 40);
    c.quadraticCurveTo(parametroscalçoes.x + 10, parametroscalçoes.y + 45, parametroscalçoes.x + 30, parametroscalçoes.y + 35);
    c.quadraticCurveTo(parametroscalçoes.x + 25, parametroscalçoes.y + 30, parametroscalçoes.x + 25, parametroscalçoes.y + 15);
    c.lineTo(parametroscalçoes.x + 50, parametroscalçoes.y + 20);
    c.quadraticCurveTo(parametroscalçoes.x + 55, parametroscalçoes.y + 20, parametroscalçoes.x + 60, parametroscalçoes.y + 0);
    c.quadraticCurveTo(parametroscalçoes.x + 35,parametroscalçoes.y -5, parametroscalçoes.x + 33, parametroscalçoes.y - 10);
    c.quadraticCurveTo(parametroscalçoes.x + 10, parametroscalçoes.y + 0, parametroscalçoes.x + 0,parametroscalçoes.y + 0);

    c.fillStyle = "gray";
    c.fill();

    c.strokeStyle = "#404040";
    c.stroke();

    c.closePath();

}


function braço_esquerdo(c, parametrosbracoe){

    c.beginPath();

    c.moveTo(parametrosbracoe.x, parametrosbracoe.y);      //inicial x:364, y:292
    c.quadraticCurveTo(parametrosbracoe.x -14, parametrosbracoe.y + 13 ,parametrosbracoe.x - 19, parametrosbracoe.y + 28); 
    c.lineTo(parametrosbracoe.x - 24, parametrosbracoe.y + 48);
    c.quadraticCurveTo(parametrosbracoe.x - 29, parametrosbracoe.y + 58, parametrosbracoe.x - 19, parametrosbracoe.y + 63);
    c.quadraticCurveTo(parametrosbracoe.x- 19, parametrosbracoe.y + 48, parametrosbracoe.x - 14, parametrosbracoe.y + 53);
    c.quadraticCurveTo(parametrosbracoe.x - 14, parametrosbracoe.y + 58, parametrosbracoe.x - 9, parametrosbracoe.y + 53);
    c.quadraticCurveTo(parametrosbracoe.x - 11, parametrosbracoe.y + 53, parametrosbracoe.x - 12, parametrosbracoe.y + 48);
    c.lineTo(parametrosbracoe.x -12, parametrosbracoe.y + 43);
    c.quadraticCurveTo(parametrosbracoe.x- 14, parametrosbracoe.y + 33, parametrosbracoe.x + 1, parametrosbracoe.y + 18);
    c.lineTo(parametrosbracoe.x + 3, parametrosbracoe.y + 15);
    c.quadraticCurveTo(parametrosbracoe.x - 2, parametrosbracoe.y + 11, parametrosbracoe.x -1 , parametrosbracoe.y + 1);

    c.strokeStyle = "#ad7338";
    c.stroke();

    c.fillStyle = "#ffcccc";
    c.fill();

    c.closePath();
}

function braço_direito(c, parametrosbracod){

    c.beginPath();

    c.moveTo(parametrosbracod.x, parametrosbracod.y);   //inicial x:447, y:292
    c.quadraticCurveTo(parametrosbracod.x +3 , parametrosbracod.y + 8, parametrosbracod.x + 33, parametrosbracod.y + 8);
    c.quadraticCurveTo(parametrosbracod.x + 38, parametrosbracod.y + 3, parametrosbracod.x + 48, parametrosbracod.y + 8);
    c.quadraticCurveTo(parametrosbracod.x + 48, parametrosbracod.y + 10, parametrosbracod.x + 43 , parametrosbracod.y + 10);
    c.quadraticCurveTo(parametrosbracod.x + 33, parametrosbracod.y + 13, parametrosbracod.x + 43, parametrosbracod.y + 13);
    c.quadraticCurveTo(parametrosbracod.x + 43, parametrosbracod.y + 15, parametrosbracod.x + 31, parametrosbracod.y + 15);
    c.quadraticCurveTo(parametrosbracod.x + 3, parametrosbracod.y + 18, parametrosbracod.x + 1, parametrosbracod.y + 15);
    c.lineTo(parametrosbracod.x - 8, parametrosbracod.y + 11);
    c.quadraticCurveTo(parametrosbracod.x - 1, parametrosbracod.y + 3, parametrosbracod.x + 0, parametrosbracod.y + 0);

    c.strokeStyle = "#ad7338";
    c.stroke();

    c.fillStyle = "#ffcccc";
    c.fill();

    c.closePath();
}

function perna_esquerda(c, parametrosperna2){

    c.beginPath();

    c.moveTo(parametrosperna2.x, parametrosperna2.y);   //inicio x:408, 386
    c.quadraticCurveTo(parametrosperna2.x + 7, parametrosperna2.y + 9, parametrosperna2.x - 13, parametrosperna2.y + 44);  
    c.quadraticCurveTo(parametrosperna2.x - 13, parametrosperna2.y + 54, parametrosperna2.x - 11, parametrosperna2.y + 54); 
    c.bezierCurveTo(parametrosperna2.x - 11, parametrosperna2.y + 59, parametrosperna2.x - 23, parametrosperna2.y + 64, parametrosperna2.x - 23, parametrosperna2.y + 44);
    c.quadraticCurveTo(parametrosperna2.x -10, parametrosperna2.y + 14, parametrosperna2.x - 18, parametrosperna2.y + 9);
    c.lineTo(parametrosperna2.x - 20, parametrosperna2.y + 6);
    c.quadraticCurveTo(parametrosperna2.x - 18, parametrosperna2.y + 8.5, parametrosperna2.x - 0, parametrosperna2.y + 1);

    c.strokeStyle = "#ad7338";
    c.stroke();

    c.fillStyle = "#ffcccc";
    c.fill();

    c.closePath();
}

function perna_direita(c, parametrosperna1){

    c.beginPath();

    c.moveTo(parametrosperna1.x, parametrosperna1.y);   //inicial = 441, 351
    c.quadraticCurveTo(parametrosperna1.x + 24, parametrosperna1.y + 9, parametrosperna1.x + 14, parametrosperna1.y + 24);
    c.lineTo(parametrosperna1.x + 6, parametrosperna1.y + 44);
    c.quadraticCurveTo(parametrosperna1.x + 29, parametrosperna1.y + 62, parametrosperna1.x - 3, parametrosperna1.y + 49);
    c.quadraticCurveTo(parametrosperna1.x - 3, parametrosperna1.y + 49 ,parametrosperna1.x + 2 , parametrosperna1.y + 19);
    c.lineTo(parametrosperna1.x - 7, parametrosperna1.y + 17);
    c.quadraticCurveTo(parametrosperna1.x - 1, parametrosperna1.y + 7, parametrosperna1.x - 0.5,parametrosperna1.y + 0);

    c.strokeStyle = "#ad7338";
    c.stroke();

    c.fillStyle = "#ffcccc";
    c.fill();

    c.closePath();
}

function prancha(c, parametrosprancha){

    c.beginPath();

    c.ellipse(parametrosprancha.x ,parametrosprancha.y, 35, 105, Math.PI / 2.7, 0, 2* Math.PI);    //400, 445 valores inciais
   
    c.stroke();

    c.fillStyle = "#e6ac00";
    c.fill();

    c.closePath();

    c.beginPath();

    c.ellipse(parametrosprancha.x ,parametrosprancha.y - 5, 35, 105, Math.PI / 2.7, 0, 2* Math.PI);
   
    c.stroke();
    c.strokeStyle = "#e6b800";

    c.fillStyle = "yellow";
    c.fill();

    c.closePath();

    c.beginPath();

    c.ellipse(parametrosprancha.x , parametrosprancha - 5, 20, 105, Math.PI / 2.7, 0, 2* Math.PI )


    c.stroke();

    c.fillStyle = "green";
    c.fill();

    c.closePath();

    c.beginPath();

    c.ellipse(parametrosprancha.x , parametrosprancha.y -5, 7, 105, Math.PI / 2.7, 0, 2* Math.PI )

    c.stroke();

    c.fillStyle = "#2eb82e";
    c.fill();

    c.closePath();

}

function fundo_principal1(c, parameters, parameterspassaropequeno, parametersnuvem1, parametersnuvem2){

    //Céu azul por cima da água
    c.beginPath();

    var gradient4 = c.createLinearGradient(500,0, 500,400);

    gradient4.addColorStop(0, '#33bbff');
    gradient4.addColorStop(.7, '#80d4ff');
    gradient4.addColorStop(1, '#cceeff');
    
    c.fillStyle = gradient4;
    c.fillRect(0, 0, 1000, 400);

    c.stroke();

    c.closePath();

    c.beginPath();

    c.moveTo(300, 150);

    c.stroke();

    c.closePath();

    //Pássaro Maior
    c.beginPath();

    c.moveTo(parameters.x , parameters.y);   //200, 50
    c.quadraticCurveTo(parameters.x + 20 , parameters.y - 20 , parameters.x + 40, parameters.y + 0);
    c.quadraticCurveTo(parameters.x + 60 , parameters.y - 10, parameters.x + 70, parameters.y + 20);

    c.strokeStyle = "black";
    c.stroke();

    c.closePath();

    //Pássaro pequeno
    
    c.beginPath();

    c.moveTo(parameterspassaropequeno.x , parameterspassaropequeno.y);    //500, 50
    c.quadraticCurveTo(parameterspassaropequeno.x + 20, parameterspassaropequeno.y - 20, parameterspassaropequeno.x + 30, parameterspassaropequeno.y + 0);
    c.quadraticCurveTo(parameterspassaropequeno.x + 50, parameterspassaropequeno.y - 20, parameterspassaropequeno.x + 60, parameterspassaropequeno.y  +0);

    c.strokeStyle = "black";
    c.stroke();

    c.closePath();

    //Nuvem 1     parametersnuvem1

    c.beginPath();

    c.moveTo(parametersnuvem1.x, parametersnuvem1.y);  //inicial x:700, y:50
    c.quadraticCurveTo(parametersnuvem1.x + 20, parametersnuvem1.y - 20, parametersnuvem1.x + 40, parametersnuvem1.y -0);
    c.quadraticCurveTo(parametersnuvem1.x + 70, parametersnuvem1.y - 20, parametersnuvem1.x + 120, parametersnuvem1.y + 5);
    c.quadraticCurveTo(parametersnuvem1.x + 130, parametersnuvem1.y + 20, parametersnuvem1.x + 110, parametersnuvem1.y + 35);
    c.quadraticCurveTo(parametersnuvem1.x + 80, parametersnuvem1.y + 60, parametersnuvem1.x + 60, parametersnuvem1.y + 35);
    c.quadraticCurveTo(parametersnuvem1.x + 50, parametersnuvem1.y + 55, parametersnuvem1.x + 30, parametersnuvem1.y + 40);
    c.quadraticCurveTo(parametersnuvem1.x - 30, parametersnuvem1.y + 50, parametersnuvem1.x - 10, parametersnuvem1.y + 25);
    c.quadraticCurveTo(parametersnuvem1.x - 30, parametersnuvem1.y + 0, parametersnuvem1.x + 0, parametersnuvem1.y + 0);

    c.fillStyle = "white";
    c.fill();
    
    c.strokeStyle = "#e6e6e6";
    c.stroke();

    c.closePath();

    //Nuvem 2  parametersnuvem2

    c.beginPath();

    c.moveTo(parametersnuvem2.x ,parametersnuvem2.y);  //inicial x:320, 50
    c.quadraticCurveTo(parametersnuvem2.x + 20 , parametersnuvem2.y - 15, parametersnuvem2.x + 60, parametersnuvem2.y + 0);
    c.quadraticCurveTo(parametersnuvem2.x + 85, parametersnuvem2.y - 20, parametersnuvem2.x + 110, parametersnuvem2.y + 0 );
    c.quadraticCurveTo(parametersnuvem2.x + 90, parametersnuvem2.y + 25, parametersnuvem2.x + 60, parametersnuvem2.y + 15 );
    c.quadraticCurveTo(parametersnuvem2.x + 20, parametersnuvem2.y + 35, parametersnuvem2.x + 0, parametersnuvem2.y + 0);
    
    c.fillStyle = "white";
    c.fill();
    
    c.strokeStyle = "#e6e6e6";
    c.stroke();

    c.closePath();

}

function fundo1(c, parameters1){

    //mar atrás da onda principal
    c.beginPath();
    c.moveTo(0, 330);
    c.bezierCurveTo(100, 230, 200, 380, 300, 300);
    c.bezierCurveTo(400, 230, 500, 380, 600, 300);
    c.bezierCurveTo(700, 230, 800, 380, 900, 300);
    c.quadraticCurveTo(1000, 230 ,1000, 320)
    c.lineTo(1000, 565);
    c.lineTo(0, 565);
    c.lineTo(0, 330);

    var gradient2 = c.createLinearGradient(500, 330, 500, 565);

    gradient2.addColorStop(0, '#1ac6ff');
    gradient2.addColorStop(.7, '#0059b3');
    gradient2.addColorStop(1, '#00264d');

    c.fillStyle = gradient2;
    c.fill();

    c.strokeStyle = "#6699ff";
    c.stroke();
    c.closePath();

    //onda principal

    c.beginPath();
                
    c.moveTo(parameters1.x, parameters1.y);    //x inicial = 650, y inicial = 550
    c.quadraticCurveTo(parameters1.x + 0, parameters1.y - 400, parameters1.x - 370, parameters1.y -400);
    c.quadraticCurveTo(parameters1.x - 150, parameters1.y - 350, parameters1.x - 370, parameters1.y - 0);

    var gradient = c.createLinearGradient(parameters1.x - 370, parameters1.y - 400, parameters1.x - 0, parameters1.y - 0);

    gradient.addColorStop(0, '#1ac6ff');
    gradient.addColorStop(.7, '#0059b3');
    gradient.addColorStop(1, '#00264d');

    c.fillStyle = gradient;
    c.fill();

    c.strokeStyle = "#6699ff";
    c.stroke();

    c.closePath();

}

function sol1(c, parameterssol, parameterssol1, parameterssol2, parameterssol3, parameterssol4, parameterssol5, parameterssol6, parameterssol7){
                
    c.beginPath();
    c.arc(50, 50, 20, 0 , 2 * Math.PI);
    c.stroke();

    var gradient4 = c.createRadialGradient(50,50,20, 50, 50, 5);

    gradient4.addColorStop(0, '#b32d00');
    gradient4.addColorStop(.5, '#ff9900');
    gradient4.addColorStop(1, '#ffcc00');

    c.fillStyle = gradient4;
    c.fill();
    c.closePath();

    c.beginPath();  //x inicial = 25, y inical = 22
    c.ellipse(parameterssol.x , parameterssol.y, 10, 5, Math.PI / 4 , 0, 2* Math.PI);
    c.stroke();
    c.fillStyle = "#b32d00";
    c.fill();
    c.closePath();

    c.beginPath();  //x inicial = 50, y inicial = 14
    c.ellipse(parameterssol1.x,parameterssol1.y, 10, 5, Math.PI / 2 , 0, 2* Math.PI);
    c.stroke();
    c.fillStyle = "#b32d00";
    c.fill();
    c.closePath();

    c.beginPath();  // x inicial = 75, y = 22
    c.ellipse(parameterssol2.x, parameterssol2.y, 10, 5, Math.PI / 1.5 , 0, 2* Math.PI);
    c.stroke();
    c.fillStyle = "#b32d00";
    c.fill();
    c.closePath();

    c.beginPath();    // x inicial = 88, y = 50
    c.ellipse(parameterssol3.x, parameterssol3.y, 10, 5, 0 , 0, 2* Math.PI);
    c.stroke();
    c.fillStyle = "#b32d00";
    c.fill();
    c.closePath();

    c.beginPath();     // x inicial = 78, y = 75
    c.ellipse(parameterssol4.x, parameterssol4.y, 10, 5, Math.PI / 3.8 , 0, 2* Math.PI);
    c.stroke();
    c.fillStyle = "#b32d00";
    c.fill();
    c.closePath();

    c.beginPath();     // x inicial = 50, y = 88
    c.ellipse(parameterssol5.x,parameterssol5.y, 10, 5, Math.PI / 2 , 0, 2* Math.PI);
    c.stroke();
    c.fillStyle = "#b32d00";
    c.fill();
    c.closePath();

    c.beginPath();      // x inicial = 23, y = 75
    c.ellipse(parameterssol6.x, parameterssol6.y, 10, 5, Math.PI / 1.3 , 0, 2* Math.PI);
    c.stroke();
    c.fillStyle = "#b32d00";
    c.fill();
    c.closePath();

    c.beginPath();      // x inicial = 15, y = 50
    c.ellipse(parameterssol7.x, parameterssol7.y, 10, 5, 0 , 0, 2* Math.PI);
    c.stroke();
    c.fillStyle = "#b32d00";
    c.fill();
    c.closePath();
}

function peixes(c, parametrosp1, parametrosp2, parametrosp3){

    c.beginPath();

    c.moveTo(parametrosp1.x, parametrosp1.y);   //inicial x:700, y:505
    c.lineTo(parametrosp1.x, parametrosp1.y + 20);
    c.quadraticCurveTo(parametrosp1.x - 40, parametrosp1.y + 5, parametrosp1.x - 50, parametrosp1.y + 5);
    c.quadraticCurveTo(parametrosp1.x - 60, parametrosp1.y + 5, parametrosp1.x - 70, parametrosp1.y + 15);
    c.quadraticCurveTo(parametrosp1.x - 60, parametrosp1.y + 25, parametrosp1.x - 50, parametrosp1.y + 25);
    c.quadraticCurveTo(parametrosp1.x - 35, parametrosp1.y + 25, parametrosp1.x + 0, parametrosp1.y + 0);

    c.strokeStyle = "#77773c";
    c.stroke();
    
    c.fillStyle = "#b8b894";
    c.fill();

    c.closePath();

    c.beginPath();

    c.moveTo(parametrosp2.x, parametrosp2.y);   //inicial x:700, y:505
    c.lineTo(parametrosp2.x, parametrosp2.y + 20);
    c.quadraticCurveTo(parametrosp2.x - 40, parametrosp2.y + 5, parametrosp2.x - 50, parametrosp2.y + 5);
    c.quadraticCurveTo(parametrosp2.x - 60, parametrosp2.y + 5, parametrosp2.x - 70, parametrosp2.y + 15);
    c.quadraticCurveTo(parametrosp2.x - 60, parametrosp2.y + 25, parametrosp2.x - 50, parametrosp2.y + 25);
    c.quadraticCurveTo(parametrosp2.x - 35, parametrosp2.y + 25, parametrosp2.x + 0, parametrosp2.y + 0);

    c.strokeStyle = "#77773c";
    c.stroke();

    c.fillStyle = "#b8b894";
    c.fill();

    c.closePath();

    c.beginPath();

    c.moveTo(parametrosp3.x, parametrosp3.y);   //inicial x:700, y:505
    c.lineTo(parametrosp3.x, parametrosp3.y + 20);
    c.quadraticCurveTo(parametrosp3.x - 40, parametrosp3.y + 5, parametrosp3.x - 50, parametrosp3.y + 5);
    c.quadraticCurveTo(parametrosp3.x - 60, parametrosp3.y + 5, parametrosp3.x - 70, parametrosp3.y + 15);
    c.quadraticCurveTo(parametrosp3.x - 60, parametrosp3.y + 25, parametrosp3.x - 50, parametrosp3.y + 25);
    c.quadraticCurveTo(parametrosp3.x - 35, parametrosp3.y + 25, parametrosp3.x + 0, parametrosp3.y + 0);

    c.strokeStyle = "#77773c";
    c.stroke();

    c.fillStyle = "#b8b894";
    c.fill();

    c.closePath();

}

///////////////////// PARTE ANIMAÇÃO  ///////////////////////

function update(context, parameters, parameters1, parameterssol, parameterssol1, parameterssol2, parameterssol3, parameterssol4, parameterssol5, parameterssol6, parameterssol7, parametersnuvem1, parametersnuvem2, parameterspassaropequeno, parametrosprancha, parametrosperna1,parametrosperna2, parametrostronco, parametroslinha, parametroscalçoes, parametrosbracod, parametrosbracoe, parametroscabeca, parametroscabelo, parametrospescoco,parametrosolho,parametrosobrancelha, parametrosboca, parametrospescoco2, parametrosp1, parametrosp2, parametrosp3) {
    

    fundo_principal1(context, parameters , parameterspassaropequeno , parametersnuvem1, parametersnuvem2);
    fundo1(context, parameters1);
    sol1(context, parameterssol, parameterssol1, parameterssol2, parameterssol3, parameterssol4,parameterssol5, parameterssol6, parameterssol7);
    prancha(context, parametrosprancha);
    perna_direita(context, parametrosperna1);   //stroke
    perna_esquerda(context, parametrosperna2);
    tronco(context, parametrostronco, parametroslinha,parametroscalçoes);
    braço_direito(context, parametrosbracod);
    braço_esquerdo(context, parametrosbracoe);
    cabeça(context, parametroscabeca, parametroscabelo, parametrospescoco, parametrosolho, parametrosobrancelha, parametrosboca, parametrospescoco2);
    peixes(context, parametrosp1, parametrosp2, parametrosp3);

    requestAnimationFrame(function() {
        update(context, parameters, parameters1, parameterssol, parameterssol1, parameterssol2, parameterssol3, parameterssol4, parameterssol5, parameterssol6, parameterssol7, parametersnuvem1, parametersnuvem2, parameterspassaropequeno, parametrosprancha, parametrosperna1,parametrosperna2, parametrostronco, parametroslinha, parametroscalçoes, parametrosbracod,parametrosbracoe, parametroscabeca, parametroscabelo, parametrospescoco,parametrosolho, parametrosobrancelha, parametrosboca, parametrospescoco2, parametrosp1, parametrosp2, parametrosp3);
    });
    TWEEN.update();
}

function main() {
    let context = document
        .getElementById("Mycanvas")
        .getContext("2d");

    ////parametros dos fundos
    let parameters = {x: 50, y:15};
    let parameterspassaropequeno = {x:200, y:50};
    let parameters1 = {x: 1400, y :500};

    ///// parametros para a animação dos raios de sol
    let parameterssol = {x:25, y:22};   //25, 22 o inicial
    let parameterssol1 = {x:50, y:14};  //50, 14 o inicial
    let parameterssol2 = {x:75, y:22}  //75, 22 o inicial
    let parameterssol3 = {x:88, y:50}   //88, 50 o inicial
    let parameterssol4 = {x:78, y:75}   //78, 75 o inicial
    let parameterssol5 = {x:50, y:88};  //50, 88 o inicial
    let parameterssol6 = {x:23, y:75};  //23, 75 o inicial
    let parameterssol7 = {x:15, y:50};  //15, 50 o inicial

    ///// parametros para a animação das nuvens
    let parametersnuvem1 = {x:650, y:50};  //posição inicial da nuvem1
    let parametersnuvem2 = {x:320, y:50};  // posição inicial da nuvem2

    ///// parametro para a prancha de surf
    let parametrosprancha = {x:1100, y:385};

    //// parametros para a animação do corpo do surfista
    let parametrosperna1 = {x:1130, y:310};  //perna direita
    let parametrosperna2 = {x:1097, y:344};  // perna esquerda
    
    let parametrostronco = {x:1080, y:239};  //thirt
    let parametroslinha = {x:1120, y:264};      //inicio x:430, y: 305  //linha adicional
    let parametroscalçoes = {x:1070, y:309};    //inicial x:380, y:350  //calções
    let parametrosbracod = {x:1137, y:251};   //inicial x:447, y:292  //braço direito
    let parametrosbracoe = {x:1054, y:251};    //inicial x:364, y:292   //braço esquerdpo

    let parametroscabeca = {x:1110, y:230};   //inicial x:420  //cabeça
    let parametroscabelo = {x:1080, y:210};   //inicial x:390, y:250
    let parametrospescoco = {x:1105, y:235};   //inicial x:415, 275
    let parametrosolho = {x:1085, y:219};      //inicial x:395, 259
    let parametrosobrancelha = {x:1082, y:213};   //inicial x:392, y:253
    let parametrosboca = {x:1080, y:237};   //inicial x:390, y:277
    let parametrospescoco2 = {x:1082, y:240};  // inicial x:392, y:280

    //// parametros peixes
    let parametrosp1 = {x:1070, y:505}       //peixe baixo
    let parametrosp2 = {x:1100, y:500};     // peixo meio
    let parametrosp3 = {x:1240, y:450};      // peixe cima

    ////// TWEENS ANIMAÇÃO
    let tween = new TWEEN.Tween(parameters)  //pássaro maior
        .to({ x: 1500, y:25 }, 10000)
        .easing(TWEEN.Easing.Cubic.Out)
        .yoyo(true)
        .repeat(Infinity);
    tween.start();

    let tween12 = new TWEEN.Tween(parameterspassaropequeno)  //pássaro menor
        .to({ x: 700 , y:150 }, 15000)
        .easing(TWEEN.Easing.Quintic.InOut)
        .yoyo(true)
        .repeat(Infinity);
    tween12.start();


    let tween1 = new TWEEN.Tween(parameters1)  //mar
        .to({ x: -100, y:550 }, 17000)
        .easing(TWEEN.Easing.Cubic.InOut)
        .yoyo(false)
        .repeat(Infinity)
    tween1.start();

    //////TWEEENS PARA ANIMAÇÃO DAS NUVENS

    let tween10 = new TWEEN.Tween(parametersnuvem1)  //nuvem 1
        .to({ x: 850, y: 50 }, 7000)
        .easing(TWEEN.Easing.Sinusoidal.InOut)
        .yoyo(true)
        .repeat(Infinity)
    tween10.start();

    let tween11 = new TWEEN.Tween(parametersnuvem2) //nuvem 2
        .to({ x: 500, y: 50 }, 6000)
        .easing(TWEEN.Easing.Sinusoidal.InOut)
        .yoyo(true)
        .repeat(Infinity)
    tween11.start()

    /////// TWEENS PARA ANIMAÇÃO DOS RAIOS DE SOL

    let tween2 = new TWEEN.Tween(parameterssol)
        .to({ x: 30, y:25 }, 1500)
        .easing(TWEEN.Easing.Cubic.InOut)
        .yoyo(true)
        .repeat(Infinity)
    tween2.start();

    let tween3 = new TWEEN.Tween(parameterssol1)
        .to({ x: 50, y:18 }, 1500)
        .easing(TWEEN.Easing.Cubic.InOut)
        .yoyo(true)
        .repeat(Infinity)
    tween3.start();

    let tween4 = new TWEEN.Tween(parameterssol2)
        .to({ x: 70, y:25 }, 1500)
        .easing(TWEEN.Easing.Cubic.InOut)
        .yoyo(true)
        .repeat(Infinity)
    tween4.start();
    
    let tween5 = new TWEEN.Tween(parameterssol3)
        .to({ x: 83, y:50 }, 1500)
        .easing(TWEEN.Easing.Cubic.InOut)
        .yoyo(true)
        .repeat(Infinity)
    tween5.start();

    let tween6 = new TWEEN.Tween(parameterssol4)
        .to({ x: 75, y:70 }, 1500)
        .easing(TWEEN.Easing.Cubic.InOut)
        .yoyo(true)
        .repeat(Infinity)
    tween6.start();

    let tween7 = new TWEEN.Tween(parameterssol5)
        .to({ x: 50, y:82 }, 1500)
        .easing(TWEEN.Easing.Cubic.InOut)
        .yoyo(true)
        .repeat(Infinity)
    tween7.start();

    let tween8 = new TWEEN.Tween(parameterssol6)
        .to({ x: 25, y:70 }, 1500)
        .easing(TWEEN.Easing.Cubic.InOut)
        .yoyo(true)
        .repeat(Infinity)
    tween8.start();

    let tween9 = new TWEEN.Tween(parameterssol7)
        .to({ x: 17, y:50 }, 1500)
        .easing(TWEEN.Easing.Cubic.InOut)
        .yoyo(true)
        .repeat(Infinity)
    tween9.start();

    /////ANIMAÇÃO DA PRANCHA DE SURF
    let tween13 = new TWEEN.Tween(parametrosprancha)
        .to({ x: -400, y:430 }, 17000)
        .easing(TWEEN.Easing.Cubic.InOut)
        .yoyo(false)
        .repeat(Infinity)
    tween13.start();

    /////ANIMAÇÃO DO CORPO DO SURFISTA
    let tween14 = new TWEEN.Tween(parametrosperna1)  //Perna direita
        .to({ x: -370, y: 346 }, 17000)
        .easing(TWEEN.Easing.Cubic.InOut)
        .yoyo(false)
        .repeat(Infinity);
    tween14.start();

    let tween15 = new TWEEN.Tween(parametrosperna2)  //Perna esquerda
        .to({ x: -403, y: 381 }, 17000)
        .easing(TWEEN.Easing.Cubic.InOut)
        .yoyo(false)
        .repeat(Infinity);
    tween15.start();

    let tween16 = new TWEEN.Tween(parametrostronco)  //tshirt
        .to({ x: -420, y: 275 }, 17000)
        .easing(TWEEN.Easing.Cubic.InOut)
        .yoyo(false)
        .repeat(Infinity);
    tween16.start();

    let tween17 = new TWEEN.Tween(parametroslinha)  //linha
        .to({ x: -380, y: 300 }, 17000)
        .easing(TWEEN.Easing.Cubic.InOut)
        .yoyo(false)
        .repeat(Infinity);
    tween17.start();

    let tween18 = new TWEEN.Tween(parametroscalçoes)  //calçoes
        .to({ x: -430, y: 345 }, 17000)
        .easing(TWEEN.Easing.Cubic.InOut)
        .yoyo(false)
        .repeat(Infinity);
    tween18.start();

    let tween19 = new TWEEN.Tween(parametrosbracod)  //braço direito
        .to({ x: -363, y: 287 }, 17000)
        .easing(TWEEN.Easing.Cubic.InOut)
        .yoyo(false)
        .repeat(Infinity);
    tween19.start();

    let tween20 = new TWEEN.Tween(parametrosbracoe)  //braço esquerdo
        .to({ x: -446, y: 287 }, 17000)
        .easing(TWEEN.Easing.Cubic.InOut)
        .yoyo(false)
        .repeat(Infinity);
    tween20.start();

    let tween21 = new TWEEN.Tween(parametroscabeca)  //cabeça
        .to({ x: -390, y: 266 }, 17000)
        .easing(TWEEN.Easing.Cubic.InOut)
        .yoyo(false)
        .repeat(Infinity);
    tween21.start();

    let tween22 = new TWEEN.Tween(parametroscabelo)  //cabelo
        .to({ x: -420, y: 246 }, 17000)
        .easing(TWEEN.Easing.Cubic.InOut)
        .yoyo(false)
        .repeat(Infinity);
    tween22.start();

    let tween23 = new TWEEN.Tween(parametrospescoco)  //pescoco
        .to({ x: -395, y: 271 }, 17000)
        .easing(TWEEN.Easing.Cubic.InOut)
        .yoyo(false)
        .repeat(Infinity);
    tween23.start();

    let tween24 = new TWEEN.Tween(parametrosolho)  //olho
        .to({ x: -415, y: 255 }, 17000)
        .easing(TWEEN.Easing.Cubic.InOut)
        .yoyo(false)
        .repeat(Infinity);
    tween24.start();

    let tween25 = new TWEEN.Tween(parametrosobrancelha)  //sobrancelha
        .to({ x: -418, y: 249 }, 17000)
        .easing(TWEEN.Easing.Cubic.InOut)
        .yoyo(false)
        .repeat(Infinity);
    tween25.start();

    let tween26 = new TWEEN.Tween(parametrosboca)  //boca
        .to({ x: -420, y: 273 }, 17000)
        .easing(TWEEN.Easing.Cubic.InOut)
        .yoyo(false)
        .repeat(Infinity);
    tween26.start();

    let tween27 = new TWEEN.Tween(parametrospescoco2)  //pescoco2
        .to({ x: -418, y: 276 }, 17000)
        .easing(TWEEN.Easing.Cubic.InOut)
        .yoyo(false)
        .repeat(Infinity);
    tween27.start();

    ////ANIMAÇÃO DOS PEIXES

    let tween28 = new TWEEN.Tween(parametrosp1)  //peixe de baixo
        .to({ x: -50, y: 540 }, 21000)
        .easing(TWEEN.Easing.Quartic.InOut)
        .yoyo(false)
        .repeat(Infinity);
    tween28.start();

    let tween30 = new TWEEN.Tween(parametrosp3)  //peixe de cima
        .to({ x: -50, y: 490 }, 23000)
        .easing(TWEEN.Easing.Quartic.InOut)
        .yoyo(false)
        .repeat(Infinity);
    tween30.start();

    let tween29 = new TWEEN.Tween(parametrosp2)  //peixe meio seguidor
        .to({ x: -250, y: 460 }, 17000)
        .easing(TWEEN.Easing.Cubic.InOut)
        .yoyo(false)
        .repeat(Infinity);
    tween29.start();

    //let parametrosp2 = {x:1000, y:485};     // peixo meio
    

    requestAnimationFrame(function() {
        update(context, parameters, parameters1, parameterssol, parameterssol1, parameterssol2, parameterssol3, parameterssol4, parameterssol5, parameterssol6, parameterssol7, parametersnuvem1, parametersnuvem2, parameterspassaropequeno, parametrosprancha, parametrosperna1, parametrosperna2, parametrostronco, parametroslinha, parametroscalçoes, parametrosbracod, parametrosbracoe, parametroscabeca, parametroscabelo, parametrospescoco, parametrosolho,parametrosobrancelha, parametrosboca, parametrospescoco2, parametrosp1, parametrosp2, parametrosp3);
    });

}