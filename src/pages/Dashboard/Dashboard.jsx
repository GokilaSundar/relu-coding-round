import "./Dashboard.css";

import { Artists } from "../../components/Artists/Artists";
import { BecomeASeller } from "../../components/BecomeASeller/BecomeASeller";
import { FilterBar } from "../../components/FilterBar/FilterBar";
import { Logo } from "../../components/Logo/Logo";
import { Posts } from "../../components/Posts/Posts";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Navigate, Route, Routes } from "react-router-dom";

const dummyPages = [
  {
    label: "Notifications",
    path: "/notifications",
  },
  {
    label: "Shop",
    path: "/shop",
  },
  {
    label: "Conversation",
    path: "/conversation",
  },
  {
    label: "Wallet",
    path: "/wallet",
  },
  {
    label: "Subscription",
    path: "/subscription",
  },
  {
    label: "My Profile",
    path: "/profile",
  },
  {
    label: "Settings",
    path: "/settings",
  },
];

export const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Logo />
      <FilterBar />
      <BecomeASeller />

      <Sidebar />
      <Routes>
        <Route path="/home" element={<Posts />} />

        {dummyPages.map((item) => (
          <Route
            path={item.path}
            element={<div className="card dummy-page">{item.label}</div>}
          />
        ))}

        <Route path="*" element={<Navigate to="/dashboard/home" />} />
      </Routes>
      <Artists />

      <div className="footer between">
        <span>2022©logo name</span>
        <span>Developed by ivan Infotech</span>
      </div>
      <div className="footer"></div>
      <div className="footer around">
        <span>Privacy</span>
        <span>Terms of Service</span>
        <span>Cookie Notice</span>
      </div>
    </div>
  );
};
