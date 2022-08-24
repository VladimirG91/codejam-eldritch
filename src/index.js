import difficulties from './data/difficulties'
import ancientsData from './data/ancients'
import allBlueCards from './data/mythicCards/blue/index'
import allBrownCards from './data/mythicCards/brown/index'
import allGreenCards from './data/mythicCards/green/index'

console.log('dificulties >', difficulties)
console.log('ancientsData >', ancientsData)

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

let azathothCount = [1, 2, 1, 3, 2, 1, 2, 4, 0]
let cthulhuCount = [0, 2, 2, 1, 3, 0, 3, 4, 0]
let iogSothothCount = [0, 2, 1, 2, 3, 1, 3, 4, 0]
let shubNiggurathCount = [1, 2, 1, 3, 2, 1, 2, 4, 0]

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
    if (ancientImgList[0].classList.contains('active')) {
      for (let k = 0; k < allDots.length; k++) {
        allDots[k].textContent = azathothCount[k]
      }
    }
    if (ancientImgList[1].classList.contains('active')) {
      for (let k = 0; k < allDots.length; k++) {
        allDots[k].textContent = cthulhuCount[k]
      }
    }
    if (ancientImgList[2].classList.contains('active')) {
      for (let k = 0; k < allDots.length; k++) {
        allDots[k].textContent = iogSothothCount[k]
      }
    }
    if (ancientImgList[3].classList.contains('active')) {
      for (let k = 0; k < allDots.length; k++) {
        allDots[k].textContent = shubNiggurathCount[k]
      }
    }
  }
}

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

// получаем все карты
const allCards = [...allBlueCards, ...allBrownCards, ...allGreenCards]
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

// let allGreenCards = []
// let allBlueCards = []
// let allBrownCards = []

// allCards.forEach((el) => {
//   if (el.color == 'green') {
//     allGreenCards.push(el)
//   }
//   if (el.color == 'blue') {
//     allBlueCards.push(el)
//   }
//   if (el.color == 'brown') {
//     allBrownCards.push(el)
//   }
// })
console.log('allGreenCards >', allGreenCards)
console.log('allBlueCards >', allBlueCards)
console.log('allBrownCards >', allBrownCards)
function numRandomized() {
  return 0.5 - Math.random()
}
function shuffleCards(arr) {
  return [...arr].sort(numRandomized)
}
