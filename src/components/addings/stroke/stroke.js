import "./stroke.css";

export default function Stroke(props) {
  return (
    <div className={`svg-wrapper ${props.className}`}>
      <svg height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
        <rect className="shape" height="1.5em" width="1.5em" />
      </svg>
    </div>
  );
}
