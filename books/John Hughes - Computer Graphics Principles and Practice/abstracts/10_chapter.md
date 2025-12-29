# Chapter 10: Transformations in Two Dimensions

---

## Main Idea

- This chapter explores the mathematical foundations of manipulating 2D geometry, moving from basic linear transformations (rotation, scaling, shearing) to affine transformations using homogeneous coordinates.
- It details the properties of transformation matrices, the Singular Value Decomposition (SVD), scene graph hierarchies, and the practical implementation of windowing and coordinate system conversions.

---

## Keywords

**Affine Transformation:**

- A geometric transformation that preserves lines and parallelism, represented by a linear transformation followed by a translation (or a 3x3 matrix in homogeneous coordinates).

**Homogeneous Coordinates:**

- A system representing 2D points $(x, y)$ as triples $(x, y, 1)$ to allow translation to be expressed as matrix multiplication.

**Singular Value Decomposition (SVD):**

- A factorization of a matrix $M$ into $UDV^T$, representing a sequence of rotation, nonuniform scaling, and rotation.

**Scene Graph:**

- A hierarchical tree structure where nodes represent objects or transformations, allowing complex scenes to be rendered by traversing and accumulating transformation matrices.

**Pseudoinverse:**

- A generalized inverse for non-square or singular matrices, used to find optimal solutions for overdetermined or underdetermined systems.

**Normal Transform:**

- The specific matrix ($(\overline{M}^{-1})^T$) required to transform surface normal vectors correctly, ensuring they remain perpendicular to the tangent surface after non-uniform scaling.

_(Add only the essential terms.)_

---

## Formulas

**Rotation Matrix (2D)**

- **Formula:** $\begin{bmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{bmatrix}$

- **Meaning:** Rotates a point counterclockwise by angle $\theta$ about the origin.

- **Use in graphics:** Orienting objects.

**Affine Matrix (Homogeneous)**

- **Formula:** $\begin{bmatrix} a & b & c \\ d & e & f \\ 0 & 0 & 1 \end{bmatrix}$

- **Meaning:** Applies linear transformation elements ($a, b, d, e$) and translation ($c, f$) in a single operation.

- **Use in graphics:** Standard representation for positioning and sizing objects.

**Normal Transformation**

- **Formula:** $m = (\overline{M}^{-1})^T n$

- **Meaning:** Transforms a normal vector $n$ by the inverse transpose of the linear part of the object's transformation matrix $M$.

- **Use in graphics:** Lighting calculations.

**Singular Value Decomposition**

- **Formula:** $M = UDV^T$

- **Meaning:** Decomposes any matrix into orthogonal matrices $U, V$ and a diagonal matrix $D$ of singular values.

- **Use in graphics:** Matrix compression, rank determination, and solving linear systems.

_(Include only formulas the chapter actually depends on.)_

---

## Practical Use

**Windowing Transformations**

- To map a view from "world coordinates" to "screen coordinates," a transformation matrix is constructed that translates and scales the source rectangle to match the destination display window.

**Hierarchical Rendering**

- When rendering articulated objects like a robot arm, a scene graph is traversed. A stack of matrices is used to accumulate transformations relative to parent objects, ensuring that moving the "shoulder" also moves the "arm" and "hand" correctly.
