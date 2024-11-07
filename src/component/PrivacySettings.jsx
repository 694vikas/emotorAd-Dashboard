import React, { useState } from "react";

const PrivacySettings = () => {
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  const handleSave = () => {
    console.log("Privacy settings saved");
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-2 text-lg font-semibold">Privacy & Security</h2>
      <label className="flex items-center mb-4 space-x-2">
        <input
          type="checkbox"
          checked={twoFactorAuth}
          onChange={() => setTwoFactorAuth(!twoFactorAuth)}
          className="form-checkbox"
        />
        <span>Enable Two-Factor Authentication</span>
      </label>
      <button
        onClick={handleSave}
        className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg"
      >
        Save Changes
      </button>
    </div>
  );
};

export default PrivacySettings;
