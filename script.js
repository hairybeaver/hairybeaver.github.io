//TODO
//Maak van elke regel een object waarin er staat van wanneer een regel van toepassing is
//BV : {spades_11: {use: trekstapel, description: geef kaart weg, value: 11}}

const rules = {
    "gamerules": "Als deze kaart gelegd wordt, dan mag eender welke speler hier een kaart op leggen die toegankelijk is. Spelers van andere kaarten mogen echter niet. Kaarten die op spelregels gelegd worden hebben geen regel en er mag geen tweede dezelfde kaart op deze kaart gespeeld worden.",
    "joker": "Als de joker op een andere kaart gelegd wordt, dan neemt deze de regel van de vorige kaart over. Twee jokers op elkaar nemen allebei de waarde aan van de eerstvolgende normale kaart. Bijvoorbeeld: een speler die een joker uitlegt en de vorige kaart was een 7, dan mag deze speler ook naar zijn eigen kaart kijken.",
    "1": "De speler mag nog een kaart van de trekstapel nemen.",
    "spades_2": "De speler mag een kaart van zijn eigen bespeelbare dam op de trekstapel leggen. De volgende speler neemt deze kaart van de trekstapel.",
    "clubs_2": "De speler mag een kaart van zijn eigen bespeelbare dam op de trekstapel leggen. De volgende speler neemt deze kaart van de trekstapel.",
    "3": "De oriëntatie van een kaart van deze speler of een andere speler mag veranderd worden door deze kaart 90 graden te draaien. Van horizontale kaarten wordt na het spel de eindscore verdubbeld.",
    "hearts_4": "Draai een kaart van iemand anders om zodat deze open komt te liggen.",
    "clubs_4": "Draai een kaart van je eigen bespeelbare dam open zodat deze open komt te liggen.",
    "5": "De volgende speler zijn beurt wordt overgeslagen. Wordt er op deze 5 nog een 5 gelegd, dan worden er twee beurten overgeslagen.",
    "6": "De speler mag nog een kaart van de trekstapel nemen en de richting van het spel verandert.",
    "7": "De speler mag naar een kaart van zijn eigen bespeelbare dam kijken en deze stapelen als dit gewenst wordt.",
    "8": "De speler mag naar een kaart van een andere speler kijken en deze stapelen.",
    "9": "De speler mag twee kaarten van eender welke spelers verwisselen zonder naar deze kaarten te kijken.",
    "10": "De speler mag naar een kaart van zichzelf kijken en naar een kaart van een andere speler en beslissen of hij/zij deze twee kaarten omwisselt. Dit moet wel vermeld worden aan de andere speler.",
    "spades_11": "De speler mag een kaart van zijn eigen bespeelbare dam aan een andere speler geven. Er mogen geen extra rijen gevormd worden.",
    "clubs_11": "De speler mag een kaart van zijn eigen bespeelbare dam aan een andere speler geven. Er mogen geen extra rijen gevormd worden.",
    "12": "De speler mag een kaart van rij wisselen of de oriëntatie van zijn eigen kaart veranderen. Wordt er nog een dame op deze dame gelegd, dan mag de speler die de extra dame hierop legt ook een kaart van rij of oriëntatie veranderen.",
    "hearts_13": "Als 'harige bever' gezegd is, wordt deze ongeldig verklaard met deze kaart.",
    "diamonds_13": "Als 'harige bever' gezegd is, wordt deze ongeldig verklaard met deze kaart. De speler die deze kaart gelegd heeft mag ook het aantal spelers in kaarten van de trekstapel nemen, naar deze kaarten kijken en deze verdelen over de spelers op een rij naar keuze."
};



window.onload=function(){

    const cardtypes = ['spades_', 'clubs_', 'hearts_', 'diamonds_']
    const cardnumbers = Array(13).fill().map((_, i) => i+1);

    const allcards = cardtypes.flatMap(t => cardnumbers.map(n => t + n))

    console.log(allcards)

    for (const cardvalue of allcards){

        const button = document.getElementById(cardvalue);
        
        if (!button){
            console.log(cardvalue)
        }

        button.myParam = cardvalue;
        button.addEventListener("click", getCardInfo);
    }
};


function getCardInfo(evt) {
    let output = ''
    const fullname = evt.currentTarget.myParam;
    const splittedname = fullname.split('_')

    console.log(splittedname)

    if (splittedname.length > 1){
        const cardtype = splittedname[0]
        const cardvalue = splittedname[1]

        const translatedname = translateCardType(cardtype) + '_' + cardvalue

        if (cardvalue in rules) {
            output = rules[cardvalue]
        } else if (translatedname in rules) {
            output = rules[translatedname]
        } else {
            output = rules[fullname]
        }

    } else {
        //roep functie op

        if (fullname in rules){
            output = rules[fullname]
        }
    }
    
    console.log(output)

    if (output) {
        alert(output)
    }
}



function translateCardType(typestring){
    const typetranslation = {   'spades' : 'black',
                                'clubs' : 'black',
                                'hearts' : 'red',
                                'diamonds' : 'red'  }
    
    return typestring in typetranslation? typetranslation[typestring] : ''
}









