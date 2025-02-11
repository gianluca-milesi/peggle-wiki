import axios from "axios"
//Hooks
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
//Components
import BackButton from "../components/BackButton.jsx"
import DetailCharacter from "../components/DetailCharacter.jsx"
import CardReview from "../components/CardReview.jsx"


function DetailCharacterPage() {

    const [character, setCharacter] = useState([])
    const [reviews, setReviews] = useState([])
    const { id } = useParams()

    function fetchCharacterData() {
        Promise.all([
            axios.get(`http://localhost:3000/api/characters/${id}`),
            axios.get(`http://localhost:3000/api/characters/${id}/reviews`)
        ])
            .then(([characterRes, reviewsRes]) => {
                setCharacter(characterRes.data)
                setReviews(reviewsRes.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    useEffect(() => {
        fetchCharacterData()
    }, [id])


    return (
        <>
            <section className="my-5">
                <div className="mb-5 px-5"><BackButton /></div>
                <div className="container">
                    {character &&
                        <DetailCharacter item={character} />
                    }
                </div>
            </section>

            <section className="my-5">
                <div className="reviews-headline flex justify-between px-5">
                    <h2>Recensioni</h2>
                    <p>{character.avgVote}</p>
                </div>
                <div className="container">
                    <div className="row">
                        {reviews &&
                            reviews.map((data) => (
                                <div className="col-6 mb-4" key={data.id}>
                                    <CardReview item={data} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

        </>
    )
}

export default DetailCharacterPage