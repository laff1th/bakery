import "../scss/style.scss";

const dropdowns = document.querySelectorAll('.dropdown')

if (dropdowns.length) {
  for (let index = 0; index < dropdowns.length; index++) {
    const dropdown = dropdowns[index]

    const dropdownButton = dropdown.querySelector('.dropdown__button')

    const isDropdownActive = () => dropdown.classList.contains('dropdown--active')
    
    dropdownButton.addEventListener('click', () => {
      dropdown.classList.toggle('dropdown--active')
    })

    document.addEventListener('click', (event) => {
      if (!event.composedPath().includes(dropdown) && isDropdownActive()) {
        dropdown.classList.remove('dropdown--active')
      }
    })
  }
}

const categories = document.querySelectorAll('.catalog__category')
const seeAllCategory = document.querySelector('#seeAll')


let categoryIndexBuffer = 0

if (categories.length) {
  for (let index = 0; index < categories.length; index++) {
    const category = categories[index]

    const isActiveCategory = () => category.classList.contains('catalog__category--active')
    
    category.addEventListener('click', () => {
      if (isActiveCategory()) {
        if (category === seeAllCategory) {
          seeAllCategory.classList.remove('catalog__category--active')
          categories[categoryIndexBuffer].classList.add('catalog__category--active')
        }
        else {
          category.classList.remove('catalog__category--active')
          seeAllCategory.classList.add('catalog__category--active')
        }
      }
      else {
        if (category !== seeAllCategory) {
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