import styled from "styled-components";

import img1 from "./assets/nav/navTitle.png";
import img2 from "./assets/nav/navIllustrationArt.png";
import img3 from "./assets/nav/navContact.png";
import img4 from "./assets/nav/navDrawger.png";

export const Wrap = styled.div`
  display: flex;
  width: 1076px;
  height: 648px;
  margin-top: 1rem;
`;

export const Sidebar = styled.div`
  width: 130px;
  height: 648px;
  overflow: auto;
`;

export const Thumbs = styled.div`
  /* Add styles specific to Thumbs if needed */
`;

export const Content = styled.div`
  width: 936px;
  height: 648px;
  margin-left: 10px;
`;

export const Header = styled.div`
  display: flex;
  height: 27px;
  padding: 0 20px;
  background: #330067;
`;

export const Anchor = styled.a`
  font-size: 0;
  &.contact {
    width: 64px;
    margin-left: 30px;
    background: url(${img3}) no-repeat;
  }
  &.drawger {
    width: 108px;
    margin-left: 20px;
    background: url(${img4}) no-repeat;
  }
`;

export const Nav = styled.div`
  position: relative;
`;

export const Title = styled.div`
  ${Header} & {
    flex: 1;
    width: 251px;
    background: url(${img1}) no-repeat;
  }
`;

export const Copy = styled.div`
  ${Header} & {
    width: 163px;
    background: url(${img2}) no-repeat;
  }
`;

export const Image = styled.img`
  ${Thumbs} & {
    margin-bottom: 10px;
    cursor: pointer;
  }
`;

export const Popup = styled.span`
  display: none;
  ${Anchor}:hover & {
    position: absolute;
    z-index: 99;
    right: 0;
    display: block;
    width: 180px;
    height: auto;
    padding: 5px;
    margin: 30px 0 0 -125px;
    background: #000;
    background: #000000bf;
    border-radius: 5px;
    box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.5);
    font-size: 11px;
    font-weight: bold;
    line-height: 1.5;
    color: #fff;
  }
`;
