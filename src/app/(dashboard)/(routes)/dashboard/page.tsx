import { UserButton } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div>
      <p>Dashboard</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default page;
