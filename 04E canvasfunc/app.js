class App
{
    runApplication()
    {      
        console.log("hello world");
        //code gaat hier
        let canvas= document.getElementById("canvasId")
       
        let g = canvas.getContext("2d");
    this.tekenHuis(g, 200, 100)
    this.tekenHuis(g, 50, 300)
    this.tekenHuis(g, 300, 150)
    this.tekenKerstboom(g,250,200,10)
    }
    tekenHuis(g,x,y){

        g.fillStyle="red";
        g.beginPath()
        g.moveTo(x+30,y+10);
        g.lineTo(70+x,20+y);
        g.lineTo(60+x,40+y);
        g.lineTo(20+x,30+y);
        g.lineTo(30+x,10+y);
        g.closePath();
        g.stroke();
        g.fill();
        
        g.fillStyle="grey";
        g.beginPath()
        g.moveTo(x+70,y+20);
        g.lineTo(80+x,30+y);
        g.lineTo(60+x,40+y);
        g.lineTo(70+x,20+y);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle="grey"
        g.beginPath();
        g.moveTo(x+80,y+30);
        g.lineTo(80+x,50+y);
        g.lineTo(60+x,60+y);
        g.lineTo(60+x,40+y);
        g.lineTo(80+x,30+y);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle="lightgrey";
        g.beginPath();
        g.moveTo(x+60,y+40);
        g.lineTo(60+x,60+y);
        g.lineTo(20+x,50+y);
        g.lineTo(20+x,30+y);
        g.lineTo(60+x,40+y);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle="white"
        g.beginPath();
        g.moveTo(x+70,y+40)
        g.lineTo(73+x,39+y);
        g.lineTo(75+x,41+y);
        g.lineTo(69+x,42+y);
       
        g.closePath();
        g.stroke();
        g.fill();
    }   

    tekenKerstboom(g,x,y,Iets){
       g.fillStyle="green";
        g.beginPath();
        g.moveTo(x-40,y+55);
        g.lineTo(5+x,1+y);
        g.lineTo(45+x,56+y);

        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle="brown";
        g.beginPath();
        g.moveTo(x-10,56+y);
        g.lineTo(x-10,80+y);
        g.lineTo(x+10,80+y);
        g.lineTo(x+10,y+56)

        g.closePath();
        g.stroke();
        g.fill();

       let ox=0;
       let dir=1;

        for (let i = 0; i < Iets; i++) {
            g.fillStyle="yellow"
            g.beginPath();
            g.arc(1+x+ox,1+y+(7*i),5,0,Math.PI*2);
            g.stroke();
            g.fill();
            g.closePath();
            ox+=dir*10
            if(Math.abs(ox)>1){
                dir=-dir
            }
    
        }
        g.fillStyle="blue";
        g.beginPath();
        g.moveTo(x+5,y+1);
        g.lineTo(50+x,-5+y);
        g.lineTo(-50+x,-5+y);

        g.closePath();
        g.stroke();
        g.fill();

    }


}

let app = new App;
app.runApplication();
