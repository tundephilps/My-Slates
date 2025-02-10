import React, { useState } from "react";

const NotificationSettings = () => {
  const [notifications, setNotifications] = useState({
    updates: true,
    reminders: true,
    requests: false,
  });

  const toggleNotification = (type) => {
    setNotifications((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  return (
    <div className="bg-white p-6 pb-12 lg:px-32">
      <h3 className="text-lg font-semibold">Notification Preferences</h3>
      <p className="text-gray-500 text-sm mb-4">
        Choose what notifications you want to receive.
      </p>

      {/* Notification Items */}
      <div className="space-y-4">
        {/* Updates */}
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium">Updates</p>
            <p className="text-sm text-gray-500">
              Stay informed about the latest updates, and announcements.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={notifications.updates}
              onChange={() => toggleNotification("updates")}
            />
            <div className="w-10 h-5 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer-checked:bg-[#047aa5] peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
          </label>
        </div>

        {/* Reminders and Classes */}
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium">Reminders and Classes</p>
            <p className="text-sm text-gray-500">
              Get reminders for upcoming classes, deadlines, and appointments.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={notifications.reminders}
              onChange={() => toggleNotification("reminders")}
            />
            <div className="w-10 h-5 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer-checked:bg-[#047aa5] peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
          </label>
        </div>

        {/* Requests and Offers */}
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium">Requests and Offers</p>
            <p className="text-sm text-gray-500">
              Receive notifications about special requests, and exclusive
              offers.
            </p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={notifications.requests}
              onChange={() => toggleNotification("requests")}
            />
            <div className="w-10 h-5 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer-checked:bg-[#047aa5] peer-checked:after:translate-x-5 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-all"></div>
          </label>
        </div>
      </div>

      {/* Information Message */}
      <div className="mt-4 bg-[#e3f4fa] text-black text-sm px-4 py-2 rounded-md">
        <span className="font-medium">ℹ️ Maximize your app usage</span> by
        leaving notification settings active.
      </div>
    </div>
  );
};

export default NotificationSettings;
