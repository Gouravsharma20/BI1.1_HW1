import useFetch from "../useFetch.jsx"


const BookByTitle = ({title}) => {
    const {data,loading,error} = useFetch(`https://be-4-assignment1-navy.vercel.app/title/${title}`)
    if (loading) return <h1>Loading ...</h1>
    if (error) return <h1>Error ...</h1>
    if (!data) return <h1>No data found</h1>;
    const book = data.details[0]
    return (
        <div>
            <ul>
                <h1>{book.title}</h1>
                <p>Author : {book.author}</p>
                <p>Release Year : {book.publishedYear}</p>
                <p>Genre : {book.genre.join(" , ")}</p>
            </ul>
        </div>
    )
}

export default BookByTitle