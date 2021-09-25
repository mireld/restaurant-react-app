import * as React from 'react'
import BookingForm from './components/booking-form'
import Button from './components/button'
// import useSendData from './hook/useSendData'
import './App.css';;
// import Button2 from './components/button'


function App() {
  let bookingInfo = {};
  const [disabled, setDisabled] = React.useState(true)
  
  function getFormInfo (value) {
    bookingInfo = value;
    setDisabled(bookingInfo.name && bookingInfo.mail && bookingInfo.phone && bookingInfo.people? false : true) 
  }

  // const handleClick = () => {
  //   SendData(bookingInfo);
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Reservaciones</h1>
        <BookingForm setDataForm = {getFormInfo}/>
        <Button setDisabled = {disabled} info = {bookingInfo} />
      </header>
    </div>
  );
}

export default App;
