import '../css/catalog.css';

const catalog = [ //данные подружаемых товаров
    {
        name: 'Product1',
        price: 8000,
        discount: 0.3,
        image: 'https://via.placeholder.com/216/0000FF/808080',
        isInCart: false,
        description: 'Cтул Lars желтый пластик Ш.48 В.83 Г.56 Вес 5.5кг…',
        reviews: '123К отзывов',
        
    },

    {
        name: 'Product2',
        price: 500,
        discount: false,
        image: 'https://via.placeholder.com/216.png/09f/fff',
        isInCart: false,
        description: 'Cтул Lars желтый пластик Ш.48 В.83 Г.56 Вес 5.5кг…',
        reviews: '12К отзывов'
        },

    {
        name: 'Product3',
        price: 9000,
        discount: 0.2,
        image: 'https://via.placeholder.com/216/FFFF00/000000',
        isInCart: false,
        description: 'Cтул Lars желтый пластик Ш.48 В.83 Г.56 Вес 5.5кг…',
        reviews: '23К отзывов'    
        },

        {
            name: 'Product4',
            price: 10000,
            discount: 0.3,
            image: 'https://via.placeholder.com/216/FF0000/FFFFFF',
            isInCart: false,
            description: 'Cтул Lars желтый пластик Ш.48 В.83 Г.56 Вес 5.5кг…',
            reviews: '1К отзывов'
                 
        },

        {
            name: 'Product5',
            price: 10000,
            discount: false,
            image: 'https://via.placeholder.com/216/FFFF00/000000',
            isInCart: false,
            description: 'Cтул Lars желтый пластик Ш.48 В.83 Г.56 Вес 5.5кг…',
            reviews: '3К отзывов'
        },

        {
            name: 'Product6',
            price: 8000,
            discount: 0.3,
            image: 'https://via.placeholder.com/216/0000FF/808080',
            isInCart: false,
            description: 'Cтул Lars желтый пластик Ш.48 В.83 Г.56 Вес 5.5кг…',
            reviews: '123К отзывов',
            
        },
        {
            name: 'Product7',
            price: 9000,
            discount: 0.2,
            image: 'https://via.placeholder.com/216/FFFF00/000000',
            isInCart: false,
            description: 'Cтул Lars желтый пластик Ш.48 В.83 Г.56 Вес 5.5кг…',
            reviews: '23К отзывов'    
            },

            {
                name: 'Product8',
                price: 8000,
                discount: 0.3,
                image: 'https://via.placeholder.com/216/0000FF/808080',
                isInCart: false,
                description: 'Cтул Lars желтый пластик Ш.48 В.83 Г.56 Вес 5.5кг…',
                reviews: '123К отзывов',
                
            },

        {
            name: 'Product9',
            price: 10000,
            discount: 0.3,
            image: 'https://via.placeholder.com/216/FF0000/FFFFFF',
            isInCart: false,
            description: 'Cтул Lars желтый пластик Ш.48 В.83 Г.56 Вес 5.5кг…',
            reviews: '1К отзывов'
                     
        },
        {
            name: 'Product3',
            price: 9000,
            discount: 0.2,
            image: 'https://via.placeholder.com/216/FFFF00/000000',
            isInCart: false,
            description: 'Cтул Lars желтый пластик Ш.48 В.83 Г.56 Вес 5.5кг…',
            reviews: '23К отзывов'    
        },
               
    ]


class Product  { //создание элемента товара

        createProduct (props) {
            const productCard = document.createElement('li');
            productCard.classList.add('card');
            productCard.classList.add('item');
            
            const header = document.createElement('div');
            header.classList.add('card__header');
            
            const picture = document.createElement('img');
            picture.classList.add('card__image');
            picture.src = `${props.image}` ;

            const priceContainer = document.createElement('div');
            priceContainer.classList.add('card__price-container');

            const productPrice = document.createElement('span');
            
            if (props.discount) { //учитываем скидку
                const discountBlock = document.createElement('div');
                discountBlock.classList.add('card__discount-block');
                
                const discountAmount = document.createElement('span');
                discountAmount.classList.add('card__discount');
                const procent = (`${props.discount}`* 100).toString();
                discountAmount.textContent = '-' + procent + '%';

                productPrice.classList.add('card__price');
                productPrice.classList.add('card__price_final');
                const finalPrice = `${props.price}` - `${props.discount}`* `${props.price}`;
                Number.isInteger(finalPrice) ? finalPrice :  finalPrice.toFixed(2);
                productPrice.textContent = finalPrice + ' ₽';

                const previous = document.createElement('span');
                previous.classList.add('card__price');
                previous.classList.add('card__price_previous');
                previous.textContent = props.price  + ' ₽';

                discountBlock.append(discountAmount);
                header.append(discountBlock);

                priceContainer.append(productPrice);
                priceContainer.append(previous);

            } 
            else {
            productPrice.classList.add('card__price');
            productPrice.textContent = props.price + ' ₽';
            priceContainer.append(productPrice);

            }

            const productDescription = document.createElement('div');
            productDescription.classList.add('card__description');
            
            const text = document.createElement('p');
            text.classList.add('card__text');
            text.textContent = props.description;
            
            const rating = document.createElement('div');
            rating.classList.add('card__rating');
            
            const stars = document.createElement('div');
            stars.classList.add('card__stars');
            
            const review = document.createElement('p');
            review.classList.add('card__review');
            review.textContent = props.reviews;
            
            const button = document.createElement('div');
            button.classList.add('card__button');
            button.addEventListener('click', () => this.addToCart(props.name, props.isInCart, button));
            
            const buttonText = document.createElement('span');
            buttonText.classList.add('card__btn-text');
            buttonText.textContent = 'В корзину';

            header.append(picture);
            
            productDescription.append(text);
            rating.append(stars);
            rating.append(review);
            productDescription.append(rating);
            button.append(buttonText);

            productCard.append(header);
            productCard.append(priceContainer);
            productCard.append(productDescription);
            productCard.append(button);

            return productCard;
    }

    addToCart(name, cart, button) {//добавление в корзину(без удаления из неё)
        if(!cart) {
            button.classList.add('inside');
            localStorage.setItem(name, 1);
            showCart ();
        } 
    }
}


class ProductList { //список товаров, который выводится на экран
    constructor(list) {
        this.list = list;
    }

    renderProducts(products, card) {
        localStorage.clear();
        products.forEach((item) => {
            this.list.append(card.createProduct(item))
        })
    }
}

const resultList = document.querySelector('.cards__list');
const goods = new ProductList(resultList);
const good = new Product();

goods.renderProducts(catalog, good);

function showCart () {//вывод счётчика, если в корзине что-то есть
    const counter = document.querySelector('.header__cart-count');

    if (localStorage.length > 1) {
        counter.classList.add('visible');
        counter.textContent = localStorage.length-1;
    } else {
        counter.classList.remove('visible');
    }
};
