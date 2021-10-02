import React from 'react'
import getData from '../functions/getData'

const bookings = () => {
    let bookingData = []
    
    async function asyncCall() {
        console.log('asyncCall')
        bookingData = await getData();
        console.log(bookingData);
        
        return(
        // <h1>Hello</h1>
        bookingData.forEach(element => {
            return(
                <div className="card">
                    <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                        <p className="title is-4">{element.nombre}</p>
                        <p className="subtitle is-6">Telefono:{element.phone}</p>
                        </div>
                    </div>
                
                    <div className="content">
                        Reserva hecha el día {element.date}, para {element.people} personas.
                        
                        <br />
                        <time datetime="2016-1-1">{element.bookingDate}</time>
                    </div>
                    </div>
                </div>
            )
        })
        );
    }
    
        asyncCall();
        
    }
    
    export default bookings
