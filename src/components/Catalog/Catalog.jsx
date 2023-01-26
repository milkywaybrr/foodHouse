import './Catalog.css';

const Catalog = ({ id, url, name, size, info }) => {
    return (
        <div className="catalog_item">
            <img src={url} alt={id} />
            <div className="catalog-item_content">
                <div className="name">{name}</div>
                <div className="size">{size}</div>
                <div className="item-info">{info}</div>
                <button className="button">Добавить в корзину</button>
            </div>
        </div>
    )
}

export default Catalog;