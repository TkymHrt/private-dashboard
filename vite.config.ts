import { createRequire } from "node:module";
import preact from "@preact/preset-vite";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		preact({
			babel: {
				// Change cwd to load Preact Babel plugins
				cwd: createRequire(import.meta.url).resolve("@preact/preset-vite"),
			},
		}),
	],
});
