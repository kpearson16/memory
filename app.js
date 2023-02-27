let counter = 0;
let firstFlip = "";
let secondFlip = "";
const cards = document.querySelectorAll(".cards .card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.add("selected");
//check for match
    if (counter === 0) {
      firstFlip = card.getAttribute("meme");
      counter++;
    } else {
      secondFlip = card.getAttribute("meme");
      counter = 0;

      if (firstFlip === secondFlip) {
        const matches = document.querySelectorAll(
          ".card[meme='" + firstSelection + "']"
        );

        matches[0].classList.add("flipped");
        matches[0].classList.remove("selected");
        matches[1].classList.add("flipped");
       matches[1].classList.remove("selected");
      } else {
        const nonmatches = document.querySelectorAll(".card.selected");

       //flip over cards that werent matches

        setTimeout(() => {
          nonmatches[0].classList.remove("selected");
          nonmatches[1].classList.remove("selected");
        }, 600);
        setTimeout(() => {
          
        }, 4500);

        }
      }
    })
});