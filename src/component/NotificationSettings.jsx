import React, { useState } from "react";

const NotificationSettings = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);

  const handleSave = () => {
    console.log("Notification settings saved");
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="mb-2 text-lg font-semibold">Notification Settings</h2>
      <label className="flex items-center mb-4 space-x-2">
        <input
          type="checkbox"
          checked={emailNotifications}
          onChange={() => setEmailNotifications(!emailNotifications)}
          className="form-checkbox"
        />
        <span>Email Notifications</span>
      </label>
      <label className="flex items-center mb-4 space-x-2">
        <input
          type="checkbox"
          checked={smsNotifications}
          onChange={() => setSmsNotifications(!smsNotifications)}
          className="form-checkbox"
        />
        <span>SMS Notifications</span>
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

export default NotificationSettings;
