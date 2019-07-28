
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

//you can define constants in the JSX and have the javasript components
//const firstName = "Bob";
//const lastName = "Penghis";

//the rules can be different , so therefore inline styling can be different and require for you to be a javascript object to try soemthing, everytime you want to wrap
//objects which are wrapped with curly braces but alos have to wrap any javascript with curly bases as well. 

//but anytime we want to get back into javascript we can go to put a curly brace around the particular applicaiton such as 
// {fistName + " " + LastName} surronded by the JSX tabs therefore this makes it easier to swap between teh two wehn you are doing functionality, closing hte curly brace means
//you want to leave the javascript and go to the JSX. you can summon variables '($firstName) ($lastName)' , javascript can create new instantles and get the hours from the date
//object and make it easier. 

//PROPS
//--------------------------------------------------------------------------------------------------------
// there are multiple things you can change in the html parts of the index html which can help you chagne the attributes or properties , that does in html it can allow you 
//add the placeholders, name and type rather than just using the html tags we can use properties to change how the attributes work on the website. 
// it normally involves changing and cutting the types of websites into things which can make an create multiple components with changing attributes and poperties. 
// properties allow the component to change on the different properties, the tree can go as deeply nested as you might want which tends to render an amount of video tile components
//which could be given a property of images on a certain element. 

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

