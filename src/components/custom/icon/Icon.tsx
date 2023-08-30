import { LucideIcon } from "lucide-react";

interface IconProps {
  IconName: LucideIcon;
  classname: string;
}

const Icon = ({ IconName, classname }: IconProps) => {
  return (
    <>
      <IconName className={classname} />
    </>
  );
};

export default Icon;
