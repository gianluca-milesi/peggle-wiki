//Hooks
import { useNavigate } from "react-router-dom"


function BackButton() {

    const navigate = useNavigate()

    function goBack() {
        navigate(-1)
    }


    return (
        <button
            className="bg-tertiary py-0.5 px-2 rounded-lg hover:scale-105 transition-all duration-200 cursor-pointer"
            onClick={goBack}
        >
            Indietro
        </button>
    )
}

export default BackButton