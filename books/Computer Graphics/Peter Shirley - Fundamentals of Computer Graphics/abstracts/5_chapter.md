# Chapter 5: Linear Algebra

---

## Main Idea

- This chapter introduces the fundamental concepts of linear algebra, focusing on the **geometric interpretation of matrices and determinants**, and their application to vectors. It provides the mathematical foundation necessary for **transforming and manipulating objects** in computer graphics.

---

## Keywords

**Matrix:**

- A rectangular array of numbers used to represent transformations or systems of linear equations.

**Determinant:**

- A scalar value computed from a square matrix that represents the signed area (in 2D) or signed volume (in 3D) spanned by its column or row vectors.

**Identity Matrix:**

- A square matrix with ones on the main diagonal and zeros elsewhere, acting as the multiplicative identity in matrix algebra.

**Inverse Matrix:**

- The matrix that, when multiplied by the original matrix, results in the identity matrix.

**Transpose:**

- An operation that flips a matrix over its diagonal, switching its rows and columns.

---

## Formulas

**2D Determinant**

- **Formula:** $|ab| = x_ay_b - y_ax_b$

- **Meaning:** Computes the signed area of the parallelogram defined by vectors $\mathbf{a}$ and $\mathbf{b}$.

- **Use in graphics:** Used in calculating barycentric coordinates and testing if a point is inside a polygon.

**3D Determinant**

- **Formula:** $|abc| = x_ay_bz_c - x_az_by_c - y_ax_bz_c + y_az_bx_c + z_ax_by_c - z_ay_bx_c$

- **Meaning:** Computes the signed volume of the parallelepiped defined by vectors $\mathbf{a}$, $\mathbf{b}$, and $\mathbf{c}$.

- **Use in graphics:** Essential for operations involving 3D spaces, such as solving systems of equations and volume calculations.

**Matrix Multiplication**

- **Formula:** $p_{ij} = a_{i1}b_{1j} + a_{i2}b_{2j} + \dots + a_{im}b_{mj}$

- **Meaning:** The element at the $i$-th row and $j$-th column of the product matrix is the dot product of the $i$-th row of the first matrix and the $j$-th column of the second.

- **Use in graphics:** Combining multiple transformations (scaling, rotation, translation) into a single matrix.

**Inverse Matrix Property**

- **Formula:** $(AB)^{-1} = B^{-1}A^{-1}$

- **Meaning:** The inverse of a product of matrices is the product of their inverses in reverse order.

- **Use in graphics:** Reversing a sequence of transformations.

---

## Practical Use

**Matrix Transformations**

- Matrices are the standard method for applying scaling, rotation, and translation to geometric models.

**Solving Systems of Equations**

- Determinants and matrix inverses provide analytical and numerical methods (like Cramer's rule) for finding intersection points, such as ray-triangle intersections.
