import '../css/catalog.css'

const catalog = [ // данные подружаемых товаров
  {
    name: 'Product1',
    price: 8000,
    discount: 0.3,
    image: 'https://via.placeholder.com/216/444888/FFFFFF',
    imageLarge: 'https://via.placeholder.com/300/444888/FFFFFF',
    isInCart: false,
    description: 'Cтул Lars желтый пластик Ш.48 В.83 Г.56 Вес 5.5кг…',
    reviews: '123К отзывов',
    rate: 4,
    empty: 1

  },

  {
    name: 'Product2',
    price: 500,
    discount: false,
    image: 'https://via.placeholder.com/216.png/91a3a1/FFFFFF',
    isInCart: false,
    description: 'Cтул Lars желтый пластик Ш.48 В.83 Г.56 Вес 5.5кг…',
    reviews: '12К отзывов',
    rate: 5
  },

  {
    name: 'Product3',
    price: 2456,
    discount: 0.2,
    image: 'https://via.placeholder.com/216/a39891/FFFFFF',
    isInCart: false,
    description: 'Cтул Lars желтый пластик Ш.48 В.83 Г.56 Вес 5.5кг…',
    reviews: '23К отзывов',
    rate: 5
  },

  {
    name: 'Product4',
    price: 10000,
    discount: 0.3,
    image: 'https://via.placeholder.com/216/a39193/FFFFFF',
    isInCart: false,
    description: 'Cтул Lars желтый пластик Ш.48 В.83 Г.56 Вес 5.5кг…',
    reviews: '1К отзывов',
    rate: 3,
    empty: 2
  },

  {
    name: 'Product5',
    price: 10000,
    discount: false,
    image: 'https://via.placeholder.com/216/636c51/FFFFFF',
    isInCart: false,
    description: 'Cтул Lars желтый пластик Ш.48 В.83 Г.56 Вес 5.5кг…',
    reviews: '3К отзывов',
    rate: 5
  },

  {
    name: 'Product6',
    price: 8000,
    discount: 0.3,
    image: 'https://via.placeholder.com/216/516c5a/FFFFFF',
    isInCart: false,
    description: 'Cтул Lars желтый пластик Ш.48 В.83 Г.56 Вес 5.5кг…',
    reviews: '123К отзывов',
    rate: 5
  },
  {
    name: 'Product7',
    price: 9000,
    discount: 0.2,
    image: 'https://via.placeholder.com/216/216516c5a/FFFFFF',
    isInCart: false,
    description: 'Cтул Lars желтый пластик Ш.48 В.83 Г.56 Вес 5.5кг…',
    reviews: '23К отзывов',
    rate: 5
  },

  {
    name: 'Product8',
    price: 8000,
    discount: 0.3,
    image: 'https://via.placeholder.com/216/636c51/FFFFFF',
    isInCart: false,
    description: 'Cтул Lars желтый пластик Ш.48 В.83 Г.56 Вес 5.5кг…',
    reviews: '123К отзывов',
    rate: 5
  },

  {
    name: 'Product9',
    price: 10000,
    discount: 0.3,
    image: 'https://via.placeholder.com/216/9d704d/FFFFFF',
    isInCart: false,
    description: 'Cтул Lars желтый пластик Ш.48 В.83 Г.56 Вес 5.5кг…',
    reviews: '1К отзывов',
    rate: 5
  },

  {
    name: 'Product10',
    price: 9000,
    discount: 0.2,
    image: 'https://via.placeholder.com/216/b06b44/FFFFFF',
    isInCart: false,
    description: 'Cтул Lars желтый пластик Ш.48 В.83 Г.56 Вес 5.5кг…',
    reviews: '23К отзывов',
    rate: 5
  },

  {
    name: 'Product1',
    price: 8000,
    discount: 0.3,
    image: 'https://via.placeholder.com/216/444888/FFFFFF',
    isInCart: false,
    description: 'Cтул Lars желтый пластик Ш.48 В.83 Г.56 Вес 5.5кг…',
    reviews: '123К отзывов',
    rate: 4,
    empty: 1

  },

  {
    name: 'Product2',
    price: 500,
    discount: false,
    image: 'https://via.placeholder.com/216.png/91a3a1/FFFFFF',
    isInCart: false,
    description: 'Cтул Lars желтый пластик Ш.48 В.83 Г.56 Вес 5.5кг…',
    reviews: '12К отзывов',
    rate: 5
  },

  {
    name: 'Product3',
    price: 2456,
    discount: 0.2,
    image: 'https://via.placeholder.com/216/a39891/FFFFFF',
    isInCart: false,
    description: 'Cтул Lars желтый пластик Ш.48 В.83 Г.56 Вес 5.5кг…',
    reviews: '23К отзывов',
    rate: 5
  },

  {
    name: 'Product4',
    price: 10000,
    discount: 0.3,
    image: 'https://via.placeholder.com/216/a39193/FFFFFF',
    isInCart: false,
    description: 'Cтул Lars желтый пластик Ш.48 В.83 Г.56 Вес 5.5кг…',
    reviews: '1К отзывов',
    rate: 5
  },

  {
    name: 'Product5',
    price: 10000,
    discount: false,
    image: 'https://via.placeholder.com/216/636c51/FFFFFF',
    isInCart: false,
    description: 'Cтул Lars желтый пластик Ш.48 В.83 Г.56 Вес 5.5кг…',
    reviews: '3К отзывов',
    rate: 5
  },

  {
    name: 'Product6',
    price: 8000,
    discount: 0.3,
    image: 'https://via.placeholder.com/216/516c5a/FFFFFF',
    isInCart: false,
    description: 'Cтул Lars желтый пластик Ш.48 В.83 Г.56 Вес 5.5кг…',
    reviews: '123К отзывов',
    rate: 5
  },
  {
    name: 'Product7',
    price: 9000,
    discount: 0.2,
    image: 'https://via.placeholder.com/216/216516c5a/FFFFFF',
    isInCart: false,
    description: 'Cтул Lars желтый пластик Ш.48 В.83 Г.56 Вес 5.5кг…',
    reviews: '23К отзывов',
    rate: 5
  },

  {
    name: 'Product8',
    price: 8000,
    discount: 0.3,
    image: 'https://via.placeholder.com/216/636c51/FFFFFF',
    isInCart: false,
    description: 'Cтул Lars желтый пластик Ш.48 В.83 Г.56 Вес 5.5кг…',
    reviews: '123К отзывов',
    rate: 5
  },

  {
    name: 'Product9',
    price: 10000,
    discount: 0.3,
    image: 'https://via.placeholder.com/216/9d704d/FFFFFF',
    isInCart: false,
    description: 'Cтул Lars желтый пластик Ш.48 В.83 Г.56 Вес 5.5кг…',
    reviews: '1К отзывов',
    rate: 5
  },

  {
    name: 'Product10',
    price: 9000,
    discount: 0.2,
    image: 'https://via.placeholder.com/216/b06b44/FFFFFF',
    isInCart: false,
    description: 'Cтул Lars желтый пластик Ш.48 В.83 Г.56 Вес 5.5кг…',
    reviews: '23К отзывов',
    rate: 5
  }

]

