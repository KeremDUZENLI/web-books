# Chapter 4: Bézier Techniques

---

## Main Idea

This chapter covers the mathematical and geometric foundations of Bézier curves and surfaces, which are the core tools for 3D modeling. It explains how complex smooth shapes are defined using intuitive control points (polygons) and blending functions called Bernstein polynomials, covering both rectangular surfaces and triangular patches.

---

## Keywords

**Bézier Curve:**
A smooth curve defined by a set of control points. The curve generally does not pass through the inner control points but is magnetically pulled toward them.

**Control Polygon:**
The connected lines between the control points. The shape of this polygon gives a rough estimate of the curve's shape, making design intuitive.

**Bernstein Polynomials:**
The specific mathematical functions used to calculate how much influence each control point has on the curve at any given position.

**De Casteljau Algorithm:**
A stable, geometric method for calculating a point on a Bézier curve by repeatedly finding midpoints (linear interpolation) on the control polygon legs.

**Convex Hull Property:**
A rule stating that a Bézier curve will always stay completely inside the boundary formed by connecting its control points.

**Tensor Product Patch:**
A rectangular surface created by essentially sweeping one Bézier curve along the path of another.

**Bézier Triangle:**
A surface patch defined over a triangular domain using barycentric coordinates. It is useful for modeling shapes with non-rectangular topology (like the corner of a rounded cube).

---

## Formulas

**Bézier Curve Definition**

- **Formula:** $x(t) = \sum_{i=0}^{n}b_{i}B_{i}^{n}(t)$
- **Meaning:** The curve point $x(t)$ is a weighted sum of control points $b_i$.
- **Use in graphics:** The fundamental equation for drawing smooth paths in vector software (like Illustrator).

**Bernstein Basis Functions**

- **Formula:** $B_{i}^{n}(t) = \binom{n}{i}(1-t)^{n-i}t^{i}$
- **Meaning:** Calculates the weight (influence) of the $i$-th control point at parameter $t$.
- **Use in graphics:** Ensures the curve is smooth and stays within the control bounds.

**De Casteljau Step (Linear Interpolation)**

- **Formula:** $b_{i}^{r}(t) = (1-t)b_{i}^{r-1} + t b_{i+1}^{r-1}$
- **Meaning:** Finds a point partway between two previous points.
- **Use in graphics:** Used recursively to render curves and subdivide them for intersection tests.

**Rectangular Bézier Patch**

- **Formula:** $x(u,v) = \sum_{i=0}^{m}\sum_{j=0}^{n}b_{i,j}B_{i}^{m}(u)B_{j}^{n}(v)$
- **Meaning:** Defines a 3D surface using a grid (net) of control points.
- **Use in graphics:** The standard way to represent curved surfaces in CAD data transfer (IGES).

---

## Practical Use

**Vector Graphics (Fonts & SVGs)**
Fonts (like TrueType) and vector icons use quadratic and cubic Bézier curves because they can be scaled infinitely without looking pixelated.

**Automotive Design (Class A Surfaces)**
Car bodies are modeled using Bézier patches to ensure that reflections of light move smoothly across the surface (high-quality curvature).

**Animation Paths**
Animators use Bézier curves to define the path of a camera or character through space, using handles to adjust the smoothness of the motion.
