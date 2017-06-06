/**
 * CORS settings
 *
 * @exports
 */
export const cors: string = [
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
 *
 * @exports
 */
export const port: number = 3000;