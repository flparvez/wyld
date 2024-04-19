"use client";
import React, { use, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import { cn } from "@/utils/cn";

import Link from "next/link";

function RegisterPage() {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    username: "",
    number: "",
    password: "",
  });

  const [buttonDisable, setButtonDisable] = useState(false);
  const [loading, setLoading] = useState(false);

  const onRegister = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/register", user);
      console.log(response.data);
      toast.success("Registration Successfully");
      router.push("/auth/login");
    } catch (error: any) {
      console.log("register failed");
      toast.error(error.message);
    }
  };
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
    } else {
      setButtonDisable(true);
    }
  }, [user]);

  return (
    <div className="text-white bg-black flex flex-col items-center justify-center  min-h-screen py-2">
      <h1>{loading ? "processing" : "Register"}</h1>
      <h2 className="text-center text-white">Account Create</h2>

      <LabelInputContainer className="mb-4">
        <Label htmlFor="name">Username</Label>
        <Input
          id="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="Enter Your Name"
          type="text"
        />
      </LabelInputContainer>

      <LabelInputContainer className="mb-4">
        <Label htmlFor="">Email</Label>
        <Input
          value={user.email}
          id="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="projectmayhem@fc.com"
          type="email"
        />
      </LabelInputContainer>

      <LabelInputContainer className="mb-4">
        <Label htmlFor="number">Number</Label>
        <Input
          value={user.number}
          id="number"
          onChange={(e) => setUser({ ...user, number: e.target.value })}
          placeholder="Enter Your Number"
          type="number"
        />
      </LabelInputContainer>

      <LabelInputContainer className="mb-4">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="••••••••"
          type="password"
        />
      </LabelInputContainer>

      <button
        onClick={onRegister}
        className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900  block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        type="submit"
      >
        Register
      </button>
      <h2>
        <Link href={"/auth/login"}>Login Here</Link>
      </h2>
    </div>
  );
}

export default RegisterPage;

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
