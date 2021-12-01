const DeleteButton = ({ children }) => {
    return (
        <button className="bg-red-500 text-gray-900 hover:bg-red-800 hover:text-gray-50 h-8 w-28  m-2 rounded ">{ children }</button>
    )
}

export default DeleteButton