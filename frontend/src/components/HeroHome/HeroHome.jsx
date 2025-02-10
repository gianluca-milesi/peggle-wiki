import { Link } from "react-router-dom";
import style from "./HeroHome.module.css"
//Icons
import { IoIosSearch } from "react-icons/io";


function HeroHome() {
    return (
        <div className={style.hero}>
            <div className={style.headline}>
                <h1 className="text-8xl">PEGGLE WIKI</h1>
                <p>Esplora il mondo di Peggle e scopri tutti i personaggi</p>
                <Link to="/characters">
                    <button className="flex items-center gap-1 py-1 px-2 mt-4 bg-tertiary text-black rounded self-start font-semibold cursor-pointer hover:scale-105 transition-all duration-200"><IoIosSearch />Esplora i personaggi</button>
                </Link>
            </div>
        </div>
    )
}

export default HeroHome