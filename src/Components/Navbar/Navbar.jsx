import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'; // Assurez-vous que le nom correspond au fichier réel

const Navbar = () => {
   return (
        <nav className='container '>
            <div className="navbar-logo">
                <img src={logo} alt="Logo" className='logo'/>
            </div>
            <ul className="navbar-links">
                <li>Faculté</li>
                <li>Départements</li>
                <li>Formations</li>
                <li>Espace Etudiant</li>
                <li>E-SERVICES</li>
                <li><button className='btn'>Contact us</button></li>
            </ul>

        </nav>
    );
}

export default Navbar;