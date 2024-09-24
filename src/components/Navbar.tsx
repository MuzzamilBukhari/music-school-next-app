"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex justify-center items-start flex-col space-y-3">
            <HoveredLink href="/courses">All courses</HoveredLink>
            <HoveredLink href="/">Basic music theory</HoveredLink>
            <HoveredLink href="/">Advanced composition</HoveredLink>
            <HoveredLink href="/">Song writing</HoveredLink>
            <HoveredLink href="/">Music production</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact us" />
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
