import React, { useState } from "react";
import CustomImage from "./CustomImage";

export default function RecipeCard({ recipe }) {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.image} pt="65%" />
            <div className="recipe-card-info">
                <img src={recipe.authorImg} className="author-img" alt="author" />
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">{recipe.description}</p>
                <button className="view-btn" onClick={togglePopup}>
                    View Recipe
                </button>
            </div>
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <div className="popup-image">
                            <CustomImage imgSrc={recipe.image} pt="100%" />
                        </div>
                        <div className="popup-details">
                            <h2>{recipe.title}</h2>
                            <h3>Ingredients:</h3>
                            <ul>
                                {recipe.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                            <h3>Instructions:</h3>
                            <ol>
                                {recipe.instructions.map((instruction, index) => (
                                    <li key={index}>{instruction}</li>
                                ))}
                            </ol>
                            <button className="hide-btn" onClick={togglePopup}>
                                Hide Recipe
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
