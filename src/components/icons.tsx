import * as React from 'react';

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

function makeIcon(path: React.ReactNode) {
  return function Icon({ size = 24, className, ...rest }: IconProps) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        width={size}
        height={size}
        {...rest}
      >
        {path}
      </svg>
    );
  };
}

export const ArrowUpRight = makeIcon(
  <g>
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </g>
);

export const ArrowRight = makeIcon(<path d="M5 12h14M13 5l7 7-7 7" />);

export const Phone = makeIcon(
  <g>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.3 1.78.55 2.63a2 2 0 0 1-.45 2.11L8 9a16 16 0 0 0 7 7l.54-.21a2 2 0 0 1 2.11.45c.85.25 1.73.43 2.63.55A2 2 0 0 1 22 16.92z" />
  </g>
);

export const Mail = makeIcon(
  <g>
    <path d="M4 4h16v16H4z" stroke="none" fill="currentColor" opacity="0.05" />
    <path d="M4 4h16v16H4z" />
    <path d="M22 6l-10 7L2 6" />
  </g>
);

export const MapPin = makeIcon(
  <g>
    <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 1 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </g>
);

