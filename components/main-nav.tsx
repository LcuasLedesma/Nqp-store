"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/type";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <div>
      <nav className="mx-6 flex items-center space-x-4 lg:space-x-6"></nav>
    </div>
  );
};

export default MainNav;
