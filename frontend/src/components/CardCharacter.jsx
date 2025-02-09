function CardCharacter({ item = {} }) {

    const { image, name, description, power } = item

    return (
        <div className="card flex bg-tertiary m-2">
            <img src={image} />
            <div className="card-body p-2">
                <h3>{name}</h3>
                <p>{description}</p>
                <h4>{power}</h4>
                <span>Rating</span>
            </div>
        </div>
    )
}

export default CardCharacter