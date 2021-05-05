import React from 'react'
import HowItWork from '../../assets/howItWorks.png'
import './howItWorks.css'

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="container how-it-works">
            <div className="body-section">
                <div className="text-container">

                    <h1 className="heading">
                        How it Works?
                    </h1>

                    <p className="para-description">
                        Subter works by encrypting your data before you send it to your
                        recipient and then hiding that secret message inside of an image.
                        This image can then be shared safely on your social networks, or
                        elsewhere, to your recipient. In this way, you don't have to leave
                        your network of connections behind as when you use a new app. You
                        don't have to abandon all your connections in order to safely
                        communicate as you would with other secure communications applications
                        and you can still participate on those platforms.
                    <br />
                        <br />
                    Subter also does not intermediate your messages like the platforms
                    do. You messages are encrypted on your device with your own set of
                    cryptographic keys. Subter never handles your private keys and they
                    remain on your device.

                </p>
                </div>
                <div className="img-encryption">
                    <img src={HowItWork} alt="encryption" />
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
