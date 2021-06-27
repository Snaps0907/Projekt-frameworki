import React from "react";
import { Link } from "react-router-dom";
import {
  LinkContainer,
  LinkWrapper,
  UnderIcon,
} from "./LeftSide_styles";

class UnderProfileLinks extends React.Component {
  render() {
    return (
      <LinkWrapper>
        <Publications />
        <Ecosystem />
        <Entities />
      </LinkWrapper>
    );
  }
}

class Publications extends React.Component {
  render() {
    return (
      <LinkContainer>
        <UnderIcon src={process.env.PUBLIC_URL + "/Icons/pub_dark.png"} />
        <Link to="/publications">Publications</Link>
      </LinkContainer>
    );
  }
}
class Ecosystem extends React.Component {
  render() {
    return (
      <LinkContainer>
        <UnderIcon src={process.env.PUBLIC_URL + "/Icons/ecosystem.svg"} />
        <Link to="/ecosystem">Ecosystem</Link>
      </LinkContainer>
    );
  }
}

class Entities extends React.Component {
  render() {
    return (
      <LinkContainer>
        <UnderIcon src={process.env.PUBLIC_URL + "/Icons/entities.svg"} />
        <Link to="/entities">Entities</Link>
      </LinkContainer>
    );
  }
}

export default UnderProfileLinks;
