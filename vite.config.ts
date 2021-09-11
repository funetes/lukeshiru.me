import preact from "@preact/preset-vite";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
	plugins: [
		VitePWA({
			manifest: {
				// eslint-disable-next-line @typescript-eslint/naming-convention
				background_color: "#000",
				description:
					"Quick access to some of Lucas Ciruzzi online profiles",
				display: "standalone",
				icons: [
					{
						sizes: "512x512",
						src: "/assets/images/manifest/512.png",
						type: "image/png"
					},
					{
						purpose: "maskable",
						sizes: "512x512",
						src: "/assets/images/manifest/512.maskable.png",
						type: "image/png"
					}
				],
				name: "LUKESHIRU",
				orientation: "any",
				// eslint-disable-next-line @typescript-eslint/naming-convention
				short_name: "LUKESHIRU",
				// eslint-disable-next-line @typescript-eslint/naming-convention
				start_url: "/",
				// eslint-disable-next-line @typescript-eslint/naming-convention
				theme_color: "#000"
			},
			registerType: "autoUpdate",
			workbox: {
				globPatterns: [
					"**/*.{css,js,ico,png,svg,jpg,jpeg,html,json,ts}"
				]
			}
		}),
		preact()
	]
});
