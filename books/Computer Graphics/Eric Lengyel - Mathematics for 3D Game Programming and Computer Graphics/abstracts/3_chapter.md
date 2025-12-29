# Chapter 3: Matrices

---

## Main Idea

This chapter establishes the mathematical framework of matrices, which are essential for performing coordinate transformations in 3D graphics. It covers matrix arithmetic, properties of determinants, methods for calculating inverses, and the theory of eigenvalues and eigenvectors, providing the tools necessary to manipulate geometry and solve linear systems.


---

## Keywords

**Matrix:**
- A rectangular array of numbers used to represent transformations or systems of linear equations.

**Transpose:**
- An operation that flips a matrix over its main diagonal, switching its row and column indices.

**Determinant:**
- A scalar value derived from a square matrix that indicates whether the matrix is invertible (nonzero determinant) or singular (zero determinant).

**Identity Matrix:**
- A square matrix with ones on the main diagonal and zeros elsewhere, acting as the multiplicative identity.

**Inverse Matrix:**
- A matrix that, when multiplied by the original matrix, yields the identity matrix; it exists only if the determinant is nonzero.

**Eigenvalues and Eigenvectors:**
- Scalars and vectors that satisfy the equation $MV = \lambda V$, representing directions that remain unchanged in orientation when transformed by the matrix.

**Diagonalization:**
- The process of finding a basis of eigenvectors that transforms a matrix into a diagonal matrix.

---

## Formulas

**Matrix Multiplication**
- **Formula:** $(FG)_{ij} = \sum_{k=1}^{m} F_{ik}G_{kj}$
- **Meaning:** The dot product of the $i$-th row of F and the $j$-th column of G.
- **Use in graphics:** Concatenating multiple transformations (e.g., rotation followed by translation).

**Determinant (Laplace Expansion)**
- **Formula:** $\det M = \sum_{j=1}^{n} M_{ij}C_{ij}(M)$
- **Meaning:** Recursive calculation using cofactors $C_{ij}$.
- **Use in graphics:** Checking for invertibility and calculating volumes.

**Characteristic Polynomial**
- **Formula:** $\det(M - \lambda I) = 0$
- **Meaning:** An equation whose roots are the eigenvalues of $M$.
- **Use in graphics:** Finding principal axes of inertia or solving differential equations.

---

## Practical Use

**Solving Linear Systems**
- Using **Gaussian Elimination** or **Cramer's Rule** to find unknown variables in a system of linear equations, such as finding intersection points.

**Inverting Transformations**
- Calculating the **Matrix Inverse** to undo a transformation, such as converting from world space back to object space.

**Numerical Stability**
- Using **Pivoting** during row reduction to reduce rounding errors when handling large systems or matrices with small values.
