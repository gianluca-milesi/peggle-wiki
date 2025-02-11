function CardReview({ item = {} }) {

    const { name, review, vote } = item

    return (
        <div className="card flex flex-col m-2 bg-tertiary p-2 h-full">
            <div className="flex items-center justify-between">
                <h3 className="text-lg">{name}</h3>
                <p>{vote}</p>
            </div>
            <p className="text-sm">{review}</p>
        </div>
    )
}

export default CardReview