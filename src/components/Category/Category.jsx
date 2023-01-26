import './Category.css';

const Category = ({ id, url, name }) => {
    return (
        <div className="category">
            <img src={url} alt={id} />
            <div className="name">{name}</div>
        </div>
    )
}

export default Category;