"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "PortFolio" },
  { url: "/contact", title: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed:{
      x:"100vw"
    },  
    opened:{
      x:0,
      transition:{
        when:"beforeChildren",
        staggerChildren:0.2,
      }
    }
  }

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48">
      {/* LOGO */}
      <div className="hidden md:flex gap-4 w-1/3  ">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex w-1/3 justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-2 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-2">Trishit</span>
          <span className="w-18 h-8 rounded bg-white text-black  flex items-center justify-center ">
            Bhowmik
          </span>
        </Link>
      </div>
      {/* SOCIAL */}
      <div className="hidden md:flex gap-4 w-1/3 justify-center">
        <Link href="https://github.com/trishit78">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>

       
        <Link href="https://www.linkedin.com/in/trishit-bhowmik/">
          <Image src="/linkedIn.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://www.instagram.com/trishit_bluetick/">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://twitter.com/trishit_bhowmik">
          <Image src="data:image/png;base64,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" alt="" width={24} height={24} />
        </Link>
      </div>

      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {open && (
          // <div className="absolute top-0 left-0 h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
          <motion.div variants={listVariants} initial="closed" animate="opened" className="fixed top-0 left-0 right-0 bottom-0 bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
            {links.map((e) => (
              <motion.div variants={listItemVariants} className="" key={e.title}>
              <Link href={e.url} >
                {e.title}
              </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
