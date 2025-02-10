//Contexts
import GlobalContext from "../contexts/globalContext"
//Hooks
import { useContext } from "react"
//Components
import CardCharacter from "../components/CardCharacter"


function CharactersPage() {

    const { characters } = useContext(GlobalContext)


    return (
        <>
            {/* <section>
                <div className="container">
                    <BackButton />
                    <Searchbar />
                </div>
            </section> */}

            <section>
                <div className="container">
                    <div className="row">
                        {characters.map((character) => (
                            <div className="col-6" key={character.id}>
                                <CardCharacter item={character} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default CharactersPage