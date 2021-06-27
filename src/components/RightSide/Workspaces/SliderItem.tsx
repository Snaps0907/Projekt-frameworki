import React, { FC } from "react";
import {
  SliderBoxItem,
  Image,
  TextBox,
  MediumText,
  SmallText,
  WorspacesLink,
} from "./Workspaces_styles";

interface ISliderItem {
  imageUrl: string;
  title: string;
  type: string;
  usersNumber: string;
  icon:string
}

export const SliderItem: FC<ISliderItem> = (props) => {
  return (
    <SliderBoxItem>
      <Image src={props.imageUrl} alt="" />
      <TextBox>
        <WorspacesLink to={"/" + props.title.toLowerCase().replace(/\s/g, "")}>
          {props.title}
        </WorspacesLink>
        <div>
          <MediumText>
          <img src={props.icon}></img> {props.type} • {props.usersNumber} users
          </MediumText>
        </div>
        <SmallText>Last update 4 days ago</SmallText>
      </TextBox>
    </SliderBoxItem>
  );
};
