import React from 'react'
import Header from '../componentes/Header'
import PrimaryButton from '../componentes/buttons/PrimaryButton'
import { useNavigate } from 'react-router-dom';


const Inicio = () =>{

    const navigate = useNavigate();

    const onClickLog = (e) => {
        navigate('/Login')
    }

    return(
        <div className='flex flex-col justify-between items-center min-h-screen bg-gradient-to-r from-gray-600 to-green-400'>
            <Header />
            <div className="mt-40 flex flex-col items-center">
                <h1 className="text-5xl text-red-50 m-2">¡Bienvenido a nuestra página!</h1>
            </div>
            <div className="mb-72">
                <PrimaryButton onClick={(e) => onClickLog(e)} 
                >Iniciar Sesion</PrimaryButton>
            </div>
        </div>

    )
}

export default Inicio;