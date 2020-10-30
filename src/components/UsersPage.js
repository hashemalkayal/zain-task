import React from "react";
import Navbar from "./Navbar";
import SideNavbar from "./SideNavbar";
import Users from "./Users";
import "../sass/UsersPage.scss";
import SiteFooter from "./SiteFooter";

function UsersPage() {
  return (
    <div className="users-page-wrapper">
      <Navbar />
      <SideNavbar />
      <Users />
      <SiteFooter />
    </div>
  );
}

export default UsersPage;
