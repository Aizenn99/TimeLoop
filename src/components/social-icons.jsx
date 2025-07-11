import React from "react";

export const Icons = {
  gitHub: (props) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8..."
      />
    </svg>
  ),

  notion: (props) => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M6.017 4.313l55.333 -4.087c6.797 -0.583..." fill="#fff" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M61.35 0.227l-55.333 4.087C1.553 4.7..."
        fill="#000"
      />
    </svg>
  ),

  googleDrive: (props) => (
    <svg viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5..."
        fill="#0066da"
      />
      <path
        d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9..."
        fill="#00ac47"
      />
      <path
        d="m73.55 76.8c1.35-.8 2.5-1.9..."
        fill="#ea4335"
      />
      <path
        d="m43.65 25 13.75-23.8c-1.35-.8..."
        fill="#00832d"
      />
      <path
        d="m59.8 53h-32.3l-13.75 23.8..."
        fill="#2684fc"
      />
      <path
        d="m73.4 26.5-12.7-22c-.8-1.4..."
        fill="#ffba00"
      />
    </svg>
  ),

  whatsapp: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 175.216 175.552"
      {...props}
    >
      <defs>
        <linearGradient
          id="b"
          x1="85.915"
          x2="86.535"
          y1="32.567"
          y2="137.092"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#57d163" />
          <stop offset="1" stopColor="#23b33a" />
        </linearGradient>
        <filter
          id="a"
          width="1.115"
          height="1.114"
          x="-.057"
          y="-.057"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="3.531" />
        </filter>
      </defs>
      <path
        fill="#b3b3b3"
        d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518..."
        filter="url(#a)"
      />
      <path
        fill="#fff"
        d="m12.966 161.238 10.439-38.114a73.42 73.42..."
      />
      <path
        fill="url(#b)"
        d="M87.184 25.227c-33.733 0-61.166 27.423..."
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M68.772 55.603c-1.378-3.061-2.828-3.123..."
      />
    </svg>
  ),
};
