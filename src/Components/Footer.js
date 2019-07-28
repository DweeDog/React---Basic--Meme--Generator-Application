import React from "react"


//whats easier for you is to create javascript vairables that store the changes you want to make my parsing javscript objects and then just move that in with the curly braces
//which allows you to change to javascript if you need this doesn't allow the cluttering which occurs in any of the tags since you can always generate things outside
//the current tag and then place it in their

function Footer() {

    //we would normally define things outside the return function , since it is outside the return function, to define a javascript variable we use the const keyword,
    //measurement in pixels are just the basic uniform measurement value which is used with javascript, by turning it into a string it becomes valid javascript. so make
    // sure you add the paranthesis " ", Javascript would actually determine what the styles would be. cna have dynamic data which can change the way that hardcoded html
    //in the way so that while changing the data which is parsed to those elements. 
    const styles= {
        color: "#FF8C00"
    }

    return(

        <footer>

            <h3 style={styles}> this is the footer </h3>
        
        </footer>


    )
}

export default Footer