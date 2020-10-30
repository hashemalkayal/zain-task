import React, { useState } from "react";
import { Dropdown, Icon, Input, Pagination, Table } from "semantic-ui-react";
import { getAuthState } from "../helpers/authCheck";
import Navbar from "./Navbar";
import SideNavbar from "./SideNavbar";
import usersJson from "../api-mock/user.json";
import "../sass/Users.scss";

function Users() {
  const currentUser = getAuthState();
  const [users, setUsers] = useState(usersJson);

  const handleSearch = (e) => {
    setUsers(
      usersJson.filter((user) =>
        user.email
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase())
      )
    );
  };

  return (
    <div className="users-container">
      <div className="page-head">
        <h4>Records</h4>
      </div>
      <div className="page-content">
        <div>
          <div className="table-head">
            <Input onChange={handleSearch} icon="search" placeholder="Search" />
          </div>
          <Table basic>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Username</Table.HeaderCell>
                <Table.HeaderCell>Password</Table.HeaderCell>
                <Table.HeaderCell>Mobile Number</Table.HeaderCell>
                <Table.HeaderCell>Full Name</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {users.map((user) => (
                <Table.Row>
                  <Table.Cell>{user.id}</Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>********</Table.Cell>
                  <Table.Cell>{user.mobileNumber}</Table.Cell>
                  <Table.Cell>{user.fullname}</Table.Cell>
                  <Table.Cell textAlign="right">
                    <Icon name="ellipsis vertical" />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
        <div className="table-footer">
          <div>
            <label>Showing</label>
            <Dropdown
              defaultValue={5}
              options={[
                { value: 5, text: "5" },
                { value: 50, text: "50" },
                { value: 100, text: "100" },
                { value: 150, text: "150" },
              ]}
            />
            <label>of 5</label>
          </div>
          <Pagination
            totalPages={3}
            activePage={1}
            ellipsisItem={false}
            lastItem={false}
            firstItem={false}
          />
        </div>
      </div>
    </div>
  );
}

export default Users;
