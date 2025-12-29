# Chapter 7: Curve and Surface Constructions

---

## Main Idea

This chapter surveys fundamental algorithms for generating curves and surfaces from discrete data, distinguishing between interpolation (passing through points) and approximation (fitting close to points). It details polynomial methods like Lagrange and Hermite interpolation, explores the stability and smoothness of cubic splines, and extends these concepts to surfaces using Coons patches and tensor product techniques.

---

## Keywords

**Interpolation:**
The process of constructing a curve or surface that passes exactly through a specified set of data points.

**Approximation:**
The process of fitting a curve or surface to a set of data points by minimizing the error distance (usually least squares), useful when data is noisy or too numerous to interpolate.

**Aitken's Algorithm:**
A recursive algorithm that evaluates a point on an interpolating polynomial by performing repeated linear interpolations, avoiding the need to solve for coefficients explicitly.

**Hermite Interpolation:**
A curve construction method that uses not just points, but also tangent vectors (derivatives) to control the shape and direction of the curve at the boundaries.

**Runge Phenomenon:**
The tendency of high-degree polynomial interpolants to oscillate wildly at the edges of an interval, often motivating the use of piecewise splines instead.

**Coons Patch:**
A surface patch constructed by filling in the shape between four boundary curves. It is a form of transfinite interpolation.

**Tensor Product Surface:**
A surface defined by a rectangular grid of control points, mathematically constructed by multiplying univariate basis functions (like B-splines) in two parameter directions.

**Free-Form Deformation (FFD):**
A technique for deforming complex geometric objects by embedding them in a grid and distorting the grid, rather than manipulating the object's geometry directly.

---

## Formulas

**Aitken's Algorithm (Recursive Step)**

- **Formula:** $p_{i}^{r}(t) = \frac{t_{i+r}-t}{t_{i+r}-t_{i}}p_{i}^{r-1}(t) + \frac{t-t_{i}}{t_{i+r}-t_{i}}p_{i+1}^{r-1}(t)$
- **Meaning:** Computes a point on a higher-degree interpolant by blending two lower-degree interpolants.
- **Use in graphics:** Used for stable numerical evaluation of interpolating polynomials.

**Least Squares Normal Equations**

- **Formula:** $M^T M B = M^T P$
- **Meaning:** The linear system solved to find the best-fitting control points $B$ for a dataset $P$.
- **Use in graphics:** Essential for fitting smooth curves and surfaces to scanned point cloud data.

**Cubic Hermite Interpolation**

- **Formula:** $p(t) = p_0 H_0^3(t) + m_0 H_1^3(t) + m_1 H_2^3(t) + p_1 H_3^3(t)$
- **Meaning:** Defines a cubic curve using two endpoints ($p$) and two tangent vectors ($m$).
- **Use in graphics:** Standard tool for defining smooth camera paths and animation curves.

**Discrete Coons Patch (Bézier)**

- **Formula:** $b_{i,j} = b_{i,j}^u + b_{i,j}^v - b_{i,j}^{u,v}$
- **Meaning:** Constructs interior control points by blending ruled surfaces from the boundary curves and subtracting a bilinear correction.
- **Use in graphics:** Used to create surfaces that perfectly match four arbitrary boundary curves.

---

## Practical Use

**Reverse Engineering**
Least squares approximation is used to convert dense, noisy point clouds from 3D laser scanners into smooth, mathematical CAD surfaces (NURBS).

**Medical Imaging**
Volume deformations (FFD) are used to warp MRI brain scans of different patients into a common shape alignment for comparative medical studies.

**Character Animation**
Animators use splines to define smooth motion paths for characters, and Hermite interpolation to control the velocity (tangents) at keyframes.
