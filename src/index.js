import difficulties from './data/difficulties'
import ancientsData from './data/ancients'
import blueCardsData from './data/mythicCards/blue/index'
import brownCardsData from './data/mythicCards/brown/index'
import greenCardsData from './data/mythicCards/green/index'

console.log(difficulties.length)
console.log(ancientsData)
console.log(blueCardsData)
console.log(brownCardsData)
console.log(greenCardsData)

const ancients = document.querySelector('.ancients')

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
ancientImgList.forEach((el) =>
  el.addEventListener('click', () => {
    el.classList.toggle('active')
  })
)
