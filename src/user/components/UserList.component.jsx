import React from "react";

import UserItem from "./UserItem.component";
import Card from "../../shared/components/UIElements/Card.component";
import "./UserList.styles.css";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <Card>
        <div className="center">
          <h2>No users found.</h2>
        </div>
      </Card>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image="https://source.unsplash.com/daily"
          name={user.name}
          placeCount={user.Places.length}
        />
      ))}
    </ul>
  );
};

export default UsersList;
