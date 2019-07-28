import React from "react"

import "./style.css"
import TodoItem from "./TodoItem";
import ContactCard from "../ContactCard";

//can pass a property for each of the property datas that you want a particular component wants to use, if all the different contact cards have different data
//but still display the same amount of data then there are hard coded elements in the actual component which needs to be changed into property values and 
//added with those property values

function MainNavComponent() {

    return(

        <main className="todo-list">

            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />

            <ContactCard 
                name="Mr.Phenghis"
                imgurl="http://personal.psu.edu/xqz5228/jpg.jpg"
                phone="(212) 555-1234"
                email="Mr.Phenghis@Email.com"
            />

            <ContactCard 
                name="Mr.Wenghis"
                imgurl="https://upload.wikimedia.org/wikipedia/commons/d/dd/Linux_logo.jpg"
                phone="(212) 555-1234"
                email="Mr.Wenghis@Email.com"
            />


        
        </main>


    )
}

export default MainNavComponent