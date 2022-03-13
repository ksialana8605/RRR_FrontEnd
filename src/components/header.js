import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";

class Header extends React.Component{
    render () {
        return(
        <div>
            <nav className='navBar'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/account/login'>Login</Link></li>
                    <li><Link to='/account/profile'>Profile</Link></li>
                    <li><Link to='/search'>Search</Link></li>
                    <li><Link to='/account/recipes'>My Recipes</Link></li>
                </ul>
                <div className='accountBox'>
                    Welcome User!
                </div>
            </nav>

            <Outlet/>
        </div>
        );
    }
}

export default Header;