class App
{
    runApplication()
    {
        console.log("hello world!");
        //code gaat hier
        let artiesten =["mac demarco", "Kendrick Lamar", "Frank Ocean", "bob dylan", "prince"]
        

        for (let intel = 0; intel < artiesten.length; intel++){
            const element = artiesten[intel];
            console.log(intel + ": "+element);
        }
        
        let indexToRemove = artiesten.indexOf("bob dylan")
        artiesten.splice(indexToRemove,1)
        artiesten.push("joji")
        indexToRemove = artiesten.indexOf("prince")
        artiesten.splice(indexToRemove,1)
        artiesten.push("montel")

        

        for (let intel = 0; intel < artiesten.length; intel++){
            const element = artiesten[intel];
            console.log(intel + ": "+element);
        }



        let nummers = [420,96,69];
        console.log(nummers);

        for (let intel = 0; intel < nummers.length; intel++){
            nummers[intel]++;
            const element = nummers[intel];
            console.log (element);
        }

    }
}

let app = new App;
app.runApplication();
