import { SystemEntry } from "../types/SystemEntry";

export function getImpactScore(system: SystemEntry) {
	if (system.featured) {
		return 100;
	}
	if (system.status === "production") {
		return 80;
	}
	if (system.status === "active") {
		return 60;
	}
	if (system.status === "staging") {
		return 40;
	}
	return 20;
}
