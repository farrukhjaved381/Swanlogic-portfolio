import React from 'react';
import ReactPlayer from 'react-player';

interface VideoBackgroundProps {
  src?: string;
}

/**
 * Background video covering the hero area.
 * - Uses ReactPlayer for robust playback and autoplay policies.
 * - Muted, looped, plays inline.
 */
export default function VideoBackground({ src }: VideoBackgroundProps) {
  const local = '/video/hero.mp4';
  const url = src ?? local;

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <ReactPlayer
        url={url}
        playing
        loop
        muted
        playsinline
        controls={false}
        width="100%"
        height="100%"
        config={{ file: { attributes: { poster: '/favicon.svg' } } }}
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
    </div>
  );
}
