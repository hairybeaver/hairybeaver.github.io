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
    "spades_5" : ""
}



window.onload=function(){

    const cardnumbers = ["1", "13", "12", "11", "10"]
    for (const number of cardnumbers){
        const cardvalue = "spades_" + number

        const button = document.getElementById(cardvalue);
        button.myParam = cardvalue;
        button.addEventListener("click", getCardInfo);
    }
};


function getCardInfo(evt) {
    const cardvalue = evt.currentTarget.myParam

    if (cardvalue in rules){
        alert(rules[cardvalue])
    }

}