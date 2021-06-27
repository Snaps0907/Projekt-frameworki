import React, { FC } from "react";
import { EntitiesActionButtons } from "./EntitiesActionButtons";
import { Filters } from "./Filters";
import { TopEntities } from "./TopEntities";
import {
  Container,
  EntitiesContainer,
  Item,
  Image,
  TextBox,
  CompanyName,
  Address,
} from "./Entities_styles";

export const Entities: FC = () => (
  <Container>
    <TopEntities />
    <EntitiesActionButtons />
    <Filters />
    <EntitiesTiles />
  </Container>
);
export const entitiesTileArray = [
  {
    photo:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    company: "Good draw knew bred ham",
    address: "n either so spring wished. Melancholy way she",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1624746421331-9cadd9f1f524?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    company: "Ever man are put down his ",
    address: "n either so spring wished. Melancholy way she",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    company: "Good draw knew bred ham",
    address: "n either so spring wished. Melancholy way she",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1624746421331-9cadd9f1f524?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    company: "Ever man are put down his ",
    address: "n either so spring wished. Melancholy way she",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1624743043535-67f0d30c55b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    company: "Good draw knew bred ham",
    address: "Favour met itself wanted settle put garret ",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1621569899323-55c203a0f7f1?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    company: "Ever man are put down his ",
    address: "Favour met itself wanted settle put garret ",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    company: "Good draw knew bred ham",
    address: "Favour met itself wanted settle put garret ",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1621569899323-55c203a0f7f1?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    company: "Certainty determine at of",
    address: "Favour met itself wanted settle put garret ",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    company: "Certain but she but",
    address: "Favour met itself wanted settle put garret ",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1621569899323-55c203a0f7f1?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    company: "Certainty determine at of",
    address: "Favour met itself wanted settle put garret ",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    company: "Certain but she but",
    address: "Interested the unaffected mrs law friendship add principles",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1624746421331-9cadd9f1f524?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    company: "Certainty determine at of",
    address: "Interested the unaffected mrs law friendship add principles",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1624746421331-9cadd9f1f524?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    company: "Certain but she but",
    address: "Interested the unaffected mrs law friendship add principles",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1624746421331-9cadd9f1f524?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    company: "Certainty determine at of",
    address: "Interested the unaffected mrs law friendship add principles",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1624743043535-67f0d30c55b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    company: "Inquietude simplicity terminated",
    address: "Interested the unaffected mrs law friendship add principles",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1624746421331-9cadd9f1f524?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    company: "Certainty determine at of",
    address: "Interested the unaffected mrs law friendship add principles",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1624743043535-67f0d30c55b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    company: "Inquietude simplicity terminated",
    address: "n either so spring wished. Melancholy way she",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1624746421331-9cadd9f1f524?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
    company: "Certainty determine at of",
    address: "n either so spring wished. Melancholy way she",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1624762451499-33a0805d78df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    company: "Inquietude simplicity terminated",
    address: "n either so spring wished. Melancholy way she",
  },
  {
    photo:
      "https://images.unsplash.com/photo-1624762451499-33a0805d78df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    company: "Ever man are put down his ",
    address: "n either so spring wished. Melancholy way she",
  },
];

export const EntitiesTiles: FC = () => (
  <EntitiesContainer className="entities-container">
    {entitiesTileArray.map((value) => (
      <EntitiesTile
        photo={value.photo}
        company={value.company}
        address={value.address}
      />
    ))}
  </EntitiesContainer>
);

interface IEntitiesTile {
  photo: string;
  company: string;
  address: string;
}

const EntitiesTile: FC<IEntitiesTile> = (props) => {
  return (
    <Item className="entities-tile-box">
      <Image src={props.photo} alt="" />
      <TextBox>
        <CompanyName>{props.company}</CompanyName>
        <Address>{props.address}</Address>
      </TextBox>
    </Item>
  );
};
