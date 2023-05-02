
import './App.css';
import AddBook from './Components/AddBook';
import BookList from './Components/BookList';
import Navbar from './Components/Navbar';
import ReportPage from './Components/ReportPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<BookList />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/report-page" element={<ReportPage />} />
      </Routes>

    </div>
  );
}

export default App;
