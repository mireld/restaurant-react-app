import * as React from 'react'
import FormProps from './components/FormProps'
import Button from '@mui/material/Button'
import SendData from './functions/sendData'
import './App.css';;

function App() {
  let bookingInfo = {};
  const [disabled, setDisabled] = React.useState(true)
  

  function getFormInfo (value) {
    bookingInfo = value;
    setDisabled(bookingInfo.name && bookingInfo.mail && bookingInfo.phone && bookingInfo.people? false : true)
  }
  
  const handleClick = () => {
    SendData(bookingInfo);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Reservaciones</h1>
        <FormProps setDataForm = {getFormInfo}/>
        <Button
        disabled={disabled}
        id = "bookingButon"
        variant="contained"
        onClick = {handleClick}
        >Reservar
        </Button>
      </header>
    </div>
  );
}

export default App;
