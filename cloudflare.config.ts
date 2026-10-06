import { bindings, defineConfig } from "cf/config";

export default defineConfig({
	accountId: "4b430e167a301330d13a9bb42f3986a2", // jonnyparris
	worker: {
		name: "cloudflare-mcp",
		compatibilityDate: "2026-01-12",
		compatibilityFlags: [
			"nodejs_compat",
		],
		entrypoint: "src/index.ts",
		observability: {
			logs: {
				enabled: true,
			},
			traces: {
				enabled: true,
			},
		},
		env: {
			CLOUDFLARE_API_BASE: bindings.text("https://api.cloudflare.com/client/v4"),
			LOADER: bindings.workerLoader(),
		},
	},
});
