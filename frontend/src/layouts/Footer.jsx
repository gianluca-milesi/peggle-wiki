//Hooks
import { Link } from "react-router-dom";
//Icons
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";



function Footer() {
    return (
        <footer className="flex justify-between items-center bg-secondary py-2 px-6">
            <div className="text-gray">
                <p>© 2025 Appy. All rights reserved </p>
                <p>Terms. Privacy Policy</p>
            </div>
            <ul className="flex gap-3 text-2xl">
                <li><Link to="https://www.facebook.com/" target="_blank" className="hover:text-[var(--tertiary-color)] transition-all duration-200"><FaFacebook /></Link></li>
                <li><Link to="https://www.instagram.com/" target="_blank" className="hover:text-[var(--tertiary-color)] transition-all duration-200"><FaInstagram /></Link></li>
                <li><Link to="https://www.youtube.com/" target="_blank" className="hover:text-[var(--tertiary-color)] transition-all duration-200"><FaYoutube /></Link></li>
                <li><Link to="https://x.com/" target="_blank" className="hover:text-[var(--tertiary-color)] transition-all duration-200"><FaSquareXTwitter /></Link></li>
            </ul>
        </footer>
    )
}

export default Footer