import React from "react";

const ScrollToBottom = () => {
    
    const ScrollToBottom = () => window.scrollTo(
        {top:document.documentElement.scrollHeight, 
        behavior:"smooth"}
    );

    return(
        <div className="ScrollToBottom" onClick={ScrollToBottom}>Down</div>     
    );
}

export default ScrollToBottom;