import styled from 'styled-components'

export const HomePageContainer = styled.div`
  background-color: ${props => props.bgColor};
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
`
export const BannerImageContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: ${props => props.display};
  flex-direction: row;
  width: 80%;
  height: 40vh;
  padding: 50px;
`
export const GetItButton = styled.button`
  color: #181818;
  background-color: transparent;
  height: 30px;
  width: 100px;
  margin: 20px;
  border-color: #181818;
`
export const PremiumText = styled.p`
  font-family: 'Roboto';
  display: ${props => props.display};
`
export const BannerImage = styled.img`
  object-fit: fill;
  width: 250px;
`

export const BannerText = styled.p`
  color: #181818;
  font-family: 'Roboto';
`
export const HomeLeftSideContainer = styled.div`
  position: sticky;
  position: -webkit-sticky;
`

export const HomeRightSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 100%;
  background-color: ${props => props.bgColor};
`

export const NavbarLargeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const ColumnAlign = styled.div`
  display: flex;
  flex-direction: column;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 10px;
  outline: none;
  cursor: pointer;
  border-radius: 10px;
`

export const AlignRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`
export const Image = styled.img`
  margin: 20px;
  width: 300px;
  color: black;
`
export const Heading = styled.h1`
  text-align: center;
  font-size: 30px;
`

export const GetItNowButton = styled.button`
  background-color: transparent;
  border: 1px solid #181818;
  padding: 5px;
  color: #181818;
  width: 100px;
`
