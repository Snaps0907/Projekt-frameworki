import React, { FC } from 'react'
import useDropdown from 'react-dropdown-hook'
import styled from 'styled-components'
import { isPropertySignature } from 'typescript'
import { INumber } from '../../App'
import DropdownMenu from './DropdownMenu'

const NavLink = styled.p`
color: black;
font-size: 1.2em;
font-weight: 600;
`
const Arrow = styled.img`
position: absolute;
right: 0;
top: 50%;
`
const ToogleBox = styled.div`
width: 18rem;
padding: 1em;
position: relative;
cursor: pointer;
margin-left: 2em;
`


export const Dropdown: FC<INumber> = ({id}) => {
  const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();
  return (
    <div>
      <div ref={wrapperRef}>
        <ToogleBox onClick={toggleDropdown}>
          <NavLink>Home</NavLink>
          <Arrow src={`${process.env.PUBLIC_URL}/Icons/arrow-down.svg`} alt="arrow down" />
        </ToogleBox>
        {dropdownOpen &&
          <DropdownMenu id={id}/>
        }
      </div>
      <div onClick={closeDropdown}></div>
    </div>
  )
}


export default Dropdown
