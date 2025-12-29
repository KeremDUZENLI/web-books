# Chapter 10: Box Splines

---

## Main Idea

This chapter introduces box splines and half-box splines as multivariate generalizations of B-splines, defined either inductively via convolution or geometrically as shadows of higher-dimensional hypercubes. It details their mathematical properties—such as derivatives, linear precision, and convergence under subdivision—and demonstrates their application in constructing smooth surfaces over triangular grids, including methods for handling non-planar domains and filling n-sided holes.

---

## Keywords

**Box Spline:**
A smooth, piecewise polynomial function defined by a set of direction vectors. It can be visualized as the "shadow" (density function) of a high-dimensional box projected onto a lower-dimensional space.

**Half-Box Spline:**
A variation of the box spline defined over a triangular grid formed by splitting unit squares. They are useful for constructing surfaces on general meshes where standard box splines might be too symmetric or rigid.

**Subdivision:**
An iterative algorithm that generates a denser set of control points from a coarser net. Repeated application converges to the smooth spline surface itself.

**Control Net:**
A grid of points (coefficients) that defines the shape of the spline surface. Because box splines form a partition of unity, the surface lies within the convex hull of this net.

**Zwart-Powell Element:**
A specific piecewise quadratic $C^1$ box spline derived from a criss-cross grid. It is a fundamental element in computer graphics for smooth shading.

**Linear Precision:**
The ability of a spline representation to exactly reproduce linear functions (like planes). This ensures that the coordinate system itself can be represented by the spline basis.

---

## Formulas

**Inductive Definition (Convolution)**

- **Formula:** $B_{\kappa}(x) = \int_{0}^{1}B_{\kappa-1}(x-tv_{\kappa})dt$
- **Meaning:** Defines a higher-order box spline by smearing (convolving) a lower-order one along a new direction vector $v_{\kappa}$.
- **Use in graphics:** The mathematical basis for constructing smooth filters and surfaces from simple building blocks.

**Directional Derivative**

- **Formula:** $D_{v_{r}}B(x) = B(x|v_{1}...v_{r}^{*}...v_{k}) - B(x-v_{r}|v_{1}...v_{r}^{*}...v_{k})$
- **Meaning:** The slope of a box spline in a direction $v_r$ is the difference between two lower-order box splines (finite difference).
- **Use in graphics:** Used to calculate surface normals for lighting and shading.

**Subdivision Recursion (Chaikin-like)**

- **Formula:** $d^{r}(i) = \frac{1}{2}(d^{r-1}(i) + d^{r-1}(i-v_{r}))$
- **Meaning:** Computes new, refined control points by averaging existing points along specific geometric directions.
- **Use in graphics:** The core step in rendering smooth surfaces from coarse polygon meshes efficiently.

**Partition of Unity (Half-Box)**

- **Formula:** $\sum_{i \in Z^2} (H_{\Delta}(x-i) + H_{\nabla}(x-i)) = 1$
- **Meaning:** The sum of all shifted basis functions equals one everywhere.
- **Use in graphics:** Ensures the surface is affine invariant (it moves predictably when you rotate or scale the control points).

---

## Practical Use

**Surface Modeling (CAD)**
Box splines over triangular grids allow designers to model complex, multi-sided surface patches that are difficult to create with standard rectangular tensor-product B-splines.

**Hole Filling**
Generalized box splines are used to smoothly fill "holes" in a 3D mesh where different surface patches meet (e.g., a suitcase corner or a handle joint) by using special control nets.

**Image Reconstruction**
Because they are smooth and efficient to calculate via subdivision, box splines are used as reconstruction filters to turn pixel data back into a continuous image or volume.
