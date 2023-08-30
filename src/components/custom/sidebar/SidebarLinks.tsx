import { sidebarData } from "@/data/data";
import Link from "next/link";
import SidebarLinkTextWithIcon from "@/components/custom/sidebar/SidebarLinkTextWithIcon";

const SidebarLinks = () => {
  return (
    <div className="space-y-1">
      {sidebarData.map((sidebar) => (
        <Link
          href={sidebar.href}
          key={sidebar.href}
          className="text-md group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
        >
          <SidebarLinkTextWithIcon sideBar={sidebar} />
        </Link>
      ))}
    </div>
  );
};

export default SidebarLinks;
