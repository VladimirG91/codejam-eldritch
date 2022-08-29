import difficulties from './data/difficulties.js'
import ancientsData from './data/ancients.js'
import allBlueCards from './data/mythicCards/blue/index.js'
import allBrownCards from './data/mythicCards/brown/index.js'
import allGreenCards from './data/mythicCards/green/index.js'
import playList from './playList.js'

console.log(
  '  Здравствуйте! После выбора карты древнего и уровня сложности, обязательно нажмите кнопку SHUFFLE=)\n Наслаждайтесь музыкой!=)'
)

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
// азатот и шубнигуррат
let azathothFirstStage = []
let azathothSecondStage = []
let azathothThirdStage = []
let arrAzathoth = []
// ктулху
let cthulhuFirstStage = []
let cthulhuSecondStage = []
let cthulhuThirdStage = []
let arrСthulhu = []
// йог-сотот
let iogSothothFirstStage = []
let iogSothothSecondStage = []
let iogSothothThirdStage = []
let arrIogSothoth = []

// ==========функция шафл ======================
shuffleBtn.addEventListener('click', () => {
  deckBtn.classList.remove('hide')
  // устанавливаем значения счетчика по умолчанию
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
  //========================= Если выбран EASIEST LVL========================
  let green = shuffleCards(allNormalGreenCards)
  let greenPop = green.pop()
  let easiestLvlGreenCards = [...allEasyGreenCards, greenPop]
  let shuffledEasiestLvlGreenCards = shuffleCards(easiestLvlGreenCards)
  let shuffledEasiestLvlBlueCards = shuffleCards(allEasyBlueCards)
  let brown = shuffleCards(allNormalBrownCards)
  let brownPop = []
  for (let i = 0; i < 4; i++) {
    brownPop.push(brown.pop())
  }
  let easiestLvlBrownCards = [...allEasyBrownCards, ...brown]
  let shuffledEasiestLvlBrownCards = shuffleCards(easiestLvlBrownCards)
  //азатот и шуб-ниггурат
  if (
    (ancientImgList[0].classList.contains('active') ||
      ancientImgList[3].classList.contains('active')) &&
    difficulty[0].classList.contains('act')
  ) {
    azathothFirstStage = []
    azathothSecondStage = []
    azathothThirdStage = []
    for (let i = 0; i < 1; i++) {
      azathothFirstStage.push(shuffledEasiestLvlGreenCards.pop())
      azathothFirstStage.push(shuffledEasiestLvlBlueCards.pop())
      azathothSecondStage.push(shuffledEasiestLvlBlueCards.pop())
    }
    for (let i = 0; i < 2; i++) {
      azathothFirstStage.push(shuffledEasiestLvlBrownCards.pop())
      azathothSecondStage.push(shuffledEasiestLvlBrownCards.pop())
      azathothThirdStage.push(shuffledEasiestLvlGreenCards.pop())
    }
    for (let i = 0; i < 3; i++) {
      azathothSecondStage.push(shuffledEasiestLvlGreenCards.pop())
    }
    for (let i = 0; i < 4; i++) {
      azathothThirdStage.push(shuffledEasiestLvlBrownCards.pop())
    }
  }
  // ктулху
  if (
    ancientImgList[1].classList.contains('active') &&
    difficulty[0].classList.contains('act')
  ) {
    cthulhuFirstStage = []
    cthulhuSecondStage = []
    cthulhuThirdStage = []
    for (let i = 0; i < 1; i++) {
      cthulhuSecondStage.push(shuffledEasiestLvlGreenCards.pop())
    }
    for (let i = 0; i < 2; i++) {
      cthulhuFirstStage.push(shuffledEasiestLvlBrownCards.pop())
      cthulhuFirstStage.push(shuffledEasiestLvlBlueCards.pop())
    }
    for (let i = 0; i < 3; i++) {
      cthulhuSecondStage.push(shuffledEasiestLvlBrownCards.pop())
      cthulhuThirdStage.push(shuffledEasiestLvlGreenCards.pop())
    }
    for (let i = 0; i < 4; i++) {
      cthulhuThirdStage.push(shuffledEasiestLvlBrownCards.pop())
    }
  }
  // йогсотот
  if (
    ancientImgList[2].classList.contains('active') &&
    difficulty[0].classList.contains('act')
  ) {
    iogSothothFirstStage = []
    iogSothothSecondStage = []
    iogSothothThirdStage = []

    for (let i = 0; i < 1; i++) {
      iogSothothFirstStage.push(shuffledEasiestLvlBlueCards.pop())
      iogSothothSecondStage.push(shuffledEasiestLvlBlueCards.pop())
    }
    for (let i = 0; i < 2; i++) {
      iogSothothFirstStage.push(shuffledEasiestLvlBrownCards.pop())
      iogSothothSecondStage.push(shuffledEasiestLvlGreenCards.pop())
    }
    for (let i = 0; i < 3; i++) {
      iogSothothSecondStage.push(shuffledEasiestLvlBrownCards.pop())
      iogSothothThirdStage.push(shuffledEasiestLvlGreenCards.pop())
    }
    for (let i = 0; i < 4; i++) {
      iogSothothThirdStage.push(shuffledEasiestLvlBrownCards.pop())
    }
  }

  //========================= Если выбран EASY LVL========================
  let easyLvlGreenCards = [...allEasyGreenCards, ...allNormalGreenCards]
  let shuffledEasyLvlGreenCards = shuffleCards(easyLvlGreenCards)
  let easyLvlBlueCards = [...allEasyBlueCards, ...allNormalBlueCards]
  let shuffledEasyLvlBlueCards = shuffleCards(easyLvlBlueCards)
  let easyLvlBrownCards = [...allEasyBrownCards, ...allNormalBrownCards]
  let shuffledEasyLvlBrownCards = shuffleCards(easyLvlBrownCards)
  //азатот и шуб-ниггурат
  if (
    (ancientImgList[0].classList.contains('active') ||
      ancientImgList[3].classList.contains('active')) &&
    difficulty[1].classList.contains('act')
  ) {
    azathothFirstStage = []
    azathothSecondStage = []
    azathothThirdStage = []
    for (let i = 0; i < 1; i++) {
      azathothFirstStage.push(shuffledEasyLvlGreenCards.pop())
      azathothFirstStage.push(shuffledEasyLvlBlueCards.pop())
      azathothSecondStage.push(shuffledEasyLvlBlueCards.pop())
    }
    for (let i = 0; i < 2; i++) {
      azathothFirstStage.push(shuffledEasyLvlBrownCards.pop())
      azathothSecondStage.push(shuffledEasyLvlBrownCards.pop())
      azathothThirdStage.push(shuffledEasyLvlGreenCards.pop())
    }
    for (let i = 0; i < 3; i++) {
      azathothSecondStage.push(shuffledEasyLvlGreenCards.pop())
    }
    for (let i = 0; i < 4; i++) {
      azathothThirdStage.push(shuffledEasyLvlBrownCards.pop())
    }
  }
  // ктулху
  if (
    ancientImgList[1].classList.contains('active') &&
    difficulty[1].classList.contains('act')
  ) {
    cthulhuFirstStage = []
    cthulhuSecondStage = []
    cthulhuThirdStage = []
    for (let i = 0; i < 1; i++) {
      cthulhuSecondStage.push(shuffledEasyLvlGreenCards.pop())
    }
    for (let i = 0; i < 2; i++) {
      cthulhuFirstStage.push(shuffledEasyLvlBrownCards.pop())
      cthulhuFirstStage.push(shuffledEasyLvlBlueCards.pop())
    }
    for (let i = 0; i < 3; i++) {
      cthulhuSecondStage.push(shuffledEasyLvlBrownCards.pop())
      cthulhuThirdStage.push(shuffledEasyLvlGreenCards.pop())
    }
    for (let i = 0; i < 4; i++) {
      cthulhuThirdStage.push(shuffledEasyLvlBrownCards.pop())
    }
  }
  // йогсотот
  if (
    ancientImgList[2].classList.contains('active') &&
    difficulty[1].classList.contains('act')
  ) {
    iogSothothFirstStage = []
    iogSothothSecondStage = []
    iogSothothThirdStage = []
    for (let i = 0; i < 1; i++) {
      iogSothothFirstStage.push(shuffledEasyLvlBlueCards.pop())
      iogSothothSecondStage.push(shuffledEasyLvlBlueCards.pop())
    }
    for (let i = 0; i < 2; i++) {
      iogSothothFirstStage.push(shuffledEasyLvlBrownCards.pop())
      iogSothothSecondStage.push(shuffledEasyLvlGreenCards.pop())
    }
    for (let i = 0; i < 3; i++) {
      iogSothothSecondStage.push(shuffledEasyLvlBrownCards.pop())
      iogSothothThirdStage.push(shuffledEasyLvlGreenCards.pop())
    }
    for (let i = 0; i < 4; i++) {
      iogSothothThirdStage.push(shuffledEasyLvlBrownCards.pop())
    }
  }

  //==================== Если выбран NORMAL LVL  ==================
  let shuffledAllGreenArr = shuffleCards(allGreenCards)
  let shuffledAllBrownArr = shuffleCards(allBrownCards)
  let shuffledAllBlueArr = shuffleCards(allBlueCards)
  //азатот и шуб-ниггурат
  if (
    (ancientImgList[0].classList.contains('active') ||
      ancientImgList[3].classList.contains('active')) &&
    difficulty[2].classList.contains('act')
  ) {
    azathothFirstStage = []
    azathothSecondStage = []
    azathothThirdStage = []
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
  }
  // ктулху
  if (
    ancientImgList[1].classList.contains('active') &&
    difficulty[2].classList.contains('act')
  ) {
    cthulhuFirstStage = []
    cthulhuSecondStage = []
    cthulhuThirdStage = []
    for (let i = 0; i < 1; i++) {
      cthulhuSecondStage.push(shuffledAllGreenArr.pop())
    }
    for (let i = 0; i < 2; i++) {
      cthulhuFirstStage.push(shuffledAllBrownArr.pop())
      cthulhuFirstStage.push(shuffledAllBlueArr.pop())
    }
    for (let i = 0; i < 3; i++) {
      cthulhuSecondStage.push(shuffledAllBrownArr.pop())
      cthulhuThirdStage.push(shuffledAllGreenArr.pop())
    }
    for (let i = 0; i < 4; i++) {
      cthulhuThirdStage.push(shuffledAllBrownArr.pop())
    }
  }
  // йогсотот
  if (
    ancientImgList[2].classList.contains('active') &&
    difficulty[2].classList.contains('act')
  ) {
    iogSothothFirstStage = []
    iogSothothSecondStage = []
    iogSothothThirdStage = []
    for (let i = 0; i < 1; i++) {
      iogSothothFirstStage.push(shuffledAllBlueArr.pop())
      iogSothothSecondStage.push(shuffledAllBlueArr.pop())
    }
    for (let i = 0; i < 2; i++) {
      iogSothothFirstStage.push(shuffledAllBrownArr.pop())
      iogSothothSecondStage.push(shuffledAllGreenArr.pop())
    }
    for (let i = 0; i < 3; i++) {
      iogSothothSecondStage.push(shuffledAllBrownArr.pop())
      iogSothothThirdStage.push(shuffledAllGreenArr.pop())
    }
    for (let i = 0; i < 4; i++) {
      iogSothothThirdStage.push(shuffledAllBrownArr.pop())
    }
  }
  //========================= Если выбран HARD LVL========================
  let hardLvlGreenCards = [...allHardGreenCards, ...allNormalGreenCards]
  let shuffledHardLvlGreenCards = shuffleCards(hardLvlGreenCards)
  let hardLvlBlueCards = [...allHardBlueCards, ...allNormalBlueCards]
  let shuffledHardLvlBlueCards = shuffleCards(hardLvlBlueCards)
  let hardLvlBrownCards = [...allHardBrownCards, ...allNormalBrownCards]
  let shuffledHardLvlBrownCards = shuffleCards(hardLvlBrownCards)
  //азатот и шуб-ниггурат
  if (
    (ancientImgList[0].classList.contains('active') ||
      ancientImgList[3].classList.contains('active')) &&
    difficulty[3].classList.contains('act')
  ) {
    azathothFirstStage = []
    azathothSecondStage = []
    azathothThirdStage = []
    for (let i = 0; i < 1; i++) {
      azathothFirstStage.push(shuffledHardLvlGreenCards.pop())
      azathothFirstStage.push(shuffledHardLvlBlueCards.pop())
      azathothSecondStage.push(shuffledHardLvlBlueCards.pop())
    }
    for (let i = 0; i < 2; i++) {
      azathothFirstStage.push(shuffledHardLvlBrownCards.pop())
      azathothSecondStage.push(shuffledHardLvlBrownCards.pop())
      azathothThirdStage.push(shuffledHardLvlGreenCards.pop())
    }
    for (let i = 0; i < 3; i++) {
      azathothSecondStage.push(shuffledHardLvlGreenCards.pop())
    }
    for (let i = 0; i < 4; i++) {
      azathothThirdStage.push(shuffledHardLvlBrownCards.pop())
    }
  }
  // ктулху
  if (
    ancientImgList[1].classList.contains('active') &&
    difficulty[3].classList.contains('act')
  ) {
    cthulhuFirstStage = []
    cthulhuSecondStage = []
    cthulhuThirdStage = []
    for (let i = 0; i < 1; i++) {
      cthulhuSecondStage.push(shuffledHardLvlGreenCards.pop())
    }
    for (let i = 0; i < 2; i++) {
      cthulhuFirstStage.push(shuffledHardLvlBrownCards.pop())
      cthulhuFirstStage.push(shuffledHardLvlBlueCards.pop())
    }
    for (let i = 0; i < 3; i++) {
      cthulhuSecondStage.push(shuffledHardLvlBrownCards.pop())
      cthulhuThirdStage.push(shuffledHardLvlGreenCards.pop())
    }
    for (let i = 0; i < 4; i++) {
      cthulhuThirdStage.push(shuffledHardLvlBrownCards.pop())
    }
  }
  // йогсотот
  if (
    ancientImgList[2].classList.contains('active') &&
    difficulty[3].classList.contains('act')
  ) {
    iogSothothFirstStage = []
    iogSothothSecondStage = []
    iogSothothThirdStage = []
    for (let i = 0; i < 1; i++) {
      iogSothothFirstStage.push(shuffledHardLvlBlueCards.pop())
      iogSothothSecondStage.push(shuffledHardLvlBlueCards.pop())
    }
    for (let i = 0; i < 2; i++) {
      iogSothothFirstStage.push(shuffledHardLvlBrownCards.pop())
      iogSothothSecondStage.push(shuffledHardLvlGreenCards.pop())
    }
    for (let i = 0; i < 3; i++) {
      iogSothothSecondStage.push(shuffledHardLvlBrownCards.pop())
      iogSothothThirdStage.push(shuffledHardLvlGreenCards.pop())
    }
    for (let i = 0; i < 4; i++) {
      iogSothothThirdStage.push(shuffledHardLvlBrownCards.pop())
    }
  }
  //========================= Если выбран HARDEST LVL========================
  let greenHardest = shuffleCards(allNormalGreenCards)
  let greenPopHardest = greenHardest.pop()
  let hardesttLvlGreenCards = [...allHardGreenCards, greenPopHardest]
  let shuffledHardestLvlGreenCards = shuffleCards(hardesttLvlGreenCards)
  let shuffledHardestLvlBlueCards = shuffleCards(allHardBlueCards)
  let brownHardest = shuffleCards(allNormalBrownCards)
  let brownPopHardest = []
  for (let i = 0; i < 4; i++) {
    brownPopHardest.push(brownHardest.pop())
  }
  let hardestLvlBrownCards = [...allHardBrownCards, ...brownPopHardest]
  let shuffledHardestLvlBrownCards = shuffleCards(hardestLvlBrownCards)
  //азатот и шуб-ниггурат
  if (
    (ancientImgList[0].classList.contains('active') ||
      ancientImgList[3].classList.contains('active')) &&
    difficulty[4].classList.contains('act')
  ) {
    azathothFirstStage = []
    azathothSecondStage = []
    azathothThirdStage = []
    for (let i = 0; i < 1; i++) {
      azathothFirstStage.push(shuffledHardestLvlGreenCards.pop())
      azathothFirstStage.push(shuffledHardestLvlBlueCards.pop())
      azathothSecondStage.push(shuffledHardestLvlBlueCards.pop())
    }
    for (let i = 0; i < 2; i++) {
      azathothFirstStage.push(shuffledHardestLvlBrownCards.pop())
      azathothSecondStage.push(shuffledHardestLvlBrownCards.pop())
      azathothThirdStage.push(shuffledHardestLvlGreenCards.pop())
    }
    for (let i = 0; i < 3; i++) {
      azathothSecondStage.push(shuffledHardestLvlGreenCards.pop())
    }
    for (let i = 0; i < 4; i++) {
      azathothThirdStage.push(shuffledHardestLvlBrownCards.pop())
    }
  }
  // ктулху
  if (
    ancientImgList[1].classList.contains('active') &&
    difficulty[4].classList.contains('act')
  ) {
    cthulhuFirstStage = []
    cthulhuSecondStage = []
    cthulhuThirdStage = []
    for (let i = 0; i < 1; i++) {
      cthulhuSecondStage.push(shuffledHardestLvlGreenCards.pop())
    }
    for (let i = 0; i < 2; i++) {
      cthulhuFirstStage.push(shuffledHardestLvlBrownCards.pop())
      cthulhuFirstStage.push(shuffledHardestLvlBlueCards.pop())
    }
    for (let i = 0; i < 3; i++) {
      cthulhuSecondStage.push(shuffledHardestLvlBrownCards.pop())
      cthulhuThirdStage.push(shuffledHardestLvlGreenCards.pop())
    }
    for (let i = 0; i < 4; i++) {
      cthulhuThirdStage.push(shuffledHardestLvlBrownCards.pop())
    }
  }
  // йогсотот
  if (
    ancientImgList[2].classList.contains('active') &&
    difficulty[4].classList.contains('act')
  ) {
    iogSothothFirstStage = []
    iogSothothSecondStage = []
    iogSothothThirdStage = []
    for (let i = 0; i < 1; i++) {
      iogSothothFirstStage.push(shuffledHardestLvlBlueCards.pop())
      iogSothothSecondStage.push(shuffledHardestLvlBlueCards.pop())
    }
    for (let i = 0; i < 2; i++) {
      iogSothothFirstStage.push(shuffledHardestLvlBrownCards.pop())
      iogSothothSecondStage.push(shuffledHardestLvlGreenCards.pop())
    }
    for (let i = 0; i < 3; i++) {
      iogSothothSecondStage.push(shuffledHardestLvlBrownCards.pop())
      iogSothothThirdStage.push(shuffledHardestLvlGreenCards.pop())
    }
    for (let i = 0; i < 4; i++) {
      iogSothothThirdStage.push(shuffledHardestLvlBrownCards.pop())
    }
  }
  arrAzathoth = [
    shuffleCards(azathothThirdStage),
    shuffleCards(azathothSecondStage),
    shuffleCards(azathothFirstStage),
  ]
  arrСthulhu = [
    shuffleCards(cthulhuThirdStage),
    shuffleCards(cthulhuSecondStage),
    shuffleCards(cthulhuFirstStage),
  ]
  arrIogSothoth = [
    shuffleCards(iogSothothThirdStage),
    shuffleCards(iogSothothSecondStage),
    shuffleCards(iogSothothFirstStage),
  ]
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
  let countArr = [countGreen, countBrown, countBlue]
  return countArr
}

const lastCard = document.querySelector('.last-card')
//================== кнопка-карта===================

function greenShadow() {
  lastCard.classList.add('shadow_green')
}
function brownShadow() {
  lastCard.classList.add('shadow_brown')
}
function blueShadow() {
  lastCard.classList.add('shadow_blue')
}
function DelShadow() {
  lastCard.classList.remove('shadow_green')
  lastCard.classList.remove('shadow_brown')
  lastCard.classList.remove('shadow_blue')
}

deckBtn.addEventListener('click', () => {
  // азатот или шабниггурат
  if (
    ancientImgList[0].classList.contains('active') ||
    ancientImgList[3].classList.contains('active')
  ) {
    function ifColor() {
      if (lastElement.color == 'green') {
        setTimeout(greenShadow, 100)
      } else if (lastElement.color == 'brown') {
        setTimeout(brownShadow, 100)
      } else if (lastElement.color == 'blue') {
        setTimeout(blueShadow, 100)
      }
    }
    let lastElement
    if (arrAzathoth[2].length != 0) {
      lastCard.classList.remove('hide')
      lastElement = arrAzathoth[2].pop()
      lastCard.style.backgroundImage = `url('${lastElement.cardFace}')`
      DelShadow()
      ifColor()
      for (let i = 0; i < 3; i++) {
        allDots[i].textContent = countFunc(arrAzathoth[2])[i]
      }
    } else if (arrAzathoth[2].length == 0 && arrAzathoth[1].length != 0) {
      lastCard.classList.remove('hide')
      lastElement = arrAzathoth[1].pop()
      lastCard.style.backgroundImage = `url('${lastElement.cardFace}')`
      DelShadow()
      ifColor()
      for (let i = 3; i < 6; i++) {
        allDots[i].textContent = countFunc(arrAzathoth[1])[i - 3]
      }
    } else if (arrAzathoth[1].length == 0 && arrAzathoth[0].length != 0) {
      lastCard.classList.remove('hide')
      lastElement = arrAzathoth[0].pop()
      lastCard.style.backgroundImage = `url('${lastElement.cardFace}')`
      DelShadow()
      ifColor()
      for (let i = 6; i < 9; i++) {
        allDots[i].textContent = countFunc(arrAzathoth[0])[i - 6]
      }
    } else if (arrAzathoth[0].length == 0) {
      lastCard.classList.add('hide')
    }
  }
  // ктулху
  if (ancientImgList[1].classList.contains('active')) {
    function ifColor() {
      if (lastElement.color == 'green') {
        setTimeout(greenShadow, 100)
      } else if (lastElement.color == 'brown') {
        setTimeout(brownShadow, 100)
      } else if (lastElement.color == 'blue') {
        setTimeout(blueShadow, 100)
      }
    }
    let lastElement
    if (arrСthulhu[2].length != 0) {
      lastCard.classList.remove('hide')
      lastElement = arrСthulhu[2].pop()
      lastCard.style.backgroundImage = `url('${lastElement.cardFace}')`
      DelShadow()
      ifColor()
      for (let i = 0; i < 3; i++) {
        allDots[i].textContent = countFunc(arrСthulhu[2])[i]
      }
    } else if (arrСthulhu[2].length == 0 && arrСthulhu[1].length != 0) {
      lastCard.classList.remove('hide')
      lastElement = arrСthulhu[1].pop()
      lastCard.style.backgroundImage = `url('${lastElement.cardFace}')`
      DelShadow()
      ifColor()
      for (let i = 3; i < 6; i++) {
        allDots[i].textContent = countFunc(arrСthulhu[1])[i - 3]
      }
    } else if (arrСthulhu[1].length == 0 && arrСthulhu[0].length != 0) {
      lastCard.classList.remove('hide')
      lastElement = arrСthulhu[0].pop()
      lastCard.style.backgroundImage = `url('${lastElement.cardFace}')`
      DelShadow()
      ifColor()
      for (let i = 6; i < 9; i++) {
        allDots[i].textContent = countFunc(arrСthulhu[0])[i - 6]
      }
    } else if (arrСthulhu[0].length == 0) {
      lastCard.classList.add('hide')
    }
  }
  // йогсотот
  if (ancientImgList[2].classList.contains('active')) {
    function ifColor() {
      if (lastElement.color == 'green') {
        setTimeout(greenShadow, 100)
      } else if (lastElement.color == 'brown') {
        setTimeout(brownShadow, 100)
      } else if (lastElement.color == 'blue') {
        setTimeout(blueShadow, 100)
      }
    }
    let lastElement
    if (arrIogSothoth[2].length != 0) {
      lastCard.classList.remove('hide')
      lastElement = arrIogSothoth[2].pop()
      lastCard.style.backgroundImage = `url('${lastElement.cardFace}')`
      DelShadow()
      ifColor()
      for (let i = 0; i < 3; i++) {
        allDots[i].textContent = countFunc(arrIogSothoth[2])[i]
      }
    } else if (arrIogSothoth[2].length == 0 && arrIogSothoth[1].length != 0) {
      lastCard.classList.remove('hide')
      lastElement = arrIogSothoth[1].pop()
      lastCard.style.backgroundImage = `url('${lastElement.cardFace}')`
      DelShadow()
      ifColor()
      for (let i = 3; i < 6; i++) {
        allDots[i].textContent = countFunc(arrIogSothoth[1])[i - 3]
      }
    } else if (arrIogSothoth[1].length == 0 && arrIogSothoth[0].length != 0) {
      lastCard.classList.remove('hide')
      lastElement = arrIogSothoth[0].pop()
      lastCard.style.backgroundImage = `url('${lastElement.cardFace}')`
      DelShadow()
      ifColor()
      for (let i = 6; i < 9; i++) {
        allDots[i].textContent = countFunc(arrIogSothoth[0])[i - 6]
      }
    } else if (arrIogSothoth[0].length == 0) {
      lastCard.classList.add('hide')
    }
  }
})

// слудующий шаг запушить все в 1 массив и методом поп удалять при нажатии на дукбт, выводя в ласткард
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
  }
}

