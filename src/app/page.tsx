import AboutSnippet from "@/components/Home/AboutSnippet";
import HeroCarousel from "@/components/Home/HeroCarousel";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import React from "react";

function page() {
	return (
		<>
			<HeroCarousel />
			<AboutSnippet />
			<WhyChooseUs />
		</>
	);
}

export default page;
