class App
{
    runApplication()
    {      
        console.log("hello world");
        //code gaat hier
        let canvas= document.getElementById("canvasId")
        let g= canvas.getContext("2d");
        g.fillStyle = "orange";
        g.fillRect(0,0,canvas.width,canvas.height);
        g.fillStyle = "purple";
        g.fillRect(0,0,10,10);  
        console.log(canvas);
    }
}

let app = new App;
app.runApplication();
