"use strict";
exports.__esModule = true;
var compression = require("compression");
var express = require("express");
var helmet = require("helmet");
var settings_1 = require("./settings");
var time_1 = require("./time");
/**
 * Express App
 */
var app = express();
var setHeaders = function (response) {
    // Add CORS headers
    response.set("Content-Security-Policy", settings_1.CORS);
    response.set("X-Content-Security-Policy", settings_1.CORS);
    // Cache
    response.set("Expires", new Date(Date.now() + time_1.WEEK).toUTCString());
    response.set("Cache-Control", "max-age=" + time_1.YEAR + ", private");
    response.set("Pragma", "public");
    // Bettter caching
    response.set("Vary", "Accept-Encoding");
};
// Use Helmet for general protection
app.use(helmet());
// Compress data in the highest level
app.use(compression({ level: 9 }));
// Add CORS headers
app.set("Content-Security-Policy", settings_1.CORS);
app.set("X-Content-Security-Policy", settings_1.CORS);
// Cache
app.set("Expires", new Date(Date.now() + time_1.WEEK).toUTCString());
app.set("Cache-Control", "max-age=" + time_1.YEAR + ", private");
app.set("Pragma", "public");
// Bettter caching
app.set("Vary", "Accept-Encoding");
// Load everything from static folder
app.use(express.static(settings_1.STATIC_DIR, { setHeaders: setHeaders }));
app.get("*", function (request, response) {
    response.sendFile(settings_1.STATIC_DIR + "/index.html", { root: ".", setHeaders: setHeaders });
});
// Start server on configured port
app.listen(settings_1.PORT, settings_1.HOST, function () { return console.log("Listening to port " + settings_1.HOST + ":" + settings_1.PORT + " (" + settings_1.STATIC_DIR + ")"); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUEyQztBQUMzQyxpQ0FBbUM7QUFDbkMsK0JBQWlDO0FBQ2pDLHVDQUEwRDtBQUMxRCwrQkFBb0M7QUFFcEM7O0dBRUc7QUFDSCxJQUFNLEdBQUcsR0FBb0IsT0FBTyxFQUFFLENBQUM7QUFFdkMsSUFBTSxVQUFVLEdBQUcsVUFBQyxRQUEwQjtJQUM3QyxtQkFBbUI7SUFDbkIsUUFBUSxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxlQUFJLENBQUMsQ0FBQztJQUM5QyxRQUFRLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLGVBQUksQ0FBQyxDQUFDO0lBRWhELFFBQVE7SUFDUixRQUFRLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsV0FBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUNuRSxRQUFRLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxhQUFXLFdBQUksY0FBVyxDQUFDLENBQUM7SUFDMUQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFFakMsa0JBQWtCO0lBQ2xCLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLGlCQUFpQixDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFDO0FBRUYsb0NBQW9DO0FBQ3BDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUVsQixxQ0FBcUM7QUFDckMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRW5DLG1CQUFtQjtBQUNuQixHQUFHLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLGVBQUksQ0FBQyxDQUFDO0FBQ3pDLEdBQUcsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsZUFBSSxDQUFDLENBQUM7QUFFM0MsUUFBUTtBQUNSLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxXQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBQzlELEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLGFBQVcsV0FBSSxjQUFXLENBQUMsQ0FBQztBQUNyRCxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUU1QixrQkFBa0I7QUFDbEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUVuQyxxQ0FBcUM7QUFDckMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLHFCQUFVLEVBQUUsRUFBRSxVQUFVLFlBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNwRCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLE9BQU8sRUFBRSxRQUFRO0lBQzlCLFFBQVEsQ0FBQyxRQUFRLENBQUkscUJBQVUsZ0JBQWEsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsVUFBVSxZQUFBLEVBQUUsQ0FBQyxDQUFDO0FBQzFFLENBQUMsQ0FBQyxDQUFDO0FBRUgsa0NBQWtDO0FBQ2xDLEdBQUcsQ0FBQyxNQUFNLENBQUMsZUFBSSxFQUFFLGVBQUksRUFBRSxjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBcUIsZUFBSSxTQUFJLGVBQUksVUFBSyxxQkFBVSxNQUFHLENBQUMsRUFBaEUsQ0FBZ0UsQ0FBQyxDQUFDIn0=