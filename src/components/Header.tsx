"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    const navLinks = [
        { href: "#services", label: "Services" },
        { href: "#location", label: "Location" },
        { href: "#industry", label: "Industry" },
        { href: "#case-studies", label: "Case Studies" },
        { href: "/blogs", label: "Blogs" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <nav className="fixed top-0 w-full z-50">
            {/* Top bar background that is always visible */}
            <div className="absolute inset-0 bg-surface/40 backdrop-blur-2xl border-b border-white/5 pointer-events-none z-0"></div>

            {/* Top bar content */}
            <div className="relative z-50 flex justify-between items-center max-w-container-max mx-auto px-margin-mobile sm:px-margin-desktop h-20">
                <Link onClick={closeMenu} href={"/"} className="font-display-lg text-headline-md font-bold tracking-tighter text-on-surface">
                    OBSIDIAN
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex space-x-8">
                    {navLinks.map((link) => (
                        <a key={link.href} className="text-on-surface-variant font-body-md hover:text-primary transition-colors duration-300"
                            href={link.href}>{link.label}</a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden md:block">
                        <a className="px-6 py-3 bg-inverse-primary text-white font-label-md rounded-full hover:bg-primary hover:text-inverse-primary transition-all duration-300 shadow-[0_0_15px_rgba(73,75,214,0.3)] hover:shadow-[0_0_25px_rgba(192,193,255,0.4)]"
                            href="#contact" onClick={closeMenu}>
                            Request a Quote
                        </a>
                    </div>

                    <button className="lg:hidden text-on-surface w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors" onClick={toggleMenu} aria-label="Toggle menu">
                        <span className="material-symbols-outlined text-2xl">
                            {isMenuOpen ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Full Screen Menu */}
            <div className={`fixed inset-0 w-full h-dvh bg-mesh-dark overflow-hidden z-40 lg:hidden flex flex-col items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen z-0"></div>
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-inverse-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen z-0"></div>

                <div className="relative z-10 flex flex-col items-center space-y-4 w-full px-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            className="text-on-surface font-display-lg text-xl hover:text-primary transition-colors duration-300"
                            href={link.href}
                            onClick={closeMenu}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        className="mt-4 px-8 py-4 bg-inverse-primary text-white font-label-md rounded-full hover:bg-primary hover:text-inverse-primary transition-all duration-300 md:hidden w-full text-center"
                        href="#contact"
                        onClick={closeMenu}
                    >
                        Request a Quote
                    </a>
                </div>
            </div>
        </nav>
    );
}