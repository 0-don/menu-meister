"use client";

import { MInput } from "@/components/elements/MInput";
import { BiLogIn } from "@react-icons/all-files/bi/BiLogIn";
import { CgPassword } from "@react-icons/all-files/cg/CgPassword";
import { useState } from "react";

interface LoginPageProps {}

export default function LoginPage({}: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <form>
        <MInput value={email} onChange={setEmail} Icon={BiLogIn} />
        <MInput value={password} onChange={setPassword} Icon={CgPassword} />
      </form>
    </>
  );
}
