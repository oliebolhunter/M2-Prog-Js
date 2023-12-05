class App {
    runApplication() {
        console.log("hello world!");
        // document.getElementById("newstitle")
        // document.getElementsByClassName("gamenews")
        let title = document.getElementById("newstitle");
        console.log(title);

        let random = Math.random();
        console.log(random);
        if (random < 0.2) {
            title.style.backgroundColor = "#FF0000";
        }
        else if (random > 0.75) {
            title.style.backgroundColor = "#00FF00";
        }
        else if (random > 0.6) {
            title.style.backgroundColor = "#660066";
        }
        else if (random > 0.2) {
            title.style.backgroundColor = "#cc3300";
        }
        else {

        }

        let newsitem1 = document.getElementsByClassName("gamenews")[0]
        if (random < 0.2) {
            newsitem1.style.backgroundColor = "#99ff99";
        }
        else if (random > 0.75) {
            newsitem1.style.backgroundColor = "#99ffff";
        }
        else if (random > 0.6) {
            newsitem1.style.backgroundColor = "#e699ff";
        }
        else if (random > 0.2) {
            newsitem1.style.backgroundColor = "#ff9999";
        }
        else {
        }

        let newsitem2 = document.getElementsByClassName("gamenews")[1]
        if (random < 0.2) {
            newsitem2.style.backgroundColor = "#b399ff";
        }
        else if (random > 0.75) {
            newsitem2.style.backgroundColor = "#99ccff";
        }
        else if (random > 0.6) {
            newsitem2.style.backgroundColor = "#ccff99";
        }
        else if (random > 0.2) {
            newsitem2.style.backgroundColor = "#99ffff";
        }
        else {
        }
    }
    }
let app = new App();
app.runApplication();