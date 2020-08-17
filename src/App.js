import React, { useState, useEffect } from 'react';
import './App.css';
import Video from './Video';
import db from './firebase'
function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    db.collection("videos").onSnapshot(snapshot =>
      setVideos(snapshot.docs.map(doc => doc.data())))
  }, [videos])

  return (
    <div className="app">
      <div className="app__vedios">
        {videos.map((video) => (
          <Video
            likes={video.likes}
            share={video.share}
            messages={video.messages}
            channel={video.channel}
            song={video.song}
            discription={video.discription}
          />
        ))}
        <Video likes={387} share={23} messages={10} channel={'Raffiqe'} song={'yea--kya hua'} discription={'discrption for first video'} />
        <Video likes={392} share={23} messages={43} channel={'K.K'} song={'yea--kya hua'} discription={'discrption for 2nd video'} />
        <Video likes={82} share={23} messages={73} channel={'Kumar sanu'} song={'yea--kya hua'} discription={'discrption for third video'} />
        <Video likes={2} share={23} messages={1} channel={'R.K rehaman'} song={'yea--kya hua'} discription={'discrption for forth video'} />
        <Video likes={375} share={23} messages={1090} channel={'Arijit shingh'} song={'yea--kya hua'} discription={'discrption for fifth video'} />
      </div>
    </div>

  );
}

export default App;
