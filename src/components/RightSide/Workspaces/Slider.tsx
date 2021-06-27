import React, { FC } from "react";
import { InnerSlider, MainSlider } from "./Workspaces_styles";
import { SliderItem } from "./SliderItem";

export const Slider: FC = () => {
  return (
    <MainSlider
      className="slider"
      onMouseMove={HandleMouseMove}
      onMouseDown={HandleScroll}
      onMouseUp={HandleDrop}
      onMouseEnter={HandleGrab}
    >
      <InnerSlider className="inner-slider">
        <SliderItem
          imageUrl={process.env.PUBLIC_URL + "/Images/water.jpeg"}
          title="Client contract"
          type="Contract"
          usersNumber="54"
          icon={process.env.PUBLIC_URL + "/Icons/pub_light.png"}
        />
        <SliderItem
          imageUrl={process.env.PUBLIC_URL + "/Images/flower.jpeg"}
          title="Group norms"
          type="Group norms"
          usersNumber="48"
          icon={process.env.PUBLIC_URL + "/Icons/pub_light.png"}
        />
        <SliderItem
          imageUrl={process.env.PUBLIC_URL + "/Images/road.jpeg"}
          title="Corporate"
          type="Corporate"
          usersNumber="25"
          icon={process.env.PUBLIC_URL + "/Icons/pub_light.png"}
        />
        <SliderItem
          imageUrl={process.env.PUBLIC_URL + "/Images/houses.jpeg"}
          title="Supplier contract"
          type="Contract"
          usersNumber="12"
          icon={process.env.PUBLIC_URL + "/Icons/pub_light.png"}
        />
        <SliderItem
          imageUrl={process.env.PUBLIC_URL + "/Images/road.jpeg"}
          title="Supplier contract"
          type="Contract"
          usersNumber="12"
          icon={process.env.PUBLIC_URL + "/Icons/pub_light.png"}
        />
        <SliderItem
          imageUrl={process.env.PUBLIC_URL + "/Images/water.jpeg"}
          title="Supplier contract"
          type="Contract"
          usersNumber="12"
          icon={process.env.PUBLIC_URL + "/Icons/pub_light.png"}
        />
      </InnerSlider>
    </MainSlider>
  );
};

let x: number;
let pressed: boolean = false;
let startx: number;

function getInnerSlider(): HTMLElement {
  return document.querySelector(".inner-slider") as HTMLElement;
}

function getSlider(): HTMLElement {
  return document.querySelector(".slider") as HTMLElement;
}

function HandleScroll(event: React.MouseEvent<HTMLElement>) {
  pressed = true;

  startx = event.nativeEvent.offsetX - getInnerSlider().offsetLeft;
  getSlider().style.cursor = "grabbing";
}
function HandleGrab() {
  getSlider().style.cursor = "grab";
}

function HandleDrop() {
  getSlider().style.cursor = "grab";
}
function HandleMouseMove(event: React.MouseEvent<HTMLElement>) {
  if (!pressed) return;
  console.dir(event.nativeEvent);
  event.preventDefault();
  x = event.nativeEvent.offsetX;
  getInnerSlider().style.left = `${x - startx}px`;
  CheckBoundary();
}
window.addEventListener("mouseup", () => {
  pressed = false;
});

function CheckBoundary() {
  let outer = getSlider().getBoundingClientRect();
  let inner = getInnerSlider().getBoundingClientRect();

  if (parseInt(getInnerSlider().style.left) > 0) {
    getInnerSlider().style.left = "0px";
  } else if (inner.right < outer.right) {
    getInnerSlider().style.left = `-${inner.width - outer.width}px`;
  }
}
