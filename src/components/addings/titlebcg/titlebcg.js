import "./titlebcg.css";

export default function TitleBcg(props) {
  return <div className={`${props.className} titlebcg`}>{props.children}</div>;
}
