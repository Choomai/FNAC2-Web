// import adapter from "@sveltejs/adapter-auto";
import IISAdapter from "sveltekit-adapter-iis";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter: adapter()

		adapter: IISAdapter({
			iisNodeOptions: {
				loggingEnabled: false
			},
			nodeProcessCommandLine: "C:\\Program Files\\nodejs\\node.exe"
		})
	}
};

export default config;