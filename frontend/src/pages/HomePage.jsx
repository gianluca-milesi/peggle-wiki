//Contexts
import GlobalContext from "../contexts/globalContext"
//Hooks
import { useContext } from "react"
//Components
import HeroHome from "../components/HeroHome/HeroHome"
import CardCharacter from "../components/CardCharacter"


function HomePage() {

    const { characters } = useContext(GlobalContext)


    return (
        <>
            <section>
                <HeroHome />
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        {characters && characters.slice(0, 4).map(character => (
                            <div className="col-12" key={character.id}>
                                <CardCharacter item={character} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage