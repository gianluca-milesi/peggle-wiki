//Contexts
import GlobalContext from "../contexts/GlobalContext"
//Hooks
import { useContext, useState } from "react"
//Components
import BackButton from "../components/BackButton"
import Searchbar from "../components/Searchbar"
import CardCharacter from "../components/CardCharacter"


function CharactersPage() {

    const { characters } = useContext(GlobalContext)
    const [search, setSearch] = useState("")

    function handleSearch(event) {
        setSearch(event.target.value.toLowerCase())
    }

    const filteredCharacters = characters.filter(character => (
        character.name.toLowerCase().includes(search) ||
        character.power.toLowerCase().includes(search)
    ))


    return (
        <>
            <section className="my-5 px-10">
                <div className="flex justify-between">
                    <BackButton />
                    <Searchbar handler={handleSearch} query={search} />
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        {filteredCharacters.map((character) => (
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