export const envDistribution = [
	{
		env: "Production",
		count: 32,
		percentage: 68,
		dotClass: "bg-green-400",
		barClass: "bg-green-400/50",
	},
	{
		env: "Staging",
		count: 8,
		percentage: 17,
		dotClass: "bg-yellow-400",
		barClass: "bg-yellow-400/50",
	},
	{
		env: "Development",
		count: 5,
		percentage: 11,
		dotClass: "bg-cyan-400",
		barClass: "bg-cyan-400/50",
	},
	{
		env: "Planned",
		count: 2,
		percentage: 4,
		dotClass: "bg-gray-400",
		barClass: "bg-gray-400/50",
	},
] as const;
