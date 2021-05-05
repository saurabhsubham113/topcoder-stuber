import React from 'react'
import './whoIsItFor.css'

const WhoIsItFor = () => {
    return (
        <section className="container who-is-it-for" id="who-is-it-for">
            <h1 className="heading">
                Who is it For?
            </h1>
            <p className="paragraph para-1">
                Subter is for everyone but it's especially for the those who are concerned
                about privacy. Today, on the Internet, we're constantly under surveillance.
                Data collecting trackers are prevalent on every website you visit and implicit
                in all the social networks you participate in. According to 
                <span> a study</span> by <span>Ghostery</span> :
            </p>
            <p className="paragraph para-2">
                ... trackers that collect data on internet users' online behavior are present on
                at least 79 percent of websites (unique domains) globally.Web tracking has become
                so pervasive that approximately ten percent of websites send the data they've
                collected to ten or more different companies (unique tracker domains). In terms
                of web traffic, 15 percent of all page loads on the internet are monitored by _ten
                or more_ trackers. According to the study, tracking scripts from Google
                (60.3 percent of page loads) and Facebook (27.1 percent) are the most prevalent.
            </p>
            <p className="paragraph para-3">
                You could always just turn it off. You could exclude yourself their game and opt
                opt. "But everyone I know is there!" and "I'll have to convince everyone to join
                me over on that other network in order to be secure" are common responses to
                opting out. And those are valid points. There are plenty of legitimate reasons
                to use a social network. They do provide value to their users. You've spent time
                connecting with people on these networks. You coordinate events and share information
                these networks. How then can you be both social and secure at the same time?
            </p>
            <p className="paragraph para-4">
                Subter is the answer to this problem. Subter allows you to leverage your existing social
                connections while simultaneously allowing you to communicate securely. Subter
                leverages your social connections and creates a channel for communications on top
                of the platforms you like to utilize.
            </p>
        </section>
    )
}

export default WhoIsItFor
