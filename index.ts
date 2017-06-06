import * as compression from "compression";
import * as express from "express";
import * as helmet from "helmet";
import { cors, port, host, staticDir } from "./settings";

const minute = 60;
const hour = 60 * minute;
const day = 24 * hour;
const week = 7 * day;
const year = 365 * day;

/**
 * Express App
 */
const app: express.Express = express();

const setHeaders = (response: express.Response) => {
	// Add CORS headers
	response.set("Content-Security-Policy", cors);
	response.set("X-Content-Security-Policy", cors);
		
	// Cache
	response.set("Expires", new Date(Date.now() + week).toUTCString());
	response.set("Cache-Control", `max-age=${year}, private`);
	response.set("Pragma", "public");

	// Bettter caching
	response.set("Vary", "Accept-Encoding");
};

// Disable X-Powered-By to don't allow users know what is the server made of
app.disable("x-powered-by");
	
// Use Helmet for general protection
app.use(helmet());
	
// Compress data in the highest level
app.use(compression({ level: 9 }));
	
// Add CORS headers
app.set("Content-Security-Policy", cors);
app.set("X-Content-Security-Policy", cors);
	
// Cache
app.set("Expires", new Date(Date.now() + week).toUTCString());
app.set("Cache-Control", `max-age=${year}, private`);
app.set("Pragma", "public");
	
// Bettter caching
app.set("Vary", "Accept-Encoding");
	
// Load everything from static folder
app.use(express.static(staticDir, { setHeaders }));
app.get("*", (request, response) => {
	response.sendFile(`${staticDir}/index.html`, { root: ".", setHeaders });
});

// Start server on configured port
app.listen(port, host, () => {
	console.log(`Listening to port ${host}:${port} (${staticDir})`);
});
