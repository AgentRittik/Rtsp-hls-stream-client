import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import 'videojs-overlay/dist/videojs-overlay.css';
import OverlayPlugin from 'videojs-overlay';

const VideoPlayer = ({ videoUrl, overlays }) => {
  const videoRef = useRef(null);
  console.log(overlays);

  function createOverlays(dataArray) {
    return dataArray.map(item => {
      return {
        content: `<div style="color: ${item.color}; font-size:30px">${item.content}</div>`,
        // position:{
        //   x: item.position.x,
        //   y: item.position.y
        // },
        // size:{
        //   width: item.size.width,
        //   height: item.size.height
        // },
        start: 'playing',
        end: 'pause',
        align: item.align
      };
    });
  }

  useEffect(() => {
    const player = videojs(videoRef.current);

    // Load HLS source
    player.src({
      src: videoUrl,
      type: 'application/x-mpegURL'
    });

    const newOverlays = createOverlays(overlays);
    console.log(newOverlays);
    // Add overlays
    const overlay = player.overlay({
      content: 'Default overlay content',
      debug: true,
      overlays: newOverlays
    });
  }, [videoUrl, overlays]);

  return (
    <video
      ref={videoRef}
      className="video-js vjs-big-play-centered vjs-theme-sea"
      controls
      preload="auto"
      fluid="true"
      data-setup='{}'
    />
  );
};

export default VideoPlayer;
