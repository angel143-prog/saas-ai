import { sidebarData } from "@/data/data";
import Link from "next/link";
import Icon from "../icon";
import { cn } from "@/lib/utils";

const SidebarLinks = () => {
  return (
    <div className="space-y-1">
      {sidebarData.map((sidebar) => {
        return (
          <Link
            href={sidebar.href}
            key={sidebar.href}
            className="text-md group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition"
          >
            <div className="flex items-center flex-1">
              <div className={cn("h-5 w-5 mr-3", sidebar.color)}>
                <Icon IconName={sidebar.icon} />
              </div>
              {sidebar.label}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SidebarLinks;
