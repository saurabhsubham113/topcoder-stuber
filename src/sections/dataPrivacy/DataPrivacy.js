import React from 'react'
import './dataPrivacy.css'
import privacyImage1 from '../../assets/data-privacy-image-1.png'
import privacyImage2 from '../../assets/data-privacy-image-2.png'

const DataPrivacy = () => {
    return (
        <section id="data-privacy" className="data-privacy">
            <div className="container">
                <h1 className="heading">
                    Data Privacy
            </h1>
                <div className="text-image container-1">
                    <p className="data-privacy-desc-1">
                        Data privacy is not something that most people think about in their day to day
                        lives. However, data privacy is increasingly more important in today's hyper-
                        connected, online and offline world. We tend to compartmentalize the things
                        we do online and don't think that what happens there has much of a direct impact
                        on what happens offline.
                    <br />
                        <br />
                    This is very much not the case though. Our digital lives have become intrinsically
                    linked to our physical lives through the usage of trackers, profiling, and data
                    brokers. It used to be said that "on the internet, no one knows you're a dog".
                    Now, it's not only known that you're a dog but what breed, what snacks you like,
                    and how often you find that tennis ball. There are now innumerable examples of how
                    we're being tracked across mediums and how that's actually impacting our daily lives.
                </p>

                    <div className="privacy-image-1">
                        <img src={privacyImage1} alt="Data privacy" />
                    </div>
                </div>
                <div className="text-image container-2">
                    <p className="data-privacy-desc-2">
                        It's time we started change this and defend ourselves from those that would
                        treat our information as digital oil to pump. Much like all the other protections
                        we put in place from locks on the doors, to wearing seat belts, to carrying
                        insurance; We need to establish protections that we don't have to think about
                        so that we can continue to enjoy our lives.
                    <br />
                        <br />
                    But change is always hard and no one likes to learn entirely new things just to
                    get the same results. That's why Subter offers the best of both worlds. A small,
                    yet incremental change in how we communicate that will have longer lasting effects
                    that protect us. If we could opt out our private information while still opting in
                    to the network and its features, isn't that ideal?
                </p>
                    <div className="privacy-image-1">
                        <img src={privacyImage2} alt="Data privacy" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DataPrivacy
