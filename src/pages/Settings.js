import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

export default function Settings(){
    const [theme,setTheme] = useState("light")
    const primaryColors =[
            "rgb(255, 0, 86)",
            "rgb(255, 208, 0)",
            "rgb(82, 183, 136)", 
            "rgb(30, 136, 229)",
            "rgb(171, 129, 205)"
    ]
    return(
        <div>
            <div className="section d-block">
                <h2>Preferred Theme</h2>
                <div className="options-container">
                    <div className="option light">
                        {theme === "light" && (
                            <div className="check">
                                <FontAwesomeIcon icon={faCheck}/>
                            </div>
                        )}
                    </div>
                    <div className="option dark">
                        {theme === "dark" && (
                            <div className="check">
                                <FontAwesomeIcon icon={faCheck}/>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="section d-block">
                <h2>Primary Color</h2>
                <div className="options-container">
                    {primaryColors.map((color,index)=>(
                        <div className="option light" style={{backgroundColor:color}}>
                            {true && (
                                <div className="check">
                                    <FontAwesomeIcon icon={faCheck}/>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}