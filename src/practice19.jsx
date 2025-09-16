import React, { useState, useEffect } from "react"

export default function Main() {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg"
  })

  const [allMemes, setAllMemes] = useState([])


  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes))
  }, [])

  
  function getMemeImage() {
    const randomIndex = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomIndex].url
    setMeme(prevMeme => ({
      ...prevMeme,
      imageUrl: url
    }))
  }

  return (
    <main>
      <div className="form">
        <input 
          type="text"
          placeholder="Top text"
          className="form-input"
          value={meme.topText}
          onChange={e => setMeme(prev => ({...prev, topText: e.target.value}))}
        />
        <input 
          type="text"
          placeholder="Bottom text"
          className="form-input"
          value={meme.bottomText}
          onChange={e => setMeme(prev => ({...prev, bottomText: e.target.value}))}
        />
        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image 🖼️
        </button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} className="meme-image" alt="meme" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  )
}
