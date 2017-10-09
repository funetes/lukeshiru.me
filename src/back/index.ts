import * as Koa from "koa";
import * as compress from "koa-compress";
import * as graphql from "koa-graphql";
import * as helmet from "koa-helmet";
import * as mount from "koa-mount";
import * as sendFile from "koa-sendfile";
import * as staticFile from "koa-static";
import { resolve } from "path";
import { schema } from "./graph";
import {
	CORS,
	FRONT_DIR,
	HOST,
	PORT,
	SHORTLINK,
	STATIC_DIR
} from "./settings";
import { WEEK, YEAR } from "./time";

/**
 * Koa App
 */
const app = new Koa();

// Use Helmet for general protection
app.use(helmet());

// Compress data in the highest level
app.use(compress({ level: 9 }));

app.use(async (context, next) => {
	// Add CORS headers
	context.set("Content-Security-Policy", CORS);
	context.set("X-Content-Security-Policy", CORS);

	// Cache
	context.set("Expires", new Date(Date.now() + WEEK).toUTCString());
	context.set("Cache-Control", `max-age=${YEAR}, private`);
	context.set("Pragma", "public");

	// Bettter caching
	context.set("Vary", "Accept-Encoding");

	// Short Link
	context.set("Link", `<${SHORTLINK}>; rel="shortlink"`);

	return next();
});

// GraphQL data
app.use(mount("/graphql", graphql({ schema })));

// Service Worker
app.use(mount("/sw.js", async context => sendFile(context, resolve(`${FRONT_DIR}/../sw.js`))));

// Front code output
app.use(mount("/assets", staticFile(FRONT_DIR)));

// Load everything from static folder
app.use(staticFile(STATIC_DIR));

// Start server on configured port
app.listen(PORT, HOST, () =>
	console.log(`Listening to port ${HOST}:${PORT} (${STATIC_DIR})`)
);
