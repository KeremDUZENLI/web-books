# Chapter 4: Transforms

---

## Main Idea

This chapter details the mathematical methods for transforming vectors between coordinate spaces, a core operation in 3D graphics engines. It covers linear transformations using matrices (scaling, rotation), the use of homogeneous coordinates to include translation in $4 \times 4$ matrices, and the specific requirements for transforming normal vectors. Additionally, it introduces quaternions as a robust alternative to matrices for representing rotations and performing smooth interpolations.


---

## Keywords

**Linear Transformation:**
- A mapping between vector spaces that preserves vector addition and scalar multiplication, representable by a matrix (e.g., rotation, scaling).

**Homogeneous Coordinates:**
- A system where 3D points are represented by 4D vectors $(x, y, z, w)$, allowing translations to be represented as matrix multiplications.

**Orthogonal Matrix:**
- A square matrix whose inverse is equal to its transpose ($M^{-1} = M^T$), used to represent rotations and reflections; it preserves lengths and angles.

**Normal Vector Transformation:**
- The rule stating that normal vectors must be transformed by the inverse transpose of the matrix used to transform points to maintain orthogonality to the surface.

**Quaternion:**
- A four-dimensional number system used to represent 3D rotations, offering advantages in interpolation (SLERP) and avoiding gimbal lock compared to Euler angles or matrices.

**SLERP (Spherical Linear Interpolation):**
- A method for interpolating between two unit quaternions along the shortest arc on a 4D hypersphere, ensuring constant angular velocity.

---

## Formulas

**Rotation about Arbitrary Axis**
- **Formula:** $q = \cos\frac{\theta}{2} + A \sin\frac{\theta}{2}$
- **Meaning:** The unit quaternion representing a rotation of angle $\theta$ about a normalized axis $A$.
- **Use in graphics:** Compactly storing and applying object orientations.

**Homogeneous Matrix**
- **Formula:** $F = \begin{bmatrix} M & T \\ 0 & 1 \end{bmatrix}$
- **Meaning:** Combines a $3 \times 3$ linear transform $M$ and a translation vector $T$ into a single $4 \times 4$ matrix.
- **Use in graphics:** The standard format for Model, View, and Projection matrices.

**Normal Transformation**
- **Formula:** $N' = (M^{-1})^T N$
- **Meaning:** Transforms normal vectors using the inverse transpose of the geometry's transformation matrix.
- **Use in graphics:** Correctly calculating lighting and shading on non-uniformly scaled objects.

**Spherical Linear Interpolation**
- **Formula:** $q(t) = \frac{\sin \theta(1-t)}{\sin \theta}q_1 + \frac{\sin \theta t}{\sin \theta}q_2$
- **Meaning:** Interpolates between quaternions $q_1$ and $q_2$ based on parameter $t$.
- **Use in graphics:** Smoothly animating rotations between keyframes.

---

## Practical Use

**Animation Systems**
- Using **Quaternions** and **SLERP** to interpolate character joint rotations smoothly, avoiding the jerky movement or gimbal lock associated with rotation matrices.

**Rendering Pipeline**
- Utilizing **Homogeneous Coordinates** to multiply vertices by a sequence of matrices (Model $\to$ World $\to$ View $\to$ Projection) in a single pass.

**Shading**
- Applying the **Inverse Transpose** matrix to surface normals in shaders to ensure lighting calculations remain accurate even when models are squashed or stretched (non-uniform scaling).
