class App
{
    runApplication()
    {      
        console.log("hello world");
        //code gaat hier
        let canvas= document.getElementById("canvasId")
        let g= canvas.getContext("2d");
        g.fillRect(50,0,5,20);
        console.log(canvas);
    }
}

let app = new App;
app.runApplication();
