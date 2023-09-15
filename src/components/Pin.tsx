interface PinProps {
  className?: string;
  onClick?: () => void;
}

export function Pin({ className, onClick }: PinProps) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    className={className}
    data-name="Line Color"
    viewBox="0 0 24 24"
    onClick={onClick}
  >
    <path
      d="M14 10.12v-.34a5.33 5.33 0 0 1 .67-2.42A2.94 2.94 0 0 0 15 5.47 3 3 0 0 0 9 6a2.9 2.9 0 0 0 .34 1.37A5.57 5.57 0 0 1 10 9.93h0a5.56 5.56 0 0 1-.9 3A7.93 7.93 0 0 0 8 17.05 8 8 0 0 0 9 21h6a8 8 0 0 0 1-3.95 7.79 7.79 0 0 0-1.2-4.31 4.72 4.72 0 0 1-.8-2.62Z"
      style={{
        fill: "currentColor",
        stroke: "#000",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
  </svg>
  )
}
