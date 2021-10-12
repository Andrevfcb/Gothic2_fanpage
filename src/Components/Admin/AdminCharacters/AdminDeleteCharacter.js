import React from 'react';
import Button from "../../FormElements/Button"

const AdminDeleteCharacter = ({ setOptions, choseDeletedCharacterId, deleteCharacterSubmitHandler, characterId }) => {

    return (
        <React.Fragment>
                <h2>DELETE CHARACTER</h2>
                <select name="characters" id="characters" onChange={choseDeletedCharacterId} >{setOptions}</select>
                <Button 
                onClick={deleteCharacterSubmitHandler}
                disabled={!characterId}
                >DELETE</Button>
                </React.Fragment>
    )
}

export default AdminDeleteCharacter
