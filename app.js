
// gameboard
let counter = 0;[]
let firstFlip= '';
let secondFlip= '';

const cards = document.querySelectorAll('.cards, .card');
cards.forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.add('selected'); 
      if (counter === 0){
        firstFlip = card.getAttribute('meme');
        counter++;
      } else {
        secondFlip= card.getAttribute('meme');
        counter = 0;

        if (firstFlip === secondFlip){
            const match = document.querySelectorAll(
                ".card[meme='" + firstFlip + "']"
            );
            match[0].classList.add('flipped');
            match[0].classList.remove('clicked');
            match[1].classList.add('flipped');
            match[1].classList.remove('selected');
        } else {
            const nonMatch = 
            document.querySelectorAll('.card.selected');
            nonMatch[0].classList.remove('selected');
            nonMatch[1].classList.remove('selected');
        }
    }
