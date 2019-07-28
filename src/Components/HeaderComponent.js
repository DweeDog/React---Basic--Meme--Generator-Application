import React from "react"

import "./style.css"

//you cannot just use class but you need to use class name, they are just using the vanilla dom API. therefore we a class name for that particular header to provide
// a type of CSS styling. You would just use classname instead of class and basically then you can go into your CSS page and can style those components into a CSS 
// type of page which has nice styling. 

//sometimes the styling doesn't work so its important to import the styles so that you can add the specific css, if your want the specific css file to run always remeember
//to import the css file into the component. 

function HeaderComponent() {

    return(

        <header className="navbar">
            This is a header
        
        </header>


    )
}

export default HeaderComponent