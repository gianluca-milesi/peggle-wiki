import axios from "axios"
//Contexts
import GlobalContext from "../contexts/GlobalContext.js"
//Hooks
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
//Components
import DetailCharacter from "../components/DetailCharacter.jsx"
import CardReview from "../components/CardReview.jsx"


function DetailCharacterPage() {


    return (
        <>
            <section>
                <div className="container">
                    {characters &&
                        <DetailCharacter item={characters} />
                    }
                </div>
            </section>

            <section>
                <div className="reviews-headline flex justify-between">
                    <h2>Recensioni</h2>
                    <p>{characters.avgVote}</p>
                </div>
                <div className="container">
                    <div className="row">
                        {review.length > 0 ? (
                            review.map((data) => (
                                <div className="col-6" key={data.id}>
                                    <CardReview item={data} />
                                </div>
                            ))
                        ) : (
                            <p>Nessuna recensione disponibile.</p>
                        )}
                    </div>
                </div>
            </section>

        </>
    )
}

export default DetailCharacterPage