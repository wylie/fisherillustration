import React, { useState } from "react";
import {
  Anchor,
  Copy,
  Wrap,
  Sidebar,
  Content,
  Header,
  Title,
  Thumbs,
  Image,
  Nav,
  Popup,
} from "./styled.js";

const importAll = (r) => r.keys().map(r);

const App = () => {
  const [activeImage, setActiveImage] = useState(1);

  const handleClick = (evt) => {
    const { target } = evt;
    setActiveImage(target.id);
  };

  const thumbnails = importAll(require.context('./assets/tiny', false, /\.(png|jpe?g|svg)$/));

  const renderThumbnails = () => {
    return (
      thumbnails.length > 0 &&
      thumbnails.reverse().map((thumbnail, index) => (
        <Image
          key={index + 1}
          alt=""
          onClick={handleClick}
          src={thumbnail.default} // Use the image path fetched by importAll
          id={index + 1}
        />
      ))
    );
  };

  return (
    <Wrap>
      <Sidebar>
        <Thumbs>{renderThumbnails()}</Thumbs>
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
          src={require(`./assets/large/${activeImage}.jpg`).default}
          alt=""
          className="bigImg"
        />
      </Content>
    </Wrap>
  );
};

export default App;
