# Chapter 2: Vectors

---

## Main Idea

[cite_start]This chapter establishes the fundamental properties and operations of vectors, which are essential for representing spatial locations and directions in 3D game engines[cite: 243, 244]. [cite_start]It covers vector arithmetic, dot and cross products, and the concept of vector spaces, providing the mathematical foundation for tasks such as calculating surface normals and projecting geometry[cite: 245, 325, 424].


---

## Keywords

**Vector:**
- [cite_start]An n-tuple of real numbers used to represent points in space or spatial directions, capable of being scaled, added, and subtracted[cite: 244, 252].

**Normalization:**
- [cite_start]The process of resizing a vector to have a magnitude of exactly one (unit length) by dividing it by its magnitude[cite: 294].

**Dot Product (Scalar Product):**
- [cite_start]A scalar quantity resulting from the multiplication of two vectors, used to measure the difference in their directions and calculate projections[cite: 325, 326].

**Cross Product (Vector Product):**
- [cite_start]A binary operation on two 3D vectors that produces a third vector perpendicular to both, often used to find surface normals[cite: 424, 430].

**Gram-Schmidt Orthogonalization:**
- [cite_start]An algorithm used to transform a set of linearly independent vectors into an orthogonal (or orthonormal) basis[cite: 610].

---

## Formulas

**Vector Magnitude**
- **Formula:** $||V|| = \sqrt{V_x^2 + V_y^2 + V_z^2}$
- [cite_start]**Meaning:** The length or norm of the vector[cite: 292].
- [cite_start]**Use in graphics:** Determining distance or normalizing direction vectors[cite: 294].

**Dot Product**
- **Formula:** $P \cdot Q = ||P||||Q|| \cos \alpha$
- [cite_start]**Meaning:** Relates the product of components to the angle $\alpha$ between vectors[cite: 339].
- [cite_start]**Use in graphics:** Testing orthogonality, lighting calculations, and determining if objects are in front or behind a plane[cite: 362, 376].

**Vector Projection**
- **Formula:** $proj_Q P = \frac{P \cdot Q}{||Q||^2} Q$
- [cite_start]**Meaning:** The component of vector $P$ that is parallel to vector $Q$[cite: 408].
- [cite_start]**Use in graphics:** Decomposing vectors into parallel and perpendicular components[cite: 401].

**Cross Product**
- **Formula:** $P \times Q = \langle P_y Q_z - P_z Q_y, P_z Q_x - P_x Q_z, P_x Q_y - P_y Q_x \rangle$
- [cite_start]**Meaning:** Generates a vector orthogonal to the plane defined by $P$ and $Q$[cite: 431].
- [cite_start]**Use in graphics:** Calculating surface normals and triangle areas[cite: 429, 481].

---

## Practical Use

**Surface Normals**
- [cite_start]Using the **Cross Product** of two tangent vectors on a surface (e.g., triangle edges) to compute a vector perpendicular to that surface, which is critical for lighting calculations[cite: 429].

**Face Culling and Orientation**
- [cite_start]Using the **Dot Product** to determine if a surface is facing toward or away from the camera by comparing the surface normal with the view direction[cite: 377].

**Orthonormalization**
- [cite_start]Applying **Gram-Schmidt Orthogonalization** to correct numerical drift in rotation matrices or coordinate axes, ensuring they remain perpendicular and of unit length[cite: 607].
