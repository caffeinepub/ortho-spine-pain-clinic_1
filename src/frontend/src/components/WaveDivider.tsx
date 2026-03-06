interface WaveDividerProps {
  fromColor?: string;
  toColor?: string;
  flip?: boolean;
  className?: string;
}

export default function WaveDivider({
  fromColor = "oklch(1 0 0)",
  toColor = "oklch(0.975 0.010 15)",
  flip = false,
  className = "",
}: WaveDividerProps) {
  return (
    <div
      className={`relative w-full overflow-hidden leading-none pointer-events-none ${className}`}
      style={{
        height: "56px",
        background: toColor,
        transform: flip ? "scaleY(-1)" : undefined,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 56"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute top-0 left-0 w-full h-full"
        role="img"
        aria-label="Wave section divider"
      >
        <path
          d="M0,0 C240,48 480,56 720,40 C960,24 1200,8 1440,48 L1440,0 Z"
          fill={fromColor}
        />
      </svg>
    </div>
  );
}
