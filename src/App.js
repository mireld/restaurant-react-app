import './App.css';
import BookingForm from './components/booking-form'
import Button from '@mui/material/Button';


function App() {
  let bookingInfo = {};
  let setDisabled = true;

  function retrieveInfo (value) {
    bookingInfo = value;
    console.log(bookingInfo.name);
    setDisabled = bookingInfo.name !== "" ? false : true
    console.log(setDisabled);
  }

  const handleClick = () => {
    console.log('Soy el boton:');
  }
  


  return (
    <div className="App">
      <header className="App-header">
        <h1>Reservaciones</h1>
        <BookingForm setDataForm = {retrieveInfo}/>
        <Button
        disabled={setDisabled}
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
