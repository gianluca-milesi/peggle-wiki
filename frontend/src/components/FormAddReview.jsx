import axios from "axios"
//Hooks
import { useState } from "react"


const initialFormData = {
    id: Date(),
    name: "",
    review: "",
    vote: ""
}

function FormAddReview({ id, fetch = () => { } }) {

    const [formData, setFormData] = useState(initialFormData)

    function handleFormData(event) {
        const { value, name: propName } = event.target
        console.log(value)

        setFormData({
            ...formData,
            [propName]: value
        })
    }

    function storeReview(event) {
        event.preventDefault()

        const data = {
            character_id: id,
            name: formData.name.trim(),
            review: formData.review.trim() || undefined,
            vote: parseInt(formData.vote)
        }

        axios.post(`http://localhost:3000/api/reviews`, data)
            .then((res) => {
                setFormData(initialFormData)
                fetch()
            })
            .catch((err) => {
                console.error(err)
            })
    }


    return (
        <form className="flex justify-center items-center gap-4" onSubmit={storeReview}>
            <div className="form-field flex flex-col">
                <label>Nome</label>
                <input className="bg-white text-black px-2 rounded" type="text" name="name" id="name" placeholder="Il tuo nome..." value={formData.name} onChange={handleFormData} />
            </div>
            <div className="form-field flex flex-col">
                <label>Recensione</label>
                <input className="bg-white text-black px-2 rounded" type="text" name="review" id="review" placeholder="Recensione..." value={formData.review} onChange={handleFormData} />
            </div>
            <div className="form-field flex gap-2">
                <label>Voto</label>
                <select className="bg-white text-black px-2 rounded" name="vote" id="vote" value={formData.vote} onChange={handleFormData}>
                    <option value="">-</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <button className="p-2 bg-secondary cursor-pointer">Invio</button>
        </form >
    )
}

export default FormAddReview