import React, { useState } from 'react'
import './VideoSideBar.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';

function VideoSideBar(props) {
  const { likes, share, messages } = props
  const [liked, setLiked] = useState(false);
  return (
    <div className="video-side-bar">
      <div className="videoSideBar__selection">
        {liked ? <FavoriteIcon onClick={e => (setLiked(false))} /> : <FavoriteBorderIcon onClick={e => (setLiked(true))} />}
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="videoSideBar__selection">
        <ChatBubbleOutlineIcon />
        <p>{messages}</p>
      </div>
      <div className="videoSideBar__selection">
        <ShareIcon />
        <p>{share}</p>
      </div>
    </div>
  )
}

export default VideoSideBar
