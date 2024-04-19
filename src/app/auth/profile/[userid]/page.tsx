"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function UserProfile({ params }: any) {
  const [data, setData] = useState(null);
  const getUserDetails = async () => {
    const response = await axios.get("/api/users/me");
    console.log(response.data);
    setData(response.data.data);
  };
  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile Page</h1>
      <hr />
      <p className="text-4xl mt-10">
        <span className=" p-2 ml-2 rounded bg-orange-500 text-black">
          Name:{data?.username}
        </span>
      </p>
    </div>
  );
}
