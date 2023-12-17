"use client";

import { MInput } from "@/components/elements/MInput";
import { Button } from "@nextui-org/button";
import { BiLogIn } from "@react-icons/all-files/bi/BiLogIn";
import { CgPassword } from "@react-icons/all-files/cg/CgPassword";
import { useState } from "react";

interface RegisterPageProps {}

export default function RegisterPage({}: RegisterPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="flex flex-col space-y-5">
      <h1 className="text-3xl font-bold">Register</h1>
      <MInput
        label="Email"
        placeholder="please enter your email"
        value={email}
        onChange={setEmail}
        Icon={BiLogIn}
      />
      <MInput
        label="Password"
        placeholder="please enter your password"
        value={password}
        onChange={setPassword}
        Icon={CgPassword}
      />
      <Button color="warning">Register</Button>
    </form>
  );
}
