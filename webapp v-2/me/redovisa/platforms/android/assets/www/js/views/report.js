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
                m("p", "Svar"),

                m("h3", "Hur känns det att jobba i mithril, fördelar och nackdelar?"),
                m("p", "Svar"),

                m("h3", "Så här långt, känner du att du har koll på koden? Är det något särskilt du funderar på?"),
                m("p", "Svar"),
                
                m("h3", "Var det något som krånglade eller tog extra mycket tid?"),
                m("p", "Svar")
            ])
        ];
    }
};
