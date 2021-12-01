//import {useNavigate } from 'react-router-dom';

const BackBtn = ({  children, onClick }) => {
    

    return (
        <button className="bg-yellow-400 hover:bg-red-400 p-3 m-2 rounded text-gray-900" onClick={onClick}>{children}</button>   
    )
}

export default BackBtn;