import React from 'react';

const Card = (props) => {
    console.log('cardprops', props)
    return (

        <div>
            <div class="card bg-dark text-white">
                <img class="card-img" src={props.restaurant.image} alt="Card image" />
                <div class="card-img-overlay">
                    <h5 class="card-title">{props.restaurant.name}</h5>
                    <p class="card-text">{props.restaurant.info}</p>
                </div>
            </div>
        </div>

    );
}

export default Card;

