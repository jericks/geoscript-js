:class:`geom.MultiPoint`
========================

.. class:: geom.MultiPoint(coords)

    :arg Array coords: Coordinates array.

    Create a new multi-point geometry.  The items in the coords array
    may be point coordinates or :class:`geom.Point` objects.



Example Use
-----------

Sample code to new multi-point:

.. code-block:: javascript

    js> var {Point, MultiPoint} = require("geoscript/geom");
    js> var p1 = new Point([-180, 90]);
    js> var p2 = new Point([-45, 45]);
    js> var mp = new MultiPoint([p1, p2]);

Alternate method to create the same geometry as above:

.. code-block:: javascript

    js> var mp = new MultiPoint([
      >     [-180, 90], [-45, 45]
      > ]);



Properties
----------

Multi-polygon geometries have the properties common to all
:class:`geom.GeometryCollection` subclasses. 


Methods
-------

Multi-polygon geometries have the methods common to all 
:class:`geom.GeometryCollection` subclasses. 
