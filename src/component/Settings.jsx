import React from "react";
import AccountSettings from "./AccountSettings";
import NotificationSettings from "./NotificationSettings";
import PrivacySettings from "./PrivacySettings";
import ThemeSettings from "./ThemeSettings";

const Settings = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Settings</h1>
      <AccountSettings />
      <NotificationSettings />
      <PrivacySettings />
      <ThemeSettings />
    </div>
  );
};

export default Settings;
