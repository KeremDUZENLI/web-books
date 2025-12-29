# Chapter 7: Essential Mathematics and the Geometry of 2-Space and 3-Space

---

## Main Idea

- This chapter covers fundamental mathematical concepts essential for computer graphics, including sets, functions, coordinates, and vector operations.
- It emphasizes the "Implementation Principle," encouraging the translation of mathematical understanding into executable code.

---

## Keywords

**Vector Space:**

- A collection of vectors that can be added and multiplied by scalars, satisfying specific axioms.

**Affine Combination:**

- A linear combination of points where the coefficients sum to 1, resulting in a point that is independent of the coordinate system.

**Barycentric Coordinates:**

- A coordinate system defined by the vertices of a simplex (like a triangle), used to express points as weighted sums of these vertices.

**Implicit Line/Plane:**

- A geometric shape defined by an equation $F(X) = 0$, useful for intersection testing.

**Parametric Line:**

- A line defined by a function $P(t) = P + td$, useful for generating points along the line.

**Winding Number:**

- An integer representing the total number of times a curve travels counterclockwise around a point.

_(Add only the essential terms.)_

---

## Formulas

**Dot Product**

- **Formula:** $v \cdot w = \sum v_i w_i = ||v|| ||w|| \cos \theta$

- **Meaning:** Scalar product relating two vectors' magnitudes and the angle between them.

- **Use in graphics:** Calculating angles, projections, and lighting.

**Cross Product (3D)**

- **Formula:** $v \times w = [v_y w_z - v_z w_y, v_z w_x - v_x w_z, v_x w_y - v_y w_x]^T$

- **Meaning:** Vector perpendicular to both input vectors.

- **Use in graphics:** Calculating surface normals.

**Line Intersection (Parametric-Implicit)**

- **Formula:** $t = \frac{(S-P) \cdot n}{d \cdot n}$

- **Meaning:** The parameter $t$ where a ray $P+td$ intersects a plane defined by $(X-S) \cdot n = 0$.

- **Use in graphics:** Ray tracing and collision detection.

**Signed Area of Triangle (2D)**

- **Formula:** Area $= \frac{1}{2} \sum (x_i y_{i+1} - x_{i+1} y_i)$

- **Meaning:** Half the sum of cross products of adjacent vertices.

- **Use in graphics:** Back-face culling and polygon orientation.

_(Include only formulas the chapter actually depends on.)_

---

## Practical Use

**Ray-Triangle Intersection**

- Determining where a ray (line of sight) hits a triangle is fundamental to ray tracing. The process involves finding the intersection with the triangle's plane and then verifying if the point lies within the triangle's boundaries (using barycentric coordinates).
