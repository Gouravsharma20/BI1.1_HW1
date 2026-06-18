import useFetch from "../useFetch.jsx"


const BookByAuthor = ({author}) => {
    const {data,loading,error} = useFetch(`https://be-4-assignment1-navy.vercel.app/author/${author}`)
    if (loading) return <h1>Loading ...</h1>
    if (error) return <h1>Error ...</h1>
    if (!data) return <h1>No data found</h1>;
    const book = data.bookDetails
    return (
        <div>
            <ul>
                <h1>Book by {author}</h1>
                <ul>
                    {book.map(book=>(
                        <li key={book._id}>
                            {book.title}
                        </li>
                    ))}
                </ul>
            </ul>
        </div>
    )
}

export default BookByAuthor