import React from 'react'
import BackBtn from '../componentes/buttons/BackBtn'
import PrimaryButton from '../componentes/buttons/PrimaryButton';
import Header from '../componentes/Header';
import MainInput from '../componentes/inputs/MainInput';
import { useState, useEffect } from "react";
import { useUserContext } from "../contexts/UserContext";
import {useNavigate } from 'react-router-dom';

const Login = () => {
    
    const navigate = useNavigate();

    const onBack = () => {
        navigate('/')
    }

    const { login, token } = useUserContext();

    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [error, setError] = useState(false);

    // Se va guardando cada caracter que ingresamos al input
    const onChangeHandler = (e, save) => {
        save(e.target.value);
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const logged = await login(usernameInput, passwordInput);
        setError(!logged);

        setUsernameInput("");
        setPasswordInput("");
    }

    useEffect(()=>{
        console.log(token);
        if(token){
            navigate("/Redirect");
        }
    }, [token, navigate]);

    return (
        <div className='flex flex-col justify-start items-center min-h-screen bg-gradient-to-r from-gray-600 to-green-400'>
            <Header />
            <form  className='flex flex-col gap-4 items-center justify-center w-80 bg-green-900 mt-32 p-5 rounded-lg shadow-lg' onSubmit= { onSubmitHandler }>
                <h1 className="text-5xl text-red-50 m-2">Login</h1>
                <MainInput type="text" placeholder="User" name="name" onChange = { e => onChangeHandler(e, setUsernameInput)}/>
                <MainInput type="password" placeholder="Password" name="name" onChange = { e => onChangeHandler(e, setPasswordInput)}/>
                <div className="flex intems-center">
                    <BackBtn onClick={(e) => onBack(e)}>Regresar</BackBtn>
                    <PrimaryButton type='submit'>Iniciar Sesión {" "}</PrimaryButton>
                </div>
            </form>
        </div>
    )
}

export default Login;