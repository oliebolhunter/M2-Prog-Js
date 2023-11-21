class App
{
    runApplication()
    {
        console.log("hello world!");
        //code gaat hier
    let appNaam = "dedikkewebsite"
    let versienummer = 0.1
    let versiedatum = 21-11-2023
    let autheur = "Jona Wehnes"
    let copyright = "de echte Jona"
    let distributeur = "oliebol"
    let darkmode = true
        console.log("Appnaam:" + appNaam);
        console.log("versiedatum:" + versiedatum);
        console.log("Autheur" + autheur);
        console.log("Copyright:" + copyright);
        console.log("Distributeur:" + distributeur);
        console.log("Darkmode:" + darkmode);
    }
}

let app = new App;
app.runApplication();