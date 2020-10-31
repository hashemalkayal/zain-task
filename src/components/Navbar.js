import React from "react";
import "../sass/Navbar.scss";
import { Button, Dropdown, Menu } from "semantic-ui-react";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-controls">
        <Menu size="large">
          <Menu.Item icon="sidebar" active />
          <Menu.Item name="Company Logo" />
          <Menu.Menu position="right">
            <Menu.Item icon="search" />
            <Menu.Item icon="bell" />
            <Menu.Item icon="calendar outline" />
            <Menu.Item>
              <Button icon="users" />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
