"use client";

import Icon from "@/components/custom/icon";
import { Card } from "@/components/ui/card";
import { toolsData } from "@/data/data";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 spac-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {toolsData.map((tools) => (
          <Card
            onClick={() => router.push(tools.href)}
            key={tools.href}
            className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tools.bgColor)}>
                <Icon
                  IconName={tools.icon}
                  classname={cn("w-8 h-8", tools.color)}
                />
              </div>
              <div className="font-semibold">{tools.label}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default page;
