export default function Logo({ style, className }) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className={className}
    >
      <circle cx="8" cy="8" r="8" fill="white" />
      <path
        d="M5 4V12"
        stroke="#D3B19D"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11 12L9 10.5"
        stroke="#D3B19D"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M5 12L11 4"
        stroke="#D3B19D"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M5 4L5 12" stroke="white" strokeLinecap="round" />
      <path d="M5 12L11 4" stroke="white" strokeLinecap="round" />
    </svg>
  );
}
