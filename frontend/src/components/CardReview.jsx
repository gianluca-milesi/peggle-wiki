function CardReview({ item = {} }) {

    const { name, review, vote } = item

    return (
        <div className="card">
            <h3>{name}</h3>
            <p>{review}</p>
            <p>{vote}</p>
        </div>
    )
}

export default CardReview