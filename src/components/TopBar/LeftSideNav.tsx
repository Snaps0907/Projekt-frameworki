import React, { FC } from 'react'
import styled from 'styled-components'
import Dropdown from './Dropdown'
import {
  Link
} from "react-router-dom";
import { INumber } from '../../App';

export const Wrapper = styled.div`
  width: 33vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 2em;
`
const Logo = styled.img`
  width: 50px;
  margin: 2em;
`
const HouseIcon = styled.img`
  width: 25px;
`

const LeftSideNav: FC<INumber> = ({id}) => {
    return (
      <Wrapper>
        <Link to="/"><Logo src={process.env.PUBLIC_URL + '/Icons/logo.png'} /></Link>
        <Link to="/"><HouseIcon src={process.env.PUBLIC_URL + '/Icons/house2.svg'} /></Link>
        <Dropdown id={id}/>
      </Wrapper>
    )
}
export default LeftSideNav
