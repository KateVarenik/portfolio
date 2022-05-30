import "./circle-stroke.css";

export default function CircleStroke(props) {
  return (
    <div className={`svg-circle__wrapper ${props.className}`}>
      <svg
        width="1.5em"
        height="1.5em"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="22"
          cy="22"
          r="21.5"
          strokeWidth="1"
          className="svg-circle"
        />
      </svg>
    </div>
  );
}
