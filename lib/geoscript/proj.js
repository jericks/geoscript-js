var geom = require('geoscript/geom');
var geotools = Packages.org.geotools;

/** api: module = proj */

// Supress non-critical messages
var logger = geotools.util.logging.Logging.getLogger(
    "org.geotools.referencing.factory.epsg"
);
logger.setLevel(java.util.logging.Level.WARNING); 

// Force GeoTools' referencing system to use x,y order
if (!java.lang.System.getProperty("org.geotools.referencing.forceXY")) {
    java.lang.System.setProperty("org.geotools.referencing.forceXY", "true");
}
var Hints = geotools.factory.Hints;
if (!Hints.getSystemDefault(Hints.FORCE_LONGITUDE_FIRST_AXIS_ORDER)) {
    Hints.putSystemDefault(Hints.FORCE_AXIS_ORDER_HONORING, "http");
}

var GeometryTX = geotools.geometry.jts.GeometryCoordinateSequenceTransformer;
var crs = geotools.referencing.CRS;

/** api: method[transform]
 *  :arg geometry: :class:`geom.Geometry`
 *  :arg from: ``String``
 *  :arg to: ``String``
 *  :returns: :class:`geom.Geometry`  A transformed version of the input geometry.
 *
 *  Transform a geometry from one coordinate reference system to another.
 */
var transform = function(geometry, from, to) {
    var fromCrs = crs.decode(from);
    var toCrs = crs.decode(to);
    var tx = crs.findMathTransform(fromCrs, toCrs);
    var gt = new GeometryTX();
    gt.mathTransform = tx;
    var jtsGeom = gt.transform(geometry._geometry);
    return geom.Geometry.fromJTS(jtsGeom);
};

exports.transform = transform;