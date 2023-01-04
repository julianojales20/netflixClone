import React, { useState } from "react";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

import "./MovieRow.css";

export default ({title, items}) => {
    const [scrollX, setScrollX] = useState(-400);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0;
        }
        setScrollX(x);
    }

    const handlerigthArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;

        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 80;
        }
        setScrollX(x);
    }


    return(
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBefore style={{fontSize:50}}/>
            </div>
            <div className="movieRow--rigth" onClick={handlerigthArrow}>
                <NavigateNext style={{fontSize:50}}/>
            </div>

            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key)=>(
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

