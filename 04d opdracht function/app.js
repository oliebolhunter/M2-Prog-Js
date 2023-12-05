
class App
{

    
    runApplication(){
        console.log("hello world!");
    }
    mario(){
        console.log("mario!!");
    }
    BWAHAHA(){
        let x = "BWAHAHA"
        return x
    }
    rekenen(a,b){
        let g = a*b
        return g 
    }
    Praten(){
        console.log("ik wil niet met je praten");
    }
}

let app = new App();
app.runApplication();
app.mario();
let schreeuw = app.BWAHAHA();
console.log(schreeuw);
let peer = app.rekenen(5,10);
console.log(peer)
app.Praten();
