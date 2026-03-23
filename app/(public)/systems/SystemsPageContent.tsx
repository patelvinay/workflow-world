"use client";

import { useState } from "react";
import { PagesNavBar } from "../shared/components/PagesNavBar";

import { SystemsHeroSection } from "./components/HeroSection";
import { SystemsFilterBar } from "./components/FilterBar";
import { FeaturedSection } from "./components/FeaturedSystem";

import { AllSystems } from "./components/AllSystems";
import { SystemStats } from "./components/SystemStats";
import { FooterNavigation } from "./components/FooterNavigation";

import { systems } from "./data/Systems";
import { FilterState } from "./types/FilterState";
import { matchesStackFilter } from "./utils/matchesStackFilter";
import { getComplexityScore } from "./utils/getComplexityScore";
import { getImpactScore } from "./utils/getImpactScore";

export default function SystemPageContent() {
	const [activeFilters, setActiveFilters] = useState<FilterState>({
		status: "all",
		stack: "all",
		search: "",
		sort: "recent",
	});

	const filteredSystems = systems
		.filter((system) => {
			if (activeFilters.status !== "all" && system.status !== activeFilters.status) {
				return false;
			}

			if (!matchesStackFilter(system, activeFilters.stack)) {
				return false;
			}

			const search = activeFilters.search.trim().toLowerCase();
			if (!search) {
				return true;
			}

			return [system.title, system.codename, system.objective, ...system.stack]
				.join(" ")
				.toLowerCase()
				.includes(search);
		})
		.sort((a, b) => {
			if (activeFilters.sort === "featured") {
				return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
			}
			if (activeFilters.sort === "impact") {
				return getImpactScore(b) - getImpactScore(a);
			}
			if (activeFilters.sort === "complexity") {
				return getComplexityScore(b) - getComplexityScore(a);
			}
			return b.date.localeCompare(a.date);
		});

	const featuredSystem = filteredSystems.find((system) => system.featured);
	const regularSystems = filteredSystems.filter((system) => !system.featured);

	return (
		<div className="min-h-screen bg-black text-white">
			<div className="fixed inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:80px_80px] opacity-50" />

			<div className="relative">
				<PagesNavBar />
				<SystemsHeroSection />
				<SystemsFilterBar activeFilters={activeFilters} setActiveFilters={setActiveFilters} />
				{featuredSystem && <FeaturedSection featuredSystem={featuredSystem} />}
				<AllSystems regularSystems={regularSystems} />
				<SystemStats />
				<FooterNavigation />
			</div>
		</div>
	);
}