class Product { // создание элемента товара
  createProduct (props) {
    const productCard = document.createElement('li')
    productCard.classList.add('card')
    productCard.classList.add('item')

    const header = document.createElement('div')
    header.classList.add('card__header')

    const picture = document.createElement('img')
    picture.classList.add('card__image')
    picture.src = `${props.image}`

    const priceContainer = document.createElement('div')
    priceContainer.classList.add('card__price-container')

    const productPrice = document.createElement('span')

    if (props.discount) { // учитываем скидку
      const discountBlock = document.createElement('div')
      discountBlock.classList.add('card__discount-block')

      const discountAmount = document.createElement('span')
      discountAmount.classList.add('card__discount')
      const procent = (`${props.discount}` * 100).toString()
      discountAmount.textContent = '-' + procent + '%'

      productPrice.classList.add('card__price')
      productPrice.classList.add('card__price_final')
      const finalPrice = `${props.price}` - `${props.discount}` * `${props.price}`
      Number.isInteger(finalPrice) ? finalPrice : finalPrice.toFixed(2)
      productPrice.textContent = finalPrice.toString().replace(/(\d{2,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ') + ' ₽'// проверка у цен на количество разрядов

      const previous = document.createElement('span')
      previous.classList.add('card__price')
      previous.classList.add('card__price_previous')
      previous.textContent = props.price.toString().replace(/(\d{2,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ') + ' ₽'

      discountBlock.append(discountAmount)
      header.append(discountBlock)

      priceContainer.append(productPrice)
      priceContainer.append(previous)
    } else {
      productPrice.classList.add('card__price')
      productPrice.textContent = props.price.toString().replace(/(\d{2,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1 ') + ' ₽'
      priceContainer.append(productPrice)
    }

    const productDescription = document.createElement('div')
    productDescription.classList.add('card__description')

    const text = document.createElement('p')
    text.classList.add('card__text')
    text.textContent = props.description

    const rating = document.createElement('div')
    rating.classList.add('card__rating')

    for (let i = 0; i < props.rate; i++) { // звёзды добавляем циклом
      const stars = document.createElement('div')
      stars.classList.add('card__stars')
      rating.append(stars)
    }
    if (props.empty > 0) {
      for (let i = 0; i < props.empty; i++) {
        const noStar = document.createElement('div')
        noStar.classList.add('card__stars_empty')
        rating.append(noStar)
      }
    }

    const review = document.createElement('p')
    review.classList.add('card__review')
    review.textContent = props.reviews

    const button = document.createElement('div')
    button.classList.add('card__button')
    button.addEventListener('click', () => this.addToCart(props.name, props.isInCart, button))

    const buttonText = document.createElement('span')
    buttonText.classList.add('card__btn-text')
    buttonText.textContent = 'В корзину'

    header.append(picture)

    productDescription.append(text)
    rating.append(review)
    productDescription.append(rating)
    button.append(buttonText)

    productCard.append(header)
    productCard.append(priceContainer)
    productCard.append(productDescription)
    productCard.append(button)

    return productCard
  }

  addToCart (name, cart, button) { // добавление в корзину(без удаления из неё)
    if (!cart) {
      button.classList.add('inside')
      localStorage.setItem(name, 1)
      showCart()
    }
  }
}

class ProductList { // список товаров, который выводится на экран
  constructor (list) {
    this.list = list
  }

  renderProducts (products, card) {
    localStorage.clear()
    products.forEach((item) => {
      this.list.append(card.createProduct(item))
    })
  }
}

const resultList = document.querySelector('.cards__list')
const goods = new ProductList(resultList)
const good = new Product()

goods.renderProducts(catalog, good)

function showCart () { // вывод счётчика, если в корзине что-то есть
  const counter = document.querySelector('.header__cart-count')

  if (localStorage.length > 1) {
    counter.classList.add('visible')
    counter.textContent = localStorage.length;
  } else {
    counter.classList.remove('visible')
  }
};
