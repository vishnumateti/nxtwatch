import {Component} from 'react'
import {IoMdClose} from 'react-icons/io'
import Header from '../Header'
import SideBar from '../SideBar'
import SearchVideos from '../SearchVideos'
import CartContext from '../../context/CartContext'

import {
  HomePageContainer,
  HomeContainer,
  HomeLeftSideContainer,
  HomeRightSideContainer,
  BannerImageContainer,
  ModalContainer,
  BannerImage,
  PremiumText,
  GetItNowButton,
  CloseButton,
} from './styledComponents'

class Home extends Component {
  state = {display: 'flex'}

  onCloseBanner = () => {
    this.setState({display: 'none'}, this.renderHomeVideos)
  }

  renderHomeVideos = () => {
    const {display} = this.state
    return (
      <>
        <BannerImageContainer data-testid="banner" display={display}>
          <ModalContainer>
            <BannerImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />
            <PremiumText display={display}>Buy Nxt Watch Premium</PremiumText>
            <GetItNowButton type="button">GET IT NOW</GetItNowButton>
          </ModalContainer>
          <CloseButton
            type="button"
            data-testid="close"
            onClick={this.onCloseBanner}
          >
            <IoMdClose size={20} color="#231f20" />
          </CloseButton>
        </BannerImageContainer>
        <SearchVideos />
      </>
    )
  }

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'

          return (
            <HomePageContainer bgColor={bgColor}>
              <Header />
              <HomeContainer>
                <HomeLeftSideContainer>
                  <SideBar onChangeActiveTab={this.onChangeActiveTab} />
                </HomeLeftSideContainer>
                <HomeRightSideContainer bgColor={bgColor}>
                  {this.renderHomeVideos()}
                </HomeRightSideContainer>
              </HomeContainer>
            </HomePageContainer>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default Home
