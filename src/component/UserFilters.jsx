import React from "react";

const UserFilters = () => {
  return (
    <div className="flex mb-4 space-x-4">
      <select className="px-4 py-2 border border-gray-300 rounded-lg">
        <option value="">Role</option>
        <option value="Admin">Admin</option>
        <option value="Member">Member</option>
      </select>
      <select className="px-4 py-2 border border-gray-300 rounded-lg">
        <option value="">Status</option>
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
      <input
        type="text"
        placeholder="Search by name or email"
        className="px-4 py-2 border border-gray-300 rounded-lg"
      />
    </div>
  );
};

export default UserFilters;
