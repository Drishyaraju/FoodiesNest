export default function ImproveSkills(){
    const list = [
        "Explore fresh recipes",
        "Innovate with ingredients",
        "Create your own dishes",
        "Understand nutritional values",
        "Receive cooking advice",
        "Earn your culinary rank"
    ]

    return(
        <div className="section improve-skills">
            <div className="col img">
                <img src="/img/gallery/img_11.jpg" alt=""/>
            </div>
            <div className="col typography">
                <h1 className="title">Elevate Your Culinary Craft</h1>
                {
                    list.map((item,index)=>(
                        <p className="skill-item" key={index}>{item}</p>
                    ))
                }
                <button className="btn">signup now</button>
            </div>
        </div>
    )
}