let counter = 45;
let firstFlip = "";
let secondFlip = "";
let p1 = true;
let p2 = false;
setInterval(() => {
  if(p1){
    let p1= document.querySelector('.p1')
    p1.style.color="teal"
    if(counter !== 0){
      for (i = 0; i < 1; i++) {
        counter--
      } 
      } else {
        let p1= document.querySelector('.p1')
          p1=false;
          p2=true;
          counter=45;
          p1.style.color="red"

      }
     let time=document.querySelector('.time')
     time.innerHTML=`Time: ${counter}`
    }
  if(p2){
    let p2= document.querySelector('.p2')
    p2.style.color="teal"
    if(counter !== 0){
      for (i = 0; i < 1; i++) {
        counter--
      } 
      } else {
        let p1= document.querySelector('.p2')
          p1=true;
          p2=false;
          counter=45;
          p1.style.color="red"

      }
     let time=document.querySelector('.time')
     time.innerHTML=`Time: ${counter}`
  }
  
  // if(counter !== 0){
  //   for (i = 0; i < 1; i++) {
  //     counter--
  //   }
  //  let time=document.querySelector('.time')
  //  time.innerHTML=`Time: ${counter}`
  // }
  /*for (i = 0; i < 1; i++) {
    counter--
  }
 let time=document.querySelector('.time')
 time.innerHTML=`Time: ${counter}`*/
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
        }, 600);

        }
      }
    })
});

