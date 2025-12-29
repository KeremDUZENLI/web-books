# Chapter 28: Splines over Triangulations

---

## Main Idea

This chapter generalizes the concept of splines (smooth piecewise curves) from simple lines to **triangulations** in 2D space. Instead of using rectangular grids, it defines smooth surfaces composed of polynomial pieces defined over triangles, explaining how to connect these triangular patches smoothly ($C^r$ continuity) and how to use them for interpolating scattered data points that don't line up in rows and columns.

---

## Keywords

**Triangulation:**
A method of dividing a 2D region into a mesh of triangles that meet edge-to-edge and vertex-to-vertex, with no gaps or overlaps.


**Barycentric Coordinates:**
A coordinate system that locates a point inside a triangle using weights associated with the three vertices. The weights sum to 1.

**Bernstein-Bézier Form (B-form):**
A specific way of writing polynomials on a triangle using a net of control points. This form makes it much easier to mathematically enforce smoothness between adjacent triangles.


**Smoothness Condition ($C^r$):**
A set of mathematical equations linking the control points of two neighboring triangles. If satisfied, the join between the triangles is invisible (smooth) up to the $r$-th derivative.

**Macro-Element:**
A technique where a single triangle is split into smaller sub-triangles (like the Clough-Tocher split). This adds extra flexibility (degrees of freedom) needed to interpolate data smoothly without locking up the system.

**Simplex Spline:**
A basis function for multivariate splines defined geometrically as the "shadow" (projection) of a simplex (like a tetrahedron or hyper-tetrahedron) from a higher dimension.

**Minimal Energy Method:**
A fitting technique that acts like a virtual thin metal plate. It finds a surface that passes through the data points while bending as little as possible.

---

## Formulas

**Barycentric Coordinates**

- **Formula:** $p = b_1 v_1 + b_2 v_2 + b_3 v_3, \quad b_1+b_2+b_3=1$
- **Meaning:** Defines any point $p$ as a weighted average of the triangle's vertices $v_i$.
- **Use in graphics:** The standard way to interpolate colors (Gouraud shading) or texture coordinates across a triangle.

**Bernstein Polynomial (on a Triangle)**

- **Formula:** $B_{ijk}^q(b) = \frac{q!}{i!j!k!} b_1^i b_2^j b_3^k$
- **Meaning:** The basis functions used to define the shape of a curved triangular patch of degree $q$.
- **Use in graphics:** Used to define the weights of control points for Bézier triangles.

**Smoothness Condition (Across an Edge)**

- **Formula:** $c_{ijk} = b_1 a_{ijk} + b_2 a_{i-1,j+1,k} + b_3 a_{i-1,j,k+1}$
- **Meaning:** Relates the control points ($c$) of one triangle to the control points ($a$) of its neighbor to ensure they touch smoothly.
- **Use in graphics:** Essential for stitching surface patches together without creating creases or seams.

---

## Practical Use

**Scattered Data Interpolation**
When data comes from random locations (like weather stations or 3D scanners) rather than a grid, triangulated splines are used to create a smooth continuous map or surface from the dots.

**Finite Element Analysis (FEA)**
Engineers divide complex parts (like a car engine block) into triangles (elements) to simulate heat or stress. Splines over these triangulations provide high-accuracy solutions to the physics equations.

**Geological Modeling**
Used to model underground oil reservoirs or terrain elevation where measurements are sparse and irregular.
