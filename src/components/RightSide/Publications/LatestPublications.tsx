import React, {FC} from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { INumber } from '../../../App'
import { IState } from '../../../reducers'
import { IUsersReducer } from '../../../reducers/usersReducers'
import { Text } from './MainPublication'
import { PublicationBottomInfo } from './PublicationsBottomInfo'

const TextContainer = styled.div`
  margin: 1em;
  width: 60%;
  display: flex;
  align-items: center;
  flex-direction: column;
  &::-webkit-scrollbar{
     width: 10px;
};
&::-webkit-scrollbar-track {
  background: #f1f1f1; 

};
&::-webkit-scrollbar-thumb {
  background: var(--blue);
  border-radius: calc(15px / 2);
&:hover {
  background-color: black;
  }};`


  const PublicationWrapper = styled.div`
  width: 90%;
  height: fit-content;
  text-align: justify;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: white;
  position: relative;
  `
  const Photo = styled.img`
  float: left;
  width:  90px;
  margin: 0 10px;
  `

const LatestPublications: FC<INumber> = ({id}) => (
  <TextContainer>
    Latest Publications
    <Publication id={id}/>
    <Publication id={id}/>
    <Publication id={id}/>
    
  </TextContainer>
)

export const Publication: FC<INumber> = ({id}) => {
    return (
      <PublicationWrapper>
        <PublicationPhoto id={id}/>
        <PublicationTopInfo/>
        <PublicationBottomInfo id={id}/>
      </PublicationWrapper>
    )
}

const PublicationPhoto: FC<INumber> = ({id}) => {
  const { photosList } = useSelector<IState, IUsersReducer>(globalState => ({
    ...globalState.users
  }));
  return (
  <Photo src="https://images.pexels.com/photos/5843989/pexels-photo-5843989.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>)
}

export const PublicationTopInfo: FC = () => {
  const { postsList } = useSelector<IState, IUsersReducer>(globalState => ({
    ...globalState.users
  }));
  const randomNumber = Math.floor(Math.random()*100);
  return (
    <Text>
      {postsList[randomNumber]?.body}   
    </Text>
  )
}


export default LatestPublications
