// components/Dashboard.js

import React from "react";

const Dashboard = () => {
  return (
    <div className="flex w-full">
      <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
        <div className="w-1/4 bg-gray-200 p-4">
          <h2 className="text-lg font-bold">Menu</h2>
          <ul>
            <li>
              <a href="#" className="block p-2 hover:bg-gray-300">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 hover:bg-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 hover:bg-gray-300">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
        <div className="w-3/4 p-8">
          <h1 className="text-4xl font-bold">Welcome</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
