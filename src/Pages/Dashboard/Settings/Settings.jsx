import React, { useState } from "react";
import { FaCamera, FaCheckCircle } from "react-icons/fa";
import Header from "../../../components/Layout/Header";
import PasswordSettings from "../../../components/Settings/PasswordSettings";
import NotificationSettings from "../../../components/Settings/NotificationSettings";
import ProfileSettings from "../../../components/Settings/ProfileSettings";

const Settings = () => {
  const [profileImage, setProfileImage] = useState("/assets/avatar.png");
  const [phone, setPhone] = useState("09034562134");
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Profile Settings" },
    { id: "password", label: "Password Settings" },
    { id: "notification", label: "Notification Settings" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileSettings />;
      case "password":
        return <PasswordSettings />;
      case "notification":
        return <NotificationSettings />;
      default:
        return <ProfileSettings />;
    }
  };

  return (
    <div>
      <Header />
      <div className="py-12 px-6">
        <div className="px-12">
          <p className="font-bold text-2xl">Settings</p>
          <p className="text-sm text-gray-600 pb-6">
            Take a look at your policies and the new policy to see what is
            covered
          </p>
        </div>

        <div className="mx-auto bg-white  border rounded-lg px-8">
          {/* Tabs */}
          <div className="flex border mt-4 rounded-lg w-[386px] text-xs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 -mb-px ${
                  activeTab === tab.id
                    ? "bg-gray-300  text-gray-600 font-medium"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Settings;
