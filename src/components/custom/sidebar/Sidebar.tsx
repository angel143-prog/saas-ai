"use client";

import Link from "next/link";
import Logo from "./Logo";

const Sidebar = () => {
  return (
    <div>
      <div className="space-y-4 py-4 flex flex-col h-full bg-sidebarbg text-white">
        <div className="px-3 py-2 flex-1">
          <Link href="/dashboard" className="flex items-center pl-3 mb-14">
            <Logo />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
