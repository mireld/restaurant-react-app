import axios from 'axios';

const sendData = (data) => {
    console.log('sendData') 
    console.log(data)
    if (!data.name || !data.phone || !data.mail) {
        return
    }
    axios.post('http://localhost:4000/reservations', data)
        .then(response => {
        console.log(`response ${response}`);
        return response})
        .then(()=>{
            window.location.reload(false);
        })
}
export default sendData