import React, {useState, useEffect} from 'react';
import "./Shoop.css";
import Input from '../FormElements/Input';
import ItemCard from './ItemCard';

import LoadingSpinner from "../UIElements/LoadingSpinner"
import { useHttpClient } from '../hooks/http-hook';


const Shoop = () => {

    const [items, setItems] = useState();
    const [allItems, setAllItems] = useState();
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [itemSearchValue, setItemSearchValue] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0)
        const fetchItems = async () => {
                
                try {
                    const responseData = await sendRequest(
                    `${process.env.REACT_APP_BACKEND_URL}/api/items/`
                  );
                
                setItems(responseData.items)
                setAllItems(responseData.items)
                } catch (err) {}
            }
            fetchItems()
    }, [sendRequest])

    const itemList = () => {
        let item_list
        let sortItems
        if(items) {
            sortItems = items.sort((a, b) => a.name > b.name ? 1 : -1)
            item_list = sortItems.map(i => {
            return (<ItemCard key={i.id} id={i.id} name={i.name} price={i.price} description={i.description} quantity={i.quantity} images={i.images} category={i.category} item_category={i.item_category} />)
    })
    } return item_list
    }

    const inputChange = (e) => {
        setItemSearchValue(e.target.value)
        const inputValue = e.target.value.toLowerCase()
        const filteredCharacters = allItems.filter(i => i.name.toLowerCase().includes(inputValue))
        setItems(filteredCharacters)
    }

    return (
        <div className="shoop">
            <div className="shoop-image">
                <h1>Store</h1>
            </div>
            <input value={itemSearchValue} placeholder="search" onChange={inputChange} />
            {/* <Input element="input"  /> */}
            <div className="shoop-items">
            {isLoading && <LoadingSpinner asOverlay />}
                {items && itemList()}
            </div>
        </div>
    )
}

export default Shoop
