import React from 'react'
import "./header.css"
import logo from '../../assets/logo.svg'
import mobile from '../../assets/mobile.svg'

const Header = () => {
    return (
        <header>
            <div className="container ">
                <nav className="nav-container">

                    <div className="logo">
                        <img src={logo} alt="stuber logo" />
                    </div>

                    <ul className="nav-links">
                        <li className="nav-link-item">
                            <a href="#what-it-is">WHAT IT IS?</a>
                        </li>
                        <li className="nav-link-item">
                            <a href="#why-subter">WHY SUBTER?</a>
                        </li>
                        <li className="nav-link-item">
                            <a href="#who-is-it-for">
                                WHO IS IT FOR?
                            </a>
                        </li>
                        <li className="nav-link-item">
                            <a href="#how-it-works">
                                HOW IT WORKS?
                            </a>
                        </li>
                        <li className="nav-link-item">
                            <a href="#data-privacy">
                                DATA PRIVACY
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <section className="container section-1">
                <div className="header-section">
                    <div className="section-heading">
                        <div className="text">
                            <h1>Subter.</h1>
                            <h1>Like invisible ink for your images.</h1>
                        </div>
                        <button className="btn-cta">Try it Now</button>
                    </div>
                    <div className="section-image">
                        <img src={mobile} alt="mobile" />
                    </div>
                </div>
            </section>

        </header>
    )
}

export default Header
