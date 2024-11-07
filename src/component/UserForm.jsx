import React, { useState } from "react";

const UserForm = ({ addUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Member");
  const [status, setStatus] = useState("Active");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { id: Date.now(), name, email, role, status };
    addUser(newUser);
    setName("");
    setEmail("");
    setRole("Member");
    setStatus("Active");
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-2 text-lg font-semibold">Add New User</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        >
          <option value="Admin">Admin</option>
          <option value="Member">Member</option>
        </select>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button
          type="submit"
          className="w-full py-2 font-semibold text-white bg-blue-500 rounded-lg"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default UserForm;
