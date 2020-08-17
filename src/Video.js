import React, { useRef } from 'react'
import './Video.css';
import SampleVedio from './asserts/sample-mp4-file.mp4'
import VideoFooter from './VideoFooter';
import VideoSideBar from './VideoSideBar';

function Video(props) {
  const { likes, share, messages, channel, song, discription, url } = props
  const videoRef = useRef(null);
  const [play, setPlay] = React.useState(false);
  const onVideoPress = () => {
    if (!play) {
      videoRef.current.play();
      setPlay(true);
    }
    else {
      videoRef.current.pause();
      setPlay(false);
    }
  }
  return (
    <div className="vedio">
      <video
        className="video_player"
        src={url ? url : "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"}
        loop
        ref={videoRef}
        onClick={onVideoPress}
      ></video>
      <VideoFooter
        channel={channel}
        discription={song}
        song={discription} />
      <VideoSideBar
        likes={likes}
        messages={messages}
        share={share} />
    </div>
  )
}

export default Video
