function Searchbar({ handler = () => { }, query }) {
    return (
        <input
            className="bg-white text-black px-2 rounded-xl"
            type="text"
            placeholder="Cerca..."
            value={query}
            onChange={handler} />
    )
}

export default Searchbar