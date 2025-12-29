# Chapter 9: Splines on Surfaces

---

## Main Idea

This chapter extends the theory of splines from planar domains to general manifolds (curved surfaces) in 3D space, such as spheres and cylinders. It investigates how to construct smooth scalar or vector-valued functions directly on these surfaces using generalized barycentric coordinates, triangulations, and non-polynomial basis functions like trigonometric splines.

---

## Keywords

**Manifold:**
A surface in 3D Euclidean space on which functions are defined. Unlike standard splines defined on a flat plane, splines on manifolds must account for the surface's intrinsic curvature.

**Spherical Barycentric Coordinates:**
A generalized coordinate system for spherical triangles defined using geodesic distances. They allow for the construction of smooth Bernstein-Bézier-type splines directly on a sphere.

**Trigonometric Spline:**
A spline constructed from trigonometric functions rather than polynomials. These are ideal for representing periodic functions, such as data on a circle or cam profiles.

**Geodesic:**
The curve representing the shortest path between two points on a surface. It plays the role of a straight line when defining triangles and coordinates on curved surfaces.

**Radial Basis Functions (RBF):**
A meshless method for interpolating scattered data on surfaces. The function value depends only on the distance from a center point, avoiding the need for a global triangulation.

**Surface on Surface:**
A technique where a new surface is defined by a scalar field (like height or pressure) offset from a reference surface (like a sphere).

---

## Formulas

**Surface on Surface Definition**

- **Formula:** $S^{\prime} = \{s + f(s)n_{s} \mid s \in S\}$
- **Meaning:** Defines a new surface $S'$ by offsetting points $s$ on a reference surface $S$ by a scalar amount $f(s)$ along the normal vector $n_s$.
- **Use in graphics:** Used to model terrain on a planet or physical properties like temperature as a geometric shape.

**Cam Profile Coordinates**

- **Formula:** $x(\theta) = f(\theta)\cos(\theta) - f^{\prime}(\theta)\sin(\theta)$
- **Meaning:** Calculates the Cartesian $x$-coordinate of a cam profile from a support function $f(\theta)$.
- **Use in graphics:** Essential for designing mechanical parts that convert rotary motion to linear motion.

**Spherical Barycentric Coordinate**

- **Formula:** $b_{v_{i}}^{T}(s) = \frac{\sin \delta_{i}}{\sin(\delta_{i} + \gamma_{i})}$
- **Meaning:** Computes the coordinate of a point $s$ relative to vertex $v_i$ using geodesic angles $\delta$ and $\gamma$.
- **Use in graphics:** Allows for the definition of smooth interpolation patches on spherical objects without distortion.

**Bernstein-Bézier Polynomial on Triangle**

- **Formula:** $B_{i}^{n,T}(s) = \frac{n!}{\prod (i_{v}!)} \prod_{v \in V(T)} (b_{v}^{T}(s))^{i_{v}}$
- **Meaning:** The basis function for defining piecewise polynomials on a generalized triangulation.
- **Use in graphics:** The fundamental building block for constructing smooth surfaces from triangular patches.

---

## Practical Use

**Global Atmospheric Modeling**
Meteorologists use spherical splines to model scalar fields like temperature, pressure, and wind velocity over the entire Earth without the distortion caused by flat map projections.

**Mechanical Cam Design**
Engineers use trigonometric splines to design the support functions for cams, ensuring smooth motion and rational cutter paths for manufacturing (CNC).

**Geophysics**
Scientists use these techniques to interpolate scattered data points (such as magnetic field intensity or gravity anomalies) measured at irregular locations on the Earth's surface.
