import React from 'react'
import './VideoFooter.css';
import Ticker from "react-ticker";
import MusicNoteOutlinedIcon from '@material-ui/icons/MusicNoteOutlined';

function VideoFooter(props) {
  const { channel, song, discription } = props
  return (
    <div className="video-footer">
      <div className="video-footer__text">
        <h3>@{channel}</h3>
        <p>{discription}</p>
        <div className="video-footer__ticker">
          <MusicNoteOutlinedIcon className="video-footer__icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p> {song} </p>
              </>
            )}
          </Ticker>
        </div>

      </div>
      <img src="https://static.thenounproject.com/png/934821-200.png" alt="" className='video-footer__record' />
    </div>
  )
}

export default VideoFooter
