import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './components/404/NotFound';
import About from './components/about/About';
import InCart from './components/cart/InCart';
import SendOrder from './components/cart/SendOrder';
import AddComment from './components/comments/AddComment';
import Comments from './components/comments/Comments';
import EditComment from './components/comments/EditComment';
import Home from './components/home/Home';
import Menu from './components/menu/Menu';
import TopNav from './components/navbar/TopNav';
import Footer from './components/footer/Footer'
import GoToTop from './components/goToTop/GoToTop';

function App() {
  return (
    <div className="App">
      <TopNav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Home />} />
        <Route path='/menu/:menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/comments' element={<Comments />} />
        <Route path='/comments/edit/:id' element={<EditComment />} />
        <Route path='/comments/add-comment' element={<AddComment />} />
        <Route path='/cart' element={<InCart />} />
        <Route path='/send-order' element={<SendOrder />} />
        <Route path='/404' element={<NotFound />} />
      </Routes>

      <GoToTop />
      <Footer />

    </div>
  );
}

export default App;
