import PrimaryButton from '../../componentes/buttons/PrimaryButton'
import Header from '../../componentes/Header'
import Tarjet from '../../componentes/tarjet/Tarjet'

const AdminFavs = () =>{
    return (
        <div className="flex flex-col justify-start items-center min-h-screen bg-gradient-to-r from-gray-400 to-gray-300">
            <div className="w-screen flex justify-between items-center pl-8 pr-8">
                <Header />
                <div className="flex justify-center items-center">
                    <h2 className="text-3xl text-yellow-50 m-2">Favoritos(admin)</h2>
                    <PrimaryButton>LogOut</PrimaryButton> 
                </div>
            </div>
            <div className="w-3/4 min-h-screen pt-8 bg-pink-50 rounded-lg flex flex-col items-center">
                <Tarjet />
            </div>
        </div>
    );
}

export default AdminFavs;