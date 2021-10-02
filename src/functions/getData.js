import axios from 'axios';

const getData = () => {
    console.log('getData') 
    // useEffect(() => {
        return (axios.get('http://localhost:4000/reservations')
          .then((response) => {
            //   console.log(response.data)
              return (response.data)
          })
          )
    //   }, [])
}
export default getData