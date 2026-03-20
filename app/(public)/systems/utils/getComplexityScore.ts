import { SystemEntry } from "../types/SystemEntry";

export function getComplexityScore(system: SystemEntry) {
	return system.stack.length + system.deployment.replicas;
}
