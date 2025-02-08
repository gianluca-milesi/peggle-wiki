//Components
import { NavLink } from "react-router-dom"


function Navbar() {
    return (
        <nav className="flex justify-between">
            <img src="..." />
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
            </ul>
        </nav>
    )
}

export default Navbar