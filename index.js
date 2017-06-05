"use strict";
exports.__esModule = true;
var compression = require("compression");
var express = require("express");
var helmet = require("helmet");
/**
 * Express App
 */
var app = express();
/**
 * CORS settings
 */
var cors = [
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
var port = 3000;
app
    .disable("x-powered-by")
    .use(helmet())
    .use(compression({ level: 9 }))
    .use(express.static("static"))
    .get("*", function (request, response) {
    response.sendFile("static/index.html", { root: "." });
})
    .set("Content-Security-Policy", cors)
    .set("X-Content-Security-Policy", cors)
    .set("Cache-Control", "max-age=31536000, private")
    .set("Pragma", "public")
    .set("Vary", "Accept-Encoding");
// Start server on configured port
require("http").createServer(app).listen(port);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUEyQztBQUMzQyxpQ0FBbUM7QUFDbkMsK0JBQWlDO0FBRWpDOztHQUVHO0FBQ0gsSUFBTSxHQUFHLEdBQW9CLE9BQU8sRUFBRSxDQUFDO0FBQ3ZDOztHQUVHO0FBQ0gsSUFBTSxJQUFJLEdBQVc7SUFDcEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7Q0FDbEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDYjs7R0FFRztBQUNILElBQU0sSUFBSSxHQUFXLElBQUksQ0FBQztBQUUxQixHQUFHO0tBRUQsT0FBTyxDQUFDLGNBQWMsQ0FBQztLQUd2QixHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7S0FHYixHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7S0FHOUIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDN0IsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLE9BQU8sRUFBRSxRQUFRO0lBQzNCLFFBQVEsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUN2RCxDQUFDLENBQUM7S0FHRCxHQUFHLENBQUMseUJBQXlCLEVBQUUsSUFBSSxDQUFDO0tBQ3BDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxJQUFJLENBQUM7S0FHdEMsR0FBRyxDQUFDLGVBQWUsRUFBRSwyQkFBMkIsQ0FBQztLQUdqRCxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztLQUd2QixHQUFHLENBQUMsTUFBTSxFQUFFLGlCQUFpQixDQUFDLENBQUM7QUFFakMsa0NBQWtDO0FBQ2xDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDIn0=