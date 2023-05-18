import './App.css';
// 1 - config react router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
// components
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';
import Search from './pages/Search';

function App() {
    return (
        <div className='App'>
            <h1>React Router</h1>
            <BrowserRouter>
                <Navbar />
                {/* Busca */}
                <SearchForm />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    {/* Nested route */}
                    <Route path='/product/:id/info' element={<Info />} />
                    {/* Dinamic route */}
                    <Route path='/product/:id' element={<Product />} />
                    {/* Search */}
                    <Route path='/search' element={<Search />} />
                    {/* Redirect */}
                    <Route path='/company' element={<Navigate to='/about' />} />
                    {/* 404 */}
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
