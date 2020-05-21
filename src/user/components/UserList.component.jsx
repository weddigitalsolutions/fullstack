import React from "react";

import UserItem from "./UserItem.component";
import Card from "../../shared/components/UIElements/Card.component";
import "./UserList.styles.css";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card className="center" style={{ width: 50 + "%" }}>
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={`${process.env.REACT_APP_ASSET_URL}/${user.image}`}
          name={user.name}
          placeCount={user.Places.length}
        />
      ))}
    </ul>
  );
};

export default UsersList;
