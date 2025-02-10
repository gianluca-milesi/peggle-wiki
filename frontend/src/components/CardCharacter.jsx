//Hooks
import { Link } from "react-router-dom"


function CardCharacter({ item = {} }) {

    const { id, image, name, description, power } = item

    return (
        <Link to={`/character/${id}`}>
            <div className="card flex m-2 bg-secondary rounded-full shadow-xl cursor-pointer hover:scale-105 transition-all duration-200">
                <img className="rounded-full w-40 h-40" src={image} />
                <div className="card-body p-4 flex flex-col justify-between">
                    <div className="description flex flex-col">
                        <h3 className="text-xl font-semibold">{name}</h3>
                        <p className="text-xs italic">{description}</p>
                    </div>
                    <div className="power-rating flex flex-col">
                        <h4>Power</h4>
                        <h4 className="bg-tertiary self-start px-2 rounded-xl">{power}</h4>
                        <p>Rating</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CardCharacter