class App
{
    runApplication()
    {      
        let random = Math.random();

        console.log("hello world");
        //code gaat hier
        let canvas= document.getElementById("canvasId")
        let g= canvas.getContext("2d");
        g.fillStyle="red";
        g.beginPath()
        g.moveTo(300,100);
        g.lineTo(700,200);
        g.lineTo(600,400);
        g.lineTo(200,300);
        g.lineTo(300,100);
        g.closePath();
        g.stroke();
        g.fill();
        
        g.fillStyle="grey";
        g.beginPath()
        g.moveTo(700,200);
        g.lineTo(800,300);
        g.lineTo(600,400);
        g.lineTo(700,200);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle="grey"
        g.beginPath();
        g.moveTo(800,300);
        g.lineTo(800,500);
        g.lineTo(600,600);
        g.lineTo(600,400);
        g.lineTo(800,300);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle="lightgrey";
        g.beginPath();
        g.moveTo(600,400);
        g.lineTo(600,600);
        g.lineTo(200,500);
        g.lineTo(200,300);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill();

        
        if (random <= 0.5){    
        g.fillStyle="white"
        g.beginPath();
        g.moveTo(700,400)
        g.lineTo(730,390);
        g.lineTo(750,410);
        g.lineTo(690,420);
       
        g.closePath();
        g.stroke();
        g.fill();
        }
        else if (random => 0.5){
        g.fillStyle="yellow"
        g.beginPath();
        g.moveTo(700,400)
        g.lineTo(730,390);
        g.lineTo(750,410);
        g.lineTo(690,420);
       
        g.closePath();
        g.stroke();
        g.fill();
        }
        
    }
    
}

let app = new App;
app.runApplication();
