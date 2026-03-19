export type SystemEntry = {
	id: string;
	codename: string;
	title: string;
	status: "production" | "staging" | "active" | "planned";
	objective: string;
	image: string;
	stack: string[];
	deployment: {
		version: string;
		replicas: number;
		env: "production" | "staging" | "development";
	};
	date: string;
	featured?: boolean;
	outcome?: string;
};
