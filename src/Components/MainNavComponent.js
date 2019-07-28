import React from "react"

import "./style.css"
import TodoItem from "./TodoItem";
import ContactCard from "./ContactCard";
import Jokes from "./Jokes"

//can pass a property for each of the property datas that you want a particular component wants to use, if all the different contact cards have different data
//but still display the same amount of data then there are hard coded elements in the actual component which needs to be changed into property values and 
//added with those property values, therefore you can have different sets of data with properties which make it easy to change the different type of components
//that you want to generate. can also pass down one object which has all the propetty values but that seemingly doesn't seem better

function MainNavComponent() {

    return(

        <main className="todo-list">

            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />

            <ContactCard 
                contact={{name:"Mr.Phenghis",
                imgurl:"http://personal.psu.edu/xqz5228/jpg.jpg",
                phone:"(212) 555-1234",
                email:"Mr.Phenghis@Email.com"}}
                
            />

            <ContactCard 
                contact={{name:"Mr.Wenghis",
                imgurl:"https://upload.wikimedia.org/wikipedia/commons/d/dd/Linux_logo.jpg",
                phone:"(212) 555-1234",
                email:"Mr.Wenghis@Email.com"}}
                
            />

            <Jokes
                joke={{question: "Who?", answer: "I"}}
            />
            <Jokes
                joke={{question: "Why?", answer: "Me"}}
            />
            <Jokes
                joke={{question: "While?", answer: "T"}}
            />
            <Jokes
                joke={{question: "So?", answer: "A"}}
            />
            <Jokes
                joke={{question: "Get?", answer: "B"}}
            />


        
        </main>


    )
}

export default MainNavComponent