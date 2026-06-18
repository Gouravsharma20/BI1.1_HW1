import useFetch from "../useFetch.jsx"

const Books = () => {
    const {data,loading,error} = useFetch("https://be-4-assignment1-navy.vercel.app/books")
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>{error}</h1>
    console.log(data)
    return (
        <div>
            <h1>All Books</h1>
            <ul>
                {data?.map((book) => (
                    <li key={book._id}>
                        {book.author}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Books