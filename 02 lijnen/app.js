class App
{
    runApplication()
    {      
        console.log("hello world");
        //code gaat hier
        let canvas= document.getElementById("canvasId")
        let g= canvas.getContext("2d");
       //line
        g.beginPath()
        g.fillStyle = "yellow";
        g.moveTo(20,20);
        g.lineTo(300,300);
        g.lineTo(580,20);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "black";
        g.moveTo(20,20);
        g.lineTo(300,300);
        g.lineTo(580,20);
        g.closePath();
        g.stroke();
    
    }
}

let app = new App;
app.runApplication();
