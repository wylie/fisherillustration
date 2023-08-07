import React, { useState } from "react";

import { Anchor,
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

// utility function to get all images from a folder
const importAll = (r) => {
  return r.keys().sort((a,b) => b > a).map(r);
}

// require all thumbnails as an array, sorted by filename
const thumbnailImages = importAll(require.context('./assets/tiny', false, /\.(png|jpe?g|svg)$/));

const App = () => {
  const [activeImage, setActiveImage] = useState(1);

  // on click, look at the id attribute on the click target 
  // and set that ID as the new active image
  const handleClick = evt => {
    const { target } = evt;
    setActiveImage(target.id);
  }

  return (
    <Wrap>
        <Sidebar>
          <Thumbs>
            {thumbnailImages.length && thumbnailImages.reverse().map((thumbnail, index) => ( // loop over array of thumbnails (note: images are numbered 1-21, instead of 0-20, so indexes are incremented by 1)
              <Image alt="" onClick={handleClick} src={thumbnail.default} id={index + 1} key={index + 1} />
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
          <Image src={require(`./assets/large/${activeImage}.jpg`).default} alt="" className="bigImg" />
        </Content>
      </Wrap>
  )
};

export default App;
