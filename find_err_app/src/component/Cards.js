import React, { useState, useEffect } from "react";
import CardData from "./CardData";
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

var init = true
function Cards() {
  const [memeImage, setMemeImahe] = useState();

  useEffect(() => {
     myRandomEmg ()
  },[]);
  const myRandomEmg = () => {
    const memesArray = CardData.data.card;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMemeImahe(url);
  };
  return (
  <div className='background'>
    <br/>
    <Card className="bg-dark text-white" className='resize'>
      <Card.Img src={memeImage} alt="Card image" />
      <Card.ImgOverlay>
        <Nav.Link href="#" onClick={myRandomEmg} >Get a new image</Nav.Link>
      </Card.ImgOverlay>
    </Card>
  </div>
  );
}

export default Cards;
