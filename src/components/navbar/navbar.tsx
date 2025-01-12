"use client";

import logo from "@/assets/asana_spot_logo.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { NavigationList } from "../data/navigationList";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  const pathname = usePathname();

  useEffect(() => {
    const navBackground = function () {
      let userScroll = window.scrollY;
      let introSection = document.getElementById("intro")?.offsetHeight;
      const navbar = document.getElementById("navbar");

      if (introSection && navbar && userScroll >= introSection) {
        navbar.style.backgroundColor = "hsl(var(--darkGreen))";
      } else if (navbar) {
        navbar.style.backgroundColor = "";
      }
    };

    window.addEventListener("scroll", navBackground);
  }, []);

  return (
    <div
      className={cn(
        `z-50 top-0 p-5 flex justify-between w-full items-center transition-all duration-300 border-b-2 border-lightBeige ${
          !pathname.includes("homepage") && "bg-darkGreen"
        }`,
        className
      )}
      id="navbar"
    >
      <div className="max-w-[150px]">
        <Image src={logo} alt="asana spot logo" />
      </div>
      <div className="flex gap-6">
        {NavigationList.map((n) => (
          <Link
            href={n.url}
            key={n.id}
            className={`text-white hover:underline ${
              pathname.includes(n.url) ? "font-bold" : "font-light"
            }`}
          >
            {n.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
