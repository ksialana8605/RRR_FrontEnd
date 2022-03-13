import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Header from './components/header';
import About from './pages/about';
import Home from './pages/home';
import Login from './pages/account/login';
import Profile from './pages/account/profile';
import Search from './pages/search';
import MyRecipes from './pages/account/myrecipes';


function App () {
    return (
        <BrowserRouter>
            <div className='App'>
                <Header />
                <div className='content'>
                    <Routes>
                        <Route index exact path='/' element={<Home/>}/>
                        <Route exact path='/about' element={<About/>}/>
                        <Route exact path='/account/login' element={<Login/>}/>
                        <Route exact path='/account/profile' element={<Profile/>}/>
                        <Route exact path='/search' element={<Search/>}/>
                        <Route exact path='/account/recipes' element={<MyRecipes/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;