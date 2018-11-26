let startButton = document.getElementById('start-btn')
let container = document.getElementById('container')
let countDown = document.getElementById('countDown')
let level1 = document.getElementById('level1')
let level2 = document.getElementById('level2')
let level3 = document.getElementById('level3')
let startingMessage = document.getElementById('startingMessage')
let greenButton = document.getElementById('middle-circle1')
let redButton = document.getElementById('middle-circle2')
let yellowButton = document.getElementById('middle-circle3')
let blueButton = document.getElementById('middle-circle4')
let yourTurn= document.getElementById('yourTurn')
let gameMusic = document.getElementById('gameMusic')
level1.style.display = "none"
level2.style.display = "none"
level3.style.display = "none"
//--------------------------------------------
function count3(){
  countDown.innerHTML = "3"
  setTimeout(function(){countDown.innerHTML=""},1000)
}
function count2(){
  countDown.innerHTML=""
  countDown.innerHTML = "2"
  setTimeout(function(){countDown.innerHTML=""},1000)
}
function count1(){
countDown.innerHTML=""
  countDown.innerHTML = "1"
  setTimeout(function(){countDown.innerHTML=""},1000)
}
//--------------------------------------------------
function showLevels(){
  countDown.innerHTML=""
  level1.style.display = "block"
  level2.style.display = "block"
  level3.style.display = "block"
}

function showStartingMessage(){
  level1.style.display = "none"
  level2.style.display = "none"
  level3.style.display = "none"
  startingMessage.innerHTML = "Keep track of lit buttons in a pattern and follow the same pattern to move on the next round by clicking the buttons"
  setTimeout(function(){
    startingMessage.innerHTML=""
    countDown.innerHTML= "Round 1"
  }, 4000)

}
function startGame(){

  setTimeout(count3,500)
  setTimeout(count2,2500)
  setTimeout(count1,4500)

}
startButton.addEventListener("click", function(){
  startButton.style.display = "none"
showLevels()
})
//-------------------------------------------------
level1.addEventListener("click",function(){
  showStartingMessage()
  setTimeout(startGame,5000)
  setTimeout(startLevel1RoundPattern,11000)

})
//----------------------------------------------
let userPattern=[]
//-------------------------------------
function startLevel1RoundPattern(){
  pattern=[]
  userPattern=[]
  countDown.innerHTML= ""
  pickOneLight()
  setTimeout(pickOneLight,1000)
    setTimeout(pickOneLight,2000)
      setTimeout(pickOneLight,3000)
setTimeout(function(){
  yourTurn.innerHTML="Your turn!"
},4000)
greenButton.style.cursor="pointer"
redButton.style.cursor="pointer"
yellowButton.style.cursor="pointer"
blueButton.style.cursor="pointer"
}
//----------------------------------------
greenButton.addEventListener('click',function(){
  userPattern.push(greenLight)
  console.log(userPattern)
  checkUserResponse()
})
blueButton.addEventListener('click',function(){
  userPattern.push(blueLight)
  console.log(userPattern)
  checkUserResponse()
})
yellowButton.addEventListener('click',function(){
  userPattern.push(yellowLight)
  console.log(userPattern)
  checkUserResponse()
})
redButton.addEventListener('click',function(){
  userPattern.push(redLight)
  console.log(userPattern)
  checkUserResponse()
})
//------------------------------------------------
var count=1
function checkUserResponse(){

if(userPattern.length ==4){

  count++
  console.log(userPattern.length)

  if(userPattern[0]===pattern[0] && userPattern[1]===pattern[1] && userPattern[2]===pattern[2] && userPattern[3]===pattern[3]){
    yourTurn.innerHTML="You made it"
    userPattern=[]
    pattern=[]
    if(count==6){
      yourTurn.innerHTML=""
      showLevels()
      level1.style.display="none"
      return;
    }
    setTimeout(function(){
      yourTurn.innerHTML=""
      countDown.innerHTML="Round " + count

  },1000)
    setTimeout(startLevel1RoundPattern,2500)
  } else{
    count=1
    yourTurn.innerHTML="Game over"
    level3.innerHTML="Start over"
    level3.style.display = "block"
    userPattern=[]
    pattern=[]
    level3.addEventListener("click",function(){
      level3.innerHTML="Level 3"
      yourTurn.innerHTML=""
      showLevels()

    })

  }
}
}
//----------------------------------
let pattern=[]
//--------------------------------------
function redLight(){

  redButton.classList.add('redLed')
  setTimeout(function(){redButton.classList.remove('redLed')},500)
}
function greenLight(){
  greenButton.classList.add('greenLed')
  setTimeout(function(){greenButton.classList.remove('greenLed')},500)
}
function yellowLight(){
  yellowButton.classList.add('yellowLed')
  setTimeout(function(){yellowButton.classList.remove('yellowLed')},500)
}
function blueLight(){
  blueButton.classList.add('blueLed')
  setTimeout(function(){blueButton.classList.remove('blueLed')},500)
}
//----------------------------------------------------------
function randomFrom(array) {return array[Math.floor(Math.random() * array.length)];}
function pickOneLight(){
  let pickPattern = randomFrom([redLight,greenLight,yellowLight,blueLight])
  pattern.push(pickPattern)
  console.log(pattern)
   pickPattern()

}
//--------------------------------------------
