import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ReactPlayer from 'react-player'
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from 'react-icons/ai'

import {RiPlayListAddFill} from 'react-icons/ri'

import Header from '../Header'
import SideBar from '../SideBar'

import CartContext from '../../context/CartContext'
import {
  VideoContainer,
  HomeContainer,
  ProductsLoaderContainer,
  VideoDetailsSideContainer,
  VideoDetailsTitle,
  VideoDetailsTextContainer,
  ViewsDetailsContainer,
  LikesContainer,
  ViewsText,
  IconContainer,
  HorizontalLine,
  ChannelLogo,
  ChannelContainer,
  ChannelDetailsContainer,
  LogoContainer,
  NotFoundContainer,
  Image,
  Heading,
  Desc,
  NavLink,
  Retry,
} from './styledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN PROGRESS',
}

class VideoItemDetailsRoute extends Component {
  state = {
    videoDetails: [],
    apiStatus: apiStatusConstants.initial,
    isVideoSaved: false,
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({apiStatus: apiStatusConstants.inProgress})

    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = {
        id: fetchedData.video_details.id,
        publishedAt: fetchedData.video_details.published_at,
        description: fetchedData.video_details.description,
        title: fetchedData.video_details.title,
        videoUrl: fetchedData.video_details.video_url,
        viewCount: fetchedData.video_details.view_count,
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        channel: {
          name: fetchedData.video_details.channel.name,
          profileImageUrl: fetchedData.video_details.channel.profile_image_url,
          subscriberCount: fetchedData.video_details.channel.subscriber_count,
        },
        videoSaved: false,
      }
      console.log(updatedData)
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSpecificVideoDetails = () => (
    <CartContext.Consumer>
      {value => {
        const {addToSaveVideos, removeSaveVideos, onChangeTheme} = value

        const {videoDetails, isVideoSaved, isLiked, isDisliked} = this.state

        const {
          id,
          channel,
          description,
          viewCount,
          videoUrl,
          title,
          publishedAt,
          videoSaved,
        } = videoDetails

        const {name, profileImageUrl, subscriberCount} = channel

        const bgColor = onChangeTheme ? '#0f0f0f' : '#ffffff'

        const addOrRemoveItem = () => {
          if (isVideoSaved === true) {
            console.log(id)
            removeSaveVideos(id)
          } else {
            console.log(videoDetails)
            addToSaveVideos({...videoDetails, videoSaved: !videoSaved})
          }
        }

        const saveVideoToList = () => {
          this.setState(
            prevState => ({isVideoSaved: !prevState.isVideoSaved}),
            addOrRemoveItem,
          )
        }

        const onClickLikeButton = () => {
          this.setState(prevState => ({
            isLiked: !prevState.isLiked,
            isDisliked: false,
          }))
        }

        const onClickDislikeButton = () => {
          this.setState(prev => ({
            isDisliked: !prev.isDisliked,
            isLiked: false,
          }))
        }

        const likeClass = isLiked ? '#2563eb' : '#64748b'

        const dislikeClass = isDisliked ? '#2563eb' : '#64748b'

        const likeIcon = isLiked ? <AiFillLike /> : <AiOutlineLike />
        const dislikeIcon = isDisliked ? (
          <AiFillDislike />
        ) : (
          <AiOutlineDislike />
        )

        return (
          <VideoContainer bgColor={bgColor} data-testid="videoItemDetails">
            <Header />
            <HomeContainer>
              <SideBar />
              <VideoDetailsSideContainer>
                <ReactPlayer
                  url={videoUrl}
                  controls
                  width="90%"
                  height="500px"
                />
                <VideoDetailsTextContainer>
                  <VideoDetailsTitle>{title} </VideoDetailsTitle>
                  <ViewsDetailsContainer>
                    <ViewsText>{viewCount} views </ViewsText>
                    <ViewsText>{publishedAt} </ViewsText>
                    <LikesContainer>
                      <IconContainer
                        type="button"
                        color={likeClass}
                        onClick={onClickLikeButton}
                      >
                        {likeIcon}
                        <ViewsText color={likeClass}>Like</ViewsText>
                      </IconContainer>
                      <IconContainer
                        color={dislikeClass}
                        type="button"
                        onClick={onClickDislikeButton}
                      >
                        {dislikeIcon}
                        <ViewsText colors={dislikeClass}>Dislike</ViewsText>
                      </IconContainer>
                      <IconContainer
                        onClick={saveVideoToList}
                        color={isVideoSaved ? '#4f46e5' : '#181818'}
                      >
                        <RiPlayListAddFill />
                        <ViewsText color={isVideoSaved ? '#4f46e5' : '#181818'}>
                          {isVideoSaved ? 'Saved' : 'Save'}
                        </ViewsText>
                      </IconContainer>
                    </LikesContainer>
                  </ViewsDetailsContainer>
                  <HorizontalLine />
                  <ChannelContainer>
                    <LogoContainer>
                      <ChannelLogo src={profileImageUrl} alt="channel logo" />
                    </LogoContainer>
                    <ChannelDetailsContainer>
                      <ViewsText>{name}</ViewsText>
                      <ViewsText>{subscriberCount} Subscribers</ViewsText>
                      <ViewsText> {description}</ViewsText>
                    </ChannelDetailsContainer>
                  </ChannelContainer>
                </VideoDetailsTextContainer>
              </VideoDetailsSideContainer>
            </HomeContainer>
          </VideoContainer>
        )
      }}
    </CartContext.Consumer>
  )

  renderLoadingView = () => (
    <ProductsLoaderContainer
      className="products-loader-container"
      data-testid="loader"
    >
      <Loader type="ThreeDots" color="#0b69ff" />
    </ProductsLoaderContainer>
  )

  renderFailureView = () => (
    <NotFoundContainer>
      <Image
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt="failure view"
        className="jobs-failure-img"
      />
      <Heading> Oops! Something Went Wrong</Heading>
      <Desc className="jobs-failure-description">
        {' '}
        We are having some trouble to complete your request. Please try again.
      </Desc>
      <NavLink>
        <Retry className="button" type="button" onClick={this.getVideoDetails}>
          Retry
        </Retry>
      </NavLink>
    </NotFoundContainer>
  )

  renderAllVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSpecificVideoDetails()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return <>{this.renderAllVideos()}</>
  }
}

export default VideoItemDetailsRoute
