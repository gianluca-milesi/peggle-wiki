//Contexts
import GlobalContext from "../contexts/globalContext"
//Hooks
import { useContext } from "react"
//Components
import BackButton from "../components/BackButton"
import Searchbar from "../components/Searchbar"
import CardCharacter from "../components/CardCharacter"


function CharactersPage() {

    const { characters } = useContext(GlobalContext)


    return (
        <>
            <section className="my-5 px-10">
                <div className="flex justify-between">
                    <BackButton />
                    <Searchbar />
                </div>
            </section>

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