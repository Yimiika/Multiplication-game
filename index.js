const num1 = Math.ceil(Math.random()*20)
const num2 = Math.ceil(Math.random()*10)

const questionEl = document.getElementById("question")

const inputEl = document.getElementById("input")

const formEl = document.getElementById("form")

const scoreEl = document.getElementById("score");



let score = JSON.parse(localStorage.getItem("score"));


if(!score){
    score=0;
}

scoreEl.innerText = `score: ${score}`
questionEl.innerText = `What is ${num1} multiplied by ${num2} ?`

const correctAns = num1 * num2;

const popupEl = document.getElementById("popup");

const popsEl = document.getElementById("pops");

popsEl.innerText = `Your score is ${score}`


function openPopUp(){
    popupEl.classList.remove("close-popup")
    popupEl.classList.add("open-popup")
}


formEl.addEventListener("submit",(e)=>{
    
 const userAns = +inputEl.value;
 if (userAns === correctAns){
    score++;
    updateLocalStorage()
 } else{
    e.preventDefault()
    openPopUp();
    score=0;
    updateLocalStorage()
 }
})





function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}