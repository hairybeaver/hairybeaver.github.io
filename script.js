const deckInfo = [
    ['&spades;', '&clubs;','&hearts;', '&diams;'],
    [' 2', ' 3', ' 4', ' 5', ' 6', ' 7', ' 8', ' 9', '10', ' J', ' Q', ' K', ' A']
   ];
   
   const showCards = (deckInfo) => {
     const cardContainer = document.getElementById('main-container');
     
     for(let i = 0; i < deckInfo[0].length; i +=1) {
       for(let j = 0; j < deckInfo[1].length; j +=1) {
           const suit = deckInfo[0][i];
           const faceValue = deckInfo[1][j];
           const suitColor = i < 2 ? 'suit-purple' : 'suit-green';
         
           let card = `<section class="card-container">
                         <div class="rectangle front-card">
                           <div class="left-container">
                             <span class="num-left ${suitColor}">${faceValue}</span>
                             <span class="suit-left ${suitColor}">${suit}</span>
                           </div>
                           <div class="face-image  ${suitColor}">${suit}</div>
                           <div class="right-container">
                             <span class="num-right ${suitColor}">${faceValue}</span>
                             <span class="suit-right ${suitColor}">${suit}</span>
                           </div>
                           <div class="rectangle back-card"></div>
   
                         </div>
   
                       </section>`;
           
           cardContainer.innerHTML += card;
       }
       
     }
   
   }
   showCards(deckInfo);