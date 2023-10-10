import {NotFoundContainer, Heading, Desc, Image} from './styledComponents'

import CartContext from '../../context/CartContext'

const NotFoundRoute = () => (
  <CartContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      const isDarkHeading = isDarkTheme ? '#ffffff' : '#000000'
      const isDarkDesc = isDarkTheme ? '#ffffff' : '#000000'
      const isDarkContainer = isDarkTheme ? '#000000' : '#ffffff'

      return (
        <NotFoundContainer isDark={isDarkContainer}>
          <Image src={imageUrl} alt="not found" />
          <Heading isDark={isDarkHeading}>Page Not Found </Heading>
          <Desc isDark={isDarkDesc}>
            we are sorry, the page you requested could not be found.
          </Desc>
        </NotFoundContainer>
      )
    }}
  </CartContext.Consumer>
)

export default NotFoundRoute
