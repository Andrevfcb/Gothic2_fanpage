import React, {useState, useEffect, useContext } from 'react';

import { useHttpClient } from '../../hooks/http-hook';

import { useForm } from "../../hooks/form-hook"
import ErrorModal from "../../UIElements/ErrorModal"
import { AuthContext } from '../../context/auth-context';

import LoadingSpinner from "../../UIElements/LoadingSpinner"
import AdminAddItem from './AdminAddItem';
import AdminDeleteItem from './AdminDeleteItem';

const AdminShoop = () => {

    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const [isSendRequest, setIsSendRequest] = useState(true);
    const [items, setItems] = useState([]);
    const [itemId, setItemId] = useState(false);
    const auth = useContext(AuthContext);
   

    const [formState, inputHandler] = useForm(
      {
        name: {
          value: '',
          isValid: false
      },
          description: {
              value: '',
              isValid: false
      },
          price: {
              value: '',
              isValid: false
      },
          quantity: {
              value: '',
              isValid: false
      },
          main: {
              value: '',
              isValid: false
      },
        images: {
          value: null,
          isValid: false
        }
      },
      false
    );

    useEffect(() => {
      const fetchItems = async () => {
          try {
            const responseData = await sendRequest(
              `${process.env.REACT_APP_BACKEND_URL}/api/items`
            );
    
            setItems(responseData.items);
          } catch (err) {}
        
      };
      fetchItems();
    }, [sendRequest, isSendRequest])

    const itemSubmitHandler = async event => {
      event.preventDefault();
        try { 
          const formData = new FormData();
          formData.append('name', formState.inputs.name.value);
          formData.append('description', formState.inputs.description.value);
          formData.append('price', formState.inputs.price.value);
          formData.append('quantity', formState.inputs.quantity.value);
          formData.append('main', formState.inputs.main.value);
          const im = formState.inputs.images.value
          im.forEach(
            i => formData.append('images', i)
            )
          await sendRequest(
            `${process.env.REACT_APP_BACKEND_URL}/api/items/`,
            'POST',
            formData,
            {
              Authorization: 'Bearer ' + auth.token
            }
          );
              alert("create item works")
              setIsSendRequest(prevIsSendRequest =>
                !prevIsSendRequest)
        } catch (err) {}
    };

    const deleteItemSubmitHandler = async event => {
        event.preventDefault();
            try {
              await sendRequest(
                `${process.env.REACT_APP_BACKEND_URL}/api/items/${itemId}`,
                'DELETE',
                null,
                {
                  Authorization: 'Bearer ' + auth.token
                }
              );
            alert("deleting item works")
            setIsSendRequest(prevIsSendRequest =>
              !prevIsSendRequest)
            } catch (err) {}
        }

    const choseDeletedItemId = (e) => {
      setItemId(e.target.value)
        }
        const setOptions = items.map(i => <option value={i.id}>{i.name}</option>)

    return (
        <React.Fragment>
          <ErrorModal error={error} onClear={clearError} />
            {isLoading && <LoadingSpinner asOverlay />}
            <AdminAddItem 
            itemSubmitHandler={itemSubmitHandler}
            inputHandler={inputHandler}
            formState={formState}
            />
            <AdminDeleteItem 
            setOptions={setOptions}
            choseDeletedItemId={choseDeletedItemId}
            deleteItemSubmitHandler={deleteItemSubmitHandler}
            itemId={itemId}
            />
        </React.Fragment>
    )
}

export default AdminShoop
