"use strict";
exports.__esModule = true;
/**
 * CORS settings.
 *
 * @exports
 */
exports.CORS = [
    "default-src 'self'",
    "child-src 'self'",
    "connect-src 'self'",
    "font-src 'self' *.gstatic.com",
    "img-src 'self'",
    "media-src 'self'",
    "object-src 'self'",
    "script-src 'self' 'unsafe-inline' data:",
    "style-src 'self' 'unsafe-inline' *.googleapis.com"
].join("; ");
/**
 * Server port.
 *
 * @exports
 */
exports.PORT = process.env.OPENSHIFT_NODEJS_PORT || 8080;
/**
 * Server host.
 *
 * @exports
 */
exports.HOST = process.env.OPENSHIFT_NODEJS_IP || "localhost";
/**
 * Static directory.
 *
 * @exports
 */
exports.STATIC_DIR = __dirname + "/../static/build/es5-bundled";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0dGluZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZXR0aW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0dBSUc7QUFDVSxRQUFBLElBQUksR0FBVztJQUMzQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQiwrQkFBK0I7SUFDL0IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUNBQXlDO0lBQ3pDLG1EQUFtRDtDQUNuRCxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNiOzs7O0dBSUc7QUFDVSxRQUFBLElBQUksR0FBVyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixJQUFJLElBQUksQ0FBQztBQUN0RTs7OztHQUlHO0FBQ1UsUUFBQSxJQUFJLEdBQVcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsSUFBSSxXQUFXLENBQUM7QUFDM0U7Ozs7R0FJRztBQUNVLFFBQUEsVUFBVSxHQUFjLFNBQVMsaUNBQThCLENBQUMifQ==