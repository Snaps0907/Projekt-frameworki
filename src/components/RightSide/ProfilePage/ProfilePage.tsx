import { FC } from "react";
import { INumber } from "../../../App";
import { TopContactBtns } from "./TopContactButtons";
import { PersonalDataSection } from "./PersonalDataSection";
import { MainContainer } from "./ProfilePage_styles";
import { FormSection } from "./FormSection";


export const ProfilePage: FC<INumber> = ({ id }) => (
  <MainContainer>
    <TopContactBtns />
    <PersonalDataSection id={id} />
    <FormSection />
  </MainContainer>
);

export interface IDisable {
  disable: boolean;
}