// получаем все карты
const allCards = [...allBlueCards, ...allBrownCards, ...allGreenCards]

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

// new player

const player = document.querySelector('.player'),
  musicImg = document.querySelector('.img-area img'),
  musicName = document.querySelector('.song-details .nameSong'),
  mainAudio = document.querySelector('#main-audio'),
  playPauseBtn = document.querySelector('.play-pause'),
  prevBtn = document.querySelector('#prev'),
  nextBtn = document.querySelector('#next'),
  progressArea = document.querySelector('.progress-area'),
  progressBar = document.querySelector('.progress-bar'),
  musicList = document.querySelector('.music-list'),
  showMoreBtn = document.querySelector('#more-music'),
  hideMusicBtn = document.querySelector('#close'),
  topBar = document.querySelector('.top-bar'),
  controls = document.querySelector('.controls')

let musicIndex = 0

// после загрузки страницы вызываем функцию загрущки музыки
window.addEventListener('load', () => {
  loadMusic(musicIndex)
})

// функция загрузки музыки, меняет тайтл, картинку, сорс песни
function loadMusic(indexNum) {
  musicName.innerText = playList[indexNum].title
  musicImg.src = playList[indexNum].img
  mainAudio.src = playList[indexNum].src
}
// запускает песню, добавляет класс paused, меняем значок кнопки play
function playMusic() {
  player.classList.add('paused')
  playPauseBtn.querySelector('i').innerText = 'pause'
  mainAudio.play()
  playingSong()
}
// останавливает песню, убирает класс paused, меняем значок кнопки play
function pauseMusic() {
  player.classList.remove('paused')
  playPauseBtn.querySelector('i').innerText = 'play_arrow'
  mainAudio.pause()
  playingSong()
}
// переключение на следующую композицию, после последней песни включается первая
function nextMusic() {
  musicIndex++
  if (musicIndex > playList.length - 1) {
    musicIndex = 0
  }
  loadMusic(musicIndex)
  playMusic()
  playingSong()
}
// переключение на предыдущую композицию, после первой песни включается последняя
function prevMusic() {
  musicIndex--
  if (musicIndex < 0) {
    musicIndex = playList.length - 1
  }
  loadMusic(musicIndex)
  playMusic()
  playingSong()
}

