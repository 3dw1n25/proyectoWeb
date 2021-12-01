import { Navigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

const rolePages = {
    "admin": "/Admin",
    "user": "/User"
}

const Redirect = () => {
    const {user} = useUserContext();

    if(!user) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-gray-600 to-green-400">
                <h1 className="text-5xl text-red-50">Lo sentimos, pero no se puede redireccionar</h1>
            </div>
            );
    }

    return <Navigate replace to={rolePages[user.role] ?? "/"} />;
}

export default Redirect;