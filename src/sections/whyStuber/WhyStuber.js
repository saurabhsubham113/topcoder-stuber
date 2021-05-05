import React from 'react'
import './whySubter.css'
import video from '../../assets/video.png'

const WhyStuber = () => {
    return (
        <section id="why-subter" className="container why-subter">
            <h1 className="heading">
                Why Subter?
            </h1>
            <div className="body-section">
                <p className="body-description">
                    Social Networking, with its alluring offering of connecting you
                    with your friends and family, mines and harvests every piece of
                    information you share on their platform. Every interaction, every
                    like, every view and click you make, the content and sentiment of
                    the posts you share; all are analyzed, scrutinized, and cataloged
                    for future use by the platforms. This sort of broad and deep tracking,
                    combined with the information that is willingly posted into social
                    networking platforms, allows Big Tech to use your identity and your
                    information like digital oil. You, and your information, are not a
                    digital commodity to be sold.
                    <br />
                    <br />
                    In addition to this invasion of privacy, it's been shown time and time
                    again that corporations, large and small, do not do enough to protect
                    their users data. The list of data breeches we've all been subjected to
                    is innumerable. And there's no repercussions to these breeches to prompt
                    businesses to handle our data with care.
                </p>
                <figure className="video-container">
                    <img src={video} alt="Video" />
                    <figcaption>
                        A solution is needed so that we can still participate online and preserve
                        our privacy and security. A solution that doesn't force us to run off to
                        some other no-mans-land to be safe. Subter fills this very critical need
                        for secure means of public communication.
                    </figcaption>
                </figure>
            </div>
        </section>
    )
}

export default WhyStuber
