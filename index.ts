import * as compression from "compression";
import * as express from "express";
import * as helmet from "helmet";
import { cors, port, host } from "./settings";

/**
 * Express App
 */
const app: express.Express = express();

app
	// Disable X-Powered-By to don't allow users know what is the server made of
	.disable("x-powered-by")
	
	// Use Helmet for general protection
	.use(helmet())
	
	// Compress data in the highest level
	.use(compression({ level: 9 }))
	
	// Load everything from static folder
	.use(express.static("static"))
	.get("*", (request, response) => {
		response.sendFile("static/index.html", { root: "." });
	})
	
	// Add CORS headers
	.set("Content-Security-Policy", cors)
	.set("X-Content-Security-Policy", cors)
	
	// HTTP/1.1 Cache
	.set("Cache-Control", "max-age=31536000, private")
	
	// HTTP/1.0 Cache
	.set("Pragma", "public")
	
	// Bettter caching
	.set("Vary", "Accept-Encoding")

	// Start server on configured port
	.listen(port, host, () => {
		console.log(`Listening to port ${host}:${port}`);
	});
