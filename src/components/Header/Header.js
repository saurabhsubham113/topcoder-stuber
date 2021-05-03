import React from 'react'
import "./header.css"
import logo from '../../assets/logo.svg'
import mobile from '../../assets/mobile.svg'
import publicUser from '../../assets/publicUser.svg'

const Header = () => {
    return (
        <header>
            <div className="container ">
                <nav className="nav-container">
                    <div className="logo">
                        <img src={logo} alt="stuber logo" />
                    </div>


                    <ul className="nav-links">
                        <li className="nav-link-item">WHAT IT IS?</li>
                        <li className="nav-link-item">WHY STUBER?</li>
                        <li className="nav-link-item">WHO IS IT FOR?</li>
                        <li className="nav-link-item">HOW IT WORKS?</li>
                        <li className="nav-link-item">DATA PRIVACY</li>
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

            <section id="what-it-is" className="container ">
                <div className="body-section">
                    <div className="img-container">
                        <img src={publicUser} alt="Public vs private" />
                    </div>
                    <div className="text-container">
                        <h1 className="text-heading">
                            What it is?
                        </h1>
                        <p className="text-description">
                            Subter is the app for secure communications.
                            Using modern cryptography in conjunction with
                            steganography. Subter allows you to send messages
                            to you recipients in plain sight.
                            <br />
                            <br />

                            Subter allows you to operate securely on top of your
                            existing social networks and not have to worry that your
                            information is being mined, exploited, and mishandled.
                        </p>
                    </div>
                </div>

            </section>
        </header>
    )
}

export default Header
