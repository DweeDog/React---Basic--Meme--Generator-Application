
//Adding imports to the application
import React from "react"

//render the app component which renders different type of elements , which have child div elements. This is often reffered to as a Tree which is a route of hte tree
//it isn't jsut limited to rendering through all the different types of html elements which are based on UI elements already provided in html code under the JSX 
//such as the nav or the img element and other types of elements. 

//you normally want your application to be mainly just components and then goes to teh idnividual components have the individual changes this. Ass the app.js just 
//have a compilation of all the different elements of the JSX. 

//this app file is treated as a table of contents , similar to that it integrates all the different elements together. 

//creating the function for App
function App() {

    return(

        <div>
            <input type="checkbox" />
             <p> Placeholder text here</p>

             <input type="checkbox" />
             <p> Placeholder text here</p>

             <input type="checkbox" />
             <p> Placeholder text here</p>
        
        
        </div>

    )

}

export default App

