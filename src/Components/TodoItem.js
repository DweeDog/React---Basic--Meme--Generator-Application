import React from "react"

import "./style.css"

//its easier to create a div tag and then apply styling to teh component properties in the React components. 

function TodoItem() {

    return(

        <div className="todo-item">
            <input type="checkbox" />
            <p>Placeholder text here</p>
        
        </div>
        

    )
}

export default TodoItem