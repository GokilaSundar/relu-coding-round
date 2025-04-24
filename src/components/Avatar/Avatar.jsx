import "./Avatar.css";

export const Avatar = (props) => {
  return (
    <div className="avatar">
      <div className={`image-container ${props.online && "online"}`}>
        <img alt={props.user.name} src={props.user.avatar} />
      </div>
      <div className="content">
        <div className="name">{props.user.name}</div>
        <div className="handle">@{props.user.handle}</div>
      </div>
    </div>
  );
};
