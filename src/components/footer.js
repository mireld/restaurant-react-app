import React from 'react'
import logo from '../img/banner sm.png'

const footer = () => {
    return (
        <div className="content has-background-black">
        <div className="columns is-vcentered has-text-centered">
            <div className="column is-4 ">
                <p className="has-background-black is-bold" >
Direccion: <br/>
Estanque #522, 
Zona Centro <br/>
Saltillo, Coahuila <br/>
CP 25000
                </p>
            </div>
            <div className="column is-4">
                <p>
                    Este es una ejemplo de proyecto para la universidad UTEL y no representa un servicio real de restaurante.
                </p>
                <p>
                    Alumno: David Mireles Luis <br/>
                    U-CAMP CLASS 01
                </p>
            </div>
            <div className="column is-right">
                <img src={logo} alt="" />
            </div>

        </div>
    </div>
    )
}

export default footer
