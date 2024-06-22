import { useEffect, useState } from "react";
import "./CategoryButton.css";
import { fetchWithToken } from "../../utils/FetchWithToken";
import { Link } from "react-router-dom";
import { BACKEND_URL } from './../../utils/api';

const CategoryButton = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchWithToken(`${BACKEND_URL}/api/v1/categories`)
        .then(getCategories => getCategories.json())
        .then((data) => setCategories(data))
        .catch(() => console.log("Kategorien abrufen fehlgeschlagen!"));  
    }, [])

    return (
        <section className="category-buttons">
            <div className="scroll">
                {categories.map((category, key) => (
                    <Link to={ `/quiz/${category._id}` } key={key}>
                        <div className="category-btn">
                            <i class={`fa-solid iconstyle ${category.icon}`}></i>
                            <p className="category-title">{category.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
        
    );
}
 
export default CategoryButton;
