"use client";

import CustomerDashboard from "@/components/CustomerDashboard";
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
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  return (
    <div className="py-4 my-4 bg-black justify-center  text-center text-white">
      <div className="flex items-center  justify-between px-8">
        <h2 className="text-xl font-medium text-center  text-white">
          Welcome To Customer Dashbaord
        </h2>

        <div className="flex items-center ">
          <button className="text-xl  text-red-900 py-2 " onClick={logout}>
            Logout
          </button>
        </div>
      </div>

      <CustomerDashboard username={username} email={email} userid={data} />
    </div>
  );
}

export default Profile;
