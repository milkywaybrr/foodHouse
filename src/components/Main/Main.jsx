import './Main.css';
import img1 from '../../assets/main/hero-image_hero-right.png';

const Main = () => {
    return (
        <section>
            <div className="container">
                <div className="content">
                    <p>
                        Экспресс-доставка от Яндекс.Еды
                    </p>
                    <h1>
                        Быстро
                        и вкусно<b>.</b>
                    </h1>
                    <p className="info">
                        Сеть быстрого питания #1 в Казани
                    </p>
                    <div className="button_info">
                        <button>Сделать заказ</button>
                        <p>бесплатная доставка <br/> от 500 рублей</p>
                    </div>
                </div>
                <img src={img1} alt="img1" />
            </div>
        </section>
    )
}

export default Main;