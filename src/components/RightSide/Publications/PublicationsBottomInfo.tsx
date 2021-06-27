import React, {FC} from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { INumber } from '../../../App'
import { IState } from '../../../reducers'
import { IUsersReducer } from '../../../reducers/usersReducers'

const InfoWrapper = styled.div`
margin-top: 10px;
display: flex;
`

export const InfoText = styled.p`
font-size: 0.9rem;
font-weight: bold;
color: var(--gray);
`
export const Image = styled.img`
  border-radius: 50%;
  width: 20px;
  margin: 0 10px;`
  
  
export const PublicationBottomInfo: FC<INumber> = ({id}) => {
    const { photosList } = useSelector<IState, IUsersReducer>(globalState => ({
      ...globalState.users
    }));
    const { usersList } = useSelector<IState, IUsersReducer>(globalState => ({
      ...globalState.users
    }));
    return (
    <InfoWrapper>
    <InfoText>20 jan 2021</InfoText>
    <Image src="https://images.pexels.com/photos/7907687/pexels-photo-7907687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
    <InfoText>{usersList[id]?.name}</InfoText>
    </InfoWrapper>
  )
  }