import "./Posts.css";

import { Avatar } from "../Avatar/Avatar";
import { Carousel } from "../Carousel/Carousel";
import { DummyPosts } from "./DummyPosts";
import Heart from "../../assets/icons/heart.svg?react";
import RatingHeart from "../../assets/icons/post-heart.svg?react";
import Menu from "../../assets/icons/menu.svg?react";
import Comment from "../../assets/icons/comment.svg?react";
import Share from "../../assets/icons/share.svg?react";

const Post = (props) => {
  return (
    <div className="card post">
      <div className="title-container">
        <Avatar user={props.item.user} />
        <Menu />
      </div>
      <div className="content-container">
        <p className="text">
          {props.item.postContent}{" "}
          <a href="#" onClick={(e) => e.preventDefault()}>
            Read More
          </a>
        </p>
        <div className="image">
          <img alt={props.item.postContent} src={props.item.postImage} />
          <Heart />
        </div>
      </div>
      <div className="social-container">
        <div className="count">
          <RatingHeart />
          <span>{props.item.likes}</span>
        </div>
        <div className="count">
          <Comment />
          <span>{props.item.comments}</span>
        </div>
        <div className="count">
          <Share />
          <span>{props.item.shares}</span>
        </div>
      </div>
    </div>
  );
};

export const Posts = () => {
  return (
    <div className="posts-container">
      {DummyPosts.map((item, index) => (
        <Post key={index} item={item} />
      ))}

      <Carousel />
    </div>
  );
};