// при клике на кнопку плей, проверяем содержит ли player класс paused, если да, тогда вызвваем ф-ю паузы, если нет тогда запускаем песню
playPauseBtn.addEventListener('click', () => {
  const isMusicPaused = player.classList.contains('paused')
  isMusicPaused ? pauseMusic() : playMusic()
  playingSong()
})

// при клике на кнопку следующая песня
nextBtn.addEventListener('click', () => {
  nextMusic()
})

// при клике на кнопку предыдущая песня
prevBtn.addEventListener('click', () => {
  prevMusic()
})

// меняем прогрессбар при воспроизведении музыки

mainAudio.addEventListener('timeupdate', (e) => {
  const currentTime = e.target.currentTime
  const duration = e.target.duration
  let progressWidth = (currentTime / duration) * 100
  progressBar.style.width = `${progressWidth}%`
  let musicCurrentTime = document.querySelector('.current'),
    musicDuration = document.querySelector('.duration')

  mainAudio.addEventListener('loadeddata', () => {
    // находим длительность песни
    let audioDuration = mainAudio.duration
    let min = Math.floor(audioDuration / 60)
    let sec = Math.floor(audioDuration % 60)
    // если меньше 10, добиваем 0, чтобы было красиво)
    if (sec < 10) {
      sec = `0${sec}`
    }
    if (min < 10) {
      min = `0${min}`
    }
    musicDuration.innerText = `${min}:${sec}`
  })

  let currentMin = Math.floor(currentTime / 60)
  let currentSec = Math.floor(currentTime % 60)
  if (currentSec < 10) {
    currentSec = `0${currentSec}`
  }
  if (currentMin < 10) {
    currentMin = `0${currentMin}`
  }
  musicCurrentTime.innerText = `${currentMin}:${currentSec}`
})

