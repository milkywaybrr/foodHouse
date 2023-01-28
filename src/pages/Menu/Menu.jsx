import './Menu.css';

import Category from '../../components/Category/Category';
import Catalog from '../../components/Catalog/Catalog';

import { useState, useEffect } from 'react';
import categories from './MenuCategories/MenuCategories';
import catalog from './MenuCatalog/MenuCatalog';

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

            prevState = catalog.filter((product) => product.category === selectedCategory || product.state === selectedCategory);

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