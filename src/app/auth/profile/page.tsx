"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import toast from "react-hot-toast";

function Profile() {
  const router = useRouter();
  const [data, setData] = useState("nothing");

  const getUserDetails = async () => {
    const response = await axios.get("/api/users/me");
    console.log(response.data);
    setData(response.data.data._id);
  };

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout");
      router.push("/");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  return (
    <div>
      <h2>Profile Page</h2>
      <h2>
        {data === "nothing" ? (
          "Nothing"
        ) : (
          <Link href={`/profile/${data}`}>{data} </Link>
        )}
      </h2>
      <hr />

      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Profile;
