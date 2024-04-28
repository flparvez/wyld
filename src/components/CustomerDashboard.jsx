import React from "react";

function CustomerDashboard({ username, email }) {
  let score = 34;
  return (
    <div className="flex flex-col  bg-black p-4 rounded shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-white">{username}</span>
        </div>

        <div className="flex items-center space-x-2">
          {score !== undefined && ( // Conditionally render score only if defined
            <>
              <p className="text-sm text-white">Score:</p>
              <span className="text-sm font-medium text-white">{score}</span>
            </>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <p className="text-sm text-white">Email:</p>
          <span className="text-sm font-medium text-white">{email}</span>
        </div>
      </div>

      {/* Add additional dashboard content here */}
    </div>
  );
}

export default CustomerDashboard;
