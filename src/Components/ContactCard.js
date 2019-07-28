import React from "react"

//the problem with the initial elements of the contact card is that it has hard coded elements and what we need to do is need to create dynamic properties transition
//to make it better, add contextual information which makes it easier to change and make it dynamic information. The inside paranthesis takes the inside of what is 
//called and known as props which is the propety that was passed in so it takes in each of those elements which are requreied terefore the will require all the props. 
//therefore the props stole all those are defined when the component has defined and those can now be used with the prop object which is coming in. Therefore you cna
//have an object which does this for you and allows for you to do with json files and automatically parse the json file in. 

function ContactCard(props) {

    return (

        <div className="contact-card">
            <img src={props.contact.imgurl}/>
            <h3>{props.contact.name}</h3>
            <p>{props.contact.phone} </p>
            <p>{props.contact.email}</p>
        </div>
    )

}

export default ContactCard