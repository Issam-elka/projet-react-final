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
            <a href="https://api.whatsapp.com/send?phone=5195508107&text=Bonjour%21%20Je%20voudrais%20plus%20d'information%20sur%20un%20de%20vos%20gsm." class="float" target="_blank">
                <i class="fa fa-whatsapp my-float"></i>
            </a>
            <Router>
                <link rel="icon" href="./public/img/51464.png"></link>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="collapse navbar-collapse ml-5" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <Link to="/" class="nav-link">Accueil</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" tabindex="-1" onClick={() => alert('App en construction! Je suis en vacances..')}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    {/* <Route path="/">
                        
                    </Route> */}
                </Switch>
            </Router>
            <div class="d-flex align-items-center m-0">
                <div class="d-flex align-items-center ">
                    <p type="button" class=" p-0 m-0 connexion" onClick={() => alert('App en construction! Je suis en vacances..')}>Se connecter</p>
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