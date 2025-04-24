import { Avatar } from "../Avatar/Avatar";
import "./Artists.css";
import { DummyArtists } from "./DummyArtists";

const Artist = (props) => {
  return (
    <div className="artist">
      <img alt={props.item.user.name} src={props.item.image} />
      <Avatar user={props.item.user} online />
    </div>
  );
};

export const Artists = () => {
  return (
    <div className="artists-container">
      <div className="artists">
        {DummyArtists.map((item, index) => (
          <Artist key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
