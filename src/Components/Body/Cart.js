import React, {useState, useEffect, useContext } from 'react';
import "./Cart.css"

import { useHttpClient } from '../hooks/http-hook';
import LoadingSpinner from "../UIElements/LoadingSpinner"
import Button from "../FormElements/Button"
import Card from "../UIElements/Card"
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth-context';


const Cart = ({ closeModal }) => {

    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [itemList, setItemList] = useState([])
    const [itemsPrice, setItemsPrice] = useState(0)
    const auth = useContext(AuthContext);
    const uid = auth.userId
    

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const responseData = await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/api/cart/${uid}`
              );
            setItemList(responseData.cart)
            setFullPrice(responseData.cart)
            } catch (err) {}
        }
        fetchCartItems()
        
    }, [sendRequest])

    const deleteItem = async (e) => {
        console.log(e.target.id);
        
        const itemId = e.target.id
        try {
            const responseData = await sendRequest(
              `${process.env.REACT_APP_BACKEND_URL}/api/cart/${itemId}`,
              'PATCH',
              null,
              {
                Authorization: 'Bearer ' + auth.token
              }
            );
            setItemList(responseData.cart)
            setFullPrice(responseData.cart)
          } catch (err) {}
    }

    const showCartItems = () => {
        let cartItems
        if (itemList.length > 0 ) {
            cartItems = itemList.map(item => {
                return (<div className="cart-container__items-info">
                    <p>{item.product.name}</p>
                    <p>{item.quantity}</p>
                    <p>{item.price} $</p>
                    <span class="fas fa-times" id={item.product.id} onClick={deleteItem} />
                </div>)
            })
        }
        
        return cartItems
    }

    const setFullPrice = (e) => {
        let price = 0
        if (e.length > 0 ) {
            e.map(item => 
                price = price + item.price
            )
        }
        setItemsPrice(price)
    }

    const buyMessage = () => {
        alert("Sorry, it's just demonstration app :)")
    }

    return (
        <React.Fragment>
        {isLoading && <LoadingSpinner asOverlay />}
        <div className="cart">
        <div className="cart-container">
                <Card>
                {!(itemList.length > 0) && <p>Your cart is empty, go to <Link to="/shoop" onClick={closeModal} style={{color: "black"}}>shoop section</Link></p>}
                {(itemList.length > 0) && 
                <React.Fragment>
                    <h3>Your items</h3>
                    <div className="cart-container__items">
                        <div className="cart-container__items-titles">
                            <p>Item</p>
                            <p>Quantity</p>
                            <p>Price</p>
                        </div>
                        {(itemList.length > 0) && showCartItems()}
                        
                    </div>
                    <h3 style={{textAlign: "end"}}>Total: <span>{itemsPrice} $</span></h3>
                    <Button onClick={buyMessage}>BUY</Button>
                    </React.Fragment>
                    }
                </Card>   
        </div>
        </div>
        </React.Fragment>
    )
}

export default Cart
