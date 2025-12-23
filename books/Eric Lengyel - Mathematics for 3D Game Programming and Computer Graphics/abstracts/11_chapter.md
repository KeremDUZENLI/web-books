# Chapter 11: Curves and Surfaces

---

## Main Idea

This chapter examines mathematical methods for representing smooth curves and surfaces in 3D graphics, focusing on cubic polynomials. It covers the construction and properties of various curve types, including Hermite, Bézier, Catmull-Rom, and B-Splines, and explains how to extend these concepts to create bicubic parametric surfaces.



---

## Keywords

**Parametric Curve:**
- A curve defined by a function $Q(t)$ where points are calculated based on a parameter $t$ (usually ranging from 0 to 1), rather than explicit $y=f(x)$ equations.

**Continuity ($C^n$ vs $G^n$):**
- A measure of smoothness at the join points of curve segments; $C^n$ refers to matching derivatives (parametric continuity), while $G^n$ refers to matching tangent directions (geometric continuity).

**Hermite Curve:**
- A cubic curve defined by two endpoints and two tangent vectors at those endpoints, offering direct control over the curve's direction and speed at the boundaries.

**Bézier Curve:**
- A curve defined by two endpoints and two control points that approximate the tangents; the curve is contained within the convex hull of its control points.


**Catmull-Rom Spline:**
- An interpolating spline where the curve passes through all control points, and the tangent at each point is calculated from its neighbors, ensuring $C^1$ continuity.

**B-Spline (Basis Spline):**
- A approximating spline that offers $C^2$ continuity and local control, defined by a set of control points and a knot vector; widely used for smooth paths and surfaces.

---

## Formulas

**Cubic Curve (Matrix Form)**
- **Formula:** $Q(t) = T \cdot M \cdot G$
- **Meaning:** Computes a point on the curve using the parameter vector $T$, the basis matrix $M$ (blending functions), and the geometry vector $G$ (control points).
- **Use in graphics:** The standard way to evaluate and implement splines in engines.

**Bicubic Surface Patch**
- **Formula:** $S(s, t) = T(t) \cdot M \cdot \mathbf{P} \cdot M^T \cdot T(s)^T$
- **Meaning:** Defines a surface point using two parameters ($s, t$) and a $4 \times 4$ grid of control points $\mathbf{P}$.
- **Use in graphics:** Modeling smooth terrain, cloth, or organic shapes like teapots.

---

## Practical Use

**Camera Paths**
- Using **Catmull-Rom Splines** to create smooth, continuous paths for cutscenes where the camera must pass exactly through specific keyframes defined by the level designer.

**Vector Fonts**
- Using **Bézier Curves** (quadratic or cubic) to define the smooth outlines of TrueType or OpenType glyphs that scale infinitely without pixelation.

**Surface Modeling**
- Using **Bicubic Patches** (often tessellated into triangles) to represent curved objects like car bodies or character faces with fewer control points than a raw high-poly mesh.
