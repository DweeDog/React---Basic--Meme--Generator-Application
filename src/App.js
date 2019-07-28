
//Adding imports to the application
import React from "react"

import HeaderComponent from "./Components/HeaderComponent"
import MainNavComponent from "./Components/MainNavComponent"
import Footer from "./Components/Footer"

//render the app component which renders different type of elements , which have child div elements. This is often reffered to as a Tree which is a route of hte tree
//it isn't jsut limited to rendering through all the different types of html elements which are based on UI elements already provided in html code under the JSX 
//such as the nav or the img element and other types of elements. 

//you normally want your application to be mainly just components and then goes to teh idnividual components have the individual changes this. Ass the app.js just 
//have a compilation of all the different elements of the JSX. 
//we going to start styling a particular component of it. 

//you can only add it to react elemetns but not react compenents that you yourself define , therefore you can only add class names to those things. Have to go to your own the header
//element having child and parent components. 

//this app file is treated as a table of contents , similar to that it integrates all the different elements together. 

//creating the function for App
function App() {

    return(

        <div>
            
            <HeaderComponent/>
            <MainNavComponent/>
            <Footer/>
        
        
        </div>

    )

}

export default App

