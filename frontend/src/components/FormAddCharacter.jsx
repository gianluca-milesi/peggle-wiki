import axios from "axios"
//Contexts
import GlobalContext from "../contexts/GlobalContext"
//Hooks
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"


const initialFormData = {
    name: "",
    description: "",
    power: ""
}

function FormAddReview() {

    const [formData, setFormData] = useState(initialFormData)
    const { fetchCharacters } = useContext(GlobalContext)
    const navigate = useNavigate()

    function handleFormData(event) {
        const { value, name: propName } = event.target

        setFormData({
            ...formData,
            [propName]: value
        })
    }

    function storeCharacter(event) {
        event.preventDefault()

        const data = {
            name: formData.name,
            description: formData.description,
            power: formData.power
        }

        axios.post(`http://localhost:3000/api/characters`, data)
            .then((res) => {
                setFormData(initialFormData)
                fetchCharacters()
                navigate("/characters")
            })
            .catch((err) => {
                console.error(err)
            })
    }


    return (
        <form className="flex justify-center items-center gap-4" onSubmit={storeCharacter}>
            <div className="form-field flex flex-col">
                <label>Nome</label>
                <input className="bg-white text-black px-2 rounded" type="text" name="name" id="name" placeholder="..." value={formData.name} onChange={handleFormData} />
            </div>
            <div className="form-field flex flex-col">
                <label>Descrizione</label>
                <input className="bg-white text-black px-2 rounded" type="text" name="description" id="description" placeholder="..." value={formData.description} onChange={handleFormData} />
            </div>
            <div className="form-field flex flex-col">
                <label>Potere</label>
                <input className="bg-white text-black px-2 rounded" type="text" name="power" id="power" placeholder="..." value={formData.power} onChange={handleFormData} />
            </div>
            <button className="p-2 bg-secondary cursor-pointer">Invio</button>
        </form >
    )
}

export default FormAddReview