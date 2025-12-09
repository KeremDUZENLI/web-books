# Chapter 6: Transformation Matrices

---

## Main Idea

- This chapter explains how to use matrices to represent geometric operations like **rotation, translation, and scaling**, which are essential for arranging objects in 3D space.

- It introduces **affine transformations** and homogeneous coordinates, providing a unified mathematical framework for moving objects and changing coordinate systems in the graphics pipeline.

---

## Keywords

**Linear Transformation**

- A mapping that preserves vector addition and scalar multiplication (e.g., rotation, scaling, shear), representable by a simple matrix multiplication.

**Affine Transformation**

- A linear transformation followed by a **translation**; in graphics, this is achieved using a single matrix multiplication with **homogeneous coordinates**.

**Homogeneous Coordinates**

- A system where 2D points $(x,y)$ are represented as $(x,y,1)$ and 3D points $(x,y,z)$ as $(x,y,z,1)$, allowing translation to be combined with other linear transforms into one $4\times4$ matrix.

**Orthogonal Matrix**

- A square matrix where columns (and rows) are mutually orthogonal unit vectors; its inverse is simply its **transpose** ($R^{-1} = R^T$), making it crucial for rotation matrices.

---

## Formulas

**2D Rotation Matrix**

- **Formula:** $\begin{bmatrix} \cos \phi & -\sin \phi \\ \sin \phi & \cos \phi \end{bmatrix}$

- **Meaning:** Rotates a vector counterclockwise by angle $\phi$ about the origin.

- **Use in graphics:** Fundamental for orienting objects and cameras in 2D and (as a building block) in 3D.

**3D Translation Matrix**

- **Formula:** $\begin{bmatrix} 1 & 0 & 0 & t_x \\ 0 & 1 & 0 & t_y \\ 0 & 0 & 1 & t_z \\ 0 & 0 & 0 & 1 \end{bmatrix}$

- **Meaning:** Moves a point by vector $\mathbf{t} = (t_x, t_y, t_z)$ using homogeneous coordinates.

- **Use in graphics:** Essential for positioning objects in a scene without distorting their shape.

**Normal Vector Transformation**

- **Formula:** $\mathbf{n}_{new} = (\mathbf{M}^{-1})^T \mathbf{n}_{old}$

- **Meaning:** Surface normals must be transformed by the **inverse transpose** of the object's transformation matrix to remain perpendicular to the surface.

- **Use in graphics:** Critical for correct lighting calculations when objects are non-uniformly scaled or sheared.

---

## Practical Use

**Composition of Transforms**

- Multiple transformations (e.g., scale, then rotate, then translate) can be multiplied into a **single matrix**, allowing millions of vertices to be processed efficiently.

**Windowing Transformation**

- A specific sequence of translations and scales that maps geometry from a logical coordinate system (like a unit square) to physical pixel coordinates on the screen.

**Coordinate Frame Management**

- Matrices are used to convert coordinates between different "frames of reference" (e.g., from an object's local space to world space), which is the mathematical basis for scene graphs and camera positioning.
