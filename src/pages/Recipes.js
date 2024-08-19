import PreviousSearches from "../components/PreviousSearches"
import RecipeCard from "../components/RecipeCard"

export default function Recipes() {
    const recipes = [
        {
            title: "Margherita pizza",
            image: "/img/gallery/img_1.jpg",
            authorImg: "/img/top-chef/img_1.jpg",
            description: "Margherita pizza with mozzarella, cherry tomatoes, basil leaves.",
            ingredients: [
                "1 pizza dough",
                "1/2 cup tomato sauce",
                "1 cup mozzarella cheese",
                "Fresh basil leaves",
                "Cherry tomatoes"
            ],
            instructions: [
                "Preheat the oven to 220°C.",
                "Spread tomato sauce on the pizza dough.",
                "Top with mozzarella cheese, basil leaves, and cherry tomatoes.",
                "Bake for 12-15 minutes until golden and crispy."
            ]
        },
        {
            title: "Spaghetti and Meatballs",
            image: "/img/gallery/img_12.jpg",
            authorImg: "/img/top-chef/img_2.jpg",
            description: "Classic Italian dish with spaghetti, meatballs, and marinara sauce.",
            ingredients: [
                "200g spaghetti",
                "10 meatballs",
                "2 cups marinara sauce",
                "Parmesan cheese",
                "Fresh basil"
            ],
            instructions: [
                "Cook spaghetti according to package instructions.",
                "Heat meatballs and marinara sauce in a saucepan.",
                "Serve the sauce over the spaghetti, topped with Parmesan and basil."
            ]
        },
        {
            title: "Burger and Fries",
            image: "/img/gallery/img_5.jpg",
            authorImg: "/img/top-chef/img_3.jpg",
            description: "Juicy chicken burger with crispy fries and fresh toppings.",
            ingredients: [
                "1 burger bun",
                "1 chicken patty",
                "Lettuce leaves",
                "Sliced tomato",
                "Sliced onion",
                "Mayonnaise",
                "French fries"
            ],
            instructions: [
                "Cook the chicken patty on a grill or in a pan until fully cooked.",
                "Toast the burger bun.",
                "Assemble the burger with lettuce, tomato, onion, and mayonnaise.",
                "Serve with a side of French fries."
            ]
        },
        {
            title: "Chicken Biryani",
            image: "/img/gallery/img_6.jpg",
            authorImg: "/img/top-chef/img_5.jpg",
            description: "Aromatic chicken biryani with flavorful spices and basmati rice.",
            ingredients: [
                "500g chicken pieces",
                "2 cups basmati rice",
                "1 large onion, sliced",
                "2 tomatoes, chopped",
                "1/2 cup yogurt",
                "Spices (cumin, coriander, turmeric, garam masala)",
                "Fresh coriander and mint leaves",
                "Fried onions for garnish"
            ],
            instructions: [
                "Marinate the chicken with yogurt and spices.",
                "Cook the marinated chicken until tender.",
                "Cook the basmati rice until 70% done.",
                "Layer the rice and chicken in a pot, adding fried onions, coriander, and mint.",
                "Cover and cook on low heat for 20 minutes.",
                "Serve hot with raita."
            ]
        },
        {
            title: "Berry Vanilla Sundae",
            image: "/img/gallery/img_13.jpg",
            authorImg: "/img/top-chef/img_6.jpg",
            description: "Creamy vanilla ice cream topped with fresh berries and a crispy waffle.",
            ingredients: [
                "2 scoops vanilla ice cream",
                "1/2 cup mixed berries (strawberries, blueberries, raspberries)",
                "1 waffle, broken into pieces",
                "Whipped cream",
                "Chocolate sauce (optional)"
            ],
            instructions: [
                "Place the scoops of vanilla ice cream in a bowl.",
                "Top with mixed berries.",
                "Add waffle pieces and drizzle with chocolate sauce if desired.",
                "Finish with a dollop of whipped cream."
            ]
        },
        {
            title: "Japanese Sushi",
            image: "/img/gallery/img_11.jpg",
            authorImg: "/img/top-chef/img_1.jpg",
            description: "Delicately rolled sushi with seasoned rice, fresh fish, and seaweed.",
            ingredients: [
                "2 cups sushi rice",
                "4 nori sheets (seaweed)",
                "200g fresh fish (tuna, salmon)",
                "Cucumber, sliced into thin strips",
                "Avocado, sliced",
                "Soy sauce, pickled ginger, and wasabi for serving"
            ],
            instructions: [
                "Cook sushi rice and season with vinegar, sugar, and salt.",
                "Place a nori sheet on a bamboo mat, shiny side down.",
                "Spread a thin layer of rice over the nori.",
                "Place fish, cucumber, and avocado on top of the rice.",
                "Roll the sushi tightly using the bamboo mat.",
                "Cut into pieces and serve with soy sauce, pickled ginger, and wasabi."
            ]
        },
        {
            title: "Fresh Fruit Salad",
            image: "/img/gallery/img_14.jpg",
            authorImg: "/img/top-chef/img_2.jpg",
            description: "A mix of berries, strawberries, and grapes in a vibrant fruit salad.",
            ingredients: [
                "1 cup strawberries, sliced",
                "1 cup blueberries",
                "1 cup grapes, halved",
                "1 banana, sliced",
                "1 apple, chopped",
                "1 orange, peeled and segmented",
                "1 tablespoon honey",
                "1 tablespoon lemon juice"
            ],
            instructions: [
                "In a large bowl, combine all the fruits.",
                "Drizzle with honey and lemon juice.",
                "Toss gently to combine.",
                "Serve immediately or refrigerate until ready to serve."
            ]
        },
        {
            title: "Fluffy Pancake Stack",
            image: "/img/gallery/img_15.jpg",
            authorImg: "/img/top-chef/img_3.jpg",
            description: "Pancakes served with a drizzle of maple syrup, fresh berries.",
            ingredients: [
                "1 cup all-purpose flour",
                "1 tablespoon sugar",
                "1 teaspoon baking powder",
                "1 egg",
                "1 cup milk",
                "2 tablespoons melted butter",
                "Maple syrup and fresh berries for serving"
            ],
            instructions: [
                "In a bowl, mix the flour, sugar, and baking powder.",
                "Add the egg, milk, and melted butter, and whisk until smooth.",
                "Heat a pan over medium heat and pour batter to form pancakes.",
                "Cook until bubbles form, then flip and cook the other side.",
                "Serve with maple syrup and fresh berries."
            ]
        },
        {
            title: "Glazed Donut Delight",
            image: "/img/gallery/img_16.jpg",
            authorImg: "/img/top-chef/img_5.jpg",
            description: "Soft, sweet donuts with a smooth glaze.",
            ingredients: [
                "2 cups all-purpose flour",
                "1/2 cup sugar",
                "1 tablespoon baking powder",
                "1/2 teaspoon salt",
                "1/2 cup milk",
                "1/4 cup melted butter",
                "1 egg",
                "1/2 teaspoon vanilla extract",
                "Glaze: 1 cup powdered sugar, 2 tablespoons milk, 1/2 teaspoon vanilla extract"
            ],
            instructions: [
                "In a bowl, mix flour, sugar, baking powder, and salt.",
                "Add milk, melted butter, egg, and vanilla extract, and mix until smooth.",
                "Roll out the dough and cut into donut shapes.",
                "Fry the donuts in hot oil until golden brown.",
                "Mix glaze ingredients and dip the donuts in the glaze while still warm."
            ]
        },
        {
            title: "Creamy Cookies",
            image: "/img/gallery/img_17.jpg",
            authorImg: "/img/top-chef/img_6.jpg",
            description: "Soft, buttery cookies with a smooth, creamy filling.",
            ingredients: [
                "1 cup butter, softened",
                "1/2 cup sugar",
                "2 cups all-purpose flour",
                "1/2 teaspoon baking powder",
                "1/2 teaspoon salt",
                "1 teaspoon vanilla extract",
                "Creamy filling: 1/2 cup butter, 1 cup powdered sugar, 1 teaspoon vanilla extract"
            ],
            instructions: [
                "Preheat the oven to 180°C.",
                "Cream the butter and sugar together until light and fluffy.",
                "Add vanilla extract and mix.",
                "Sift in the flour, baking powder, and salt, and mix until a dough forms.",
                "Roll out the dough and cut into cookie shapes.",
                "Bake for 10-12 minutes until lightly golden.",
                "Mix filling ingredients and sandwich between the cooled cookies."
            ]
        },
        {
            title: "Creamy White Sauce Pasta",
            image: "/img/gallery/img_18.jpg",
            authorImg: "/img/top-chef/img_3.jpg",
            description: "Pasta coated in a creamy white sauce with a hint of garlic & herbs.",
            ingredients: [
                "200g pasta (penne or fettuccine)",
                "2 tablespoons butter",
                "2 tablespoons all-purpose flour",
                "1 1/2 cups milk",
                "1/2 cup grated Parmesan cheese",
                "2 cloves garlic, minced",
                "Salt and pepper to taste",
                "Fresh parsley for garnish"
            ],
            instructions: [
                "Cook the pasta according to package instructions.",
                "In a saucepan, melt butter and sauté garlic until fragrant.",
                "Stir in flour and cook for 1-2 minutes.",
                "Gradually add milk, stirring continuously until the sauce thickens.",
                "Add Parmesan cheese and stir until melted.",
                "Season with salt and pepper.",
                "Toss the cooked pasta in the sauce and garnish with fresh parsley."
            ]
        },
            {
                title: "Red Velvet Layer Cake",
                image: "/img/gallery/img_19.jpg",
                authorImg: "/img/top-chef/img_5.jpg",
                description: "Rich red velvet layers with creamy frosting; a sweet delight.",
                ingredients: [
                    "2 1/2 cups all-purpose flour",
                    "1 1/2 cups sugar",
                    "1 teaspoon baking soda",
                    "1 teaspoon cocoa powder",
                    "1 teaspoon salt",
                    "2 large eggs",
                    "1 1/2 cups vegetable oil",
                    "1 cup buttermilk",
                    "2 tablespoons red food coloring",
                    "1 teaspoon vanilla extract",
                    "1 teaspoon white vinegar",
                    "Cream cheese frosting: 8 oz cream cheese, 1/2 cup butter, 4 cups powdered sugar, 1 teaspoon vanilla extract"
                ],
                instructions: [
                    "Preheat the oven to 175°C (350°F) and grease and flour two 9-inch round cake pans.",
                    "In a large bowl, sift together the flour, sugar, baking soda, cocoa powder, and salt.",
                    "In another bowl, whisk together the eggs, vegetable oil, buttermilk, food coloring, vanilla extract, and vinegar.",
                    "Gradually add the wet ingredients to the dry ingredients, mixing until just combined.",
                    "Divide the batter evenly between the prepared cake pans.",
                    "Bake for 25-30 minutes or until a toothpick inserted into the center comes out clean.",
                    "Allow the cakes to cool in the pans for 10 minutes, then turn them out onto a wire rack to cool completely.",
                    "For the frosting, beat the cream cheese and butter together until smooth.",
                    "Gradually add the powdered sugar and vanilla extract, beating until the frosting is light and fluffy.",
                    "Frost the cooled cakes with the cream cheese frosting, layering and covering the entire cake."
                ]
            }
            
         
    ].sort(() => Math.random() - 0.5);

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    );
}
