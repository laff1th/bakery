// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const dropdownButtons = document.querySelectorAll('.dropdown-button')
const dropdowns = document.querySelectorAll('.dropdown')

if (dropdownButtons && dropdowns) {
  for (let index = 0; index < dropdownButtons.length; index++) {
    const dropdownButton = dropdownButtons[index]
    const dropdown = dropdowns[index]
    
    dropdownButton.addEventListener('click', () => {
      dropdownButton.classList.toggle('dropdown-button--active')
      dropdown.classList.toggle('dropdown--active')
    })
  }

  // document.addEventListener('click', (event) => {
  //   if(!event.composedPath().includes(dropdown) && !event.composedPath().includes(dropdownButton)) {
  //     dropdownButtons.classList.remove('dropdown-button--active')
  //     dropdown.classList.remove('dropdown--active')
  //   }
  // })
}

const categories = document.querySelectorAll('.catalog__category')
const seeAll = document.querySelector('#seeAll')

let categoryIndexBuffer = 0

if (categories) {
  for (let index = 0; index < categories.length; index++) {
    const category = categories[index]
    
    category.addEventListener('click', () => {
      const isActiveCategory = category.classList.contains('catalog__category--active')

      if (isActiveCategory && category != seeAll) {
        category.classList.remove('catalog__category--active')
        seeAll.classList.add('catalog__category--active')
      }
      else if (isActiveCategory && category == seeAll) {
        seeAll.classList.remove('catalog__category--active')
        categories[categoryIndexBuffer].classList.add('catalog__category--active')
      }
      else {
        if (category != seeAll) {
          categoryIndexBuffer = index
        }
        
        for (let index = 0; index < categories.length; index++) {
          const category = categories[index];

          category.classList.remove('catalog__category--active')
        }

        category.classList.add('catalog__category--active')
      }
    })
  }
}