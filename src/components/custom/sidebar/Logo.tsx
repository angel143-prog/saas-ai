import Image from "next/image";
import { Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const Logo = () => {
  return (
    <>
      <div className="relative w-8 h-8 mr-4">
        <Image fill src={"/assets/png/logo.png"} alt="Logo" />
      </div>
      <h1 className={cn("text-2xl font-bold", montserrat.className)}>Genius</h1>
    </>
  );
};

export default Logo;
