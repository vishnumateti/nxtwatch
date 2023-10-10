import {Component} from 'react'

import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import CartContext from '../../context/CartContext'

import {
  SideBarContainer,
  NavItemsContainer,
  TextContainer,
  NavLink,
  ItemText,
  SideBarBottomContainer,
  BottomText,
  IconsContainer,
  IconImage,
} from './styledComponents'

class SideBar extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {activeTabItem, activeTab, isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#181818'

          const onClickHomeTabItem = () => {
            activeTabItem('HOME')
          }

          const onClickTrendingTabItem = () => {
            activeTabItem('TRENDING')
          }

          const onClickGamingTabItem = () => {
            activeTabItem('GAMING')
          }

          const onClickSavedTabItem = () => {
            activeTabItem('SAVED VIDEOS')
          }

          return (
            <SideBarContainer bgColor={bgColor}>
              <NavItemsContainer>
                <TextContainer
                  isActive={activeTab === 'HOME' ? '#f1f5f9' : 'transparent'}
                  onClick={onClickHomeTabItem}
                >
                  <NavLink
                    to="/"
                    color={activeTab === 'HOME' ? '#ff0000' : {bgColor}}
                  >
                    <AiFillHome />
                    <ItemText
                      color={activeTab === 'HOME' ? '#ff0000' : {textColor}}
                    >
                      Home
                    </ItemText>
                  </NavLink>
                </TextContainer>
                <TextContainer
                  isActive={
                    activeTab === 'TRENDING' ? '#f1f5f9' : 'transparent'
                  }
                  bgColor={bgColor}
                  onClick={onClickTrendingTabItem}
                >
                  <NavLink
                    to="/trending"
                    color={activeTab === 'TRENDING' ? '#ff0000' : {bgColor}}
                  >
                    <AiFillFire />
                    <ItemText
                      color={activeTab === 'TRENDING' ? '#ff0000' : {textColor}}
                    >
                      Trending
                    </ItemText>
                  </NavLink>
                </TextContainer>
                <TextContainer
                  isActive={activeTab === 'GAMING' ? '#f1f5f9' : 'transparent'}
                  bgColor={bgColor}
                  onClick={onClickGamingTabItem}
                >
                  <NavLink
                    to="/gaming"
                    color={activeTab === 'GAMING' ? '#ff0000' : {bgColor}}
                  >
                    <SiYoutubegaming />
                    <ItemText
                      color={activeTab === 'GAMING' ? '#ff0000' : {textColor}}
                    >
                      Gaming
                    </ItemText>
                  </NavLink>
                </TextContainer>
                <TextContainer
                  isActive={
                    activeTab === 'SAVED VIDEOS' ? '#f1f5f9' : 'transparent'
                  }
                  bgColor={bgColor}
                  onClick={onClickSavedTabItem}
                >
                  <NavLink
                    to="/saved-videos"
                    color={activeTab === 'SAVED VIDEOS' ? '#ff0000' : {bgColor}}
                  >
                    <MdPlaylistAdd />
                    <ItemText
                      color={
                        activeTab === 'SAVED VIDEOS' ? '#ff0000' : {textColor}
                      }
                    >
                      Saved videos
                    </ItemText>
                  </NavLink>
                </TextContainer>
              </NavItemsContainer>
              <SideBarBottomContainer>
                <BottomText color={textColor}>CONTACT US</BottomText>
                <IconsContainer>
                  <IconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <IconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <IconImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </IconsContainer>
                <ItemText>
                  Enjoy! Now to see your channels and recommendations!
                </ItemText>
              </SideBarBottomContainer>
            </SideBarContainer>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default SideBar
