
// gameboard
let counter = 0;
let firstFlip = "";
let secondFlip = "";
// check for match
const cards = document.querySelectorAll('.cards, .card');
cards.forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.add('selected'); 
      if (counter === 0){
        firstFlip = card.getAttribute('meme');
        counter++;
      } else {
        secondFlip = card.getAttribute('meme');
        counter = 0;

        if (firstFlip === secondFlip){
          //if (counter >= 12) setTimeout(() => alert('Level Complete'), 2000);
            const match = document.querySelectorAll(
                ".card[meme='" + firstFlip + "']"
            );
            match[0].classList.add('flipped');
            match[0].classList.remove('selected');
            match[1].classList.add('flipped');
            match[1].classList.remove('selected');
        } else {
            const nonMatch = 
            document.querySelectorAll('.card.selected');
            setTimeout(() => {
            nonMatch[0].classList.remove('selected');
            nonMatch[1].classList.remove('selected');
        }, 1000);
      }
}
let game = document.querySelectorAll('.card');
game.forEach(function(card){
  let randomNum = math.floor(math.random() * 24);
  card.style.order = randomNum;
})
    })
}); 
