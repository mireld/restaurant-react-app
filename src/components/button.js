import React from 'react'
import Button from '@mui/material/Button';
// import { useSendData } from '../hook/useSendData';

const button = ({ setDisabled, info }) => {
    return (
        <div>
            <Button 
            disabled = {setDisabled}
            id = "bookingButon"
            variant="contained"
            onClick = {console.log('soy el boton secundario')}
            >
            Reservar
            </Button>
        </div>
    )
}

export default button
