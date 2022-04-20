import {isBrowser} from 'react-device-detect';


const BooksList = ({books}) => {
    return (
        <div>
            <div>{(!isBrowser)?("Is Mobile"): ("Is Desktop")}</div>
            <ul>
                {books.map((book, key) => {
                    return <li key={key}>{book.title}</li>
                })}
            </ul>
        </div>

    )
}

export default BooksList;
