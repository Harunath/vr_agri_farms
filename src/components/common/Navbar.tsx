"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-[#2F855A] text-white px-4 py-3">
			<div className="flex items-center justify-between max-w-7xl mx-auto">
				{/* Logo or Title */}
				<Link href="/" className="text-xl font-bold">
					VR Agri Farms
				</Link>

				{/* Toggle button (hamburger menu) */}
				<button
					className="md:hidden"
					onClick={() => setIsOpen(!isOpen)}
					aria-label="Toggle Menu">
					{isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
				</button>

				{/* Desktop Menu */}
				<div className="hidden md:flex gap-6">
					<NavLinks />
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="mt-4 flex flex-col gap-4 md:hidden px-2">
					<NavLinks />
				</div>
			)}
		</nav>
	);
}

function NavLinks() {
	return (
		<>
			<Link href="/" className="hover:text-[#F6BE00] transition">
				Home
			</Link>
			<Link href="/about" className="hover:text-[#F6BE00] transition">
				About Us
			</Link>
			<Link href="/projects" className="hover:text-[#F6BE00] transition">
				Projects
			</Link>
			<Link href="/blog" className="hover:text-[#F6BE00] transition">
				Blog
			</Link>
			<Link href="/gallery" className="hover:text-[#F6BE00] transition">
				Gallery
			</Link>
			<Link href="/contact" className="hover:text-[#F6BE00] transition">
				Contact
			</Link>
		</>
	);
}
