import * as compression from "compression";
import * as express from "express";
import * as helmet from "helmet";
import { CORS, PORT, HOST, STATIC_DIR } from "./settings";
import { WEEK, YEAR } from "./time";

/**
 * Express App
 */
const app: express.Express = express();

const setHeaders = (response: express.Response) => {
	// Add CORS headers
	response.set("Content-Security-Policy", CORS);
	response.set("X-Content-Security-Policy", CORS);
		
	// Cache
	response.set("Expires", new Date(Date.now() + WEEK).toUTCString());
	response.set("Cache-Control", `max-age=${YEAR}, private`);
	response.set("Pragma", "public");

	// Bettter caching
	response.set("Vary", "Accept-Encoding");
};
	
// Use Helmet for general protection
app.use(helmet());
	
// Compress data in the highest level
app.use(compression({ level: 9 }));
	
// Add CORS headers
app.set("Content-Security-Policy", CORS);
app.set("X-Content-Security-Policy", CORS);
	
// Cache
app.set("Expires", new Date(Date.now() + WEEK).toUTCString());
app.set("Cache-Control", `max-age=${YEAR}, private`);
app.set("Pragma", "public");
	
// Bettter caching
app.set("Vary", "Accept-Encoding");
	
// Load everything from static folder
app.use(express.static(STATIC_DIR, { setHeaders }));
app.get("*", (request, response) => {
	response.sendFile(`${STATIC_DIR}/index.html`, { root: ".", setHeaders });
});

// Start server on configured port
app.listen(PORT, HOST, () => console.log(`Listening to port ${HOST}:${PORT} (${STATIC_DIR})`));
