import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"

export default function Recipes(){
    const recipes = [
        {
            title: "Margherita pizza",
            image: "/img/gallery/img_1.jpg",
            authorImg: "/img/top-chef/img_1.jpg",
            description: "Margherita pizza with mozzarella, cherry tomatoes, basil leaves.",
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: "/img/gallery/img_12.jpg",
            authorImg: "/img/top-chef/img_2.jpg",
            description:"Classic Italian dish with spaghetti, meatballs, and marinara sauce.",
        },
        {
            title: "Burger and Fries",
            image: "/img/gallery/img_5.jpg",
            authorImg: "/img/top-chef/img_3.jpg",
            description:"Juicy chicken burger with crispy fries and fresh toppings.",
        },
        {
            title: "Chicken biryani",
            image: "/img/gallery/img_6.jpg",
            authorImg: "/img/top-chef/img_5.jpg",
            description:"Aromatic chicken biryani with flavorful spices and basmati rice.",
        },
        {
            title: "Berry Vanilla Sundae",
            image: "/img/gallery/img_13.jpg",
            authorImg: "/img/top-chef/img_6.jpg",
            description:"Creamy vanilla ice cream topped with fresh berries and a crispy waffle.",
        },
        {
            title: "Japanese Sushi",
            image: "/img/gallery/img_11.jpg",
            authorImg: "/img/top-chef/img_1.jpg",
            description:"Delicately rolled sushi with seasoned rice, fresh fish, and seaweed.",
        }, 
        {
            title: "Fresh Fruit Salad",
            image: "/img/gallery/img_14.jpg",
            authorImg: "/img/top-chef/img_2.jpg",
            description:"A mix of berries, strawberries, and grapes in a vibrant fruit salad.",
        },
        {
            title: "Fluffy Pancake Stack",
            image: "/img/gallery/img_15.jpg",
            authorImg: "/img/top-chef/img_3.jpg",
            description:"Pancakes served with a drizzle of maple syrup, fresh berries.",
        },
        {
            title: "Glazed Donut Delight",
            image: "/img/gallery/img_16.jpg",
            authorImg: "/img/top-chef/img_5.jpg",
            description:"Soft, sweet donuts with a smooth glaze.",
        },
        {
            title: "Creamy Cookies",
            image: "/img/gallery/img_17.jpg",
            authorImg: "/img/top-chef/img_6.jpg",
            description:"Soft, buttery cookies with a smooth, creamy filling.",
        },
        {
            title: "Creamy White Sauce Pasta",
            image: "/img/gallery/img_18.jpg",
            authorImg: "/img/top-chef/img_3.jpg",
            description:"Pasta coated in a creamy white sauce with a hint of garlic & herbs.",
        },
        {
            title: "Red Velvet Layer Cake",
            image: "/img/gallery/img_19.jpg",
            authorImg: "/img/top-chef/img_5.jpg",
            description:"Rich red velvet layers with creamy frosting; a sweet delight.",
        }
    ].sort(() => Math.random() - 0.5)

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}