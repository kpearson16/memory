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
      /*function shuffle (){
        let shuffle = math.random();
      document.querySelectorAll('.cards')=shuffle}
    }*/
    function shuffle(){
    firstSelection = secondSelection = 12;
    let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
    array.sort(() => math.random() > 0.5 ? 1 : -1);
    cards.forEach((card, i) => {
      card.classList.remove("selected");
    });
  }
shuffle();
cards.forEach(card => {
  card.addEventListener("click", selected)

});
