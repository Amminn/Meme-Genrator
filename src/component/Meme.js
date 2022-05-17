import React, {useState, useEffect} from "react"

export default function Meme() {

  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/1g8my4.jpg'
  })

  const [allMeme, setAllMemes] = useState({})

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(resp => resp.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])

  const change = () => {
    let randomNum = Math.floor(Math.random() * allMeme.length)
    setMeme(prevValue => {
      return prevValue = {...prevValue, randomImage: allMeme[randomNum].url}
    })
  }

  function changeHandle(event) {
    setMeme(prevValue => {
      return {
        ...prevValue,
        [event.target.name]: event.target.value
      }
    })
  }
  
  return (
    <main>
      <div className="form">

        <div className="input">
          <input 
            type="text"
            placeholder="Top Text" 
            onChange={changeHandle}
            name="topText"
            value={meme.topText}
            />
          <input
           type="text"
           placeholder="Bottom Text"
           onChange={changeHandle}
           name="bottomText"
           value={meme.bottomText}
          />
        </div>

        <button onClick={change}>Get a new meme image 🖼</button>

        <div className="image-wrapper">
          <img className="meme-image" src={meme.randomImage} />
          <p className="top-text">{meme.topText}</p>
          <p className="bottom-text">{meme.bottomText}</p>
        </div>

      </div>
    </main>
  )
}