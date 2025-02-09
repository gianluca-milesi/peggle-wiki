//Components
import HeroHome from "../components/HeroHome/HeroHome"
import CardCharacter from "../components/CardCharacter"


function HomePage() {
    return (
        <>
            <section>
                <HeroHome />
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <CardCharacter />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomePage