import Category from '../Category/Category';
import './Menu.css';
import salad from '../../assets/menu_categories/salad.svg';
import drink from'../../assets/menu_categories/drink.svg';
import ham from '../../assets/menu_categories/hamburger.svg';
import free from '../../assets/menu_categories/french-fries.svg';
import pizza from '../../assets/menu_categories/pizza.svg';
import discount from '../../assets/menu_categories/discount.svg';

import img1 from '../../assets/catalog/item__image1.png';
import img2 from '../../assets/catalog/item__image2.png';
import img3 from '../../assets/catalog/item__image3.png';
import img4 from '../../assets/catalog/item__image4.png';
import img5 from '../../assets/catalog/item__image5.png';


const Menu = () => {
    const categories = [
        {
            id: 1,
            url: salad,
            name: 'Салаты'
        },
        {
            id: 2,
            url: drink,
            name: 'Напитки'
        },
        {
            id: 3,
            url: ham,
            name: 'Бургеры'
        },
        {
            id: 4,
            url: free,
            name: 'Закуски'
        },
        {
            id: 5,
            url: pizza,
            name: 'Пицца'
        },
        {
            id: 6,
            url: discount,
            name: 'Акции'
        }
    ];

    const catalog = [
        {
            id: 1,
            url: img1,
            name: "Салат “Греческий”",
            size: "300 грамм - 1 порция",
            info: "36 - белков, 11 - жиров, 55 - углеводов"
        },
        {
            id: 2,
            url: img2,
            name: "Салат “Греческий”",
            size: "300 грамм - 1 порция",
            info: "36 - белков, 11 - жиров, 55 - углеводов"
        },
        {
            id: 3,
            url: img3,
            name: "Салат “Тропический”",
            size: "300 грамм - 1 порция",
            info: "36 - белков, 11 - жиров, 55 - углеводов"
        },
        {
            id: 4,
            url: img4,
            name: "Салат “Японка”",
            size: "300 грамм - 1 порция",
            info: "36 - белков, 11 - жиров, 55 - углеводов"
        },
        {
            id: 5,
            url: img5,
            name: "Салат “Греческий”",
            size: "300 грамм - 1 порция",
            info: "36 - белков, 11 - жиров, 55 - углеводов"
        },
        {
            id: 6,
            url: img2,
            name: "Салат “Греческий”",
            size: "300 грамм - 1 порция",
            info: "36 - белков, 11 - жиров, 55 - углеводов"
        },
        {
            id: 7,
            url: img3,
            name: "Салат “Тропический”",
            size: "300 грамм - 1 порция",
            info: "36 - белков, 11 - жиров, 55 - углеводов"
        },
        {
            id: 8,
            url: img4,
            name: "Салат “Японка”",
            size: "300 грамм - 1 порция",
            info: "36 - белков, 11 - жиров, 55 - углеводов"
        },
    ];

    return (
        <section className='menu_categories'>
            <div className="container">
                <h2>
                    Наше Меню
                    <div className="line"></div>
                </h2>
                <div className="content categories">
                    {
                        categories.map((category) => {
                            return (
                                <Category url={category.url} name={category.name} />
                            )
                        })
                    }
                </div>
                <div className="container catalog">

                </div>
            </div>
        </section>
    )
}

export default Menu;