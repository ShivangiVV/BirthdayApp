import React from 'react'

export const Person = (props) => {
    console.log("Person prop", props);

    return <article className='person'>
        <img src={props.image} alt={props.name} className='img' />
        <div>
            <h4>{props.name}</h4>
            <p>
                {props.age} years
            </p>
        </div>
    </article>


}
