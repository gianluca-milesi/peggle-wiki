function Searchbar({ handler = () => { }, query }) {
    return (
        <input className="bg-white text-black" type="text" value={query} onChange={handler} />
    )
}

export default Searchbar