// функция перемотки песни
progressArea.addEventListener('click', (e) => {
  let progressWidthval = progressArea.clientWidth // находим ширину прогрессбара
  let clickedOffsetX = e.offsetX // получем знамение по оси Х
  let songDuration = mainAudio.duration // общая длительность песни
  // устанавливаем значение текущего времени песни
  mainAudio.currentTime = (clickedOffsetX / progressWidthval) * songDuration
  playMusic()
})

// Autoplay
mainAudio.addEventListener('ended', nextMusic)

// создаем массив классов, для скрытия
let arr = [topBar, musicImg, musicName, progressArea, controls]

// добавляем класс show плейлисту, класс hide массиву
showMoreBtn.addEventListener('click', () => {
  musicList.classList.toggle('show')
  arr.forEach((element) => {
    element.classList.add('hide')
  })
})

// убираем класс show, hide
hideMusicBtn.addEventListener('click', () => {
  musicList.classList.toggle('show')
  arr.forEach((element) => {
    element.classList.remove('hide')
  })
})

//
const ulTag = document.querySelector('ul')

// циклом создаем элементы li используя шаблонную строку, помещаем созданные элемент в конец ul
for (let i = 0; i < playList.length; i++) {
  let liTag = `<li class="playlist-element el-${i}" li-index="${i}" >
  <div class="row1">
    <span>${playList[i].title}</span>
    <span class="audio-duration ${playList[i].id}">${playList[i].duration}</span>
    <audio id="${playList[i].id}" src="${playList[i].src}"></audio>
  </div>
</li>`
  ulTag.insertAdjacentHTML('beforeend', liTag)
}
//
function playingSong() {
  const allLiTag = document.querySelectorAll('.playlist-element')

  for (let j = 0; j < allLiTag.length; j++) {
    let audioTag = allLiTag[j].querySelector('.audio-duration')

    if (allLiTag[j].classList.contains('playing')) {
      allLiTag[j].classList.remove('playing')
    }
    if (allLiTag[j].getAttribute('li-index') == musicIndex) {
      allLiTag[j].classList.add('playing')
    }
  }
}

