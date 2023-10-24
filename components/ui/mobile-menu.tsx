"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";
import { Category } from "@/type";

export default function MobileMenu({ categories }: { categories: Category[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <div className="flex flex-col w-full justify-center py-8">
      <div className="flex justify-center text-center w-full h-full">
        <button
          onClick={toggleMenu}
          className="flex md:hidden"
          aria-label="toggle-menu-nav"
          type="button"
        >
          <AiOutlineMenu />
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen
          ? categories.map((categories: Category) => (
              <motion.ul
                key={categories.id}
                className="flex flex-col w-full md:hidden text-center"
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
              >
                <motion.li
                  key={categories.id}
                  className="flex w-full justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                >
                  <Link
                    key={categories.id}
                    href={`/category/${categories.id}`}
                    className="w-[150px] py-4 border-b border-zinc-300 dark:border-zinc-800 font-inter"
                  >
                    {categories.name}
                  </Link>
                </motion.li>
              </motion.ul>
            ))
          : null}
        <div className="flex w-full justify-center text-center">
          <Link
            href={`/about`}
            className={`${
              !isMenuOpen && "hidden"
            } w-[150px] py-4 border-b border-zinc-300 dark:border-zinc-800 font-inter`}
          >
            Quienes Somos
          </Link>
        </div>
      </AnimatePresence>
    </div>
  );
}
