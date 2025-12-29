# Chapter 2: Vectors

---

## Main Idea

This chapter establishes the fundamental properties and operations of vectors, which are essential for representing spatial locations and directions in 3D game engines.

---

## Keywords

**Vector:**

- An n-tuple of real numbers used to represent points in space or spatial directions, capable of being scaled, added, and subtracted.

**Normalization:**

- The process of resizing a vector to have a magnitude of exactly one (unit length) by dividing it by its magnitude.

**Dot Product (Scalar Product):**

- A scalar quantity resulting from the multiplication of two vectors, used to measure the difference in their directions and calculate projections.

**Cross Product (Vector Product):**

- A binary operation on two 3D vectors that produces a third vector perpendicular to both, often used to find surface normals.

**Gram-Schmidt Orthogonalization:**

- An algorithm used to transform a set of linearly independent vectors into an orthogonal (or orthonormal) basis.

---

## Formulas

**Vector Magnitude**

- **Formula:** $||V|| = \sqrt{V_x^2 + V_y^2 + V_z^2}$
- **Meaning:** The length or norm of the vector.
- **Use in graphics:** Determining distance or normalizing direction vectors.

**Dot Product**

- **Formula:** $P \cdot Q = ||P||||Q|| \cos \alpha$
- **Meaning:** Relates the product of components to the angle $\alpha$ between vectors.
- **Use in graphics:** Testing orthogonality, lighting calculations, and determining if objects are in front or behind a plane.

**Vector Projection**

- **Formula:** $proj_Q P = \frac{P \cdot Q}{||Q||^2} Q$
- **Meaning:** The component of vector $P$ that is parallel to vector $Q$.
- **Use in graphics:** Decomposing vectors into parallel and perpendicular components.

**Cross Product**

- **Formula:** $P \times Q = \langle P_y Q_z - P_z Q_y, P_z Q_x - P_x Q_z, P_x Q_y - P_y Q_x \rangle$
- **Meaning:** Generates a vector orthogonal to the plane defined by $P$ and $Q$.
- **Use in graphics:** Calculating surface normals and triangle areas.

---

## Practical Use

**Surface Normals**

- Using the **Cross Product** of two tangent vectors on a surface (e.g., triangle edges) to compute a vector perpendicular to that surface, which is critical for lighting calculations.

**Face Culling and Orientation**

- Using the **Dot Product** to determine if a surface is facing toward or away from the camera by comparing the surface normal with the view direction.

**Orthonormalization**

- Applying **Gram-Schmidt Orthogonalization** to correct numerical drift in rotation matrices or coordinate axes, ensuring they remain perpendicular and of unit length.
