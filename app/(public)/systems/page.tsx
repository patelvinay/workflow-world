"use client";
import { HomeNav } from "@/app/components/layout/home-page-content";

import { usePathname } from "next/navigation";

export default function SystemPage() {
	const pathName = usePathname();
	const page = pathName.slice(1);
	return (
		<div>
			<HomeNav currentPage={page} />
		</div>
	);
}
