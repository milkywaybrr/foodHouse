import salad from '../../../assets/menu_categories/salad.svg';
import drink from'../../../assets/menu_categories/drink.svg';
import ham from '../../../assets/menu_categories/hamburger.svg';
import free from '../../../assets/menu_categories/french-fries.svg';
import pizza from '../../../assets/menu_categories/pizza.svg';
import discount from '../../../assets/menu_categories/discount.svg';

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
        type: "frie"
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

export default categories;