class App
{
    runApplication()
    {      
        //code gaat hier
        this.greeting = "starting up";

    this.appNaam = "dedikkewebsite"
    this.versienummer = 0.1
    this.versiedatum = 21-11-2023
    this.autheur = "Jona Wehnes"
    this.copyright = "de echte Jona"
    this.distributeur = "oliebol"
    this.darkmode = true
    this.boolean = false
    this.string = "uw moeder kan lekker koken"
    this.number = 69
    }
}

let app = new App;
app.runApplication();

console.log(app.greeting);
console.log("appNaam: " + app.appNaamp);
console.log("versienummer: " + app.versienummer);
console.log("de boolean: " + app.boolean);
console.log("autheur: " + app.autheur);
console.log("de number: " + app.number);
console.log("Copyright: " + app.copyright);
console.log("distributeur: " + app.distributeur);
console.log("darkmode: " + app.darkmode);
console.log("de string: " + app.string);