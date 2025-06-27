"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();
	const [scrolled, setScrolled] = useState(false);

	const navLinks = [
		{ name: "Home", href: "/" },
		{ name: "About Us", href: "/about" },
		{ name: "Projects", href: "/projects" },
		{ name: "Blog", href: "/blog" },
		{ name: "Gallery", href: "/gallery" },
		{ name: "Contact", href: "/contact" },
	];

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${
				scrolled ? "backdrop-blur-md shadow-md" : "bg-transparent"
			}`}>
			<div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between text-white">
				{/* Logo */}
				<Link href="/" className="text-xl font-bold text-white">
					VR Agri Farms
				</Link>

				{/* Mobile Toggle Button */}
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="md:hidden"
					aria-label="Toggle Menu">
					{isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
				</button>

				{/* Desktop Menu */}
				<div className="hidden md:flex gap-6 font-medium text-base">
					{" "}
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className={`transition ${
								pathname === link.href
									? "text-orange-500"
									: "hover:text-orange-400 text-white"
							}`}>
							{link.name}
						</Link>
					))}
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="bg-white text-black px-4 pb-4 pt-2 flex flex-col gap-4 md:hidden text-base">
					{" "}
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							onClick={() => setIsOpen(false)}
							className={`transition font-medium ${
								pathname === link.href
									? "text-orange-500"
									: "hover:text-orange-500"
							}`}>
							{link.name}
						</Link>
					))}
				</div>
			)}
		</nav>
	);
}
