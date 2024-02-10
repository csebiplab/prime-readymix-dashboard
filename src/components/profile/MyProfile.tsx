"use client";

import { useState } from "react";

const MyProfile = ({ user }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setIsLoading(true);

    const userName = event.target.newUsername.value;
    const password = event.target.currentPassword.value;
    const newPassword = event.target.newPassword.value;
    console.log(userName, password, newPassword);

    setIsLoading(false);
  };

  return (
    <div>
      <div>
        <p className="text-3xl">
          <span className="font-bold">User Name:</span> <span>{user.name}</span>
        </p>
        {!isUpdating && (
          <button
            onClick={() => setIsUpdating(true)}
            className="mt-8 bg-red-800 px-3 py-1"
          >
            Update
          </button>
        )}
      </div>
      <div className="mt-6">
        {isUpdating && (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label>New Username</label>
                <input
                  type="text"
                  placeholder="New username"
                  name="newUsername"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col">
                <label>Current password</label>
                <input
                  type="password"
                  placeholder="********"
                  name="currentPassword"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="flex flex-col">
                <label>New password</label>
                <input
                  type="password"
                  placeholder="********"
                  name="newPassword"
                  required
                  autoComplete="off"
                />
              </div>
            </div>

            <button
              type="submit"
              className={`bg-red-700 text-white mt-6 px-3 py-1`}
              disabled={isLoading ? true : false}
            >
              {isLoading ? "Updating..." : "Update"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
