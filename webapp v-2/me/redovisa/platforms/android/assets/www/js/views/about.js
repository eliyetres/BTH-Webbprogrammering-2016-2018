"use strict";
var m = require("mithril");

var about_me = `Hej! Jag heter Elin, är 26 år och bor i Göteborg.
&#10
&#10
Jag läser en kandidat på Göteborgs Universitet i kognitionsvetenskap.
Jag hoppas kunna fortsätta på en master i språkteknologi när jag är klar med min kanditat, men för det behöver jag fler högskolepoäng i programmering. Tidigare har jag läst 7.5hp i Haskell på GU, men kursen var dåligt upplagd, minst sagt. Just nu läser jag Webbprogrammering utöver mitt program, som är på heltid.
Detta är den sista kursen jag läser i kurspaketet 30 hp på distans!
&#10
I Python lärde jag mig mer de två första veckorna än vad jag gjorde i hela Haskell-kursen. Det gick väldigt fort framåt men det var också väldigt kul. Som projektarbete gjorde jag ett spel med ascii-bilder som kanske var lite väl ambitiöst men jag lärde mig också väldigt mycket.
Jag hade vaga minnen av att jag skrev HTML när jag var runt 10 år, mycket av det kom tillbaka när jag skrev den här sidan! Jag tycker att själva designen är mycket roligare än att bara skriva funktioner som räknar matteproblem så när jag har fastnat med uppgifter har jag byggt på den här sidan i JavaScript-kursen. Det var mycket av dokumentationen i JavaScript som var svårläst och det tog ett tag innan jag fattade hur jag skulle börja. Hade önskat fler föreläsningar som förklarade konventionellt kodande bättre.
Jag hade inga förväntningar på kursen i Linux, jag visste inte vad jag skulle använda det till.
&#10
I linux har lärt mig att använda terminalen till en mycket större utsträckning än tidigare. Tyvärr jag jag svårt att de att
jag kommer använda bash-skript i framtiden, det är så fantastiskt krångligt.`;

module.exports = {
    view: function() {
        return [
            m("h1", "About"),
            m(".elin"),
            m("p", about_me)
        ];
    }
};