import React, { FC } from 'react'
import styled from 'styled-components'
import { INumber } from '../../../App'
import LatestPublications from './LatestPublications'
import MainPublication from './MainPublication'

const Wrapper = styled.div`
  display: flex;
  height: 450px;
  background-color: #fff;
  border-radius: 5px;
  position:relative;`

const Button = styled.button`
position: absolute;
font-weight: bold;
bottom:0;
left: 42%;
padding: 5px;
background: none;
color: var(--blue);
;`
  
const Publications: FC<INumber> = ({id}) => {
    return (
      <Wrapper>
        <MainPublication id={id}/>
        <LatestPublications id={id}/>
        <Button>See more publications</Button>
      </Wrapper>
    )
}


export default Publications
