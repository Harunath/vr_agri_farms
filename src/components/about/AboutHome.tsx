import React from "react";
import AboutContent from "./AboutContent";
import AboutBanner from "./AboutBanner";
import WhoWeAre from "./WhoWeAre";

import Mission from "./Mission";
import Vision from "./Vision";
function AboutHome() {
	return (
		<>
			<AboutBanner />
			<WhoWeAre />
			<AboutContent />
			<Mission />
			<Vision />
		</>
	);
}

export default AboutHome;
