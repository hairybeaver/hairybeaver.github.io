const rules = {
    "spades_13" : "Zwarte koning niks speciaal"
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