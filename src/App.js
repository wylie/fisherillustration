import React, { useState } from "react";
import {
  Anchor,
  Button,
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

import img0 from "./assets/images/0.jpg";
import img1 from "./assets/images/1.jpg";
import img2 from "./assets/images/2.jpg";
import img3 from "./assets/images/3.jpg";
import img4 from "./assets/images/4.jpg";
import img5 from "./assets/images/5.jpg";
import img6 from "./assets/images/6.jpg";
import img7 from "./assets/images/7.jpg";
import img8 from "./assets/images/8.jpg";
import img9 from "./assets/images/9.jpg";
import img10 from "./assets/images/10.jpg";
import img11 from "./assets/images/11.jpg";
import img12 from "./assets/images/12.jpg";
import img13 from "./assets/images/13.jpg";
import img14 from "./assets/images/14.jpg";
import img15 from "./assets/images/15.jpg";
import img16 from "./assets/images/16.jpg";
import img17 from "./assets/images/17.jpg";
import img18 from "./assets/images/18.jpg";
import img19 from "./assets/images/19.jpg";
import img20 from "./assets/images/20.jpg";

import img0t from "./assets/images/0t.jpg";
import img1t from "./assets/images/1t.jpg";
import img2t from "./assets/images/2t.jpg";
import img3t from "./assets/images/3t.jpg";
import img4t from "./assets/images/4t.jpg";
import img5t from "./assets/images/5t.jpg";
import img6t from "./assets/images/6t.jpg";
import img7t from "./assets/images/7t.jpg";
import img8t from "./assets/images/8t.jpg";
import img9t from "./assets/images/9t.jpg";
import img10t from "./assets/images/10t.jpg";
import img11t from "./assets/images/11t.jpg";
import img12t from "./assets/images/12t.jpg";
import img13t from "./assets/images/13t.jpg";
import img14t from "./assets/images/14t.jpg";
import img15t from "./assets/images/15t.jpg";
import img16t from "./assets/images/16t.jpg";
import img17t from "./assets/images/17t.jpg";
import img18t from "./assets/images/18t.jpg";
import img19t from "./assets/images/19t.jpg";
import img20t from "./assets/images/20t.jpg";

const thumbnailPaths = [img0t, img1t, img2t, img3t, img4t, img5t, img6t, img7t, img8t, img9t, img10t, img11t, img12t, img13t, img14t, img15t, img16t, img17t, img18t, img19t, img20t];
const imagePaths = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20];

const App = () => {
  const [activeImage, setActiveImage] = useState(imagePaths[0]);

  const handleThumbnailClick = (thumbnailIndex) => {
    setActiveImage(imagePaths[thumbnailIndex]);
  };

  return (
    <Wrap>
      <Sidebar>
        <Thumbs>
          {thumbnailPaths.map((thumbnailPath, index) => (
            <Button key={index} onClick={() => handleThumbnailClick(index)}>
              <img src={thumbnailPath} alt={`thumb ${index}`} />
            </Button>
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
          src={activeImage}
          alt=""
          className="bigImg"
        />
      </Content>
    </Wrap>
  );
};

export default App;