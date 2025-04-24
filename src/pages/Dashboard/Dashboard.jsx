import { Artists } from "../../components/Artists/Artists";
import { BecomeASeller } from "../../components/BecomeASeller/BecomeASeller";
import { FilterBar } from "../../components/FilterBar/FilterBar";
import { Logo } from "../../components/Logo/Logo";
import { Posts } from "../../components/Posts/Posts";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import "./Dashboard.css";

export const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Logo />
      <FilterBar />
      <BecomeASeller />

      <Sidebar />
      <Posts />
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
