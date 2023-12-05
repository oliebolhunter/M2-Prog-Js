
function heeftEenResultaat()
{
    let resultaat =1;
    return resultaat;
}

let hetResultaat = heeftEenResultaat();//opvangen
console.log(hetResultaat);// een gebruiken via de variablen
console.log(heeftEenResultaat());//direct gebruiken


let x =9;
let a =3;
let b =4;
let c =89;

let y = (a*(x*x) )+ (b*x) +c;
console.log(y); 


function ax2bcWiskunde(x,a,b,c)
{
    let y = (a*(x*x) )+ (b*x) +c;
    return y
}

let y1 = ax2bcWiskunde(9,3,4,89);
console.log(y1)

let y2 = ax2bcWiskunde(3,6,5,45) 
console.log(y2);

let y3 = ax2bcWiskunde(7,1,2,13);
console.log(y3);

let u = 9;
let h = 8;
let l = 15
let logY = Math.log(l) + h + Math.pow(u,2);
console.log(logY);

function argumentsAreHandy(shoutout)
{
    console.log("do you want to give a shoutout?");
    console.log(shoutout);

}
argumentsAreHandy("Ik Hou Van Frikandellen Met Mayonaise");

argumentsAreHandy("Ik Hou Van Frikandellen Met Mayonaise");

argumentsAreHandy("Ik Hou Van Frikandellen Met Mayonaise");

function superMooieGlobalFunction()
{
    console.log("ik ben global")
    console.log("dus je mag mij overal aanroepen")

}

superMooieGlobalFunction();

superMooieGlobalFunction();

superMooieGlobalFunction();

class App
{
    runApplication()
    {
        console.log("hello world!");
        
    }
}

let app = new App();
app.runApplication();