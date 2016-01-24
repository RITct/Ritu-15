
			//default options
        snowFall.snow(document.body, {deviceorientation : true, round : true, flakeCount:200, minSize: 2, maxSize:5, minSpeed:2, maxSpeed:4});
		
/*
        document.getElementById("clear").addEventListener("click", function(){
            snowFall.snow(document.body, "clear");
        });
        
        document.getElementById("round").addEventListener("click", function(){
            document.body.className  = "darkBg";
            snowFall.snow(document.body, "clear");
            snowFall.snow(document.body, {round : true, minSize: 5, maxSize:8});
        });
        
        document.getElementById("shadows").addEventListener("click", function(){
            document.body.className  = "lightBg";
            snowFall.snow(document.body, "clear");
            snowFall.snow(document.body, {shadow : true, flakeCount:200});
        });
        
        document.getElementById("roundshadows").addEventListener("click", function(){
            document.body.className  = "lightBg";
            snowFall.snow(document.body, "clear");
            snowFall.snow(document.body, {round : true, shadow : true, minSize: 5, maxSize:8});
        });
*/      
		document.getElementById("spring").addEventListener("mouseover", function(){		//spring
			document.body.className  = "spr";
            snowFall.snow(document.body, "clear");
            snowFall.snow(document.body, {flakeCount:15, image : "images/spring3.png", minSize: 8, maxSize:18});
            snowFall.snow(document.body, {flakeCount:15, image : "images/spring2.png", minSize: 8, maxSize:18});
            snowFall.snow(document.body, {flakeCount:15, image : "images/spring.png", minSize: 8, maxSize:18});
            snowFall.snow(document.body, {flakeCount:5, minSpeed:0, maxSpeed:0, image : "images/bfly1.png", minSize: 23, maxSize:34});
            snowFall.snow(document.body, {flakeCount:5, minSpeed:0, maxSpeed:0, image : "images/bfly2.png", minSize: 22, maxSize:33});
            snowFall.snow(document.body, {flakeCount:5, minSpeed:0, maxSpeed:0, image : "images/bfly4.png", minSize: 21, maxSize:33});
		});	
        document.getElementById("autumn").addEventListener("mouseover", function(){		//autumn
			document.body.className  = "aut";
            snowFall.snow(document.body, "clear");
            snowFall.snow(document.body, {flakeCount:30, image : "images/flake.png", minSize: 10, maxSize:32});
        });
		document.getElementById("summer").addEventListener("mouseover", function(){		//summer
			document.body.className  = "sum";
            snowFall.snow(document.body, "clear");
            snowFall.snow(document.body, {flakeCount:400, image : "images/raindrops.png", minSize: 5, maxSize:9, minSpeed:10, maxSpeed:15});
        });
		document.getElementById("winter").addEventListener("mouseover", function(){		//winter
            document.body.className  = "win";
            snowFall.snow(document.body, "clear");
            snowFall.snow(document.body, {deviceorientation : true, round : true, flakeCount:200, minSize: 2, maxSize:5, minSpeed:2, maxSpeed:4});
		
        });
		