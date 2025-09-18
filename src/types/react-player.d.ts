declare module 'react-player' {
  import * as React from 'react';

  export interface ReactPlayerProps {
    url: string | string[];
    playing?: boolean;
    loop?: boolean;
    controls?: boolean;
    muted?: boolean;
    width?: string | number;
    height?: string | number;
    playsinline?: boolean;
    config?: Record<string, unknown>;
    style?: React.CSSProperties;
    className?: string;
    onReady?: () => void;
    onStart?: () => void;
    onPlay?: () => void;
    onPause?: () => void;
    onEnded?: () => void;
    onError?: (error: unknown) => void;
  }

  const ReactPlayer: React.FC<ReactPlayerProps>;
  export default ReactPlayer;
}
