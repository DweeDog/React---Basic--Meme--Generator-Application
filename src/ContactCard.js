import React from "react"

//the problem with the initial elements of the contact card is that it has hard coded elements and what we need to do is need to create dynamic properties transition
//to make it better, add contextual information which makes it easier to change and make it dynamic information. The inside paranthesis takes the inside of what is 
//called and known as props which is the propety that was passed in so it takes in each of those elements which are requreied terefore the will require all the props. 
//therefore the props stole all those are defined when the component has defined and those can now be used with the prop object which is coming in. 

function ContactCard(props) {

    return (

        <div className="contact-card">
            <img src={props.imgurl}/>
            <h3>{props.name}</h3>
            <p>{props.phone} </p>
            <p>{props.email}</p>
        </div>
    )

}

export default ContactCard