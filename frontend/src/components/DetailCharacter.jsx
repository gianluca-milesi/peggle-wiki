import placeholderImg from "../../public/placeholder.svg"


function DetailCharacter({ item = {} }) {

    const { image, name, description, power } = item

    return (
        <div className="card flex">
            <img className="w-50 h-50" src={image || placeholderImg} />
            <div className="card-body">
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
        </div>
    )
}

export default DetailCharacter