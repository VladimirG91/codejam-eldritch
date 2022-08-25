import difficulties from './data/difficulties'
import ancientsData from './data/ancients'
import allBlueCards from './data/mythicCards/blue/index'
import allBrownCards from './data/mythicCards/brown/index'
import allGreenCards from './data/mythicCards/green/index'

console.log(
  'Здравствуйте, после выбора карты древнего, обязательно нажмите кнопку shuffle=)'
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
    console.log('azathothEasiestFirstStage', azathothFirstStage)
    console.log('azathothEasiestSecondStage', azathothSecondStage)
    console.log('azathothEasiestThirdStage', azathothThirdStage)
  }
  // ктулху
  if (
    ancientImgList[1].classList.contains('active') &&
    difficulty[0].classList.contains('act')
  ) {
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
    console.log('cthulhuEasiestFirstStage', cthulhuFirstStage)
    console.log('cthulhuEasiestSecondStage', cthulhuSecondStage)
    console.log('cthulhuEasiestThirdStage', cthulhuThirdStage)
  }
  // йогсотот
  if (
    ancientImgList[2].classList.contains('active') &&
    difficulty[0].classList.contains('act')
  ) {
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
    console.log('iogSothothEasiestFirstStage', iogSothothFirstStage)
    console.log('iogSothothEasiestSecondStage', iogSothothSecondStage)
    console.log('iogSothothEasiestThirdStage', iogSothothThirdStage)
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
    console.log('azathothEasyFirstStage', azathothFirstStage)
    console.log('azathothEasySecondStage', azathothSecondStage)
    console.log('azathothEasyThirdStage', azathothThirdStage)
  }
  // ктулху
  if (
    ancientImgList[1].classList.contains('active') &&
    difficulty[1].classList.contains('act')
  ) {
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
    console.log('cthulhuEasyFirstStage', cthulhuFirstStage)
    console.log('cthulhuEasySecondStage', cthulhuSecondStage)
    console.log('cthulhuEasyThirdStage', cthulhuThirdStage)
  }
  // йогсотот
  if (
    ancientImgList[2].classList.contains('active') &&
    difficulty[1].classList.contains('act')
  ) {
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
    console.log('iogSothothEasyFirstStage', iogSothothFirstStage)
    console.log('iogSothothEasySecondStage', iogSothothSecondStage)
    console.log('iogSothothEasyThirdStage', iogSothothThirdStage)
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
    console.log('azathothNormalFirstStage', azathothFirstStage)
    console.log('azathothNormalSecondStage', azathothSecondStage)
    console.log('azathothNormalThirdStage', azathothThirdStage)
  }
  // ктулху
  if (
    ancientImgList[1].classList.contains('active') &&
    difficulty[2].classList.contains('act')
  ) {
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
    console.log('cthulhuNormalFirstStage', cthulhuFirstStage)
    console.log('cthulhuNormalSecondStage', cthulhuSecondStage)
    console.log('cthulhuNormalThirdStage', cthulhuThirdStage)
  }
  // йогсотот
  if (
    ancientImgList[2].classList.contains('active') &&
    difficulty[2].classList.contains('act')
  ) {
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
    console.log('iogSothothNormalFirstStage', iogSothothFirstStage)
    console.log('iogSothothNormalSecondStage', iogSothothSecondStage)
    console.log('iogSothothNormalThirdStage', iogSothothThirdStage)
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
    console.log('azathothHardFirstStage', azathothFirstStage)
    console.log('azathothHardSecondStage', azathothSecondStage)
    console.log('azathothHardThirdStage', azathothThirdStage)
  }
  // ктулху
  if (
    ancientImgList[1].classList.contains('active') &&
    difficulty[3].classList.contains('act')
  ) {
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
    console.log('cthulhuHardFirstStage', cthulhuFirstStage)
    console.log('cthulhuHardSecondStage', cthulhuSecondStage)
    console.log('cthulhuHardThirdStage', cthulhuThirdStage)
  }
  // йогсотот
  if (
    ancientImgList[2].classList.contains('active') &&
    difficulty[3].classList.contains('act')
  ) {
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
    console.log('iogSothothHardFirstStage', iogSothothFirstStage)
    console.log('iogSothothHardSecondStage', iogSothothSecondStage)
    console.log('iogSothothHardThirdStage', iogSothothThirdStage)
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
  console.log('brownPopHardest', brownPopHardest)
  let hardestLvlBrownCards = [...allHardBrownCards, ...brownPopHardest]
  let shuffledHardestLvlBrownCards = shuffleCards(hardestLvlBrownCards)
  //азатот и шуб-ниггурат
  if (
    (ancientImgList[0].classList.contains('active') ||
      ancientImgList[3].classList.contains('active')) &&
    difficulty[4].classList.contains('act')
  ) {
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
    console.log('azathothHardestFirstStage', azathothFirstStage)
    console.log('azathothHardestSecondStage', azathothSecondStage)
    console.log('azathothHardestThirdStage', azathothThirdStage)
  }
  // ктулху
  if (
    ancientImgList[1].classList.contains('active') &&
    difficulty[4].classList.contains('act')
  ) {
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
    console.log('cthulhuHardestFirstStage', cthulhuFirstStage)
    console.log('cthulhuHardestSecondStage', cthulhuSecondStage)
    console.log('cthulhuHardestThirdStage', cthulhuThirdStage)
  }
  // йогсотот
  if (
    ancientImgList[2].classList.contains('active') &&
    difficulty[4].classList.contains('act')
  ) {
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
    console.log('iogSothothHardestFirstStage', iogSothothFirstStage)
    console.log('iogSothothHardestSecondStage', iogSothothSecondStage)
    console.log('iogSothothHardestThirdStage', iogSothothThirdStage)
  }
  arrAzathoth = [azathothThirdStage, azathothSecondStage, azathothFirstStage]
  arrСthulhu = [cthulhuThirdStage, cthulhuSecondStage, cthulhuFirstStage]
  arrIogSothoth = [
    iogSothothThirdStage,
    iogSothothSecondStage,
    iogSothothFirstStage,
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

deckBtn.addEventListener('click', () => {
  // азатот или шабниггурат
  if (
    ancientImgList[0].classList.contains('active') ||
    ancientImgList[3].classList.contains('active')
  ) {
    if (arrAzathoth[2].length != 0) {
      lastCard.classList.remove('hide')
      let lastElement = arrAzathoth[2].pop()
      lastCard.style.backgroundImage = `url('${lastElement.cardFace}')`
      for (let i = 0; i < 3; i++) {
        allDots[i].textContent = countFunc(azathothFirstStage)[i]
      }
    }
    if (arrAzathoth[2].length == 0 && arrAzathoth[1].length != 0) {
      lastCard.classList.remove('hide')
      let lastElement = arrAzathoth[1].pop()
      lastCard.style.backgroundImage = `url('${lastElement.cardFace}')`
      for (let i = 3; i < 6; i++) {
        allDots[i].textContent = countFunc(azathothSecondStage)[i - 3]
      }
    }
    if (arrAzathoth[1].length == 0 && arrAzathoth[0].length != 0) {
      lastCard.classList.remove('hide')
      let lastElement = arrAzathoth[0].pop()
      lastCard.style.backgroundImage = `url('${lastElement.cardFace}')`
      for (let i = 6; i < 9; i++) {
        allDots[i].textContent = countFunc(azathothThirdStage)[i - 6]
      }
    }
    if (arrAzathoth[0].length == 0) {
      lastCard.classList.add('hide')
    }
  }
  // ктулху
  if (ancientImgList[1].classList.contains('active')) {
    if (arrСthulhu[2].length != 0) {
      lastCard.classList.remove('hide')
      let lastElement = arrСthulhu[2].pop()
      lastCard.style.backgroundImage = `url('${lastElement.cardFace}')`
      for (let i = 0; i < 3; i++) {
        allDots[i].textContent = countFunc(cthulhuFirstStage)[i]
      }
    }
    if (arrСthulhu[2].length == 0 && arrСthulhu[1].length != 0) {
      lastCard.classList.remove('hide')
      let lastElement = arrСthulhu[1].pop()
      lastCard.style.backgroundImage = `url('${lastElement.cardFace}')`
      for (let i = 3; i < 6; i++) {
        allDots[i].textContent = countFunc(cthulhuSecondStage)[i - 3]
      }
    }
    if (arrСthulhu[1].length == 0 && arrСthulhu[0].length != 0) {
      lastCard.classList.remove('hide')
      let lastElement = arrСthulhu[0].pop()
      lastCard.style.backgroundImage = `url('${lastElement.cardFace}')`
      for (let i = 6; i < 9; i++) {
        allDots[i].textContent = countFunc(cthulhuThirdStage)[i - 6]
      }
    }
    if (arrСthulhu[0].length == 0) {
      lastCard.classList.add('hide')
    }
  }
  // йогсотот
  if (ancientImgList[2].classList.contains('active')) {
    if (arrIogSothoth[2].length != 0) {
      lastCard.classList.remove('hide')
      let lastElement = arrIogSothoth[2].pop()
      lastCard.style.backgroundImage = `url('${lastElement.cardFace}')`
      for (let i = 0; i < 3; i++) {
        allDots[i].textContent = countFunc(iogSothothFirstStage)[i]
      }
    }
    if (arrIogSothoth[2].length == 0 && arrIogSothoth[1].length != 0) {
      lastCard.classList.remove('hide')
      let lastElement = arrIogSothoth[1].pop()
      lastCard.style.backgroundImage = `url('${lastElement.cardFace}')`
      for (let i = 3; i < 6; i++) {
        allDots[i].textContent = countFunc(iogSothothSecondStage)[i - 3]
      }
    }
    if (arrIogSothoth[1].length == 0 && arrIogSothoth[0].length != 0) {
      lastCard.classList.remove('hide')
      let lastElement = arrIogSothoth[0].pop()
      lastCard.style.backgroundImage = `url('${lastElement.cardFace}')`
      for (let i = 6; i < 9; i++) {
        allDots[i].textContent = countFunc(iogSothothThirdStage)[i - 6]
      }
    }
    if (arrIogSothoth[0].length == 0) {
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

// console.log('allCards >', allCards)
// console.log('allEasyCards >', allEasyCards)
// console.log('allNormalCards >', allNormalCards)
// console.log('allHardCards >', allHardCards)
// //
// console.log('allEasyGreenCards >', allEasyGreenCards)
// console.log('allEasyBlueCards >', allEasyBlueCards)
// console.log('allEasyBrownCards >', allEasyBrownCards)
// // //
// console.log('allNormalGreenCards >', allNormalGreenCards)
// console.log('allNormalBlueCards >', allNormalBlueCards)
// console.log('allNormalBrownCards >', allNormalBrownCards)
// //
// console.log('allHardGreenCards >', allHardGreenCards)
// console.log('allHardBlueCards >', allHardBlueCards)
// console.log('allHardBrownCards >', allHardBrownCards)
// //

// console.log('allGreenCards >', allGreenCards)
// console.log('allBlueCards >', allBlueCards)
// console.log('allBrownCards >', allBrownCards)
