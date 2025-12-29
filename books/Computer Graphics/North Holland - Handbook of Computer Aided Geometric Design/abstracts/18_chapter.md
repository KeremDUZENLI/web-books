# Chapter 18: Voronoi Diagrams

---

## Main Idea

This chapter surveys the theory and applications of Voronoi diagrams, which partition space into regions based on proximity to a set of generating points. It explores the dual relationship with Delaunay diagrams, details construction algorithms like the lift-up method, and examines applications such as site retrieval, medial axis extraction, and scattered data interpolation, while also covering generalizations like weighted and power diagrams.

---

## Keywords

**Voronoi Diagram:**
A partition of space into regions where every point within a region is closer to its associated generator than to any other generator in the set.

**Delaunay Triangulation:**
The dual graph of a Voronoi diagram, constructed by connecting generators whose Voronoi regions share a boundary. It optimizes the minimum angle of the triangles (equi-angularity).

**Lift-up Method:**
A robust algorithm that constructs Voronoi diagrams by mapping points to a paraboloid in a higher dimension and computing the convex hull.

**Medial Axis:**
A skeletal representation of a shape defined by the centers of maximal inscribed circles. It can be approximated using the Voronoi diagram of boundary sample points.

**Natural Neighbor Interpolation:**
A method (including Sibson's and Laplace's) for interpolating values at a point based on the areas or edge lengths of its Voronoi region relative to neighbors.

**Power Diagram (Laguerre Voronoi):**
A generalized Voronoi diagram using a specific distance metric involving weights, where boundaries remain straight lines (chords) rather than curves.

**Apollonius Circle:**
The circular boundary found in multiplicatively weighted Voronoi diagrams, representing the locus of points with a constant ratio of distances to two generators.

---

## Formulas

**Voronoi Region Definition**

- **Formula:** $R(S;p_{i}) = \{p \in R^{d} \mid \|p-p_{i}\| < \|p-p_{j}\|, \forall j \neq i\}$
- **Meaning:** Defines the territory of generator $p_i$ as the set of all points closer to $p_i$ than to any other generator.
- **Use in graphics:** Fundamental for proximity queries, texture generation, and cellular patterns.

**Lift-up Transformation**

- **Formula:** $p_i^* = (x_i, y_i, x_i^2 + y_i^2)$
- **Meaning:** Maps a 2D point to a 3D paraboloid. The lower convex hull of these lifted points corresponds to the Delaunay triangulation.
- **Use in graphics:** The standard robust algorithm for computing triangulations in computational geometry libraries.

**Laplace Coordinate (Interpolation)**

- **Formula:** $\overline{s^{0}}(p,p_{i}) = \frac{l(p,p_{i})/\|p-p_{i}\|}{\sum (l(p,p_{j})/\|p-p_{j}\|)}$
- **Meaning:** Weights the influence of a neighbor based on the length of the shared Voronoi edge normalized by distance.
- **Use in graphics:** Used for smoothing and interpolating height fields in terrain generation.

**Power Distance (Laguerre)**

- **Formula:** $d_L(p, p_i) = \|p - p_i\|^2 - w_i$
- **Meaning:** A metric where the "distance" is the squared Euclidean distance minus a weight.
- **Use in graphics:** Used for computing the volume of unions of spheres (molecular modeling) and foam structures.

---

## Practical Use

**Nearest-Site Retrieval**
By storing locations (like hospitals or post offices) in a Voronoi data structure, a query for the "nearest" facility becomes a fast point-location look-up.

**NC Machining (Offsetting)**
Voronoi diagrams of boundary points are used to generate offset curves for tool paths, ensuring the cutting tool maintains a constant distance from the workpiece.

**Mesh Generation**
The Delaunay triangulation property of maximizing minimum angles is critical for creating high-quality finite element meshes that minimize numerical errors in simulations.
