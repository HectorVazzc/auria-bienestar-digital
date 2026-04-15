interface SparkleProps {
  className?: string;
  size?: number;
  color?: string;
}

const Sparkle = ({ className = "", size = 40, color = "currentColor" }: SparkleProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M50 0 C52 38, 62 48, 100 50 C62 52, 52 62, 50 100 C48 62, 38 52, 0 50 C38 48, 48 38, 50 0Z"
      fill={color}
    />
  </svg>
);

export default Sparkle;
