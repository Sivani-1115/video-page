// src/components/VideoPlayer.js
import React, { useRef, useEffect, useState } from 'react';

const VideoPlayer = ({ videoSrc }) => {
  const videoRef = useRef(null);
  const [playbackRate, setPlaybackRate] = useState(1);

  useEffect(() => {
    const video = videoRef.current;
    const handleTimeUpdate = () => {
      localStorage.setItem('videoTime', video.currentTime);
    };

    const savedTime = localStorage.getItem('videoTime');
    if (savedTime) {
      video.currentTime = savedTime;
    }

    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const handlePlaybackRateChange = (rate) => {
    videoRef.current.playbackRate = rate;
    setPlaybackRate(rate);
  };

  return (
    <div style={styles.videoPlayerContainer}>
      <video ref={videoRef} controls style={styles.video} src={videoSrc} />
      <div style={styles.controls}>
        <button onClick={() => handlePlaybackRateChange(0.5)}>0.5x</button>
        <button onClick={() => handlePlaybackRateChange(1)}>1x</button>
        <button onClick={() => handlePlaybackRateChange(1.5)}>1.5x</button>
        <button onClick={() => handlePlaybackRateChange(2)}>2x</button>
      </div>
    </div>
  );
};

const styles = {
  videoPlayerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  video: {
    width: '100%',
    maxHeight: '500px',
  },
  controls: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  },
};

export default VideoPlayer;
