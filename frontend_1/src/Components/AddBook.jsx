import React from 'react';
import axios from 'axios';
import { useState, useHistory } from 'react';


function AddBook() {
    const [name, setName] = useState('');
    const [publisherName, setPublisherName] = useState('');
    const [age, setAge] = useState('');
    const [publicationDate, setPublicationDate] = useState('');
    const [page, setPage] = useState('');
    const [bookType, setBookType] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        const bookData = {
            name,
            publisher_name: publisherName,
            age,
            publication_date: publicationDate,
            page,
            book_type: bookType,
        };
        axios.post('http://127.0.0.1:8000/api/v1/books/', bookData)
            .then((response) => {
                console.log(response.data);

            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className='form'>
            <div className='form-group'>
                <label htmlFor="name">Name:</label>
                <input className='form-control' type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
            </div>
            <div className='form-group'>
                <label htmlFor="publisherName">Publisher Name:</label>
                <input type="text" id="publisherName" value={publisherName} onChange={(event) => setPublisherName(event.target.value)} />
            </div>
            <div className='form-group'>
                <label htmlFor="age">Age:</label>
                <select id="age" value={age} onChange={(event) => setAge(event.target.value)}>
                    {Array.from({ length: 60 }, (_, index) => (
                        <option key={index} value={index + 20}>{index + 20}</option>
                    ))}
                </select>
            </div>
            <div className='form-group'>
                <label htmlFor="publicationDate">Publication Date:</label>
                <input type="date" id="publicationDate" value={publicationDate} onChange={(event) => setPublicationDate(event.target.value)} />
            </div>
            <div className='form-group'>
                <label htmlFor="page">Page:</label>
                <input type="number" id="page" value={page} onChange={(event) => setPage(event.target.value)} />
            </div>
            <div className='form-group'>
                <label htmlFor="bookType">Book Type:</label>
                <select id="bookType" value={bookType} onChange={(event) => setBookType(event.target.value)}>
                    <option value="">Select a book type</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="drama">Drama</option>
                    <option value="novel">Novel</option>
                </select>
            </div>
            <button type="submit">Add Book</button>
        </form>
    );
}

export default AddBook