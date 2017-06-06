"use strict";
exports.__esModule = true;
var compression = require("compression");
var express = require("express");
var helmet = require("helmet");
var settings_1 = require("./settings");
var minute = 60;
var hour = 60 * minute;
var day = 24 * hour;
var week = 7 * day;
var year = 365 * day;
/**
 * Express App
 */
var app = express();
var setHeaders = function (response) {
    // Add CORS headers
    response.set("Content-Security-Policy", settings_1.cors);
    response.set("X-Content-Security-Policy", settings_1.cors);
    // Cache
    response.set("Expires", new Date(Date.now() + week).toUTCString());
    response.set("Cache-Control", "max-age=" + year + ", private");
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
app.set("Content-Security-Policy", settings_1.cors);
app.set("X-Content-Security-Policy", settings_1.cors);
// Cache
app.set("Expires", new Date(Date.now() + week).toUTCString());
app.set("Cache-Control", "max-age=" + year + ", private");
app.set("Pragma", "public");
// Bettter caching
app.set("Vary", "Accept-Encoding");
// Load everything from static folder
app.use(express.static(settings_1.staticDir, { setHeaders: setHeaders }));
app.get("*", function (request, response) {
    response.sendFile(settings_1.staticDir + "/index.html", { root: ".", setHeaders: setHeaders });
});
// Start server on configured port
app.listen(settings_1.port, settings_1.host, function () {
    console.log("Listening to port " + settings_1.host + ":" + settings_1.port + " (" + settings_1.staticDir + ")");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUEyQztBQUMzQyxpQ0FBbUM7QUFDbkMsK0JBQWlDO0FBQ2pDLHVDQUF5RDtBQUV6RCxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDbEIsSUFBTSxJQUFJLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQztBQUN6QixJQUFNLEdBQUcsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLElBQU0sSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDckIsSUFBTSxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUV2Qjs7R0FFRztBQUNILElBQU0sR0FBRyxHQUFvQixPQUFPLEVBQUUsQ0FBQztBQUV2QyxJQUFNLFVBQVUsR0FBRyxVQUFDLFFBQTBCO0lBQzdDLG1CQUFtQjtJQUNuQixRQUFRLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLGVBQUksQ0FBQyxDQUFDO0lBQzlDLFFBQVEsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsZUFBSSxDQUFDLENBQUM7SUFFaEQsUUFBUTtJQUNSLFFBQVEsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ25FLFFBQVEsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLGFBQVcsSUFBSSxjQUFXLENBQUMsQ0FBQztJQUMxRCxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUVqQyxrQkFBa0I7SUFDbEIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUN6QyxDQUFDLENBQUM7QUFFRiw0RUFBNEU7QUFDNUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUU1QixvQ0FBb0M7QUFDcEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBRWxCLHFDQUFxQztBQUNyQyxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFFbkMsbUJBQW1CO0FBQ25CLEdBQUcsQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsZUFBSSxDQUFDLENBQUM7QUFDekMsR0FBRyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxlQUFJLENBQUMsQ0FBQztBQUUzQyxRQUFRO0FBQ1IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDOUQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsYUFBVyxJQUFJLGNBQVcsQ0FBQyxDQUFDO0FBQ3JELEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBRTVCLGtCQUFrQjtBQUNsQixHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0FBRW5DLHFDQUFxQztBQUNyQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsb0JBQVMsRUFBRSxFQUFFLFVBQVUsWUFBQSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ25ELEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUMsT0FBTyxFQUFFLFFBQVE7SUFDOUIsUUFBUSxDQUFDLFFBQVEsQ0FBSSxvQkFBUyxnQkFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxVQUFVLFlBQUEsRUFBRSxDQUFDLENBQUM7QUFDekUsQ0FBQyxDQUFDLENBQUM7QUFFSCxrQ0FBa0M7QUFDbEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxlQUFJLEVBQUUsZUFBSSxFQUFFO0lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXFCLGVBQUksU0FBSSxlQUFJLFVBQUssb0JBQVMsTUFBRyxDQUFDLENBQUM7QUFDakUsQ0FBQyxDQUFDLENBQUMifQ==