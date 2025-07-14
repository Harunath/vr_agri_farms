import AboutSnippet from "@/components/Home/AboutSnippet";
import HeroCarousel from "@/components/Home/HeroCarousel";
import OwnAndGrow from "@/components/Home/OwnAndGrow";
import Sustainability from "@/components/Home/Sustainability";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Difference from "@/components/Home/Difference";
import React from "react";
import ProjectDevelopments from "@/components/Home/ProjectDevelopments";
import Gallery from "@/components/Home/Gallery";
import Highlights from "@/components/Home/Highlights";
function page() {
	return (
		<>
			<HeroCarousel />
			<AboutSnippet />
			<WhyChooseUs />
			<Sustainability />
			<Difference />
			<Highlights />
			<Gallery />

			<OwnAndGrow />
			<ProjectDevelopments />
		</>
	);
}

export default page;
