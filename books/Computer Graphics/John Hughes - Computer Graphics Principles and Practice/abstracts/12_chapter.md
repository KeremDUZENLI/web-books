# Chapter 12: A 2D and 3D Transformation Library for Graphics

---

## Main Idea

- This chapter applies mathematical transformation concepts to build a concrete software implementation of a transformation library.
- It emphasizes the "Implementation Principle," distinguishing between points and vectors, and provides a class structure for linear, affine, and projective transformations in 2D and 3D.

---

## Keywords

**Implementation Principle:**

- The concept that understanding a mathematical process is best demonstrated by writing a program to execute it.

**Coordinate Frame:**

- A set of vectors (and optionally a point) that defines a coordinate system; used as an alternative to transformation matrices for defining space.

**General Position:**

- A geometric condition for points (e.g., no three collinear in 2D) required to uniquely determine a projective transformation mapping one set of points to another.

**Rigid Transformation:**

- A geometric transformation that preserves distances and angles, consisting only of rotations and translations.

**Projective Transformation:**

- A transformation that maps lines to lines but does not necessarily preserve parallelism, defined by a 3x3 (2D) or 4x4 (3D) matrix.

_(Add only the essential terms.)_

---

## Formulas

**Projective Point Mapping (2D)**

- **Formula:** $q_4 = \alpha q_1 + \beta q_2 + \gamma q_3$

- **Meaning:** Expresses the fourth target point as a linear combination (barycentric coordinates) of the first three to solve for the scaling factors in a projective map.

- **Use in graphics:** Determining the unique projective matrix that maps four specific source points to four specific target points.

**Affine Combination**

- **Formula:** $P = (1-t)A + tB$

- **Meaning:** A linear combination of points where the coefficients sum to 1, resulting in a valid point independent of the coordinate origin.

- **Use in graphics:** Interpolation along lines and segments.

**3D Cross Product**

- **Formula:** $w = u \times v$

- **Meaning:** Produces a vector $w$ perpendicular to both $u$ and $v$.

- **Use in graphics:** Constructing coordinate frames (e.g., finding a normal vector from two tangent vectors).

_(Include only formulas the chapter actually depends on.)_

---

## Practical Use

**Coordinate Frame Construction**

- To place a 3D object (like a square) in a scene with a specific orientation, a coordinate frame is constructed. For example, given a center point, a tangent vector, and a normal vector, a transformation matrix is built to map the standard axes to these specific directions, effectively "posing" the object.

**Ray Transformation**

- When ray tracing, instead of transforming an object, it is often computationally cheaper to transform the ray into the object's local coordinate space using the inverse of the object's transformation matrix.
