"use client";

import {
  Link,
  Navbar,
  NavbarBrand,
} from "@nextui-org/react";
import { HeyGenLogo } from "./Icons";
import { ThemeSwitch } from "./ThemeSwitch";

export default function NavBar() {
  return (
    <Navbar className="w-full">
      <NavbarBrand className="flex justify-center w-full">
        <Link isExternal aria-label="HeyGen" href="https://www.emaarsquaremall.com/tr/">
          <HeyGenLogo />
        </Link>
        <div className="bg-gradient-to-br from-sky-300 to-indigo-500 bg-clip-text ml-4">
          <p className="text-xl font-semibold text-transparent">
            EMAAR Interactive Avatar 
          </p>
        </div>
      </NavbarBrand>
    </Navbar>
  );
}
