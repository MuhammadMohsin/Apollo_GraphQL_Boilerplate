import React from "react";
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const getDetails = gql`
    {
        books {
            id,
            author,
            title
        }
    }`

const App = () => {

    const response = useQuery(getDetails);
    if (response?.loading)
        return null;
    const { books } = response.data;

    return (
        <>
            <h1>Books</h1>
            <table border="2">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                    </tr>
                </thead>
                
                <tbody>
                    {books.map(book => (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default App;