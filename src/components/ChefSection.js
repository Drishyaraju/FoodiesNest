import ChefCard from "./ChefCard"

export default function ChefSection(){
    const chefs = [
        {
            name:"Juan Carlos",
            img: "/img/top-chef/img_1.jpg",
            recipeCount: "10",
            cuisine: "Mexican",
        },
        {
            name: "John Doe",
            img: "/img/top-chef/img_2.jpg",
            recipeCount: "15",
            cuisine: "Italian"
        },
        {
            name: "Patrick John",
            img: "/img/top-chef/img_3.jpg",
            recipeCount: "8",
            cuisine: "Irish"
        },
        {
            name: "Lisa Rose",
            img: "/img/top-chef/img_4.jpg",
            recipeCount: "20",
            cuisine: "Japanese"
        },
        {
            name: "Thomas Joe",
            img: "/img/top-chef/img_5.jpg",
            recipeCount: "12",
            cuisine: "Indian"
        },
        {
            name: "James Henry",
            img: "/img/top-chef/img_6.jpg",
            recipeCount: "18",
            cuisine: "French"
        },
    ]
    return(
        <div className="section chefs">
            <h1 className="title">Our Top Chefs</h1>
            <div className="top-chefs-container">
                {/* <ChefCard/>
                <ChefCard/>
                <ChefCard/>
                <ChefCard/>
                <ChefCard/>
                <ChefCard/> */}
                {chefs.map(chef=> <ChefCard key={chef.name} chef={chef}/>)}
            </div>
        </div>
    )
}