import { cn } from "@/lib/utils";
import Icon from "@/components/custom/icon";

const SidebarLinkTextWithIcon = ({ sideBar }: any) => {
  return (
    <div className="flex items-center flex-1">
      <Icon
        IconName={sideBar.icon}
        classname={cn("h-5 w-5 mr-3", sideBar.color)}
      />
      {sideBar.label}
    </div>
  );
};

export default SidebarLinkTextWithIcon;
