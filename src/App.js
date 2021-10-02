import * as React from 'react'
import FormProps from './components/FormProps'
import Button from '@mui/material/Button'
import SendData from './functions/sendData'
import BRLogo from './img/BRLogo.png'
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
      <div className="columns">
        <div className="column">
          <img src={BRLogo} alt=""/>
        </div>
        <div className="column is-7">
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
    </div>
      
    </div>
  );
}

export default App;
