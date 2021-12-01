import React from 'react'
import BackBtn from '../componentes/buttons/BackBtn'
import {useNavigate } from 'react-router-dom';

const NotFound = () =>{

    const navigate = useNavigate();

    const onBack = () => {
        navigate('/')
    }

    return(
        <div className='flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-gray-600 to-green-400'>
            <h1 className="text-5xl text-red-50 m-2">Error 404</h1>
            <h3 className="text-2xl text-red-50 m-2">Usted se ha perdido, precione el boton para regresar</h3>
            <BackBtn onClick={(e) => onBack(e)}>Regresar</BackBtn>
        </div>
    )
}

export default NotFound;