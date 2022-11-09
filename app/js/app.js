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

const galleryImages = document.querySelectorAll('.gallery__image')

for (let index = 0; index < galleryImages.length; index++) {
  const galleryImage = galleryImages[index]

  galleryImage.addEventListener('click', () => {
    galleryImage.classList.toggle('gallery__image--active')
  })

}

const categoriesNode = document.querySelectorAll('.catalog__category')
const seeAllCategory = document.querySelector('#seeAll')

let categoryIndexBuffer = 0

if (categoriesNode.length) {
  for (let index = 0; index < categoriesNode.length; index++) {
    const category = categoriesNode[index]

    const isActiveCategory = () => category.classList.contains('catalog__category--active')

    category.addEventListener('click', () => {
      if (isActiveCategory()) {
        if (category === seeAllCategory) {
          switch (categoryIndexBuffer) {
            case 0:
              filter = categories.bread
              break;
            case 1:
              filter = categories.sweatBake
              break;
            case 2:
              filter = categories.coffee
              break;
          }
          clearCatalog()
          renderCatalog()

          seeAllCategory.classList.remove('catalog__category--active')
          categoriesNode[categoryIndexBuffer].classList.add('catalog__category--active')
        }
        else {
          filter = false
          clearCatalog()
          renderCatalog()
          category.classList.remove('catalog__category--active')
          seeAllCategory.classList.add('catalog__category--active')
        }
      }
      else {
        if (category === seeAllCategory) {
          filter = false
          clearCatalog()
          renderCatalog()
        }
        else {
          switch (index) {
            case 0:
              filter = categories.bread
              break;
            case 1:
              filter = categories.sweatBake
              break;
            case 2:
              filter = categories.coffee
              break;
          }
          clearCatalog()
          renderCatalog()
          categoryIndexBuffer = index
        }

        for (let index = 0; index < categoriesNode.length; index++) {
          const category = categoriesNode[index];

          category.classList.remove('catalog__category--active')
        }

        category.classList.add('catalog__category--active')
      }
    })
  }
}

const categories = {
  bread: 'Хлеб',
  sweatBake: 'Сладкая выпечка',
  coffee: 'Кофе',
}

let filter = categories.bread

const items = [
  {
    id: 1,
    image: 'wheat-loaf.jpg',
    name: 'Пшеничный батон',
    category: categories.bread,
    price: 27.90
  },
  {
    id: 2,
    image: 'bun.jpg',
    name: 'Плюшка',
    category: categories.sweatBake,
    price: 24.90
  },
  {
    id: 3,
    image: 'cappuccino.jpg',
    name: 'Капучино',
    category: categories.coffee,
    price: 91.90
  },
  {
    id: 4,
    image: 'french-bread.jpg',
    name: categories.bread,
    category: 'Хлеб',
    price: 33.90
  },
  {
    id: 5,
    image: 'baguette.jpg',
    name: 'Багет',
    category: categories.bread,
    price: 39.90
  },
  {
    id: 6,
    image: 'puff.jpg',
    name: 'Слойка с вишней',
    category: categories.sweatBake,
    price: 33.90
  },
  {
    id: 7,
    image: 'latte.jpg',
    name: 'Латте',
    category: categories.coffee,
    price: 119.90
  },
  {
    id: 8,
    image: 'muffin.jpg',
    name: 'Маффин',
    category: categories.sweatBake,
    price: 54.90
  },
  {
    id: 9,
    image: 'rye-bread.jpg',
    name: 'Ржаной хлеб',
    category: categories.bread,
    price: 31.90
  },
  {
    id: 10,
    image: 'croissant.jpg',
    name: 'Круассан',
    category: categories.bread,
    price: 25.90
  },
  {
    id: 11,
    image: 'espresso.jpg',
    name: 'Эспрессо',
    category: categories.coffee,
    price: 79.90
  },
]

const catalog = document.querySelector('#catalog')

const renderItemCard = (index) => {
  const item = items[index]
  const itemCard = document.createElement('div')
  itemCard.className = 'catalog__item catalog-item'
  itemCard.insertAdjacentHTML('beforeend',
    `
      <div class="catalog-item__body">
        <div class="catalog-item__image">
          <img src="../img/${item.image}" alt="${item.name}">
        </div>
        <a class="catalog-item__title" href="#">${item.name}</a>
        <a href="" class="catalog-item__category">${item.category}</a>
        <div class="catalog-item__price">${item.price}</div>
        <a class="catalog-item__button" href="#">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4H5.62563C6.193 4 6.47669 4 6.70214 4.12433C6.79511 4.17561 6.87933 4.24136 6.95162 4.31912C7.12692 4.50769 7.19573 4.7829 7.33333 5.33333L7.51493 6.05972C7.616 6.46402 7.66654 6.66617 7.74455 6.83576C8.01534 7.42449 8.5546 7.84553 9.19144 7.96546C9.37488 8 9.58326 8 10 8V8" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <path d="M18 17H7.55091C7.40471 17 7.33162 17 7.27616 16.9938C6.68857 16.928 6.28605 16.3695 6.40945 15.7913C6.42109 15.7367 6.44421 15.6674 6.49044 15.5287V15.5287C6.54177 15.3747 6.56743 15.2977 6.59579 15.2298C6.88607 14.5342 7.54277 14.0608 8.29448 14.0054C8.3679 14 8.44906 14 8.61137 14H14" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.5279 14H10.9743C9.75838 14 9.15042 14 8.68147 13.7246C8.48343 13.6083 8.30689 13.4588 8.15961 13.2825C7.81087 12.8652 7.71092 12.2655 7.51103 11.0662C7.30849 9.85093 7.20722 9.2433 7.44763 8.79324C7.54799 8.60536 7.68722 8.44101 7.85604 8.31113C8.26045 8 8.87646 8 10.1085 8H16.7639C18.2143 8 18.9395 8 19.2326 8.47427C19.5257 8.94854 19.2014 9.59717 18.5528 10.8944L18.1056 11.7889C17.5677 12.8647 17.2987 13.4026 16.8154 13.7013C16.3321 14 15.7307 14 14.5279 14Z" stroke="black" stroke-width="2" stroke-linecap="round"/>
            <circle cx="17" cy="20" r="1" fill="black"/>
            <circle cx="9" cy="20" r="1" fill="black"/>
          </svg>
        </a>
      </div>
    `
  )
  catalog.appendChild(itemCard)
}

const renderCatalog = () => {
  for (let index = 0; index < items.length; index++) {
    if (!filter) {
      renderItemCard(index)
    }
    else {
      if (items[index].category == filter) {
        renderItemCard(index)
      }
    }
  }
}

const clearCatalog = () => {
  catalog.innerHTML = ''
}

renderCatalog()