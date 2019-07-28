import React from "react"

//you can add a ternary in ? to check if that property is placed and can be used. and if there isnt a props question then we can use it in that way , to check if the property
//exists and thus we only create and display a none. 

function Jokes(props) {

    return(

        <div>
            <h2>Question: {props.joke.question}</h2>
            <h3>Answer: {props.joke.answer}</h3>
        
        </div>

    ) 


}

export default Jokes