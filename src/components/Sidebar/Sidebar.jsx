import "./Sidebar.css";

import { Link, useLocation, useNavigate } from "react-router-dom";

import Favorite from "../../assets/icons/favorite.svg?react";
import Heart from "../../assets/icons/heart.svg?react";
import Home from "../../assets/icons/home.svg?react";
import Logout from "../../assets/icons/logout.svg?react";
import Message from "../../assets/icons/message.svg?react";
import Notification from "../../assets/icons/notification.svg?react";
import Profile from "../../assets/icons/profile.svg?react";
import Setting from "../../assets/icons/setting.svg?react";
import Wallet from "../../assets/icons/wallet.svg?react";

const links = [
  {
    icon: <Home />,
    label: "Home",
    path: "/dashboard/home",
  },
  {
    icon: <Notification />,
    label: "Notifications",
    path: "/dashboard/notifications",
  },
  {
    icon: <Heart />,
    label: "Shop",
    path: "/dashboard/shop",
  },
  {
    icon: <Message />,
    label: "Conversation",
    path: "/dashboard/conversation",
  },
  {
    icon: <Wallet />,
    label: "Wallet",
    path: "/dashboard/wallet",
  },
  {
    icon: <Favorite />,
    label: "Subscription",
    path: "/dashboard/subscription",
  },
  {
    icon: <Profile />,
    label: "My Profile",
    path: "/dashboard/profile",
  },
  {
    icon: <Setting />,
    label: "Settings",
    path: "/dashboard/settings",
  },
];

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="sidebar-container">
      <div className="card links">
        <div className="scroll-container">
          {links.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={location.pathname === item.path ? "active" : ""}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
        <div className="flex-fill"></div>
        <button
          className="logout"
          onClick={() => {
            navigate("/logout");
          }}
        >
          <Logout />
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
};
