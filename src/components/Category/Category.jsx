import './Category.css';

const Category = ({ url, name }) => {
    return (
        <div className="category">
            <img src={url} alt={name} />
            <div className="name">{name}</div>
        </div>
    )
}

export default Category;