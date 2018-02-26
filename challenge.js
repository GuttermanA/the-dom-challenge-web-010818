

//Increment Count
let timer = parseInt(document.getElementById('counter').innerHTML);
let interval = setInterval( incrementTimer, 1000);

function incrementTimer(){
  if (!pause) {
    timer += 1
    document.getElementById('counter').innerHTML = timer
  }
}

//Pause Counter
let pauseButton = document.getElementById('pause')
let pause = false

function toggleInteraction() {
  if (!pause) {
    plusButton.disabled = false
    minusButton.disabled = false
    likeButton.disabled = false
    document.getElementById('submit').disabled = false
  } else {
    plusButton.disabled = true
    minusButton.disabled = true
    likeButton.disabled = true
    document.getElementById('submit').disabled = true
  }
}

pauseButton.addEventListener("click", stopTimer)

function stopTimer(){
  if (!pause) {
    pause = true
    pauseButton.innerText = 'resume'
    toggleInteraction()
    timer.innerText = timer.innerText
  } else {
    pause = false
    pauseButton.innerText = 'pause'
    toggleInteraction()
    incrementTimer()
  }
}

// document.addEventListener("DOMContentLoaded", function(){
//   incrementTimer
// })


//PLUS AND MINUS BUTTONS -DONE
let plusButton = document.getElementById('+')

plusButton.addEventListener("click", function () {
  timer++
})

let minusButton = document.getElementById('-')

minusButton.addEventListener("click", function() {
  timer--
})


//LIKE BUTTON -DONE
let likeButton = document.getElementById('<3');
let likeList = document.getElementsByClassName('likes')[0]
let likes = {};

likeButton.addEventListener("click", function() {
  if (!likes[timer]) {
    likes[timer] = 0
    likes[timer]++
  } else {
    likes[timer]++
  }

  while (likeList.firstChild) {
    likeList.removeChild(likeList.firstChild);
  }

  let likeListItems = likeList.childNodes
  for (const k in likes) {
    likeList.appendChild(document.createElement('li')).innerHTML = `${k} has been liked ${likes[k]} times`
  }
})

//Comments -DONE

const form = document.getElementById('comment-form');
let commentsList = document.getElementById('list')
form.addEventListener("submit", function(event){
  event.preventDefault()
  let commentData = form.querySelector('#comment-text').value
  commentsList.appendChild(document.createElement('li')).innerHTML = commentData
})
