"use client";

import { NavBar } from "../shared/components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { TerminalSection } from "./components/TerminalSection";
import { SystemsSection } from "./components/SystemsSection";
import { FeaturedProjectsSection } from "./components/FeaturedProjectSection";
import { LogsSection } from "./components/LogsSection";
import { DispatchSection } from "./components/DispatchSection";
import { FooterSection } from "../shared/components/FooterSection";

export function HomePageContent() {
	return (
		<div className="min-h-screen bg-black text-white">
			<NavBar />
			<main className="pt-16">
				<HeroSection />
				<TerminalSection />
				<SystemsSection />
				<FeaturedProjectsSection />
				<LogsSection />
				<DispatchSection />
			</main>
			<FooterSection />
		</div>
	);
}
