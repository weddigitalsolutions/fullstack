import React from "react";
import UserList from "../components/UserList.component";

const Users = () => {
  const USERS = [
    {
      id: "id",
      name: "Wilson Filho",
      image: "https://source.unsplash.com/1600x900/?nature,water",
      places: 3,
    },
  ];
  return <UserList items={USERS} />;
};

export default Users;
