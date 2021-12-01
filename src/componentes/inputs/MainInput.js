const MainInput = ({type="text", placeholder, name, onChange}) => {
    return(
        <input 
        className="p-2 rounded w-2/4 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent" 
        type={type}
        name={name} 
        placeholder={placeholder}
        onChange={onChange}
        ></input>
    );
}

export default MainInput;