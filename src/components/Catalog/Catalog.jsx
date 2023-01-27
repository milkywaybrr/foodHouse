import './Catalog.css';

const Catalog = ({ catalog }) => {
    return (
        <div className="catalog_item">
            <img src={catalog.url} alt={catalog.id} />
            <div className="catalog-item_content">
                <div className="name">{catalog.name}</div>
                <div className="size">{catalog.size}</div>
                <div className="item-info">{catalog.info}</div>
                <button className="button">Добавить в корзину</button>
            </div>
        </div>
    )
}

export default Catalog;