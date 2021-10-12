import React from 'react';
import { Link } from 'react-router-dom'
import Button from '../FormElements/Button';


const ItemCard = ({id, name, price, images}) => {


    return (
        <React.Fragment>
        <Link to={`/store/${id}`}>
            <div 
            className="item-card"
            >
                <div className="item-card__image">
                <img src={`${process.env.REACT_APP_BACKEND_URL}/${images[0].img}`} alt={name}></img>
                </div>
                <div className="item-card__info">
                <p>
                    <span>{name}</span>
                    <span style={{fontFamily: "Nanum Gothic"}}>{price} $</span>
                </p>
                <Button>SHOW</Button>
                </div>
            </div>
        </Link>
        </React.Fragment>
    )
}

export default ItemCard
