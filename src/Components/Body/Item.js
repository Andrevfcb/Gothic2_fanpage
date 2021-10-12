import React, { useRef, useState, useEffect, useContext } from 'react';
import "./Item.css";

import ErrorModal from '../UIElements/ErrorModal';
import { useHttpClient } from '../hooks/http-hook';
import LoadingSpinner from "../UIElements/LoadingSpinner"
import { AuthContext } from '../context/auth-context';

import {
    useParams
  } from "react-router-dom";
import Button from '../FormElements/Button';
  

const Item = () => {

    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [item, setItem] = useState();
    const [itemPrice, setItemPrice] = useState();
    const [quantity, setQuantity] = useState(1);
    const [imgNum, setImgNum] = useState(0);
    const [isButtonMinusDisabled, setIsButtonMinusDisabled] = useState(false);
    const [isButtonPlusDisabled, setIsButtonPlusDisabled] = useState(false);
    const auth = useContext(AuthContext);

    const itemImage = useRef();
    const itemContainer = useRef();

    let { iid } = useParams();
    const uid = auth.userId

    useEffect(() => {
        window.scrollTo(0, 0)
        const fetchItem = async () => {
                try {
                    const responseData = await sendRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/api/items/${iid}`
                  );
                  setItem(responseData.item)
                  setItemPrice(responseData.item.price)
                } catch (err) {}
            }
            fetchItem()
    }, [sendRequest])

    const disabledButton = (e) => {
        const value = e.target.value
        let disabledPlusButton = false
        let disabledMinusButton = false
        if (value === "+") {
            if (item && (quantity + 1) === item.quantity) {
                disabledPlusButton = true
            } else {
                disabledPlusButton = false
            }
        } else {
            if (item && (quantity - 1) === 0) {
                disabledMinusButton = true
            } else {
                disabledMinusButton = false
            }
        }
            setIsButtonPlusDisabled(disabledPlusButton)
            setIsButtonMinusDisabled(disabledMinusButton)
    }

    const changeQuantity = (e) => {
        const value = e.target.value
        let newQuantity
        let newPrice
        if (value === "+") {
            newQuantity = quantity + 1
        } else {
            newQuantity = quantity - 1
        }
        newPrice = newQuantity * item.price
        setQuantity(newQuantity)
        setItemPrice(newPrice)
        disabledButton(e)
    }

    const scaleImage = (e) => {
        
        let clientX = e.clientX - itemImage.current.offsetLeft
        let clientY = e.clientY - itemImage.current.getBoundingClientRect().top
        
        const iWidth = itemImage.current.offsetWidth
        const iHeight = itemImage.current.offsetHeight
        
        clientX = clientX / iWidth * 100
        clientY = clientY / iHeight * 100

        e.target.style.transform = "translate(-" + clientX + "%, -" + clientY + "%) scale(2)"
    }

    const resetScaleImage = (e) => {
        e.target.style.transform = "translate(-50%, -50%) scale(1)"
    }

    const itemImages = () => {
        const images = item.images.map((i, id)=> {
            return (<img src={`${process.env.REACT_APP_BACKEND_URL}/${i.img}`} 
            alt={item.name}
            onClick={() => {
                setImgNum(id)
            }} 
            className={imgNum === id && "active"}
            ></img>)
        })
        return images
        
    }

    const addToCart = async () => {
        
        if (item) {
            try {
                await sendRequest(
                  `${process.env.REACT_APP_BACKEND_URL}/api/cart/${uid}`,
                  'POST',
                  JSON.stringify({
                      cartItems: {
                        product: item.id,
                        quantity: quantity,
                        price: itemPrice
                      }
                  }),
                  {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + auth.token
                  }
                );
                
              } catch (err) {}
        }
        
    }

   
    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
        <div className="item">
            {isLoading && <LoadingSpinner asOverlay />}
            <div className="item-image">
                <h1>{item && item.name}</h1>
            </div>
            <div className="item-container" ref={itemContainer}>
                <div className="item-container__image">
                    <div className="item-container__image-main"
                    ref={itemImage}
                    >
                        {item && <img src={`${process.env.REACT_APP_BACKEND_URL}/${item.images[imgNum].img}`} alt={item.name} 
                        onMouseMove={scaleImage}
                        onMouseLeave={resetScaleImage}></img>}
                    </div>
                    <div className="item-container__image-rest">
                    {item && itemImages()}
                    </div>
                </div>
                <div className="item-container__info">
                    <h2>Item informations</h2>
                    <p>Name: <span>{item && item.name}</span></p>
                    <p>Description: <span>{item && item.description}</span></p>
                    <p>Quantity: <span>{item && item.quantity}</span></p>
                    <p>Price: <span>{item && item.price} $</span></p>
                    <br/>
                    <div className="item-container__info-quantity">
                        <h3>Choose quantity and buy!</h3>
                            <div>
                            <button value="-" className="button-quantity" onClick={changeQuantity} disabled={isButtonMinusDisabled}>-</button>
                            <span>{quantity}</span>
                            <button value="+" className="button-quantity" onClick={changeQuantity} disabled={isButtonPlusDisabled}>+</button>
                            </div>
                    <p><Button onClick={addToCart}>ADD TO CART</Button></p>
                    </div>
                    
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Item
