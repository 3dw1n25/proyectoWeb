import LikeButton from '../buttons/LikeButton'
import FavButton from '../buttons/FavButton'

const Tarjet = ({ post }) => {
    
    return (
        <div className="bg-gray-300 w-5/6 flex flex-col min-h-52 rounded-xl p-8">
            <h1>user quemado</h1>
            <p>descripcion quemada</p>
            <div className="flex mt-3">
                <LikeButton />
                <FavButton>Favorito</FavButton>
            </div>
        </div>
    )
}

export default Tarjet;