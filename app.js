let timer = 61;
let firstFlip = "";
let secondFlip = "";
let p1 = true;
let p2 = false;
let counter =0;
let lose = [];
let timeOut = [];
//make timer to implement a win/lose state with two players
setInterval(() => {
  if(p1){
    //let p1= document.querySelector('.p1')
    p1= document.querySelector('.p1')
    p1.style.color="teal"
    if(timer!== 0){
      for (let i = 0; i < 1; i++) {
        timer--
      } 
      } else {
        alert("You Lose. Next Player!")
        cards.forEach((card)=>{
          card.classList.remove("flipped")
        })
        //let p1= document.querySelector('.p1')
         p1= document.querySelector('.p1')
          timer=61;
          p1.style.color="red"
          p1=false;
          p2=true;
      }
     let time=document.querySelector('.time')
     time.innerHTML=`Time: ${timer}`
    }
  if(p2){
    //let p2= document.querySelector('.p2')
     p2= document.querySelector('.p2')
    p2.style.color="teal"
    if(timer !== 0){
      for (let i = 0; i < 1; i++) {
        timer--
      } 
      } else {
        alert("You Lose. Player 1, GO!")
        cards.forEach((card)=>{
          card.classList.remove("flipped")})
        //let p2= document.querySelector('.p2')
        p2= document.querySelector('.p2')
        
          timer=61;
          p2.style.color="red"
          p1=true;
          p2=false;
        }
     let time=document.querySelector('.time')
     time.innerHTML=`Time: ${timer}`
  }
  
}, 1000)


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
          ".card[meme='" + firstFlip + "']"
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
        }, 700);
        }
      }
    })
});

