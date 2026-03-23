import { LogCardEntry } from "../data/LogCardEntry";

export type LogEntry = LogCardEntry & {
	id: string;
	featured?: boolean;
	status: "published";
};
