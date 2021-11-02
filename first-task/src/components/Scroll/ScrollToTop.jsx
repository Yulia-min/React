import React, { useCallback, useEffect, useState } from "react";
import {useWindowScroll} from "react-use"

const ScrollToTop = () => {
    const {y: pageYOffset} = useWindowScroll()
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if(pageYOffset > 400){
            setVisible(true)
        }else{
            setVisible(false)
        }
    },[pageYOffset])

    const ScrollTop = useCallback(()=>{
        window.scrollTo(
            {top:0,
            behavior:"smooth"}
        );
    })

    if(!visible){
        return false
    }
    return(
        <div className="ScrollToTop" onClick={ScrollTop}>Up</div>    
    );
}

export default ScrollToTop;