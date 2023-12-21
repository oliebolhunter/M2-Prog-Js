class App
{
    runApplication()
    {
        console.log("hello world!");
        //code gaat hier
        let array = document.getElementsByTagName("h1");
        let arrayByClass = document.getElementsByClassName("edge");
       
        arrayByClass[0].innerText = "nieuws";
        arrayByClass[1].innerText = "revieuws";
        arrayByClass[2].innerText = "commentaar";
        arrayByClass[3].innerText = "frikandel";
        arrayByClass[4].innerText = "mayonaise";
        for (let i = 0; i < array.length; i++) {
            console.log(array[i]);
        }for (let i = 0; i < arrayByClass.length; i++) {
            console.log(arrayByClass[i].innerText);


        }
    }
}
let app = new App;
app.runApplication();
