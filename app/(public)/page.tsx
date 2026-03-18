import { HomePageContent } from "./home/home-page-content";

export default function HomePage() {
	return (
		<main className="container-shell py-16">
			<HomePageContent />
		</main>
	);
}

// <section className="panel p-10">
//         <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
//           Workflow World × Builder Lab
//         </p>
//         <h1 className="max-w-3xl text-5xl font-semibold tracking-tight">
//           Building systems worth using.
//         </h1>
//         <p className="mt-4 max-w-2xl text-white/70">
//           Starter environment is ready. Next step is wiring the core layout,
//           database, and Systems Built page.
//         </p>
//       </section>
//      //remove this it is for testing loading components
//       <section>
//         <h1 className="max-w-3xl text-5xl font-semibold tracking-tight">example loading</h1>
//         <Loading></Loading>
//       </section>
//       //remove this it is for testing if page not found
//       <section>
//         <h1 className="max-w-3xl text-5xl font-semibold tracking-tight">example link not found</h1>
//         <NotFound></NotFound>
//       </section>
