function CardReview({ item = {} }) {

    const { name, review, vote } = item

    return (
        <div className="card flex flex-col m-2 bg-secondary p-4 h-full rounded-xl">
            <div className="flex items-center justify-between">
                <h3 className="text-lg italic">{name}</h3>
                <p>{vote}</p>
            </div>
            <p className="text-sm">{review}</p>
        </div>
    )
}

export default CardReview