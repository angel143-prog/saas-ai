import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useUser } from "@clerk/nextjs";
import React from "react";

const UserAvatar = () => {
  const { user } = useUser();
  return (
    <div className="">
      <Avatar className="h-8 w-8">
        <AvatarImage src={user?.profileImageUrl} />
        <AvatarFallback>
          {user?.firstName?.charAt(0)}
          {user?.lastName?.charAt(0)}
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default UserAvatar;
