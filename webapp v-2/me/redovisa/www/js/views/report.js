/*
 * Reports
 */
"use strict";

var m = require("mithril");


/* Skapar en “virtual DOM node” (vnode).
 * En vnod = ett JavaScript-objekt som representerar ett DOM-element.
 * elementet skapas när den används i en render eller mount-funktion.
 */
module.exports = {
    view: function() {
        return [
            m("div", [
                m("h1", "Reports"),
                m(".elin"),
                m("h2", "Kmom01"),
                m("h3", "Är du sedan tidigare bekant med utveckling av mobila appar?"),
                m("p", "Nej, det närmsta jag kommit är att skapa en responsiv hemsida i HTML."),

                m("h3", "Är du bekant med mithril?"),
                m("p", "Nej, det har jag aldrig hört talas om förut."),

                m("h3", "Hur känns det att jobba i mithril?"),
                m("p", "Det mesta kändes väldigt bekant, en blandning mellan JavaScript och HTML. " +
                    "Kodningen med hjälp av noder är likt det sätt vi jobbade på i JavaScript-kursen. " +
                    "Jag använde CSS för att styla och lägga in bilder som i de tidigare kurserna."),

                m("h3", "Var det något som krånglade eller tog extra mycket tid?"),
                m("p", "Processen att installera och försöka köra emulatorn to väldigt lång tid. Jag tror att jag satt med det i ungefär två dagar." +
                    "Till slut insåg jag att jag förmodligen har en för gammal processor, till tåga på AMD som uppenbarligen skulle göra att emulatorn tog 10x längre tid, utöver att den är supergammal." +
                    "Jag testade mig neråt från API lvl 25 och kom till API lvl 14 när jag lyckades starta emulatorn, men då fick jag ett felmeddelande 'process.android has crashed-'. " +
                    "Här startades den och fortsatte så med ca 5 mins mellanrum. Här gav jag upp och tänkte att jag får använda" +
                    "min Android - telefon att testa med istället. Jag har en HTC med Android nougat 7.0 och för att testa " +
                    " behövde jag inte installera några speciella drivrutiner förutom det program som kommer med telefonen, " +
                    "HTC Sync Manager. Sedan valde jag developer tools i inställningarna på telefonen och kör kommandot " +
                    "'cordova run android'. Hoppas det räcker att testa så här samt i webbläsaren. I övrigt tar det orimligt lång " +
                    "tid att packa ihop koden och köra cordova varje gång jag skall testa en ändring. Till appen kunde jag använda " +
                    "det mesta från min kod i tidigare redovisningar. " +
                    "Det enda jag ändrade var att jag lade till charset = -utf-8- i meta - taggen i html - filen då koden inte skrev " +
                    "ut åäö. Android - filerna fyllde upp min hårddisk och krashade den :) Har nu fastnat i en Windows - repair " +
                    "oop och behöver nog ominstallera mitt OS. Vad jag minns är detta kmom klart så jag lämnar in det, har ingen " +
                    "annan dator att testa på just nu.  "),
                //Kmom02
                m("h2", "Kmom02"),
                m("h3", "Hur känns det att jobba med modeller och hämta data från api’er med m.request?"),
                m("p", "Jag vet att det är enkelt, men av jag har alltid svårt att läsa av JSON-filer och lista ur hur jag skall plocka ut rätt information. Många felmeddelanden som bara innehåller '[Object]' men ingen information om vilket objekt. Det känns väldigt bra att lära sig detta och det känns som något jag kommer ha användning av i framtiden!"),

                m("h3", "Hur känns det att jobba i mithril, fördelar och nackdelar?"),
                m("p", "Jag har en rätt gammal stationär dator och en liten bärbar hybrid, båda orkar inte riktigt med cordova emulate och npm-start processerna. Allt tar fantastiskt lång tid. Tills jag läste forumtråden om hur man testar med endast kommandot npm test kändes det inte speciellt roligt. Nu är det mycket enklare! Jag har inte särskilt mycket att jämföra med i övrigt, men dokumentationen för mithril är helt ok. Det känns som ett enkelt sätt att jobba när man har läst HTML och JS tidigare. Dessvärre är det många gånger jag stött på problem och försökt googla fram svar utan att hitta speciellt mycket."),

                m("h3", "Så här långt, känner du att du har koll på koden? Är det något särskilt du funderar på?"),
                m("p", "Ja, i bash var de första uppgifterna enkla, i de för 3-poäng testade jag först lite olika for-loopar men insåg sen att det kanske fanns något bättre sätt att leta på så jag läste genom manualen ordentligt. Valde .select för att hitta rätt värde och pipade sedan för att hämta rätt svar ut json-objektet som .select returnerade.Jag har inte riktigt förstått hur meta-taggen i html-filen fungerar, jag har haft problem när jag velat lägga till flera 'säkra' sidor. Har fått felmeddelanden som 'Refused to load the image because it violates the following Content Security Policy directive: 'img-src 'self' data: content:'. Jag lyckades bara lägga till en säker sida åt gånger, för när jag fyllde på med fler sidor skrevs den gamla över med den nya."),
                
                m("h3", "Var det något som krånglade eller tog extra mycket tid?"),
                m("p", "Ja, Nobel-appen tog orimligt lång tid, trots att den i slutändan inte blev mycket kod alls, och jag visste ju att den skulle skrivas på samma sätt som Github-sidan. Jag är även van att jobba med all kod i samma fil och det känns svårt att hitta fel när koden är fragmenterad i olika moduler. I början tänkte jag att jag skulle hämta all information för 10 år samtidigt och sedan plocka ut det jag behövde ur den och jag började skriva min kod för det. Till slut såg det bra ut så jag lämnade det där ett tag och trodde att jag var klar men märkte sedan att jag skrev ut alla 10 år på alla årtalen. Till slut använde jag load på variabeln 'year' som hämtar ett API för det år som man klickar på, varje gång man klickar, istället.")
            ])
        ];
    }
};
