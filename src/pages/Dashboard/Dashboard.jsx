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
    </div>
  );
};
