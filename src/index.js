// React is more efficient since it can be uses a virutal dom and runs on something known as componennts 
//    react web components and turn the html web parts and put them into components and make it easier to read , therefore it shall have a navigation bar at the top
//   then have other component tags. 

//importing the files for react
import React from "react"
import ReactDOM from "react-dom"

//fill the boilerplate react code required to render an unordered list <ul> </ul> to the page, the list should contain 3 list items wiht anything in them you want. 
//where we want to place oir application is where the root div has been added or will be added. 

//cannot render two different JSX elements close to each other, there cannot be two adajacent jsx members together but they have to wrapped so that it 
//has multiple components together and you simply add that component and render that component. React is made significantly easier to make and do. 
//the javascript is going to turned into elements on the page, so lets have a look at the index.html, noHrmally sticks into the id of what we want to render
//you dont want to stick all the elements in the root react dom renderer and want to make it simpler so that you can write some function called components.

//creating a new function
//creating components and make the code alot cleaner than the other problmes that are ensued with the problems. 
function MyApp() {
    return (<ul><li>Buy Food</li>
    <li>Do the Cold Showers</li>
    <li>workout</li></ul>)
}


ReactDOM.render(
    <MyApp />
    , document.getElementById("root"));
