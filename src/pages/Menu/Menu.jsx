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
import Category from '../../components/Category/Category';
import Catalog from '../../components/Catalog/Catalog';

import { useState, useEffect } from 'react';

const categories = [
        {
            id: 1,
            url: salad,
            name: 'Салаты',
            type: "salad"
        },
        {
            id: 2,
            url: drink,
            name: 'Напитки',
            type: "drink"
        },
        {
            id: 3,
            url: ham,
            name: 'Бургеры',
            type: "ham"
        },
        {
            id: 4,
            url: free,
            name: 'Закуски',
            type: "free"
        },
        {
            id: 5,
            url: pizza,
            name: 'Пицца',
            type: "pizza"
        },
        {
            id: 6,
            url: discount,
            name: 'Акции',
            type: "discount"
        }
    ];

    const catalog = [
        {
            id: 1,
            url: img1,
            name: "Салат “Греческий”",
            size: "300 грамм - 1 порция",
            info: "36 - белков, 11 - жиров, 55 - углеводов",
            category: "salad",
            state: "surcharge"
        },
        {
            id: 2,
            url: img2,
            name: "Салат “Греческий”",
            size: "300 грамм - 1 порция",
            info: "36 - белков, 11 - жиров, 55 - углеводов",
            category: "drink",
            state: "surcharge"
        },
        {
            id: 3,
            url: img3,
            name: "Салат “Тропический”",
            size: "300 грамм - 1 порция",
            info: "36 - белков, 11 - жиров, 55 - углеводов",
            category: "ham",
            state: "discount"
        },
        {
            id: 4,
            url: img4,
            name: "Салат “Японка”",
            size: "300 грамм - 1 порция",
            info: "36 - белков, 11 - жиров, 55 - углеводов",
            category: "fries",
            state: "discount"
        },
        {
            id: 5,
            url: img5,
            name: "Салат “Греческий”",
            size: "300 грамм - 1 порция",
            info: "36 - белков, 11 - жиров, 55 - углеводов",
            category: "pizza",
            state: "surcharge"
        },
        {
            id: 6,
            url: img2,
            name: "Салат “Греческий”",
            size: "300 грамм - 1 порция",
            info: "36 - белков, 11 - жиров, 55 - углеводов",
            category: "salad",
            state: "discount"
        },
        {
            id: 7,
            url: img3,
            name: "Салат “Тропический”",
            size: "300 грамм - 1 порция",
            info: "36 - белков, 11 - жиров, 55 - углеводов",
            category: "salad",
            state: "discount"
        },
        {
            id: 8,
            url: img4,
            name: "Салат “Японка”",
            size: "300 грамм - 1 порция",
            info: "36 - белков, 11 - жиров, 55 - углеводов",
            category: "salad",
            state: "surcharge"
        },
    ];

const Menu = () => {
    const [category, setCategory] = useState(categories);
    const [product, setProduct] = useState(catalog);

    const [selectedCategory, setSelectedCategory] = useState("none");

    const onChangeSelectedCategory = (type) => {
        setSelectedCategory(type);
    }

    useEffect(() => {
        setProduct((prevState) => {
            prevState = [...prevState];

            prevState = catalog.filter(
                (product) => product.category === selectedCategory
            )

            if (selectedCategory === "none") {
                prevState = catalog;
            }
            return prevState;
        })
    }, [selectedCategory])

    return (
        <section className='menu_categories'>
            <div className="container">
                <h2>
                    Наше Меню
                    <div className="line"></div>
                </h2>
                <div className="categories">
                    {
                        category.map((category) => {
                            return (
                                <Category category={category} onChangeSelectedCategory={onChangeSelectedCategory} />
                            )
                        })
                    }
                </div>
                <div className="catalog">
                    {
                        product.map((item) => {
                            return (
                                <Catalog catalog={item}/>
                            )
                        })
                    }
                </div>
                <button className="button-all">Показать еще</button>
            </div>
        </section>
    )
}

export default Menu;