const alLi = document.querySelectorAll('.playlist-element')
// вешаем листнеров на liшки
for (let k = 0; k < alLi.length; k++) {
  alLi[k].addEventListener('click', () => {
    musicIndex = k
    loadMusic(musicIndex)
    playMusic()
  })
}

// делаем скрытие картинки альбома
const hideImg = document.querySelector('.arrow_down')
const imgArea = document.querySelector('.img-area')
hideImg.addEventListener('click', () => {
  imgArea.classList.toggle('none')
  hideImg.classList.toggle('blue_color')
})

// volume
const volume = document.querySelector('.controls input')
volume.addEventListener('change', () => {
  mainAudio.volume = volume.value / 100
  if (volume.value == 0) {
    volume_iconBtn.innerText = 'volume_off'
    volume_iconBtn.classList.add('mute')
    volume_iconBtn.classList.add('blue_color')
  } else {
    volume_iconBtn.innerText = 'volume_up'
    volume_iconBtn.classList.remove('blue_color')
  }
})

// volume mute/unmute
const volume_iconBtn = document.querySelector('#volume-icon')

volume_iconBtn.onclick = function () {
  if (mainAudio.muted == false) {
    mainAudio.muted = true
    volume_iconBtn.innerText = 'volume_off'
    volume_iconBtn.classList.add('blue_color')
    volume.value = 0
  } else {
    mainAudio.muted = false
    volume_iconBtn.innerText = 'volume_up'
    volume.value = 50
    volume_iconBtn.classList.remove('blue_color')
  }
}
