import React, { useState } from "react";

import { Anchor, Copy, Wrap, Sidebar, Content, Header, Title, Thumbs, Image, Nav, Popup } from "./styled.js";

// utility function to get all images and their thumbnails from a folder
const importAll = (r) => {
  return r.keys().sort((a, b) => b > a).map(r);
};

const App = () => {
  const [activeImage, setActiveImage] = useState(1);

  const handleClick = (evt) => {
    const { target } = evt;
    setActiveImage(Number(target.id));
  };

  // require all images and thumbnails as an array, sorted by filename
  const imagesAndThumbnails = importAll(require.context("./assets/images", false, /\.(png|jpe?g|svg)$/));

  return (
    <Wrap>
      <Sidebar>
        <Thumbs>
          {imagesAndThumbnails.map(({ id, thumbnail }) => (
            <Image
              alt=""
              onClick={handleClick}
              src={thumbnail}
              id={id}
              key={id}
            />
          ))}
        </Thumbs>
      </Sidebar>
      <Content>
        <Header>
          <Title />
          <Copy />
          <Anchor href="mailto:mark@marksfisher.com" className="contact">
            <Nav>
            <Popup>Get in touch with me by email at mark@marksfisher.com</Popup>
            </Nav>
          </Anchor>
          <Anchor href="http://www.drawger.com/fisher/" className="drawger">
            <Nav>
              <Popup>A select group of illustrators showing and discussing their commercial and personal work. See a lot of my personal work.</Popup>
            </Nav>
          </Anchor>
        </Header>
        <Image
          src={imagesAndThumbnails[activeImage - 1].image}
          alt=""
          className="bigImg"
        />
      </Content>
    </Wrap>
  );
};

export default App;
