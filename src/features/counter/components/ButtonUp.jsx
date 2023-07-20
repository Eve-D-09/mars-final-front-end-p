import React from 'react';
import { useState, useEffect } from "react";
import ArrowUp from "../../../img/svg/arrow-up-sm-svgrepo-com.svg";

const ButtonUp = () => {
    const [ buttonUp, setButtonUp ] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setButtonUp(true);
            } else {
                setButtonUp(false);
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0, 
            behaviour: "smooth",
        })
    }


    return ( <>
    <div className="buttonUp">
        {buttonUp && (
            <button onClick={scrollUp}><img src={ArrowUp} alt="arrowUp" /></button>
        )}
    </div>
    </> );
}
 
export default ButtonUp;


