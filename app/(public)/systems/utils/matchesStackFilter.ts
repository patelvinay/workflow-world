import { FilterState } from "../types/FilterState";
import { SystemEntry } from "../types/SystemEntry";

export function matchesStackFilter(system: SystemEntry, stackFilter: FilterState["stack"]) {
	if (stackFilter === "all") {
		return true;
	}

	const normalizedStack = system.stack.map((item) => item.toLowerCase());

	if (stackFilter === "react") {
		return normalizedStack.some((item) => item.includes("react"));
	}

	if (stackFilter === "nextjs") {
		return normalizedStack.some((item) => item.includes("next.js"));
	}

	if (stackFilter === "typescript") {
		return normalizedStack.some((item) => item.includes("typescript"));
	}

	if (stackFilter === "python") {
		return normalizedStack.some((item) => item.includes("python"));
	}

	if (stackFilter === "go") {
		return normalizedStack.some((item) => item === "go");
	}

	return normalizedStack.some(
		(item) => item.includes("tensorflow") || item.includes("ai") || item.includes("ml"),
	);
}
