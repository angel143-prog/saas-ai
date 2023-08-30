import { sidebarData } from "@/data/data";
import Link from "next/link";
import SidebarLinkTextWithIcon from "@/components/custom/sidebar/SidebarLinkTextWithIcon";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const SidebarLinks = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-1">
      {sidebarData.map((sidebar) => (
        <Link
          href={sidebar.href}
          key={sidebar.href}
          className={cn(
            "text-md group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
            pathname === sidebar.href
              ? "text-white bg-white/10"
              : "text-zinc-400 "
          )}
        >
          <SidebarLinkTextWithIcon sideBar={sidebar} />
        </Link>
      ))}
    </div>
  );
};

export default SidebarLinks;
