//Components
import { NavLink } from "react-router-dom"


function Navbar() {
    return (
        <nav className="flex justify-between">
            <img className="w-10 h-10" src="../../../public/logo.png" />
            <ul className="flex items-center gap-4 text-2xl">
                <li>
                    <NavLink to="/"
                        className={({ isActive }) =>
                            isActive
                                ? "font-semibold text-[var(--tertiary-color)] transition-all duration-100"
                                : "hover:font-semibold transition-all duration-100"
                        }>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/characters"
                        className={({ isActive }) =>
                            isActive
                                ? "font-semibold text-[var(--tertiary-color)] transition-all duration-100"
                                : "hover:font-semibold transition-all duration-100 relative"
                        }
                    >
                        Personaggi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/create"
                        className={({ isActive }) =>
                            isActive
                                ? "font-semibold text-[var(--tertiary-color)] transition-all duration-100"
                                : "hover:font-semibold transition-all duration-100 relative"
                        }
                    >
                        Crea Personaggio
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar