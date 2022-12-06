//TODO
//Maak van elke regel een object waarin er staat van wanneer een regel van toepassing is
//BV : {spades_11: {use: trekstapel, description: geef kaart weg, value: 11}}

const rules = {
    "gamerules" : "Als deze kaart gelegd wordt, rechtstreeks van de trekstapel of van jouw dam, dan mag iedereen behalve de persoon die hem uitlegt er eender welke kaart van zijn eigen dam opleggen. Op deze opgelegde kaart worden er geen andere kaarten meer gespeeld",
    
    //Zwarte boer
    "spades_11" : "Verschuif een kaart van jouw eigen dam naar iemand anders zijn dam. Er mag geen extra rij gecreeërd worden.",
    "clubs_11" : "Verschuif een kaart van jouw eigen dam naar iemand anders zijn dam. Er mag geen extra rij gecreeërd worden.",

    //Zwarte 2
    "spades_2" : "Leg een kaart van jouw dam op de trekstapel zodat de volgende speler deze kaart moet nemen.",
    "clubs_2" : "Leg een kaart van jouw dam op de trekstapel zodat de volgende speler deze kaart moet nemen.",


    //Elke 5
    "5" : "Sla de volgende speler over. Wordt er op deze kaart nog een andere 5 gelegd, dan sla je 2 spelers over.",
}



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









