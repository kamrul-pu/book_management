import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';



function BookList() {
    const [books, setBooks] = useState([]);
    console.log('Books', books);


    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/v1/books/')
            .then(response => response.json())
            .then(data => {
                setBooks(data.results)
                console.log('data', data);
                console.log('books from fetch', books);
            })
            .catch(error => console.error(error));
    }, []);

    const handleDelete = (uid) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this book?');
        if (confirmDelete) {
            fetch(`http://127.0.0.1:8000/api/v1/books/${uid}/`, { method: 'DELETE' })
                .then(() => setBooks(prevBooks => prevBooks.filter(book => book.uid !== uid)))
                .catch(error => console.error(error));
        };
    }


    return (
        <div>
            <h1>Book List</h1>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Book Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books && books.map((book, index) => (
                        <tr key={book.uid}>
                            <td>{index + 1}</td>
                            <td>{book.name}</td>
                            <td>
                                <Link to={`/books/${book.uid}/edit`} className='btn btn-warning'>Edit</Link>
                                <button onClick={() => handleDelete(book.uid)} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BookList