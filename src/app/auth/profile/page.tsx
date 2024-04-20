"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function Profile() {
  const router = useRouter();
  const [data, setData] = useState("nothing");
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [number, setNumber] = useState(null);

  console.log(data);
  const getUserDetails = async () => {
    const response = await axios.get("/api/users/me");
    // console.log(response.data);
    setData(response.data.data._id);
    setUsername(response.data.data.username);
    setEmail(response.data.data.email);
    setNumber(response.data.data.number);
  };
  useEffect(() => {
    getUserDetails();
  }, []);
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

      <h2 className="p-1 rounded bg-green-500">
        {data === "nothing" ? (
          "Loading....."
        ) : (
          <Link href={`/auth/profile/${data}`}>{data}</Link>
        )}
      </h2>
      <h1>Name: {username}</h1>
      <h1>Email {email}</h1>
      <h1>Number {number}</h1>
      <hr />

      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Profile;
