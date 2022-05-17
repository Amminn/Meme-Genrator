import React from "react"
import memeLogo from "../images/logo.png"

export default function Nav() {
    function clicking() {
        let num = Math.floor(Math.random() * Data.data.memes.length)
        console.log(Data.data.memes[num].url)
    }

    return (
        <nav>
            <div className="logo">
                <img src={memeLogo} />
                <p>Meme Generator</p>
            </div>
            <p onClick={clicking} className="right">React Course - Project 3</p>
        </nav>
    )
}