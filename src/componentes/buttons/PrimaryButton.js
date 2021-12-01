const PrimaryButton = ({  children, onClick, type="text" }) => {
    

    return (
        <button 
        className="bg-gray-600 hover:bg-red-900 h-12 p-3 m-2 rounded text-red-50 " 
        onClick={onClick}
        type={type}
        >{children}</button>   
    )
}

export default PrimaryButton;