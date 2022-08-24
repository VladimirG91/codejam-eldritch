import difficulties from './data/difficulties'
import ancientsData from './data/ancients'
import allBlueCards from './data/mythicCards/blue/index'
import allBrownCards from './data/mythicCards/brown/index'
import allGreenCards from './data/mythicCards/green/index'

// console.log('dificulties >', difficulties)
// console.log('ancientsData >', ancientsData)

const ancients = document.querySelector('.ancients')
const cards = document.querySelector('.cards')

// функция рандомайзер
function numRandomized() {
  return 0.5 - Math.random()
}
function shuffleCards(arr) {
  return [...arr].sort(numRandomized)
}

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
const deckBtn = document.querySelector('.deck')

let azathothCount = [1, 2, 1, 3, 2, 1, 2, 4, 0]
let cthulhuCount = [0, 2, 2, 1, 3, 0, 3, 4, 0]
let iogSothothCount = [0, 2, 1, 2, 3, 1, 3, 4, 0]
let shubNiggurathCount = [1, 2, 1, 3, 2, 1, 2, 4, 0]

let azathothFirstStage = []
let azathothSecondStage = []
let azathothThirdStage = []
// ==========функция шафл ======================
shuffleBtn.addEventListener('click', () => {
  // шафл грин
  let shuffledAllGreenArr = shuffleCards(allGreenCards),
    shuffledEasyGreenArr = shuffleCards(allEasyGreenCards),
    shuffledNormalGreenArr = shuffleCards(allNormalGreenCards),
    shuffledHardGreenArr = shuffleCards(allHardGreenCards)
  // шафл браун
  let shuffledAllBrownArr = shuffleCards(allBrownCards),
    shuffledEasyBrownArr = shuffleCards(allEasyBrownCards),
    shuffledNormalBrownArr = shuffleCards(allNormalBrownCards),
    shuffledHardBrownArr = shuffleCards(allHardBrownCards)
  // шафл блю
  let shuffledAllBlueArr = shuffleCards(allBlueCards),
    shuffledEasyBlueArr = shuffleCards(allEasyBlueCards),
    shuffledNormalBlueArr = shuffleCards(allNormalBlueCards),
    shuffledHardBlueArr = shuffleCards(allHardBlueCards)

  deckBtn.classList.remove('hide')
  if (
    ancientImgList[0].classList.contains('active') &&
    difficulty[2].classList.contains('act')
  ) {
    for (let i = 0; i < 1; i++) {
      azathothFirstStage.push(shuffledAllGreenArr.pop())
      azathothFirstStage.push(shuffledAllBlueArr.pop())
      azathothSecondStage.push(shuffledAllBlueArr.pop())
    }
    for (let i = 0; i < 2; i++) {
      azathothFirstStage.push(shuffledAllBrownArr.pop())
      azathothSecondStage.push(shuffledAllBrownArr.pop())
      azathothThirdStage.push(shuffledAllGreenArr.pop())
    }
    for (let i = 0; i < 3; i++) {
      azathothSecondStage.push(shuffledAllGreenArr.pop())
    }
    for (let i = 0; i < 4; i++) {
      azathothThirdStage.push(shuffledAllBrownArr.pop())
    }
    console.log('azathothFirstStage', azathothFirstStage)
    console.log('azathothSecondStage', azathothSecondStage)
    console.log('azathothThirdStage', azathothThirdStage)
  }
})

// функция подсчета карт в стэйжах
function countFunc(arr) {
  let countGreen = 0
  let countBrown = 0
  let countBlue = 0

  arr.forEach((el) => {
    if (el['color'] == 'green') {
      countGreen++
    }
    if (el['color'] == 'brown') {
      countBrown++
    }
    if (el['color'] == 'blue') {
      countBlue++
    }
  })

  console.log(countGreen)
  console.log(countBrown)
  console.log(countBlue)
}

deckBtn.addEventListener('click', () => {
  if (ancientImgList[0].classList.contains('active')) {
    countFunc(azathothFirstStage)
    // countFunc(azathothSecondStage),
    // countFunc(azathothThirdStage)
  }
  if (azathothFirstStage.length > 0) {
    azathothFirstStage.pop()
    console.log('length', azathothFirstStage.length)
  }
})
// слудующий шаг запушить все в 1 массив и методом поп удалять при нажатии на дукбтн
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

console.log('allGreenCards >', allGreenCards)
console.log('allBlueCards >', allBlueCards)
console.log('allBrownCards >', allBrownCards)
