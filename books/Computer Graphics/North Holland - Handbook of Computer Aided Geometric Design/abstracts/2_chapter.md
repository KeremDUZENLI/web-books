# Chapter 2: Geometric Fundamentals

---

## Main Idea

This chapter establishes the essential mathematical tools for Computer Aided Geometric Design (CAGD), progressing from basic point and vector definitions in affine space to more complex measurements in Euclidean space. It also introduces projective geometry for handling rational curves and differential geometry for analyzing the smoothness and curvature of surfaces.

---

## Keywords

**Affine System:**
A coordinate system defined by an origin point and a set of direction vectors. It allows every point in space to be uniquely described by a set of numbers.

**Barycentric Coordinates:**
A way of defining a point's position as a weighted sum of other points (like the corners of a triangle), where the weights always add up to 1.

**Homogeneous Coordinates:**
A system used in projective geometry where points have an extra coordinate. This allows computers to handle points at infinity and rational curves (like circles) easily.

**Frenet Frame:**
A moving reference frame consisting of a tangent, normal, and binormal vector that describes the local behavior (direction and turning) of a curve at any specific point.

**Gaussian Curvature:**
A number that describes the intrinsic shape of a surface at a point. It tells you if a surface is bowl-shaped, saddle-shaped, or flat, regardless of how it is bent.

**Dupin's Indicatrix:**
A local conic section (like an ellipse or hyperbola) that visualizes how curved a surface is in different directions at a specific point.

---

## Formulas

**Affine Map**

- **Formula:** $p = a_0 + Ax$
- **Meaning:** Calculates a new point position $p$ using an origin $a_0$ and a transformation matrix $A$.
- **Use in graphics:** Used to place objects in a scene or transform shapes.

**Barycentric Combination**

- **Formula:** $p = \sum \xi_i a_i \quad \text{where} \quad \sum \xi_i = 1$
- **Meaning:** Defines a point $p$ as a weighted average of reference points $a_i$.
- **Use in graphics:** Fundamental for defining shapes inside triangles and blending colors.

**Euclidean Distance**

- **Formula:** $dist(p, q) = \sqrt{v^t v}$
- **Meaning:** Calculates the straight-line length between two points.
- **Use in graphics:** Essential for measuring size, collision detection, and lighting calculations.

**Gaussian Curvature**

- **Formula:** $K = \kappa_1 \kappa_2$
- **Meaning:** The product of the maximum and minimum bending of a surface at a point.
- **Use in graphics:** Used to analyze surface quality and detect imperfections in 3D models.

---

## Practical Use

**Surface Analysis**
Engineers use "reflection lines" and "isophotes" (mathematical simulations of light reflection) to visually check if a car body or product surface is perfectly smooth.

**3D Modeling**
Different coordinate systems (Affine, Cartesian, Projective) allow software to represent everything from simple flat polygons to complex rounded shapes and perspectives accurately.

**Motion Control**
The Frenet frame is used in animation and robotics to orient objects (like a camera or a robot arm) so they follow a path naturally without weird twisting.
