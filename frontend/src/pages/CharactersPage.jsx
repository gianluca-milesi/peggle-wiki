import axios from "axios"
//Contexts
import GlobalContext from "../contexts/GlobalContext"
//Hooks
import { useState, useEffect, useContext } from "react"
//Components
import BackButton from "../components/BackButton"
import Searchbar from "../components/Searchbar"
import CardCharacter from "../components/CardCharacter"


function CharactersPage() {

    const [search, setSearch] = useState("")
    const { characters, setCharacters } = useContext(GlobalContext)

    function handleSearch(event) {
        setSearch(event.target.value)
    }

    function fetchCharacters(query = "") {
        axios.get(`http://localhost:3000/api/characters?search=${query}`)
            .then((res) => {
                setCharacters(res.data)
            })
            .catch((err) => {
                console.error(err)
            })
    }

    useEffect(() => {
        fetchCharacters(search)
    }, [search])


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
                        {characters.map((char) => (
                            <div className="col-6" key={char.id}>
                                <CardCharacter item={char} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default CharactersPage