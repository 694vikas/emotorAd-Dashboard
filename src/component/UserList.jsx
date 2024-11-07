import React from "react";

const UserList = ({ users }) => {
  return (
    <div className="mb-6 overflow-auto rounded-lg shadow-md">
      <table className="w-full bg-white">
        <thead className="bg-gray-200 border-b">
          <tr>
            <th className="p-4 font-semibold text-left">Name</th>
            <th className="p-4 font-semibold text-left">Email</th>
            <th className="p-4 font-semibold text-left">Role</th>
            <th className="p-4 font-semibold text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-100">
              <td className="p-4">{user.name}</td>
              <td className="p-4">{user.email}</td>
              <td className="p-4">{user.role}</td>
              <td className="p-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {user.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
