import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 300px;
  list-style-type: none;
  cursor: pointer;
  margin: 25px;
  background-color: ${props => props.bgColor};
`

export const ThumbnailImage = styled.img`
  width: 100%;
`

export const VideoCardBottomContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`

export const ProfileImage = styled.img`
  height: 48px;
  width: 48px;
  margin-right: 18px;
  display: flex;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

export const VideoDetailsText = styled.p`
  color: #478569;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  color: ${props => props.color};
`
export const NavLink = styled(Link)`
  color: #1e293b;
  text-decoration: none;
  margin-bottom: 10px;
`
