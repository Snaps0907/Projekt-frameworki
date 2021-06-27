import { Link } from "react-router-dom"
import styled from "styled-components"

export const Title = styled.h2`
margin: 2em;
color: var(--darkGray);
text-transform: uppercase;`

export const MainSlider = styled.div`
z-index: 0;
position: absolute;
width: 70%;
height: 350px;
overflow: hidden;
`

export const Wrapper = styled.div`
height: 400px;`

export const InnerSlider = styled.div`
position: absolute;
display: flex;
top: 0;
left: 0;
height: 100%;
max-width: 200%;
pointer-events: none;
`
export const SliderBoxItem = styled.div`
position: relative;
width: 330px;
height: 330px;
margin: 10px 20px;
border-radius: 10px;
background-color: #ffffff;
`
export const Image = styled.img`
width: 100%;
height: 70%;
border-radius: 10px 10px 0 0 ;
`
export const TextBox = styled.div`
margin: 10px;
color: var(--darkGray);
`

export const SmallText = styled.p`
font-size: 0.8rem;
font-weight: bold;
color: var(--gray);
position: absolute;
bottom: 10px;
`
export const MediumText = styled.p`
display:flex;
align-items: center;
font-size: 1rem;
padding: 2px 0;
&>img{
    height:25px;
    width:auto;
    margin-right:5px;
}
`
export const WorspacesLink = styled(Link)`
z-index: 1;
text-transform: uppercase;
color: var(--blue);
font-weight: bold;`