import React, { FC } from "react";
import styled from "styled-components";
import Publications from "./Publications/Publications";
import { Switch, Route } from "react-router-dom";
import { Entities } from "../RightSide/Entities/Entities";
import { Workspaces, WorkspacesPage } from "./Workspaces/Workspaces";
import { Resume } from "./Resume/Resume";
import { INumber } from "../../App";
import { ProfilePage } from "./ProfilePage/ProfilePage";

const Wrapper = styled.div`
  margin: 3em 2em;
  width: 100%;
  @media (max-width: 900px) {
    margin: 0;
  }
`;

const RightSide: FC<INumber> = ({ id }) => {
  return (
    <Wrapper>
      <Switch>
        <Route path="/publications">
          <PublicationsPage id={id} />
        </Route>
        <Route path="/ecosystem">
          <Ecosystem />
        </Route>
        <Route path="/entities">
          <Entities />
        </Route>
        <Route path="/profile">
          <ProfilePage id={id} />
        </Route>
        <Route path="/network">
          <Network />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/administration">
          <Administration />
        </Route>
        <Route path="/clientcontract">
          <ClientContact/>
        </Route>
        <Route path="/suppliercontract">
          < SupplierContact/>
        </Route>
        <Route path="/corporate">
          <Corprate/>
        </Route>
        <Route path="/groupnorms">
          <GroupNorms/>
        </Route>
        <Route path="/realestatecontract">
          <RealEstateContracts />
        </Route>
        <Route path="/privacy">
          <Privacy />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/">
          <PublicationsPage id={id} />
        </Route>
      </Switch>
    </Wrapper>
  );
};

const PublicationsPage: FC<INumber> = ({ id }) => {
  return (
    <>
      <Publications id={id} />
      <Workspaces />
      <Resume title="Resume your work" id={id} />
    </>
  );
};

const Ecosystem = () => {
  return <h1>ECOSYSTEM</h1>;
};
const Network = () => {
  return <h1>NETWORK</h1>;
};
const People = () => {
  return <h1>PEOPLE</h1>;
};
const Administration = () => {
  return <h1>ADMINISTRATION</h1>;
};
const SupplierContact = () => {
  return <h1>SUPPLIER CONTACT</h1>; 
};
const ClientContact = () => {
  return <h1>CLIENT CONTACT</h1>; 
};
const GroupNorms = () => {
  return <h1>GROUP NORMS</h1>;
};
const Corprate = () => {
  return <h1>CORPORATE</h1>;
};
const RealEstateContracts = () => {
  return <h1>RealEstateContracts</h1>;
};
const Privacy = () => {
  return <h1>Privacy</h1>;
};
const Settings = () => {
  return <h1>Settings</h1>;
};

export default RightSide;
