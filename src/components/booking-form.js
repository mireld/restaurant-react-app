import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormProps({setDataForm}) {
    const [data, setData] = React.useState({
        "name": "",
        "mail": "",
        "phone" : "",
        "people" : 0
    })

    setDataForm(data);

    const handleChange = (e) =>{
        let dataForm = {
            "name": data.name,
            "mail": data.mail,
            "phone" : data.phone,
            "people" : data.people
        }
        if (e.target.id === 'nameIn'){
            dataForm.name = e.target.value
        }
        if (e.target.id === 'mailIn'){
            dataForm.mail = e.target.value
        }
        if (e.target.id === 'phoneIn'){
            dataForm.phone = e.target.value
        }
        if (e.target.id === 'peopleIn'){
            dataForm.people = e.target.value
        }
        setData(dataForm);
    }
    return (
        <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '20ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <div>
            <TextField
            required
            id="nameIn"
            label="Nombre"
            defaultValue=""
            onChange ={handleChange}
            />
            <TextField
            required
            id="mailIn"
            label="e-mail"
            defaultValue=""
            onChange ={handleChange}
            />
            <TextField
            required
            id="phoneIn"
            label="Teléfono"
            onChange ={handleChange}
            />
            <TextField
            id="peopleIn"
            label="Personas"
            type="number"
            InputLabelProps={{
                shrink: true,
            }}
            onChange ={handleChange}
            />
        </div>
        </Box>
  );
}
