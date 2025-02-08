//Components
import { Outlet } from "react-router-dom"
//Layouts
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"


function DefaultLayout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default DefaultLayout