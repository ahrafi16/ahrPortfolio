"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();


    const navItems = [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Academics", link: "/academics" },
        { name: "Projects", link: "/projects" },
        { name: "Resume", link: "/resume" },
        { name: "Contact", link: "/contact" },
    ];

    return (
        <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto">
            <div className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-full shadow-2xl px-8 py-4 flex items-center gap-8">
                <Link href="/" className="text-xl font-bold text-white tracking-wide whitespace-nowrap">
                    &lt; <span className="text-prim">Anjum</span> /&gt;
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item, index) => {
                        const isActive = pathname === item.link;
                        return (
                            <Link
                                key={index}
                                href={item.link}
                                className={`transition duration-200 font-medium text-sm whitespace-nowrap px-4 py-2 rounded-full hover:bg-white/10 ${isActive ? "bg-white/10" : "text-white/70 hover:text-white hover:bg-white/10"}`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white hover:text-blue-400 transition p-2 hover:bg-white/10 rounded-full"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black z-40"
                        />
                        <motion.nav
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 70, damping: 15 }}
                            className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-gray-900/95 backdrop-blur-xl border-l border-white/10 z-50 p-8 flex flex-col items-start space-y-6 rounded-l-3xl"
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="self-end text-white hover:text-blue-400 transition"
                            >
                                <X size={28} />
                            </button>

                            {navItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.link}
                                    onClick={() => setIsOpen(false)}
                                    className="text-white/80 text-lg font-medium hover:text-blue-400 transition duration-200"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;