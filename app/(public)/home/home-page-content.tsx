"use client";

import Image from "next/image";
import Link from "next/link";

import {
	ArrowRight,
	Clock,
	Code2,
	Database,
	ExternalLink,
	FileText,
	Github,
	Hash,
	Layers,
	Lock,
	Radio,
	Send,
	Server,
	Users,
	Zap,
} from "lucide-react";
import { NavBar } from "../shared/components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { TerminalSection } from "./components/TerminalSection";
import { SystemsSection } from "./components/SyatemsSection";
import { FeaturedProjectsSection } from "./components/FeaturedProjectSection";
import { LogsSection } from "./components/LogsSection";
import { DispatchSection } from "./components/DispatchSection";
import { FooterSection } from "../shared/components/FooterSection";

const monoStyle = {
	fontFamily:
		"var(--font-geist-mono, ui-monospace), SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
};

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
