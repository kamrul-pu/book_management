import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "react-js-pagination";

const ReportPage = () => {
    const [books, setBooks] = useState([]);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [bookType, setBookType] = useState("");
    const [activePage, setActivePage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const itemsPerPage = 10; // Change this value according to your needs

    useEffect(() => {
        fetchData();
    }, [activePage, name, age, bookType]);

    const fetchData = () => {
        const params = {
            name: name,
            age: age,
            book_type: bookType,
            page: activePage,
            page_size: itemsPerPage,
        };

        axios
            .get("http://127.0.0.1:8000/api/v1/book-search/", { params })
            .then((response) => {
                setBooks(response.data.results);
                setTotalCount(response.data.count);
            })
            .catch((error) => console.log(error));
    };

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    };

    return (
        <div>
            <form>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </label>
                <label>
                    Age:
                    <input
                        type="text"
                        value={age}
                        onChange={(event) => setAge(event.target.value)}
                    />
                </label>

                <label htmlFor="bookType">Book Type:</label>
                <select id="bookType" value={bookType} onChange={(event) => setBookType(event.target.value)}>
                    <option value="">Select a book type</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="drama">Drama</option>
                    <option value="novel">Novel</option>
                </select>
                <button onClick={() => fetchData()}>Search</button>
            </form>
            <br />
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Name</th>
                        <th>Publisher Name</th>
                        <th>Published Date</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => (
                        <tr key={book.uid}>
                            <td>{(activePage - 1) * itemsPerPage + index + 1}</td>
                            <td>{book.name}</td>
                            <td>{book.publisher_name}</td>
                            <td>{book.publication_date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                activePage={activePage}
                itemsCountPerPage={itemsPerPage}
                totalItemsCount={totalCount}
                pageRangeDisplayed={5} // Change this value according to your needs
                onChange={handlePageChange}
            />
        </div>
    );
};

export default ReportPage;
