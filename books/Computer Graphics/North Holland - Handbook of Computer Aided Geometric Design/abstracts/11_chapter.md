# Chapter 11: Finite Element Approximation with Splines

---

## Main Idea

This chapter details the use of uniform B-splines as a basis for finite element methods, offering an alternative to standard triangulation-based elements. It explains how weighted B-splines can approximate solutions to boundary value problems with high accuracy and fewer parameters, using techniques like the Ritz-Galerkin method and stabilizing them with Web-splines (Weighted Extended B-splines) to handle arbitrary domain boundaries.

---

## Keywords

**Finite Element Method (FEM):**
A numerical technique for finding approximate solutions to boundary value problems for partial differential equations. It subdivides a large problem into smaller, simpler parts that are called finite elements.

**Ritz-Galerkin Approximation:**
A method to convert a continuous operator problem (like a differential equation) into a discrete problem (like a system of linear equations) by projecting it onto a finite-dimensional subspace.

**Web-spline:**
"Weighted Extended B-spline." A specialized basis function constructed by multiplying a standard B-spline by a weight function (to satisfy boundary conditions) and extending stable inner splines to cover boundary regions.

**Weight Function:**
A smooth function $w(x)$ that is positive inside the domain and zero on the boundary. It forces the approximation to satisfy Dirichlet boundary conditions automatically.

**Condition Number:**
A measure of how sensitive a function or system is to changes or errors in the input. A low condition number implies the system is stable and solvable; a high one implies instability.

**Grid Generation:**
The process of dividing a physical domain into small sub-domains (elements). B-spline methods largely avoid complex grid generation by using a regular grid that covers the domain.

---

## Formulas

**Ritz-Galerkin Solution**

- **Formula:** $\sum_{k \in K} c_k \langle L b_k, b_j \rangle = \langle f, b_j \rangle$
- **Meaning:** The system of linear equations used to find the coefficients $c_k$ for the approximate solution.
- **Use in graphics:** Used in physically based modeling to simulate deformations or fluid flow.

**Web-spline Definition**

- **Formula:** $B_i(x) = \frac{w(x)}{w(x_{i})} (b_i(x) + \sum_{j \in J(i)} e_{i,j} b_j(x))$
- **Meaning:** Defines a stable basis function $B_i$ by weighting a standard spline $b_i$ and adding contributions from nearby outer splines $b_j$ to stabilize the boundary.
- **Use in graphics:** Allows for high-order smooth approximations on domains with complex curved boundaries without remeshing.

**Approximation Error Bound**

- **Formula:** $\|u - u_h\| \le C h^n \|u\|_n$
- **Meaning:** The error of the approximation decreases rapidly as the grid size $h$ gets smaller, depending on the spline degree $n$.
- **Use in graphics:** Guarantees that finer grids produce visually smoother and more physically accurate simulations.

---

## Practical Use

**Physical Simulation**
These methods are used to simulate elasticity, heat transfer, and fluid dynamics on complex 3D shapes (like engine parts) without the time-consuming process of creating a custom mesh for every object.

**Geometric Modeling**
Since Web-splines use the same underlying B-spline basis as CAD tools (NURBS), they allow engineers to run simulations directly on the design geometry without converting it to a separate analysis mesh.

**High-Precision Engineering**
The high order of accuracy provided by B-splines makes them suitable for problems requiring very smooth solutions, such as computing stress concentrations in mechanical parts.
