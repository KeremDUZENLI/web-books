# Chapter 16: Numerical Methods

---

## Main Idea

This chapter presents algorithms for solving common mathematical problems in 3D graphics numerically. It covers the fast calculation of trigonometric functions, the solution of linear systems using Gaussian elimination and LU decomposition, the computation of eigenvalues and eigenvectors via the Jacobi method, and the integration of ordinary differential equations using Euler and Runge-Kutta methods.

---

## Keywords

**LU Decomposition:**
- A method of factoring a matrix $M$ into a lower triangular matrix $L$ and an upper triangular matrix $U$ ($M=LU$) to efficiently solve linear systems $Mx=r$ for multiple vectors $r$.

**Gaussian Elimination:**
- An algorithm that solves linear systems by performing row operations to transform the coefficient matrix into an upper triangular matrix, followed by backward substitution.

**Jacobi Method:**
- An iterative algorithm for calculating the eigenvalues and eigenvectors of a symmetric matrix by applying a sequence of rotation matrices to annihilate off-diagonal entries.

**Euler's Method:**
- A simple, first-order numerical procedure for solving ordinary differential equations (ODEs) with a given initial value, using the tangent line to approximate the next point.

**Runge-Kutta Method (RK4):**
- A highly accurate, fourth-order iterative method for approximating solutions to ODEs by taking a weighted average of four slopes (increments) over a time step.

---

## Formulas

**Backward Substitution**
- **Formula:** $x_i = \frac{1}{U_{ii}} (r_i - \sum_{k=i+1}^n U_{ik}x_k)$
- **Meaning:** Solves for unknowns in an upper triangular system starting from the last variable.
- **Use in graphics:** The final step in solving linear systems for physics constraints or matrix inversion.

**Jacobi Rotation (Angle)**
- **Formula:** $t = \text{sgn}(u)(\sqrt{u^2 + 1} - |u|)$, where $u = \frac{M_{pp} - M_{qq}}{2M_{pq}}$
- **Meaning:** Determines the rotation tangent $t$ required to zero out the off-diagonal element $M_{pq}$.
- **Use in graphics:** Finding principal axes of inertia or OBB orientations.

**RK4 Step**
- **Formula:** $y_{i+1} = y_i + \frac{h}{6}(K_1 + 2K_2 + 2K_3 + K_4)$
- **Meaning:** Updates the state $y$ using a weighted average of four derivative samples $K_1 \dots K_4$.
- **Use in graphics:** Integrating physics simulations (cloth, rigid bodies) with high stability.

---

## Practical Use

**Fast Trigonometry**
- Using **Lookup Tables** combined with **Taylor Series** refinement to calculate sine and cosine functions faster than standard library calls, essential for high-performance rendering loops.

**Physics Integration**
- Implementing **RK4** to simulate complex motion (like projectiles with drag or swinging pendulums) accurately where simpler methods like Euler's method would drift or explode.

**Matrix Inversion**
- Using **LU Decomposition** to invert matrices when solving systems of equations, such as determining the forces in a constrained rigid body system.
