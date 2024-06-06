// import adapter from "@sveltejs/adapter-static";
import adapter from "sveltekit-adapter-iis";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		// adapter: adapter({
		// 	paths: {
		// 		base: process.argv.includes("dev") ? "" : process.env.BASE_PATH
		// 	}
		// })
		adapter: adapter({
			iisNodeOptions: {
				loggingEnabled: false
			},
			origin: "fnac2.choomai.lol",
			nodeProcessCommandLine: "C:\\Program Files\\nodejs\\node.exe"
		})
	}
};

export default config;