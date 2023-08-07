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
  Popup
} from "./styled.js";

const thumbnailImages = [
  { id: 0, image: require("./assets/images/0.jpg").default, thumbnail: require("./assets/images/0t.jpg").default },
  { id: 1, image: require("./assets/images/1.jpg").default, thumbnail: require("./assets/images/1t.jpg").default },
  { id: 1, image: require("./assets/images/2.jpg").default, thumbnail: require("./assets/images/2t.jpg").default },
  { id: 1, image: require("./assets/images/3.jpg").default, thumbnail: require("./assets/images/3t.jpg").default },
  { id: 1, image: require("./assets/images/4.jpg").default, thumbnail: require("./assets/images/4t.jpg").default },
  { id: 1, image: require("./assets/images/5.jpg").default, thumbnail: require("./assets/images/5t.jpg").default },
  { id: 1, image: require("./assets/images/6.jpg").default, thumbnail: require("./assets/images/6t.jpg").default },
  { id: 1, image: require("./assets/images/7.jpg").default, thumbnail: require("./assets/images/7t.jpg").default },
  { id: 1, image: require("./assets/images/8.jpg").default, thumbnail: require("./assets/images/8t.jpg").default },
  { id: 1, image: require("./assets/images/9.jpg").default, thumbnail: require("./assets/images/9t.jpg").default },
  { id: 1, image: require("./assets/images/10.jpg").default, thumbnail: require("./assets/images/10t.jpg").default },
  { id: 1, image: require("./assets/images/11.jpg").default, thumbnail: require("./assets/images/11t.jpg").default },
  { id: 1, image: require("./assets/images/12.jpg").default, thumbnail: require("./assets/images/12t.jpg").default },
  { id: 1, image: require("./assets/images/13.jpg").default, thumbnail: require("./assets/images/13t.jpg").default },
  { id: 1, image: require("./assets/images/14.jpg").default, thumbnail: require("./assets/images/14t.jpg").default },
  { id: 1, image: require("./assets/images/15.jpg").default, thumbnail: require("./assets/images/15t.jpg").default },
  { id: 1, image: require("./assets/images/16.jpg").default, thumbnail: require("./assets/images/16t.jpg").default },
  { id: 1, image: require("./assets/images/17.jpg").default, thumbnail: require("./assets/images/17t.jpg").default },
  { id: 1, image: require("./assets/images/18.jpg").default, thumbnail: require("./assets/images/18t.jpg").default },
  { id: 1, image: require("./assets/images/19.jpg").default, thumbnail: require("./assets/images/19t.jpg").default },
  { id: 20, image: require("./assets/images/20.jpg").default, thumbnail: require("./assets/images/20t.jpg").default },
];

const App = () => {
  const [activeImage, setActiveImage] = useState(1);

  const handleClick = evt => {
    const { target } = evt;
    setActiveImage(target.id);
  }

  const renderThumbnails = () => {
    return (
      thumbnailImages.length > 0 &&
      thumbnailImages.map((thumbnail) => (
        <Image
          key={thumbnail.id}
          alt=""
          onClick={handleClick}
          src={thumbnail.thumbnail}
          id={thumbnail.id}
        />
      ))
    );
  };

  return (
    <Wrap>
      <Sidebar>
        <Thumbs>
          {renderThumbnails()}
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
          src={require(`./assets/images/${activeImage}.jpg`).default}
          alt=""
          className="bigImg"
        />
      </Content>
    </Wrap>
  );
};

export default App;
