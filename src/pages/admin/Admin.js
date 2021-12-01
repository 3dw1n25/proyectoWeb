import FavButton from '../../componentes/buttons/FavButton';
import PrimaryButton from '../../componentes/buttons/PrimaryButton';
import Header from '../../componentes/Header';
import MainInput from '../../componentes/inputs/MainInput';
import TarjetAdmin from '../../componentes/tarjet/TarjetAdmin';

const Admin = () =>{

    const logout =() =>{
        localStorage.clear();
        window.location.href = '/';
    }

    return (
        <div className="flex flex-col justify-start items-center min-h-screen bg-gradient-to-r from-gray-400 to-gray-300">
            <div className="w-screen flex justify-between items-center pl-8 pr-8">
                <Header />
                <MainInput type="text" placeholder="Nueva Publicación" name="NPost" />
                <PrimaryButton>Publicar</PrimaryButton>
                <div>
                    <FavButton>Favoritos</FavButton>
                    <PrimaryButton onClick={(e) => logout(e)}>LogOut</PrimaryButton> 
                </div>
            </div>
            <div className="w-3/4 min-h-screen pt-8 bg-pink-50 rounded-lg flex flex-col items-center">
                <TarjetAdmin />
            </div>
        </div>
    );
}

export default Admin;