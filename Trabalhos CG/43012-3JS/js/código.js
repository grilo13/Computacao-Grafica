            var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1,3000 );
            var scene = new THREE.Scene();

			var renderer = new THREE.WebGLRenderer({antialias:true});
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.body.appendChild( renderer.domElement );
            
            camera.position.set( 0, 0, 500 );
            camera.lookAt( 0, 0, 0 );

            //// LIGHT

            // Create lights
            ambientLight = new THREE.AmbientLight( 0xFFFFFF, 1 );
            scene.add( ambientLight );

            var light = new THREE.SpotLight( 0xffffff );
            light.castShadow = true;            // default false
            scene.add( light );
            light.position.y = 0;
            light.position.x = 0;
            light.position.z = 1000;
            light.intensity = 0.2;

            //Set up shadow properties for the light
            light.shadow.mapSize.width = 2050;  // default
            light.shadow.mapSize.height = 2050; // default
            light.shadow.camera.near = 0.5;       // default
            light.shadow.camera.far = 1;      // default


            var urls1 = [
                "https://i0.wp.com/www.edsoncamara.com/wp-content/uploads/2018/03/UNIVERSO.png?resize=640%2C421",
                "https://i0.wp.com/www.edsoncamara.com/wp-content/uploads/2018/03/UNIVERSO.png?resize=640%2C421",
                "https://i0.wp.com/www.edsoncamara.com/wp-content/uploads/2018/03/UNIVERSO.png?resize=640%2C421",
                "https://i0.wp.com/www.edsoncamara.com/wp-content/uploads/2018/03/UNIVERSO.png?resize=640%2C421",
                "https://i0.wp.com/www.edsoncamara.com/wp-content/uploads/2018/03/UNIVERSO.png?resize=640%2C421",
                "https://i0.wp.com/www.edsoncamara.com/wp-content/uploads/2018/03/UNIVERSO.png?resize=640%2C421"
            ];

            var materialArray1 = [];
            for (var i = 0; i < 7; i++)
            materialArray1.push(
                new THREE.MeshPhongMaterial({
                map: new THREE.TextureLoader().load(urls1[i]),
                side: THREE.BackSide
                })
            );


            var skyGeometry1 = new THREE.BoxGeometry(2000, 2000, 2000);
            var skyMaterial1 = new THREE.MeshFaceMaterial(materialArray1);
            var skybox1 = new THREE.Mesh(skyGeometry1, skyMaterial1);
            scene.add(skybox1);   


            var urls = [
                "https://img.freepik.com/fotos-gratis/esbranquicada-textura-da-parede-de-pedra-clara_1194-7237.jpg?size=626&ext=jpg&uid=A&ga=GA1.2.849989148.1591625974",
                "https://img.freepik.com/fotos-gratis/esbranquicada-textura-da-parede-de-pedra-clara_1194-7237.jpg?size=626&ext=jpg&uid=A&ga=GA1.2.849989148.1591625974g",
                "https://img.freepik.com/fotos-gratis/esbranquicada-textura-da-parede-de-pedra-clara_1194-7237.jpg?size=626&ext=jpg&uid=A&ga=GA1.2.849989148.1591625974",
                "https://img.freepik.com/fotos-gratis/esbranquicada-textura-da-parede-de-pedra-clara_1194-7237.jpg?size=626&ext=jpg&uid=A&ga=GA1.2.849989148.1591625974",
                "https://img.freepik.com/fotos-gratis/esbranquicada-textura-da-parede-de-pedra-clara_1194-7237.jpg?size=626&ext=jpg&uid=A&ga=GA1.2.849989148.1591625974",
                "https://img.freepik.com/fotos-gratis/esbranquicada-textura-da-parede-de-pedra-clara_1194-7237.jpg?size=626&ext=jpg&uid=A&ga=GA1.2.849989148.1591625974",
                "https://img.freepik.com/fotos-gratis/esbranquicada-textura-da-parede-de-pedra-clara_1194-7237.jpg?size=626&ext=jpg&uid=A&ga=GA1.2.849989148.1591625974"
            ];

            var materialArray = [];
            for (var i = 0; i < 7; i++)
            materialArray.push(
                new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load(urls[i]),
                side: THREE.BackSide
                })
            );

            var skyGeometry = new THREE.SphereGeometry(120, 50, 50);
            var skyMaterial = new THREE.MeshFaceMaterial(materialArray);
            var skybox = new THREE.Mesh(skyGeometry, skyMaterial);
            scene.add(skybox);


            var urls2 = [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0NRh85X9cxTpzSkuvkiSgR9p0tyi-S8EBPQ&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0NRh85X9cxTpzSkuvkiSgR9p0tyi-S8EBPQ&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0NRh85X9cxTpzSkuvkiSgR9p0tyi-S8EBPQ&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0NRh85X9cxTpzSkuvkiSgR9p0tyi-S8EBPQ&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0NRh85X9cxTpzSkuvkiSgR9p0tyi-S8EBPQ&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0NRh85X9cxTpzSkuvkiSgR9p0tyi-S8EBPQ&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0NRh85X9cxTpzSkuvkiSgR9p0tyi-S8EBPQ&usqp=CAU"
            ];

            var materialArray2 = [];
            for (var i = 0; i < 7; i++)
            materialArray2.push(
                new THREE.MeshPhongMaterial({
                map: new THREE.TextureLoader().load(urls2[i]),
                side: THREE.BackSide
                })
            );

            var skyGeometry2 = new THREE.SphereGeometry(160, 50, 50);
            var skyMaterial2 = new THREE.MeshFaceMaterial(materialArray2);
            var skybox2 = new THREE.Mesh(skyGeometry2, skyMaterial2);
            scene.add(skybox2);
            skybox2.position.x = 330;
            skybox2.position.y = 230;
            
            var urls3 = [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRq04LYPLkMdRMDqtdbTlVzErLb7vLlN-hPKQ&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRq04LYPLkMdRMDqtdbTlVzErLb7vLlN-hPKQ&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRq04LYPLkMdRMDqtdbTlVzErLb7vLlN-hPKQ&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRq04LYPLkMdRMDqtdbTlVzErLb7vLlN-hPKQ&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRq04LYPLkMdRMDqtdbTlVzErLb7vLlN-hPKQ&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRq04LYPLkMdRMDqtdbTlVzErLb7vLlN-hPKQ&usqp=CAU",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRq04LYPLkMdRMDqtdbTlVzErLb7vLlN-hPKQ&usqp=CAU"
            ];

            var materialArray3 = [];
            for (var i = 0; i < 7; i++)
            materialArray3.push(
                new THREE.MeshBasicMaterial({
                map: new THREE.TextureLoader().load(urls3[i]),
                side: THREE.BackSide
                })
            );

            var skyGeometry3 = new THREE.SphereGeometry(80, 50, 50);
            var skyMaterial3 = new THREE.MeshFaceMaterial(materialArray3);
            var skybox3 = new THREE.Mesh(skyGeometry3, skyMaterial3);
            scene.add(skybox3);
            skybox3.position.x = -300;
            skybox3.position.y = -230;
 
            //////////////////////////////

            window.addEventListener('resize', function()    //função que coloca sempre no meio a nossa cena( a palavra neste caso)
            {
                var width = window.innerWidth;
                var heigth = window.innerHeight;
                renderer.setSize(width, heigth);
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
            })

            controls = new THREE.OrbitControls(camera, renderer.domElement );
            controls.minDistance = 100;    //tamanho min para aproximação - se quiser entrar dentro da lua e ver a palavra lá dentro
            controls.maxDistance = 1500;   //tamanho máximo para afastação

            var material = new THREE.LineBasicMaterial( { color: 0x0000 } );

            ////////////                LETRA A                    //////////////

            var LetraA = new THREE.Shape();

            var x  = -15;
            var y  = -15;

            LetraA.moveTo(x-15, y+9.8);
            LetraA.lineTo(x-13.5, y+10.3);
            LetraA.quadraticCurveTo(x - 15, y + 10, x - 16, y + 20);
            LetraA.lineTo(x - 11.5, y + 20);
            LetraA.quadraticCurveTo(x- 11.2, y + 18, x -11.5, y + 15);     
            LetraA.lineTo(x- 10.4, y + 15);
            LetraA.quadraticCurveTo(x-11, y + 20, x - 10.5, y + 22.5);
            LetraA.lineTo(x - 11.7, y + 22.5);
            LetraA.lineTo(x- 11.7, y + 20.7);
            LetraA.lineTo(x- 17, y + 20.7);       
            LetraA.quadraticCurveTo(x- 15, y + 25, x - 13, y + 26);        
            LetraA.lineTo(x- 10.3, y + 25);  
            LetraA.lineTo(x - 9.5, y + 26);    
            LetraA.lineTo(x- 12, y + 27);   
            LetraA.quadraticCurveTo(x-17, y + 25, x - 18, y + 19);    
            LetraA.quadraticCurveTo(x-16, y + 14, x-16, y+9.2) ;
            LetraA.lineTo(x-15, y+9.8);   

            var extrudeSettings = {amount: 0, bevelEnabled: true,  bevelSegments: 3, steps: 1, bevelSize:0.2, bevelThickness: 2};
            
            var geometry = new THREE.ExtrudeGeometry(LetraA, extrudeSettings);

           /////////////////////////////////////////////////////////////////////////////////////////////////////////////

           ////////////                LETRA P                   //////////////

            var LetraP = new THREE.Shape();

            LetraP.moveTo(x - 7 , y + 9.2);
            LetraP.lineTo(x - 5.5, y + 9.2);
            LetraP.lineTo(x - 5.5, y + 13);
            LetraP.quadraticCurveTo(x-4, y + 12, x-3.5, y + 12.5);
            LetraP.quadraticCurveTo(x + 1, y + 14, x -1 , y + 20);
            LetraP.quadraticCurveTo(x-1, y + 21, x - 4, y + 22.5); 
            LetraP.lineTo(x-5.5, y + 21);
            LetraP.lineTo(x-5.5, y + 23.5);
            LetraP.lineTo(x-6.5, y + 23);
            LetraP.lineTo(x-6.5, y + 10);
            LetraP.lineTo(x - 7 , y + 9.2);

            LetraP.moveTo(x - 5.5 , y + 9.2);
            LetraP.lineTo(x - 5.5, y + 20);
            LetraP.lineTo(x - 3.5, y + 21.5);
            LetraP.quadraticCurveTo(x + 1.5, y + 18, x - 3, y + 14);
            LetraP.quadraticCurveTo(x- 4, y + 13, x- 5.5, y + 14);

            var extrudeSettings1 = {amount: 0, bevelEnabled: true,  bevelSegments: 3, steps: 1, bevelSize:0.2, bevelThickness: 2};
            
            var geometry1 = new THREE.ExtrudeGeometry(LetraP, extrudeSettings1);

             ////////////                LETRA R                  //////////////
            var LetraR = new THREE.Shape();

            LetraR.moveTo(x + 5, y + 12);
            LetraR.lineTo(x + 6, y + 12.5);
            LetraR.quadraticCurveTo(x+4.5, y+13, x+5, y +20);
            LetraR.quadraticCurveTo(x+5, y + 20.5, x+6, y + 21);
            LetraR.lineTo(x+8, y+ 20);
            LetraR.lineTo(x+9, y + 21);
            LetraR.lineTo(x+7, y + 22);
            LetraR.quadraticCurveTo(x+ 6.6, y+ 22.5, x+5, y + 21);
            LetraR.quadraticCurveTo(x+4.6, y+ 22, x+4, y + 22);
            LetraR.lineTo(x+ 3.2, y + 21.5);
            LetraR.quadraticCurveTo(x+ 4, y + 19, x+4, y + 18);
            LetraR.lineTo(x+4, y + 14);
            LetraR.quadraticCurveTo(x+3.7, y+13, x+5, y+12);

            var extrudeSettings2 = {amount: 0, bevelEnabled: true,  bevelSegments: 3, steps: 1, bevelSize:0.2, bevelThickness: 2};
            
            var geometry2 = new THREE.ExtrudeGeometry(LetraR, extrudeSettings2);

            /////////////////////////////////////////////////////////////////////////////////////////////////////////////

            ////////////                LETRA E                     //////////////
            
            var LetraE = new THREE.Shape();

            LetraE.moveTo(x + 15, y + 12);
            LetraE.quadraticCurveTo(x+ 15.5, y + 12, x+17, y + 13.5);
            LetraE.quadraticCurveTo(x+14.5, y + 13.5, x+ 14, y + 15.5);
            LetraE.lineTo(x+17, y+19);
            LetraE.lineTo(x+15, y+20);
            LetraE.quadraticCurveTo(x+9, y+17.5, x+15, y+12);

            LetraE.moveTo(x+13.5, y+16);
            LetraE.quadraticCurveTo(x+11.5, y + 18.5, x+15, y+19.5);
            LetraE.lineTo(x+16, y+18.5);
            LetraE.lineTo(x+13.5, y+16);    

            var extrudeSettings3 = {amount: 0, bevelEnabled: true,  bevelSegments: 3, steps: 1, bevelSize:0.2, bevelThickness: 2};
            
            var geometry3 = new THREE.ExtrudeGeometry(LetraE, extrudeSettings3);

            /////////////////////////////////////////////////////////////////////////////////////////////////////////////

            ////////////                LETRA S                     //////////////
            
            var LetraS = new THREE.Shape();

            LetraS.moveTo(x + 20, y + 13);
            LetraS.lineTo(x+22, y + 12);
            LetraS.quadraticCurveTo(x+26, y+14, x+ 23, y+ 15.7);
            LetraS.quadraticCurveTo(x+19, y +18, x+ 21.5, y + 19);
            LetraS.lineTo(x+23.5, y+18);
            LetraS.lineTo(x+24.5, y + 19);
            LetraS.lineTo(x+21.7, y+ 20.7);
            LetraS.quadraticCurveTo(x+17, y + 18, x+ 21, y + 15.5);
            LetraS.quadraticCurveTo(x+24.5, y +13.5, x+22, y + 13);
            LetraS.quadraticCurveTo(x+21.5, y+12.8, x+ 20.5, y +14.3);
            LetraS.lineTo(x+20, y+13);

            var extrudeSettings4 = {amount: 0, bevelEnabled: true,  bevelSegments: 3, steps: 1, bevelSize:0.2, bevelThickness: 2};
            
            var geometry4 = new THREE.ExtrudeGeometry(LetraS, extrudeSettings4);

            /////////////////////////////////////////////////////////////////////////////////////////////////////////////

            ////////////                LETRA O                   //////////////
            var LetraO = new THREE.Shape();

            LetraO.moveTo(x + 29.3, y + 13);
            LetraO.quadraticCurveTo(x+35, y + 16, x+ 29, y +20.5);
            LetraO.quadraticCurveTo(x+23.5, y+19, x+ 29.3, y +13);

            LetraO.moveTo(x+ 29.5, y + 14);
            LetraO.quadraticCurveTo(x+ 25, y +19, x+ 29, y + 19);
            LetraO.quadraticCurveTo(x+33, y+16, x+ 29.5, y+14);

            var points6 = LetraO.getPoints();

            var geometry5 = new THREE.BufferGeometry().setFromPoints(points6);

            var extrudeSettings5 = {amount: 0, bevelEnabled: true,  bevelSegments: 3, steps: 1, bevelSize:0.2, bevelThickness: 2};
            
            var geometry5 = new THREE.ExtrudeGeometry(LetraO, extrudeSettings5);

            /////////////////////////////////////////////////////////////////////////////////////////////////////////////

            ////////////                LETRA U                   /////////////            
            var LetraU = new THREE.Shape();


            LetraU.moveTo(x + 37, y + 13);
            LetraU.lineTo(x+39, y+14);
            LetraU.quadraticCurveTo(x+40, y + 12.7, x+40.5, y +12.8);
            LetraU.lineTo(x+41.5, y +13.5); 
            LetraU.quadraticCurveTo(x+40.5, y+13, x+40, y + 19);
            LetraU.lineTo(x+40, y+ 20.5);
            LetraU.lineTo(x+38.6, y +20);
            LetraU.lineTo(x+38.9, y+15.5);
            LetraU.quadraticCurveTo(x+37, y+14, x+36.5, y+15,5);
            LetraU.lineTo(x+36, y+19);
            LetraU.quadraticCurveTo(x+36, y+20, x+35, y+20.5);
            LetraU.lineTo(x+34, y+19.5);
            LetraU.quadraticCurveTo(x+35, y+ 18, x+35, y+15);
            LetraU.quadraticCurveTo(x+34, y+13, x + 37, y + 13);

            var extrudeSettings6 = {amount: 0, bevelEnabled: true,  bevelSegments: 3, steps: 1, bevelSize:0.2, bevelThickness: 2};
            
            var geometry6 = new THREE.ExtrudeGeometry(LetraU, extrudeSettings6);

            /////////////////////////////////////////////////////////////////////////////////////////////////////////////
            

    var mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    var mesh1 = new THREE.Mesh(geometry1, material);
    scene.add(mesh1);

    var mesh2 = new THREE.Mesh(geometry2, material);
    scene.add(mesh2);

    var mesh3 = new THREE.Mesh(geometry3, material);
    scene.add(mesh3);

    var mesh4 = new THREE.Mesh(geometry4, material);
    scene.add(mesh4);

    var mesh5 = new THREE.Mesh(geometry5, material);
    scene.add(mesh5);

    var mesh6 = new THREE.Mesh(geometry6, material);
    scene.add(mesh6);

    //////////////////////////////////////
    
    mesh.position.x = -120;

    mesh1.position.x = -140;
    mesh1.position.y = 140;
    
    mesh2.position.x = 0;
    mesh2.position.y = -170;

    mesh3.position.x = 0;
    mesh3.position.y = 185;

    mesh4.position.x = 140;
    mesh4.position.y = -140;

    mesh5.position.x = 140;
    mesh5.position.y = 140;

    mesh6.position.x = 120;

    var start = 0;

    var t = 0;

    // Função para a animação

    var animate = function () {

    renderer.render( scene, camera );  
    renderer.autoClear = false;

    t += 0.005;  

    skybox2.rotation.x += 0.005;
    skybox2.rotation.y += 0.005;

    skybox3.rotation.x += 0.007;
    skybox3.rotation.y += 0.007;

    skybox2.position.x = 500*Math.cos(t) + 0;
    skybox2.position.y = 500*Math.sin(t) + 0; // These to strings make it work

    skybox3.position.x = -400*Math.cos(t) + 0;
    skybox3.position.y = -400*Math.sin(t) + 0; // These to strings make it work
    
    skybox.rotation.y += 0.004;

        if(start == 0){

        var currentDistance = 0;
        var distance = 12.42;

        // Auxiliares para quando todas as letras chegarem ao destinho
        var auxilixar = 0;
        var auxiliar = 0;
        var auxiliar1 = 0;
        var auxiliar2 = 0;
        var auxiliar3 = 0;
        var auxiliar4 = 0;
        var auxiliar5 = 0;
        var auxiliar6 = 0;

        // Auxiliares para só aparecer a próxima quando a anterior já estiver no sitio
        var aux = 0;
        var aux1 = 0;
        var aux2 = 0;
        var aux3 = 0;
        var aux4 = 0;
        var aux5 = 0;
        var aux6 = 0;

    if(mesh.position.x <= 0){

        mesh.position.x += 0.7;

    } else {

        aux1 = 1;
        auxiliar = 1;
    }

    if(mesh1.position.x <= 0 && mesh.position.y >= 0 && aux1 == 1){

        mesh1.position.x+= 0.7;
        mesh1.position.y-= 0.7;
    } else {

        aux2 = 1;
        auxiliar1 = 1;
    }

    if(mesh2.position.y <= -1 && aux1 == 1 && aux2 == 1){

        mesh2.position.y += 0.7;
    } else {   
        aux3 = 1;
        auxiliar2 = 1;
    }

    if(mesh3.position.y >= 0.6 && aux1 == 1 && aux2 == 1 && aux3 == 1){

        mesh3.position.y -= 0.7;
    } else {
        aux4 = 1;
        auxiliar3 = 1;
    }

    if(mesh4.position.x >= 0 && mesh4.position.y <= 0 && aux1 == 1 && aux2 == 1 && aux3 == 1 && aux4 == 1){

        mesh4.position.x-= 0.7;
        mesh4.position.y+= 0.7;
    } else {
        aux5 = 1;
        auxiliar4 = 1;
    }

    if(mesh5.position.x >= 0 && mesh5.position.y >= 0 && aux1 == 1 && aux2 == 1 && aux3 == 1 && aux4 == 1 && aux5 == 1){

        mesh5.position.x-= 0.7;
        mesh5.position.y-= 0.7;
    } else {
        aux6 = 1;
        auxiliar5 = 1;
    }

    if(mesh6.position.x >= 0 && aux1 == 1 && aux2 == 1 && aux3 == 1 && aux4 == 1 && aux5 == 1 && aux6 ==1 ){

        mesh6.position.x-=0.7;
    } else {
        auxiliar6 = 1;
    }

    if(auxiliar == 1 && auxiliar1 == 1 && auxiliar2 == 1 && auxiliar3 == 1 && auxiliar4 == 1 && auxiliar5 == 1 && auxiliar6 == 1){

        if ( mesh.rotation.x <= distance) {
            mesh.rotation.x += 0.01;
            mesh.rotation.y += 0.01;

            mesh1.rotation.x += 0.01;
            mesh1.rotation.y += 0.01;

            mesh2.rotation.x += 0.01;
            mesh2.rotation.y += 0.01;

            mesh3.rotation.x += 0.01;
            mesh3.rotation.y += 0.01;

            mesh4.rotation.x += 0.01;
            mesh4.rotation.y += 0.01;

            mesh5.rotation.x += 0.01;
            mesh5.rotation.y += 0.01;

            mesh6.rotation.x += 0.01;
            mesh6.rotation.y += 0.01;

        } else {
            start =1;
        }
    }   

        } else if(start == 1){    //ciclo para retirar as letras da lua e apenas continuar a mostrar os planetas a mexere

            var auxi = 0;
            var auxi1 = 0;
            var auxi2 = 0;
            var auxi3 = 0;
            var auxi4 = 0;
            var auxi5 = 0;
            var auxi6 = 0;

            var ajuda = 0;
            var ajuda1 = 0;
            var ajuda2 = 0;
            var ajuda3 = 0;
            var ajuda4 = 0;
            var ajuda5 = 0;
            var ajuda6 = 0;

            if(mesh.position.z <= 2050){
                mesh.position.z+=1;
            }

            if(mesh1.position.z <= 2050){
                mesh1.position.z+=1;
            }

            if(mesh2.position.z <= 2050){
                mesh2.position.z+=1;
            }

            if(mesh3.position.z <= 2050){
                mesh3.position.z+=1;
            }

            if(mesh4.position.z <= 2050){
                mesh4.position.z+=1;
            }

            if(mesh5.position.z <= 2050){
                mesh5.position.z+=1;
            }

            if(mesh6.position.z <= 2050){
                mesh6.position.z+=1;
            }    

        }

        

    requestAnimationFrame( animate );
};

    animate();