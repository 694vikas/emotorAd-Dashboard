import React, { useState } from "react";

const AccountSettings = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSave = () => {
    console.log("Account settings saved");
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-2 text-lg font-semibold">Account Settings</h2>
      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg"
      />
      <button
        onClick={handleSave}
        className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg"
      >
        Save Changes
      </button>
    </div>
  );
};

export default AccountSettings;
