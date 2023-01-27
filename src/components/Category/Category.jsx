import './Category.css';

const Category = ({ onChangeSelectedCategory, category}) => {
    return (
        <div onClick={() => onChangeSelectedCategory(category.type)} className="category">
            <img src={category.url} alt={category.id} />
            <div className="name">{category.name}</div>
        </div>
    )
}

export default Category;