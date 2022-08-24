import difficulties from './data/difficulties'
import ancientsData from './data/ancients'
import blueCardsData from './data/mythicCards/blue/index'
import brownCardsData from './data/mythicCards/brown/index'
import greenCardsData from './data/mythicCards/green/index'

console.log('dificulties >', difficulties)
console.log('ancientsData >', ancientsData)
console.log('blueCardsData >', blueCardsData)
console.log('brownCardsData >', brownCardsData)
console.log('greenCardsData >', greenCardsData)

const ancients = document.querySelector('.ancients')
const cards = document.querySelector('.cards')

for (let i = 0; i < ancientsData.length; i++) {
  let divTag = `<div class="ancient_div">
                  <img
                    class="ancient-img"
                    src="${ancientsData[i].cardFace}"
                    alt="${ancientsData[i].name}"
                    id="${ancientsData[i].id}"
                  />
                  </div>`
  ancients.insertAdjacentHTML('beforeend', divTag)
}
const ancientImgList = document.querySelectorAll('.ancient-img')
const difficultyContainer = document.querySelector('.difficulty-container')
const shuffleBtn = document.querySelector('.shuffle-btn')
const counter = document.querySelector('.counter-container ')
let allDots = document.querySelectorAll('.dot')
// добавляем класс active древнему по клику
for (var i = 0; i < ancientImgList.length; i++) {
  ancientImgList[i].onclick = function () {
    if (this.classList) {
      for (var j = 0; j < ancientImgList.length; j++) {
        ancientImgList[j].classList.remove('active')
      }
      this.classList.add('active')
      difficultyContainer.classList.remove('hide')
      shuffleBtn.classList.remove('hide')
      counter.classList.remove('hide')
    } else {
      this.active += ' ' + active
    }
    // if (ancientImgList[0].classList.contains('active')) {
    //   for (let k = 0; k < allDots.length; k++) {
    //     allDots[k].textContent = ancientImgList[0].firstStage[0]
    //   }
    // }
  }
}

// for(let k=0; k <ancientImgList.length; k++ ){

// }
// ancientImgList.forEach((el)=>{
//   if(el.classList.contains('active')){

//   }
// })
// console.log(allDots)

const difficulty = document.querySelectorAll('.difficulty')
// выбираем сложность, добавлчем класс act
for (var i = 0; i < difficulty.length; i++) {
  difficulty[i].onclick = function () {
    if (this.classList) {
      for (var j = 0; j < difficulty.length; j++) {
        difficulty[j].classList.remove('act')
      }
      this.classList.add('act')
    } else {
      this.act += ' ' + act
    }
  }
}

// let blue1 = `<img class="blue1" src="${greenCardsData[0].cardFace}" alt="${greenCardsData[0].id}"/>`
// cards.insertAdjacentHTML('beforeend', blue1)
// получаем все карты
const allCards = [...blueCardsData, ...brownCardsData, ...greenCardsData]
console.log('allCards >', allCards)
// получаем массивы из легких, обычных, сложных карт
let allEasyCards = []
let allNormalCards = []
let allHardCards = []
allCards.forEach((el) => {
  if (el.difficulty == 'easy') {
    allEasyCards.push(el)
  }
  if (el.difficulty == 'normal') {
    allNormalCards.push(el)
  }
  if (el.difficulty == 'hard') {
    allHardCards.push(el)
  }
})
// получаем массивы EASE карт по цветам
let allEasyGreenCards = []
let allEasyBlueCards = []
let allEasyBrownCards = []

allEasyCards.forEach((el) => {
  if (el.color == 'green') {
    allEasyGreenCards.push(el)
  }
  if (el.color == 'blue') {
    allEasyBlueCards.push(el)
  }
  if (el.color == 'brown') {
    allEasyBrownCards.push(el)
  }
})

// получаем массивы NORMAL карт по цветам
let allNormalGreenCards = []
let allNormalBlueCards = []
let allNormalBrownCards = []

allNormalCards.forEach((el) => {
  if (el.color == 'green') {
    allNormalGreenCards.push(el)
  }
  if (el.color == 'blue') {
    allNormalBlueCards.push(el)
  }
  if (el.color == 'brown') {
    allNormalBrownCards.push(el)
  }
})

// получаем массивы HARD карт по цветам
let allHardGreenCards = []
let allHardBlueCards = []
let allHardBrownCards = []

allHardCards.forEach((el) => {
  if (el.color == 'green') {
    allHardGreenCards.push(el)
  }
  if (el.color == 'blue') {
    allHardBlueCards.push(el)
  }
  if (el.color == 'brown') {
    allHardBrownCards.push(el)
  }
})

console.log('allEasyCards >', allEasyCards)
console.log('allNormalCards >', allNormalCards)
console.log('allHardCards >', allHardCards)
//
console.log('allEasyGreenCards >', allEasyGreenCards)
console.log('allEasyBlueCards >', allEasyBlueCards)
console.log('allEasyBrownCards >', allEasyBrownCards)
//
console.log('allNormalGreenCards >', allNormalGreenCards)
console.log('allNormalBlueCards >', allNormalBlueCards)
console.log('allNormalBrownCards >', allNormalBrownCards)
//
console.log('allHardGreenCards >', allHardGreenCards)
console.log('allHardBlueCards >', allHardBlueCards)
console.log('allHardBrownCards >', allHardBrownCards)
//
