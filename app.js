let counter = 0;
let firstSelection = "";
let secondSelection = "";

const cards = document.querySelectorAll(".cards .card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.add("selected");
//check for match
    if (counter === 0) {
      firstSelection = card.getAttribute("meme");
      counter++;
    } else {
      secondSelection = card.getAttribute("meme");
      counter = 0;

      if (firstSelection === secondSelection) {
        const correctCards = document.querySelectorAll(
          ".card[meme='" + firstSelection + "']"
        );

        correctCards[0].classList.add("flipped");
        correctCards[0].classList.remove("selected");
        correctCards[1].classList.add("flipped");
        correctCards[1].classList.remove("selected");
      } else {
        const incorrectCards = document.querySelectorAll(".card.selected");

       //flip over cards that werent matches

        setTimeout(() => {
          incorrectCards[0].classList.remove("selected");
          incorrectCards[1].classList.remove("selected");
        }, 600);
      }
      function shuffle() {
        let cards = document.querySelector(".cards");
        const btn=document.querySelector('btn');
        btn.addEventListener("click", function shuffle(){
          alert("shuffled!");
        })

        let elementsArray = Array.prototype.slice.call(cards.getElementsByClassName('cards'));
          elementsArray.forEach(function(element){
          cards.removeChild(element);
        })
        shuffleArray(elementsArray);
        elementsArray.forEach(function(element){
        cards.appendChild(element);
      })
      }
      
      function shuffleArray(array) {
          for (var i = array.length - 1; i > 0; i--) {
              var j = Math.floor(Math.random() * (i + 1));
              var temp = array[i];
              array[i] = array[j];
              array[j] = temp;
          }
          return array;
      }
    }
  })
});