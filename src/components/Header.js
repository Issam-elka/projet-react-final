import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import App from '../App';

export default function Header(props) {
    return (
        <header class="d-flex justify-content-between bg-light m-0 mb-5">
            <Router>
                <link rel="icon" href="./public/img/51464.png"></link>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="collapse navbar-collapse ml-5" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <Link to="/" class="nav-link">Accueil</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/contact" class="nav-link" tabindex="-1">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route path="/">
                        <App/>
                    </Route>
                </Switch>
            </Router>
            <div class="d-flex align-items-center m-0">
                <div class="d-flex align-items-center ">
                    <p class="p-0 m-0 connexion">Se connecter</p>
                </div>
                <div class="d-flex align-items-center mx-3" id="navbar-right">
                    <p class="panier btn btn-secondary p-2 m-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Mon panier{' '}
                        {props.countCartItems ? (
                            <button className="badge">{props.countCartItems}</button>
                        ) : (
                            ''
                        )}
                    </p>{' '}
                </div>
            </div>
        </header>


    );
}