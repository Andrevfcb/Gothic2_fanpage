import React from 'react';
import Button from "../../FormElements/Button"

const AdminDeleteItem = ({ setOptions, choseDeletedItemId, deleteItemSubmitHandler, itemId }) => {

    return (
            <React.Fragment>
                <h2>DELETE ITEM</h2>
                <select name="items" id="items" onChange={choseDeletedItemId} >{setOptions}</select>
                <Button 
                onClick={deleteItemSubmitHandler}
                disabled={!itemId}
                >DELETE</Button>
            </React.Fragment>
    )
}

export default AdminDeleteItem
