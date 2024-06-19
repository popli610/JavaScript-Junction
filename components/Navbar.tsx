import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-navBg backdrop-blur bg-opacity-70 text-white py-4 px-8 transition-all duration-350 ease-in-out hover:bg-gray-900 hover:bg-opacity-70 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold">
          <Link href="/">
            <Button>MyLogo</Button>
          </Link>
        </div>
        <div className="space-x-6">
          <Button className="text-white" variant="link">
            Projects
          </Button>
          <Button className="text-white" variant="link">
            About
          </Button>
          <Button className="text-white" variant="link">
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
