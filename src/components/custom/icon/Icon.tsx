import { LucideIcon } from "lucide-react";

const Icon = ({ IconName, ...props }: { IconName: LucideIcon }) => {
  return (
    <>
      <IconName {...props} />
    </>
  );
};

export default Icon;
