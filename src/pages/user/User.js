import FavButton from '../../componentes/buttons/FavButton';
import PrimaryButton from '../../componentes/buttons/PrimaryButton'
import Header from '../../componentes/Header'
import TarjetList from '../../componentes/TarjetList'
import { BASE_URL } from '../../constants/ApiUrl'
import { useEffect, useState } from 'react'
import axios from 'axios'

const User = () => {

    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);
    const token = localStorage.getItem("token");
    const authHeader = `Bearer ${token}`;

    const logout = () => {
        localStorage.clear();
        window.location.href = '/';
    }

    useEffect(() => {
        axios
            .get(`${ BASE_URL }/post/all?limit=10&page=${ page }`, {
                headers: { Authorization: authHeader },
            })
            .then((response) => {
                const res = response;
                const { data } = res;
                console.log(data.data);
                setPosts(data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [page]);

    return (
        <div className="flex flex-col justify-start items-center min-h-screen bg-gradient-to-r from-gray-400 to-gray-300">
            <div className="w-screen flex justify-between items-center pl-8 pr-8">
                <Header />
                <div>
                    <FavButton>Favoritos</FavButton>
                    <PrimaryButton onClick={(e) => logout(e)}>LogOut</PrimaryButton>
                </div>
            </div>
            <TarjetList posts={posts}/>
        </div>
    );
}

export default User;