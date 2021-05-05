import React from 'react'
import './whatItIs.css'
import publicUser from '../../assets/publicUser.svg'

const WHatItIs = () => {
    return (
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
    )
}

export default WHatItIs
