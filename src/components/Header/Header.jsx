import logo from '../../assets/header/FoodHouse.svg';
import cart from '../../assets/header/cart-icon.svg';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="header-logo">
                    <img src={logo} alt="FoodHouse" />
                </div>
                <ul className="menu header-menu">
                    <li className="menu-item active">
                        <a href="">Главная</a>
                    </li>
                    <li className="menu-item">
                        <a href="">Меню</a>
                    </li>
                    <li className="menu-item">
                        <a href="">Сервис</a>
                    </li>
                    <li className="menu-item">
                        <a href="">О нас</a>
                    </li>
                </ul>
                <div className="cart">
                    <div className="circle">0</div>
                    <img src={cart} alt="basket" />
                </div>
            </div>
        </header>
    )
}

export default Header;