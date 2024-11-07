import React, { useState } from "react";
import UserList from "./UserList";
import UserFilters from "./UserFilters";
import UserForm from "./UserForm";

const Users = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Vikas Kumar",
      email: "Vikaskumar5016473@gmail.com",
      role: "Admin",
      status: "Active",
    },
  ]);

  const addUser = (newUser) => setUsers([...users, newUser]);

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-semibold">Users</h1>
      <UserFilters />
      <UserList users={users} />
      <UserForm addUser={addUser} />
    </div>
  );
};

export default Users;
