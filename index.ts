import * as compression from "compression";
import * as express from "express";
import * as helmet from "helmet";

/**
 * Express App
 */
const app: express.Express = express();
/**
 * CORS settings
 */
const cors: string = [
	"default-src 'self'",
	"child-src 'self'",
	"connect-src 'self'",
	"font-src 'self'",
	"img-src 'self'",
	"media-src 'self'",
	"object-src 'self'",
	"script-src 'self'",
	"style-src 'self'"
].join("; ");
/**
 * Server port
 */
const port: number = 3000;

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
	.set("Vary", "Accept-Encoding");
	
// Start server on configured port
require("http").createServer(app).listen(port);