import React from "react";
import { Icon, List } from "semantic-ui-react";
import "../sass/SideNavbar.scss";

function SideNavbar() {
  return (
    <div className="side-navbar-container">
      <List>
        <List.Item>
          <Icon size="large" name="dashboard" />
          Dashboard
        </List.Item>
        <List.Item active>
          <Icon size="large" name="newspaper outline" />
          Work Orders
        </List.Item>
        <List.Item>
          <Icon size="large" name="cog" />
          Settings
        </List.Item>
      </List>
    </div>
  );
}

export default SideNavbar;
