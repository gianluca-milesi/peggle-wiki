import style from "./HeroHome.module.css"
//Icons
import { IoIosSearch } from "react-icons/io";


function HeroHome() {
    return (
        <div className={style.hero}>
            <div className={style.headline}>
                <h1 className="text-8xl">PEGGLE WIKI</h1>
                <p>Esplora il mondo di Peggle e scopri tutti i personaggi</p>
                <button className="flex items-center gap-1 py-1 px-2 mt-4 bg-tertiary text-black rounded self-start font-semibold cursor-pointer"><IoIosSearch />Esplora i personaggi</button>
            </div>
        </div>
    )
}

export default HeroHome